import { BlackXSText } from "@/pages/login";
import Link from "next/link";
import styled from "styled-components";

export const AuthButtonContainer = styled.button`
  color: #ffffff;
  padding: 1rem 0 1rem 0;
  font-size: 1.2rem;
  width: 70%;
  height: max-content;
  background-color: #c8161d;
  grid-row: 4/5;
  place-self: center;
  place-items: center;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    opacity: 0.6;
  }
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SignUpIndicator = () => {
  return (
    <BlackXSText>
      {"Doesn't have an account? "}
      <Link href={"/signup"} style={{ textDecoration: "none" }}>
        <span style={{ color: "#C8161D" }}>Sign Up</span>
      </Link>
    </BlackXSText>
  );
};

const LogInIndicator = () => {
  return (
    <BlackXSText>
      Already have an account?{" "}
      <Link href={"/login"} style={{ textDecoration: "none" }}>
        <span style={{ color: "#C8161D" }}>Login</span>
      </Link>
    </BlackXSText>
  );
};

export const AuthButton = ({ onClick, text }: any) => {
  return (
    <>
      <IndicatorContainer>
        {text === "LOG IN" ? (
          <SignUpIndicator />
        ) : text == "SIGN UP" ? (
          <LogInIndicator />
        ) : null}
      </IndicatorContainer>
      <AuthButtonContainer onClick={onClick}>{text}</AuthButtonContainer>
    </>
  );
};
