import React, { useState } from "react";
import axios from "axios";
import { HeyComponent } from "@/components/heyComponent";
import { TermsAndConditions } from "@/components/termsAndConditions";
import { AuthContainer, AuthForm, defaultRequest, requestType } from "../login";
import { BlackXLText } from "@/components/BlackXLText";
import { AuthInput } from "@/components/AuthInput";
import { AuthButton } from "@/components/AuthButton";
import { Loader } from "@/components/Loader";
import { FeedBackText } from "@/components/feedbackText";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function LogInPage() {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [request, setRequest] = useState<requestType>(defaultRequest);

  const router = useRouter();

  const onRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, firstName, lastName, password);

    try {
      setRequest({
        isLoading: true,
        error: false,
        errorMessage: "",
        submitted: false,
      });

      await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:pXhZqBYW/auth/signup",
        { firstName, lastName, email, password }
      );
      setRequest({
        error: false,
        errorMessage: "",
        isLoading: false,
        submitted: true,
      });

      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:pXhZqBYW/auth/login",
        { email, password }
      );

      setCookie("authToken", response.data.authToken);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error: any) {
      console.log("Error at submit register: ", error);
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
        <AuthForm onSubmit={(e: React.FormEvent) => onRegisterSubmit(e)}>
          <BlackXLText text={"Sign Up"} />
          <AuthInput
            type={"text"}
            required
            onChange={(e: any) => setFirstName(e.target.value)}
            text={"First Name:"}
          />
          <AuthInput
            type={"text"}
            required
            onChange={(e: any) => setLastName(e.target.value)}
            text={"Last Name:"}
          />
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
            onClick={(e: React.FormEvent) => onRegisterSubmit(e)}
            text={"SIGN UP"}
          />
        </AuthForm>
        <Loader flag={request.isLoading} />
        <FeedBackText text={request.errorMessage} />
        <TermsAndConditions />
      </AuthContainer>
    </>
  );
}
