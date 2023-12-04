import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const MealResultContainer = styled.div`
  width: 90%;
  margin-bottom: 20px;
  /* max-height: 120px; */
  padding: 1rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  display: grid;
  grid-template-columns: 70px 50px auto;
  grid-template-rows: 65px 25px auto;
  grid-template-areas:
    "img  img name"
    "img  img  category "
    "img  img  area";
  &:hover {
    opacity: 0.5;
  }
`;

const MealResultImage = styled(Image)`
  grid-area: img;
  border-radius: 10px;
`;

const MealResultName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 15px;
  text-decoration: none;
  color: black;
  text-align: start;
  justify-self: self-start;
  grid-area: name;
`;

const MealCategoryName = styled(MealResultName)`
  color: #5b5b5b;
  font-weight: 400;

  font-size: 0.85rem;
  grid-area: category;
`;

const MealAreaName = styled(MealCategoryName)`
  color: #5b5b5b;
  grid-area: area;
`;
export const MealsResults = ({ meal }: any) => {
  return (
    <Link href={`/meals/${meal["idMeal"]}`} style={{ textDecoration: "none" }}>
      <MealResultContainer>
        <MealResultImage
          src={meal["strMealThumb"]}
          alt="error"
          width={120}
          height={120}
        ></MealResultImage>
        <MealResultName>{meal["strMeal"]}</MealResultName>
        <MealCategoryName>{meal["strCategory"]}</MealCategoryName>
        <MealAreaName>{meal["strArea"]}</MealAreaName>
      </MealResultContainer>
    </Link>
  );
};
