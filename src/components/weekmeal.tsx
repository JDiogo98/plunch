import React, { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeekInYear from "dayjs/plugin/isoWeeksInYear";
import isoLeapInYear from "dayjs/plugin/isLeapYear";
import { TDWeekMeal, TDWeekMealContainer } from "./mealAtWeekPlaneer";
import { useGlobalContext } from "../../Context/store";
import { NavBtnSvg } from "../../public/landingImgs/navBtns";
import { useRouter } from "next/router";
import { Loader } from "./Loader";

export const EmptyWeek = {
  w_1: {
    brk: {
      id: null,
      name: null,
      img: null,
    },
    lun: {
      id: null,
      name: null,
      img: null,
    },
    din: {
      id: null,
      name: null,
      img: null,
    },
  },
  w_2: {
    brk: {
      id: null,
      name: null,
      img: null,
    },
    lun: {
      id: null,
      name: null,
      img: null,
    },
    din: {
      id: null,
      name: null,
      img: null,
    },
  },
  w_3: {
    brk: {
      id: null,
      name: null,
      img: null,
    },
    lun: {
      id: null,
      name: null,
      img: null,
    },
    din: {
      id: null,
      name: null,
      img: null,
    },
  },
  w_4: {
    brk: {
      id: null,
      name: null,
      img: null,
    },
    lun: {
      id: null,
      name: null,
      img: null,
    },
    din: {
      id: null,
      name: null,
      img: null,
    },
  },
  w_5: {
    brk: {
      id: null,
      name: null,
      img: null,
    },
    lun: {
      id: null,
      name: null,
      img: null,
    },
    din: {
      id: null,
      name: null,
      img: null,
    },
  },
  w_6: {
    brk: {
      id: null,
      name: null,
      img: null,
    },
    lun: {
      id: null,
      name: null,
      img: null,
    },
    din: {
      id: null,
      name: null,
      img: null,
    },
  },
  w_7: {
    brk: {
      id: null,
      name: null,
      img: null,
    },
    lun: {
      id: null,
      name: null,
      img: null,
    },
    din: {
      id: null,
      name: null,
      img: null,
    },
  },
};

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
  width: 80%;
  border-radius: 15px;
  padding: 15px;
  margin: auto;
  margin-bottom: 100px;
  border-collapse: separate;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #ffffff;
`;

const DateControlContainer = styled.div`
  display: grid;
  top: 0;
  top: 100px;
  min-width: 360px;
  width: 85%;
  margin: auto;
  align-items: center;
  padding: 15px;
  grid-template-areas: "backBtn display frontBtn";
`;

const DateDisplay = styled.div`
  color: #ffffff;
  background-color: #c8161d;
  margin: auto;
  font-size: 14px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.225) 0px 5px 15px;
  grid-area: display;

  @media (min-width: 500px) {
    font-size: 24px;
    padding: 15px;
  }
`;

const DisplayControl = styled.div`
  color: #c8161d;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  grid-area: btn;
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

const weekDays = [
  "days",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function WeekMeal({ userData }: any) {
  const { setUpdatePlans } = useGlobalContext();

  const [sessionWeeks, setSessionWeeks] = useState(
    userData["plans_of_user"]["plans"]
  );

  const [date, setDate] = useState(dayjs());
  const [weekYear, setWeekYear] = useState(
    date.isoWeek() + "_" + date.format("YY")
  );

  const router = useRouter();

  const [selectedMeal, setSelectedMeal] = useState<null | string>(null);

  const [startOfTheWeek, setStartOfTheWeek] = useState(date.startOf("week"));
  const [endOfTheWeek, setEndOfTheWeek] = useState(date.endOf("week"));

  if (Object.keys(sessionWeeks).length == 0) {
    setSessionWeeks({ [weekYear]: EmptyWeek });
    setUpdatePlans(userData["id"], userData["plans_of_user"]["id"], {
      ...sessionWeeks,
      [weekYear]: EmptyWeek,
    });
    router.reload();
  }

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
      const toUpdate = { ...sessionWeeks, [newWeek]: EmptyWeek };
      setUpdatePlans(userData["id"], userData["plans_of_user"]["id"], toUpdate);
      setSessionWeeks(toUpdate);
    }
  }

  return (
    <>
      {sessionWeeks !== null ? (
        <>
          <DateControlContainer>
            <DateDisplay>{`${startOfTheWeek.format(
              "DD/MM"
            )} to ${endOfTheWeek.format("DD/MM")}`}</DateDisplay>
            <DisplayControl
              onClick={() => {
                sub1Week();
              }}
              style={{
                gridArea: "backBtn",
                alignItems: "end",
                justifyContent: "end",
              }}
            >
              <NavBtnSvg />
            </DisplayControl>
            <DisplayControl
              onClick={() => add1Week()}
              style={{
                gridArea: "frontBtn",
                transform: "rotate(180deg)",
                justifyContent: "end",
              }}
            >
              <NavBtnSvg />
            </DisplayControl>
          </DateControlContainer>
          <WeekGridDiv>
            <thead>
              <tr>
                <td></td>
                <TDWeelMealType>Breakfast</TDWeelMealType>
                <TDWeelMealType>Lunch</TDWeelMealType>
                <TDWeelMealType>Dinner</TDWeelMealType>
              </tr>
            </thead>
            <tbody>
              {weekDays.slice(1).map((day, i) => (
                <tr key={i}>
                  <TDWeekMealDay>
                    {day}
                    <br></br>
                    {startOfTheWeek.add(i, "day").format("(DD/MM)")}
                  </TDWeekMealDay>
                  <TDWeekMeal
                    day={`w_${i + 1}`}
                    week={weekYear}
                    meal="brk"
                    selectedMeal={selectedMeal}
                    setSelectedMeal={setSelectedMeal}
                    m={sessionWeeks?.[weekYear]?.[`w_${i + 1}`]?.["brk"]}
                  ></TDWeekMeal>
                  <TDWeekMeal
                    day={`w_${i + 1}`}
                    week={weekYear}
                    meal="lun"
                    selectedMeal={selectedMeal}
                    setSelectedMeal={setSelectedMeal}
                    m={sessionWeeks?.[weekYear]?.[`w_${i + 1}`]?.["lun"]}
                  ></TDWeekMeal>
                  <TDWeekMeal
                    day={`w_${i + 1}`}
                    week={weekYear}
                    meal="din"
                    selectedMeal={selectedMeal}
                    setSelectedMeal={setSelectedMeal}
                    m={sessionWeeks?.[weekYear]?.[`w_${i + 1}`]?.["din"]}
                  ></TDWeekMeal>
                </tr>
              ))}
            </tbody>
          </WeekGridDiv>
        </>
      ) : (
        <Loader flag={true} />
      )}
    </>
  );
}
