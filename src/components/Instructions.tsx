import { type } from "os";
import styled from "styled-components";
import { StringOrNull } from "../../Context/SearchTypes";

const InstructionsContainer = styled.div`
  margin-top: 2.3rem;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  padding: 1rem;
  max-height: 200px;
  overflow: scroll;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 9px;
`;

const InstructionsIndication = styled.p`
  color: black;
  font-weight: 600;
  font-size: 1.3rem;
  place-self: start;
`;

const InstructionsText = styled.p`
  color: black;
  text-align: justify;
  font-size: 1.1rem;
`;

interface RecipeInstruction {
  inst: StringOrNull;
}

export const Instructions = (inst: RecipeInstruction) => {
  console.log(inst);

  return (
    <>
      {inst && (
        <InstructionsContainer>
          <InstructionsIndication>Instructions:</InstructionsIndication>
          <InstructionsText>{inst["inst"]}</InstructionsText>
        </InstructionsContainer>
      )}
    </>
  );
};
