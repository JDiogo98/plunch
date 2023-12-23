import styled from "styled-components";

export const BlackLText = styled.h1`
  color: black;
  font-size: 2rem;
  margin: 0;
`;

export const GreyMText = styled.p`
  color: #667c8a;
  font-weight: 500;
  font-size: 1.5rem;
  font-weight: 500;
`;
const HeyComponentContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: start;
  grid-row: 2/3;
  flex-direction: column;
`;

interface HeyComponentProps {
  firstName?: string;
  fromMyAccount?: boolean;
}















export const HeyComponent: React.FC<HeyComponentProps> = ({
  firstName,
  fromMyAccount,
}) => {
  return (
    <>
      <HeyComponentContainer>
        <BlackLText>{`Hey ${firstName}!`}</BlackLText>
        {!fromMyAccount && <GreyMText>{"Let's cook"}</GreyMText>}
      </HeyComponentContainer>
    </>
  );
};
