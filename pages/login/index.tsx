import axios from "axios";
import { hasCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TermsAndConditions } from "@/components/termsAndConditions";
import { AuthButton } from "@/components/AuthButton";
import { BlackXLText } from "@/components/BlackXLText";
import HeyComponent from "@/components/heyComponent";
import { Loader } from "@/components/Loader";
import { FeedBackText } from "@/components/feedbackText";
import { useGlobalContext } from "../../Context/store";
import AuthInput from "@/components/AuthInput";

export const AuthContainer = styled.div`
  width: calc(100% - 4rem);
  max-width: 500px;
  padding: 2rem;
  place-items: center;
  margin: auto;
  margin-top: 3rem;
`;

export type requestType = {
  isLoading: boolean;
  error: boolean;
  submitted: boolean;
  errorMessage: string;
};

export const defaultRequest: requestType = {
  isLoading: false,
  error: false,
  submitted: false,
  errorMessage: "",
};

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  place-self: center;
  width: 100%;
`;

export const BlackXSText = styled.p`
  color: black;
  font-size: 1rem;
  font-weight: 600;
`;

export const BlackSText = styled(BlackXSText)`
  font-size: 1rem;
  font-weight: 550;
`;

function LogInPage() {
  // Getting the functions from the Context
  const { setIsAuth, setNavOption } = useGlobalContext();
  // Creating the states to consider when Logging into the account
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // Creating the request to consider when displaying user feedback
  const [request, setRequest] = useState<requestType>(defaultRequest);
  // Creating use Router to change between pages
  const router = useRouter();

  // When the page is load, set the option at "login"
  useEffect(() => {
    setNavOption("login");
  }, []);

  // The loading asyncFunction
  const onLogInSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      // Set the request to show the Loader
      setRequest({
        isLoading: true,
        error: false,
        errorMessage: "",
        submitted: false,
      });

      // Post the credentials and waiting for the authToken
      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:pXhZqBYW/auth/login",
        { email, password }
      );
      setRequest({
        error: false,
        errorMessage: "",
        isLoading: false,
        submitted: true,
      });
      //Set the token as an cookie to be used in server side props
      setCookie("authToken", response.data.authToken);
      setIsAuth({ firstName: "", lastName: "", isAuth: true });
      //When the login is sucessful push the app to the dashboard page
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error: any) {
      console.log("Error at login");
      // When the login gets a error, show the message as feedback to the user.
      setRequest({
        error: true,
        errorMessage: error.response.data.message,
        isLoading: false,
        submitted: false,
      });
    }
  };

  return (
    <>
      <AuthContainer>
        <HeyComponent />
        <AuthForm onSubmit={onLogInSubmit}>
          <BlackXLText text={"Log In"} />
          <AuthInput
            type={"text"}
            required
            onChange={(e: any) => setEmail(e.target.value)}
            text={"E-mail:"}
          />
          <AuthInput
            required
            onChange={(e: any) => setPassword(e.target.value)}
            text={"Password:"}
          />
          <AuthButton
            onClick={(e: React.FormEvent) => onLogInSubmit(e)}
            text={"LOG IN"}
          />
        </AuthForm>
        <Loader flag={request.isLoading} />
        <FeedBackText text={request.errorMessage} />
        <TermsAndConditions />
      </AuthContainer>
    </>
  );
}

export default LogInPage;
