import styled from "styled-components";
import { PlanMeal } from "./weekmeal";
import { useGlobalContext } from "../../Context/store";
import { useRouter } from "next/router";
import { useState } from "react";
import { DeleteSvg } from "./deleteSvg";
import { InfoSvg } from "./infoSvg";
import { AddSvg } from "./svgAdd";

export const TDWeekMealContainer = styled.td`
  border: 1px solid #bababa;
  padding: 10px;
  margin: 0px;
  transition: opacity 1.5s;

  &:hover {
    transition: opacity 0.5s;
    background-color: #e4e3e3;
  }
`;
const TDWeekMealText = styled.p`
  color: #000000;
`;

const DeleteContainer = styled(TDWeekMealContainer)`
  display: flex;
  justify-content: space-evenly;
  padding: 1em;
  flex-direction: row;
  &:hover {
    opacity: 0.8;
  }
`;

export const TDWeekMeal: React.FC<{
  m: PlanMeal;
  week: string;
  day: string;
  meal: string;
  selectedMeal: null | string;
  setSelectedMeal: any;
}> = ({ meal, week, day, m, selectedMeal, setSelectedMeal }) => {
  const {
    setUpdatePlans,
    userData,
    sessionWeeks,
    addMealProcess,
    setAddMealProcess,
  } = useGlobalContext();
  const router = useRouter();

  const mealName = m["name"];

  const Delete = ({ handleDeleteClick }: any) => {
    return (
      <DeleteContainer>
        <div onClick={() => handleDeleteClick()}>
          <DeleteSvg />
        </div>
        <div onClick={() => router.push(`meals/${m["id"]}`)}>
          <InfoSvg></InfoSvg>
        </div>
      </DeleteContainer>
    );
  };

  const MealName = () => {
    return (
      <TDWeekMealContainer
        onClick={() => setSelectedMeal(week + "_" + day + "_" + meal)}
      >
        <TDWeekMealText>{mealName}</TDWeekMealText>
      </TDWeekMealContainer>
    );
  };

  const AddMeal = () => {
    return (
      <TDWeekMealContainer>
        <div onClick={()=>handleClick()}>
          <AddSvg size={"2rem"}></AddSvg>
        </div>
      </TDWeekMealContainer>
    );
  };

  function handleClick() {
    if (typeof window !== "undefined") {
      if (addMealProcess.currentDay == null) {
        setAddMealProcess({
          currentDay: day,
          currentMeal: meal,
          currentWeek: week,
          selectedMeal: meal,
        });
        router.push("/meals");
      }
    }
  }

  function handleDeleteClick() {
    const toSetObjs = { ...sessionWeeks };
    toSetObjs[week][day][meal] = {
      id: null,
      img: null,
      name: null,
    };

    setUpdatePlans(userData["id"], userData["plans_of_user"]["id"], toSetObjs);
    setSelectedMeal(null);
    router.push("/dashboard");
  }

  return (
    <>
      {console.log(`${week}_${day}_${meal}` == selectedMeal)}
      {selectedMeal === `${week}_${day}_${meal}` ? (
        <Delete handleDeleteClick={handleDeleteClick} />
      ) : mealName !== null ? (
        <MealName />
      ) : (
        <AddMeal />
      )}
    </>
  );
};
