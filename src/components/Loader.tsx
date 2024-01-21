import styled from "styled-components";

export const LoaderStyled = styled.div`
  animation: is-rotating 1s infinite;
  border: 10px solid #ffffff;
  border-radius: 50%;
  margin: auto;
  margin-top: 20px;
  border-top-color: #c8161d;
  height: 50px;
  width: 50px;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;

const LoaderContainer = styled.div`
  height: 70px;
`;

export interface LoaderProps {
  flag: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ flag }) => {
  return (
    <>
      <LoaderContainer>{flag && <LoaderStyled></LoaderStyled>}</LoaderContainer>
    </>
  );
};
