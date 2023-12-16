import styled from "styled-components";
import { BlackMText } from "./textsAndSizes";
import { useState } from "react";

export const AuthInputZone = styled.input`
  font-size: 1.3rem;
  background-color: #d9d9d9;
  color: black;
  border: none;
  width: 90%;
  padding: 1rem 0 1rem 0;
  outline: none;
`;

const AuthInputContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  /* padding: 1rem 0 1rem 1rem; */
  background-color: #d9d9d9;
`;

const TextContainer = styled.div`
  text-align: start;
`;

export const AuthInput = ({ text, onChange }: any) => {
  // const [inputText, setInputText] = useState("");
  const type =
    text == "Password:" ? "password" : text == "E-mail" ? "email" : "text";


  return (
    <>
      <TextContainer>
        <BlackMText>{text}</BlackMText>
      </TextContainer>
      <AuthInputContainer>
        <AuthInputZone type={type} onChange={(e) => onChange(e)} />
      </AuthInputContainer>
    </>
  );
};
