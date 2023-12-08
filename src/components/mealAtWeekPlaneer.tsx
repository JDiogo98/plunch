import styled from "styled-components";

export const TDWeekMeal: React.FC<{ meal?: PlanMeal }> = ({ meal }) => {
  return (
    <>
      <TDWeekMealContainer>
        {meal["name"] !== null ? (
          <TDWeekMealText>{meal["name"]}</TDWeekMealText>
        ) : (
          <TDWeekMealText style={{ fontSize: "1rem" }}>+</TDWeekMealText>
        )}
      </TDWeekMealContainer>
    </>
  );
};

export const TDWeekMealContainer = styled.td`
  border: 1px solid #969696;
  padding: 10px;
  margin: 0px;
  transition: opacity 0.5s;

  &:hover {
    transition: opacity 0.5s;
    background-color: #e4e3e3;
  }
`;
const TDWeekMealText = styled.p`
  color: #000000;
`;
