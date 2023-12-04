import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { getMealRecipe, splitIngredients } from "./mealFunctions";
import { useEffect, useState } from "react";
import { BackSvg } from "../../../public/landingImgs/back";
import { Meal } from "../../../Context/SearchTypes";
import { Ingredient } from "@/components/Ingredient";
import { Instructions } from "@/components/Instructions";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const MealsRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.3rem;
  height: 100%;
  width: 100%;
  gap: 0.2rem;
`;

const MealsRecipeImage = styled.img`
  width: 80%;
  max-height: 45%;
  object-fit: cover;
  margin-top: 3rem;
  border-radius: 25px;
  place-self: center;
`;

const MealsRecipeTitle = styled.p`
  color: black;
  font-weight: 600;
  font-size: 1.3rem;
  place-self: center;
`;

const MealIngredients = styled.div`
  /* width: 100%; */
  padding: 1rem;
  background-color: #dcdcdc;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  return (
    <>
      {MealData && (
        <MealsRecipeContainer>
          <Link href={"/meals"} style={{ placeSelf: "start" }}>
            <BackSvg></BackSvg>
          </Link>
          <MealsRecipeImage
            src={MealData["strMealThumb"]}
            alt={"error at MealsRecipeImage"}
          ></MealsRecipeImage>
          <MealsRecipeTitle>{MealData["strMeal"]}</MealsRecipeTitle>
          <MealIngredients>
            {MealData &&
              // splitIngredients extract the ingredients from the MealData
              splitIngredients(MealData).map((i: any) => {
                return <Ingredient ing={i}></Ingredient>;
              })}
          </MealIngredients>
          <Instructions inst={MealData["strInstructions"]}></Instructions>
        </MealsRecipeContainer>
      )}
    </>
  );
};

export default MealRecipe;
