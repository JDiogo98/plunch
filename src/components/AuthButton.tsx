import { BlackXSText } from "@/pages/login";
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
      <span style={{ color: "#C8161D" }}>Sign Up</span>
    </BlackXSText>
  );
};

const LogInIndicator = () => {
  return (
    <BlackXSText>
      Already have an account? <span style={{ color: "#C8161D" }}>Login</span>
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
