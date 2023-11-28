import React, { useState } from "react";
import styled from "styled-components";

export const LogInContainer = styled.div`
  width: 100%;
  display: grid;
  margin: 2rem;
  grid-template-rows: 20px 150px 3fr 0.6fr 1fr;
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
  grid-row: 3/4;
`;

export const BlackMText = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
`;

export const GreyMText = styled(BlackMText)`
  color: #667c8a;
  font-weight: 500;
`;

export const AuthInput = styled.input`
  font-size: 1.3rem;
  background-color: #d9d9d9;
  padding: 1rem 0 1rem 0rem;
  color: black;
  border: none;
  width: 100%;
  border-radius: 10px;
`;
export const AuthButton = styled.button`
  color: #ffffff;
  padding: 1rem 0 1rem 0;
  font-size: 1.2rem;
  width: 100%;
  height: max-content;
  background-color: #c8161d;
  grid-row: 4/5;
  place-self: center;
  border: none;
  border-radius: 15px;
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

export const BlackXLText = styled(BlackSText)`
  font-size: 3rem;
  font-weight: 800;
`;

export const BlackLText = styled.h1`
  color: black;
  font-size: 2rem;
  margin: 0;
`;

export default function LogInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [request, setRequest] = useState<requestType>(defaultRequest);

  return (
    <>
      <LogInContainer>
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
        <AuthForm>
          <BlackXLText style={{ textAlign: "center", margin: "1rem" }}>
            Log In
          </BlackXLText>
          <BlackMText
            style={{ margin: "2rem 1rem 0rem 0", textAlign: "start" }}
          >
            E-mail:
          </BlackMText>
          <AuthInput></AuthInput>
          <BlackMText
            style={{ margin: "2rem 1rem 0rem 0", textAlign: "start" }}
          >
            Password:
          </BlackMText>
          <AuthInput></AuthInput>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
              gap: "2rem",
            }}
          >
            <BlackXSText>
              Doesn't have an account?{" "}
              <span style={{ color: "#C8161D" }}>Sign Up</span>
            </BlackXSText>
          </div>
        </AuthForm>
        <AuthButton>LOG IN</AuthButton>
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
      </LogInContainer>
    </>
  );
}
