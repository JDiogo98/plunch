import React, { useState } from "react";
import styled from "styled-components";
import {
  AuthButton,
  AuthForm,
  AuthInput,
  BlackLText,
  BlackMText,
  BlackSText,
  BlackXLText,
  BlackXSText,
  GreyMText,
  Loader,
  LogInContainer,
  defaultRequest,
  requestType,
} from "../login";
import axios from "axios";
import { error } from "console";

const SignUpContainer = styled(LogInContainer)`
  max-width: 500px;
`;



export default function LogInPage() {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [request, setRequest] = useState<requestType>(defaultRequest);

  const onRegisterSubmit = async (e: any) => {
    try {
      e.preventDefault();
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
      <SignUpContainer>
        <div
          style={{
            padding: "1rem",
            width: "100%",
            display: "flex",
            alignItems: "start",
            gridRow: "2/3",
            flexDirection: "column",
          }}
        >
          <BlackLText>Hey!</BlackLText>
          <GreyMText>Let's cook</GreyMText>
        </div>
        <AuthForm onSubmit={onRegisterSubmit}>
          <BlackXLText style={{ textAlign: "center", margin: "1rem" }}>
            Sign Up
          </BlackXLText>
          <BlackMText
            style={{ margin: "2rem 1rem 0rem 0", textAlign: "start" }}
          >
            First Name:
          </BlackMText>
          <AuthInput
            onChange={(e) => setFirstName(e.target.value)}
            required
            type="text"
          ></AuthInput>
          <BlackMText
            style={{ margin: "2rem 1rem 0rem 0", textAlign: "start" }}
          >
            Last Name:
          </BlackMText>
          <AuthInput
            onChange={(e) => setLastName(e.target.value)}
            required
            type="text"
          ></AuthInput>
          <BlackMText
            style={{ margin: "2rem 1rem 0rem 0", textAlign: "start" }}
          >
            E-mail:
          </BlackMText>
          <AuthInput
            onChange={(e) => setEmail(e.target.value)}
            required
            type="text"
          ></AuthInput>
          <BlackMText
            style={{ margin: "2rem 1rem 0rem 0", textAlign: "start" }}
          >
            Password:
          </BlackMText>
          <AuthInput
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          ></AuthInput>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
              gap: "2rem",
            }}
          >
            <BlackXSText>
              Already have an account?{" "}
              <span style={{ color: "#C8161D" }}>Login</span>
            </BlackXSText>
          </div>
          <AuthButton>Sign Up</AuthButton>
          {request.isLoading ? <Loader /> : <div></div>}
          {request.error && <BlackSText>{request.errorMessage}</BlackSText>}
          {!request.error && request.submitted && (
            <BlackSText>Account Created!!</BlackSText>
          )}
        </AuthForm>
        <BlackSText
          style={{
            gridRow: "5/6",
            textAlign: "center",
            padding: "2rem 3rem 2rem 3rem",
            placeSelf: "center",
          }}
        >
          When logging into an account, you agree to our
          <span style={{ color: "#0F48DD" }}> Terms and Conditions </span>
          and <span style={{ color: "#0F48DD" }}>Privacy Statement</span>. All
          rights reserved. Copyright (2023) – Plunch™.
        </BlackSText>
      </SignUpContainer>
    </>
  );
}
