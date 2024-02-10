import styled from "styled-components";
import { CutlerySvg } from "../../public/cutlery";

const IngredientContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 2fr;
`;

const IngredientName = styled.p`
  color: #343434;
  margin: 0.3rem;
  text-align: start;
  grid-column: 2/3;
  place-self: start;
`;

const IngredientQnt = styled(IngredientName)`
  grid-column: 3/4;
  place-self: end;
`;
export const Ingredient = ({ ing }: any) => {
  let ingredient = ing.ing;
  let amount = ing.amount;

  return (
    <>
      <IngredientContainer>
        <CutlerySvg />
        <IngredientName>{ingredient}</IngredientName>
        <IngredientQnt>{amount}</IngredientQnt>
      </IngredientContainer>
    </>
  );
};
