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
  grid-area: inst;
  box-shadow: rgba(139, 137, 137, 0.15) 0px 2px 9px;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #9a9696;
  }
  @media (min-width: 700px) {
    max-height: 800px;
  }
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
