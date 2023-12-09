import styled from "styled-components";
import { SadSvg } from "../../public/landingImgs/sad";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Message = styled.p`
  color: #6b6b6b;
`;

export const NoResultsMessage = () => {
  

  return (
    <>
      <Container>
        
        <Message>No results</Message>
        <SadSvg></SadSvg>
      </Container>
    </>
  );
};
