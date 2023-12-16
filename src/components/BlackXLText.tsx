import styled from "styled-components";

export const BlackXLTextC = styled.p`
  font-size: 3rem;
  font-weight: 800;
  color: black;
  text-align: center;
  margin: 0.5rem;
`;

export const BlackXLText = ({ text }: any) => {
  return (
    <>
      <BlackXLTextC>{text}</BlackXLTextC>
    </>
  );
};
