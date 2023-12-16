
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeekInYear from "dayjs/plugin/isoWeeksInYear";
import isoLeapInYear from "dayjs/plugin/isLeapYear";
import { TDWeekMeal, TDWeekMealContainer } from "./mealAtWeekPlaneer";
import { EmptyWeek } from "../../test";
import { useGlobalContext } from "../../Context/store";

export const TDWeekMealDay = styled(TDWeekMealContainer)`
  background-color: #c8161d;
  color: #ffffff;
  border-radius: 5px;
  font-weight: 700;
  margin: auto;
`;
export const TDWeelMealType = styled(TDWeekMealDay)``;
export const WeekMealButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: 600;
  border: 1px solid #ffffff;
  background-color: #989898;
  border-radius: 10px;
  color: #ffffff;
`;
export const WeekMealDate = styled.td`
  background-color: #c8161d;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 15px;
  opacity: 1;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;
export const WeekGridDiv = styled.table`
  width: 85%;
  border-radius: 15px;
  padding: 1rem;
  margin: auto;
  margin-top: 20%;
  padding-top: 2rem;
  border-collapse: separate;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #ffffff;
`;

dayjs.extend(isoWeek);
dayjs.extend(isoWeekInYear);
dayjs.extend(isoLeapInYear);

export type PlanMeal = {
  id: string | null;
  name: string | null;
  img: string | null;
};

type Plan = {
  brk?: {
    id: string | null;
    name: string | null;
    img: string | null;
  };
  lun?: {
    id: string | null;
    name: string | null;
    img: string | null;
  };
  din?:
    | {
        id: string | null;
        name: string | null;
        img: string | null;
      }
    | undefined;
};

type PlansStructure = {
  w_1: Plan;
  w_2: Plan;
  w_3: Plan;
  w_4: Plan;
  w_5: Plan;
  w_6: Plan;
  w_7: Plan;
};

export default function WeekMeal({ userData }: any) {
  const { setUpdatePlans, sessionWeeks, setSessionWeeks } = useGlobalContext();
  const [date, setDate] = useState(dayjs());
  const [weekYear, setWeekYear] = useState(
    date.isoWeek() + "_" + date.format("YY")
  );

  const [selectedMeal, setSelectedMeal] = useState<null | string>(null);

  if (sessionWeeks == null || !Object.keys(sessionWeeks).includes(weekYear)) {
    setSessionWeeks({ ...sessionWeeks, [weekYear]: EmptyWeek });
  }

  const user_id = userData["id"];
  const user_list_id = userData["plans_of_user"]["id"];

  const [startOfTheWeek, setStartOfTheWeek] = useState(date.startOf("week"));
  const [endOfTheWeek, setEndOfTheWeek] = useState(date.endOf("week"));

  function add1Week() {
    setDate(date.add(1, "week"));
    refreshDates(date.add(1, "week"));
  }
  function sub1Week() {
    setDate(date.subtract(1, "week"));
    refreshDates(date.subtract(1, "week"));
  }
  function refreshDates(date: any) {
    setStartOfTheWeek(date.startOf("week"));
    setEndOfTheWeek(date.endOf("week"));
    setWeekYear(date.isoWeek() + "_" + date.format("YY"));

    let newWeek = date.isoWeek() + "_" + date.format("YY");

    if (!Object.keys(sessionWeeks).includes(newWeek)) {
      setSessionWeeks({ ...sessionWeeks, [newWeek]: EmptyWeek });
    }
  }

  // useEffect(() => {
  //   setUpdatePlans(user_id, user_list_id, sessionWeeks);
  // }, [sessionWeeks]);

  return (
    <>
      {sessionWeeks && (
        <WeekGridDiv>
          <thead>
            <tr>
              <WeekMealDate colSpan={4}>{`${startOfTheWeek.format(
                "DD/MM"
              )} to ${endOfTheWeek.format("DD/MM")}`}</WeekMealDate>
            </tr>
            <tr>
              <td></td>
              <td>
                <WeekMealButton
                  onClick={() => {
                    sub1Week();
                  }}
                >
                  {"<"}
                </WeekMealButton>
              </td>

              <td></td>
              <td>
                <WeekMealButton onClick={() => add1Week()}>
                  {">"}
                </WeekMealButton>
              </td>
            </tr>

            <tr>
              <td></td>
              <TDWeelMealType>Breakfast</TDWeelMealType>
              <TDWeelMealType>Lunch</TDWeelMealType>
              <TDWeelMealType>Dinner</TDWeelMealType>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TDWeekMealDay>
                Sunday
                <br></br>
                {startOfTheWeek.format("(DD-MM)")}
              </TDWeekMealDay>
              <TDWeekMeal
                day="w_1"
                week={weekYear}
                meal="brk"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_1"]["brk"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_1"
                week={weekYear}
                meal="lun"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_1"]["lun"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_1"
                week={weekYear}
                meal="din"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_1"]["din"]}
              ></TDWeekMeal>
            </tr>
            <tr>
              <TDWeekMealDay>
                Monday
                <br></br>
                {startOfTheWeek.add(1, "day").format("(DD-MM)")}
              </TDWeekMealDay>
              <TDWeekMeal
                day="w_2"
                week={weekYear}
                meal="brk"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_2"]["brk"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_2"
                week={weekYear}
                meal="lun"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_2"]["lun"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_2"
                week={weekYear}
                meal="din"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_2"]["din"]}
              ></TDWeekMeal>
            </tr>
            <tr>
              <TDWeekMealDay>
                Tuesday
                <br></br>
                {startOfTheWeek.add(2, "day").format("(DD-MM)")}
              </TDWeekMealDay>
              <TDWeekMeal
                day="w_3"
                week={weekYear}
                meal="brk"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_3"]["brk"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_3"
                week={weekYear}
                meal="lun"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_3"]["lun"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_3"
                week={weekYear}
                meal="din"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_3"]["din"]}
              ></TDWeekMeal>
            </tr>
            <tr>
              <TDWeekMealDay>
                Wendsday
                <br></br>
                {startOfTheWeek.add(3, "day").format("(DD-MM)")}
              </TDWeekMealDay>
              <TDWeekMeal
                day="w_4"
                week={weekYear}
                meal="brk"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_4"]["brk"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_4"
                week={weekYear}
                meal="lun"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_4"]["lun"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_4"
                week={weekYear}
                meal="din"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_4"]["din"]}
              ></TDWeekMeal>
            </tr>
            <tr>
              <TDWeekMealDay>
                Thursday
                <br></br>
                {startOfTheWeek.add(4, "day").format("(DD-MM)")}
              </TDWeekMealDay>
              <TDWeekMeal
                day="w_5"
                week={weekYear}
                meal="brk"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_5"]["brk"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_5"
                week={weekYear}
                meal="lun"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_5"]["lun"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_5"
                week={weekYear}
                meal="din"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_5"]["din"]}
              ></TDWeekMeal>
            </tr>
            <tr>
              <TDWeekMealDay>
                Friday
                <br></br>
                {startOfTheWeek.add(5, "day").format("(DD-MM)")}
              </TDWeekMealDay>
              <TDWeekMeal
                day="w_6"
                week={weekYear}
                meal="brk"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_6"]["brk"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_6"
                week={weekYear}
                meal="lun"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_6"]["lun"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_6"
                week={weekYear}
                meal="din"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_6"]["din"]}
              ></TDWeekMeal>
            </tr>
            <tr>
              <TDWeekMealDay>
                Saturday
                <br></br>
                {startOfTheWeek.add(6, "day").format("(DD-MM)")}
              </TDWeekMealDay>
              <TDWeekMeal
                day="w_7"
                week={weekYear}
                meal="brk"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_7"]["brk"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_7"
                week={weekYear}
                meal="lun"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_7"]["lun"]}
              ></TDWeekMeal>
              <TDWeekMeal
                day="w_7"
                week={weekYear}
                meal="din"
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                m={sessionWeeks[weekYear]["w_7"]["din"]}
              ></TDWeekMeal>
            </tr>
          </tbody>
        </WeekGridDiv>
      )}
    </>
  );
}
