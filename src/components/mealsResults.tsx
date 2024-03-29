import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { nullAddMealProcess, useGlobalContext } from "../../Context/store";
import { AddSvg } from "./svgAdd";
import { useRouter } from "next/router";

const MealResultContainer = styled.div`
  width: 120%;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 15px 15px 15px 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  display: grid;
  grid-template-columns: 70px 50px auto auto;
  grid-template-rows: 65px 25px auto;
  grid-template-areas:
    "img  img name"
    "img  img  category"
    "img  img  area";
  &:hover {
    opacity: 0.85;
  }
`;

const MealResultImage = styled(Image)`
  grid-area: img;
  border-radius: 10px;
`;

const MealResultName = styled.p`
  font-size: 16px;
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

  font-size: 14px;
  grid-area: category;
`;

const MealAreaName = styled(MealCategoryName)`
  color: #5b5b5b;
  grid-area: area;
`;

const MealAddBtnContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 0px 15px 15px 0px;
  align-items: center;
  z-index: 3;
`;

const AddContainer = styled.div`
  &:hover {
    opacity: 0.4;
  }
`;

export const MealsResults = ({ meal }: any) => {
  const {
    addMealProcess,
    setAddMealProcess,
    sessionWeeks,
    setUpdatePlans,
    userData,
    setSessionWeeks,
  } = useGlobalContext();

  const { idMeal, strMealThumb, strMeal, strCategory, strArea } = meal;
  const { currentDay, selectedMeal, currentWeek } = addMealProcess;

  const router = useRouter();

  function handleAddClick() {
    const cWeek = currentWeek;
    const cDay = currentDay;
    const cMeal = selectedMeal;

    console.log(cWeek, cDay, cMeal);

    const toSetObjs = { ...sessionWeeks };

    toSetObjs[cWeek][cDay][cMeal] = {
      id: idMeal,
      img: strMealThumb,
      name: strMeal,
    };

    setAddMealProcess(nullAddMealProcess);
    setSessionWeeks(toSetObjs);
    setUpdatePlans(userData["id"], userData["plans_of_user"]["id"], toSetObjs);

    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "95%",
          justifyContent: "space-between",
        }}
      >
        <Link
          href={`/meals/${idMeal}`}
          style={{ textDecoration: "none", width: "80%" }}
        >
          <MealResultContainer>
            <MealResultImage
              src={strMealThumb}
              alt="error"
              width={120}
              height={120}
            ></MealResultImage>
            <MealResultName>{strMeal}</MealResultName>
            <MealCategoryName>{strCategory}</MealCategoryName>
            <MealAreaName>{strArea}</MealAreaName>
          </MealResultContainer>
        </Link>
        {currentDay && (
          <MealAddBtnContainer>
            <AddContainer onClick={() => handleAddClick()}>
              <AddSvg size={"4rem"}></AddSvg>
            </AddContainer>
          </MealAddBtnContainer>
        )}
      </div>
    </>
  );
};
