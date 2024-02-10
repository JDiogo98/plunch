import styled from "styled-components";

import { Ingredient } from "@/components/Ingredient";
import { Instructions } from "@/components/Instructions";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Backgroud } from "@/components/background";
import { use, useEffect } from "react";
import { getMealRecipe, splitIngredients } from "../../Context/mealFunctions";
import { useGlobalContext } from "../../Context/store";

const MealsRecipeContainer = styled.div`
  padding: 2rem;
  max-width: 700px;
  background-color: #ffffff;
  border-radius: 15px;
  margin: auto;
  height: 100%;
  width: calc(100% - 4rem);
  margin-top: 100px;
  margin-bottom: 100px;
  gap: 0.2rem;
  display: grid;
  grid-template-areas:
    "img"
    "title"
    "ing"
    "inst";
  @media (min-width: 700px) {
    grid-template-areas:
      "img ing"
      "title title"
      "inst inst";
    max-width: 1000px;
  }
`;

const MealsRecipeImage = styled.img`
  width: 80%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 25px;
  place-self: center;
  grid-area: img;
`;

const MealsRecipeTitle = styled.p`
  color: black;
  font-weight: 600;
  font-size: 1.3rem;
  place-self: center;
  grid-area: title;
  @media (min-width: 700px) {
    justify-self: start;
    margin-left: 30px;
  }
`;

const MealIngredients = styled.div`
  padding-top: 2rem;
  background-color: #f3f3f3;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.225) 0px 5px 15px;
  grid-area: ing;
`;

// Getting the id data in serverSideProps
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Getting the ID at the Context
  const { id } = context.query;

  // Verify the type of the id
  try {
    if (id === undefined || (Array.isArray(id) && id.length === 0)) {
      throw new Error("Error at id format");
    }
    // Fetch the respective data of the id
    const response = await getMealRecipe(id);
    // Return the props for the component
    return {
      props: {
        MealData: response?.meals[0],
      },
    };
  } catch (error) {
    console.error("Error fetching meal recipe", error);
  }
}

export const MealRecipe = ({ MealData }: any) => {
  const { setNavOption } = useGlobalContext();
  const { strMealThumb, strMeal, strInstructions } = MealData;

  useEffect(() => {
    setNavOption("meal");
  }, []);

  return (
    <>
      {MealData && (
        <>
          <Backgroud></Backgroud>
          <MealsRecipeContainer>
            <MealsRecipeImage
              src={strMealThumb}
              alt={"error at MealsRecipeImage"}
            ></MealsRecipeImage>
            <MealsRecipeTitle>{strMeal}</MealsRecipeTitle>
            <MealIngredients>
              {MealData &&
                splitIngredients(MealData).map((i: any) => {
                  const ingAndAmount = {ing: i[0], amount: i[i]}

                  return <Ingredient ing={ingAndAmount} key={i}></Ingredient>;
                })}
            </MealIngredients>
            <Instructions inst={strInstructions}></Instructions>
          </MealsRecipeContainer>
        </>
      )}
    </>
  );
};

export default MealRecipe;
