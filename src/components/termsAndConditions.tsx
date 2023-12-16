import styled from "styled-components";

const termsAndConditionsText = (
  <span>
    When logging into an account, you agree to our
    <span style={{ color: "#0F48DD" }}> Terms and Conditions </span>
    and <span style={{ color: "#0F48DD" }}>Privacy Statement</span>. All rights
    reserved. Copyright (2023) – Plunch™.
  </span>
);

const TermsText = styled.p`
  color: black;
  font-size: 1rem;
  font-weight: 600;
`;

export const TermsAndConditions = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "2rem 3rem 2rem 3rem",
          placeSelf: "center",
        }}
      >
        <TermsText>{termsAndConditionsText}</TermsText>
      </div>
    </>
  );
};
