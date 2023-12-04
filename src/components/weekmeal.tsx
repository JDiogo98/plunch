import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeekInYear from "dayjs/plugin/isoWeeksInYear";
import isoLeapInYear from "dayjs/plugin/isLeapYear";
import { set } from "date-fns";
import { type } from "os";

dayjs.extend(isoWeek);
dayjs.extend(isoWeekInYear);
dayjs.extend(isoLeapInYear);

const testeW = {
  w_1: {
    brk: {
      id: "52893",
      name: "Apple & Blackberry Crumble",
      img: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    },
    lun: {
      id: "52872",
      name: "Spanish Tortilla",
      img: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
    },
    din: {
      id: "52868",
      name: "Kidney Bean Curry",
      img: "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
    },
  },
  w_2: {
    brk: {
      id: "52893",
      name: "Apple & Blackberry Crumble",
      img: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    },
    lun: {
      id: "52872",
      name: "Spanish Tortilla",
      img: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
    },
    din: {
      id: "52868",
      name: "Kidney Bean Curry",
      img: "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
    },
  },
  w_3: {
    brk: {
      id: "52893",
      name: "Apple & Blackberry Crumble",
      img: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    },
    lun: {
      id: "52872",
      name: "Spanish Tortilla",
      img: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
    },
    din: {
      id: "52868",
      name: "Kidney Bean Curry",
      img: "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
    },
  },
  w_4: {
    brk: {
      id: "52893",
      name: "Apple & Blackberry Crumble",
      img: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    },
    lun: {
      id: "52872",
      name: "Spanish Tortilla",
      img: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
    },
    din: {
      id: "52868",
      name: "Kidney Bean Curry",
      img: "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
    },
  },
  w_5: {
    brk: {
      id: "52893",
      name: "Apple & Blackberry Crumble",
      img: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    },
    lun: {
      id: "52872",
      name: "Spanish Tortilla",
      img: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
    },
    din: {
      id: null,
      name: null,
      img: null,
    },
  },
  w_6: {
    brk: {
      id: "52893",
      name: "Apple & Blackberry Crumble",
      img: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    },
    lun: {
      id: "52872",
      name: "Spanish Tortilla",
      img: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
    },
    din: {
      id: "52868",
      name: "Kidney Bean Curry",
      img: "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
    },
  },
  w_7: {
    brk: {
      id: "52893",
      name: "Apple & Blackberry Crumble",
      img: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    },
    lun: {
      id: "52872",
      name: "Spanish Tortilla",
      img: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
    },
    din: {
      id: "52868",
      name: "Kidney Bean Curry",
      img: "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
    },
  },
};

type PlanMeal = {
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

type ThisType = {
  plans: PlansStructure;
};

export default function WeekMeal() {
  const [currentWeek, setCurrentWeek] = useState<PlansStructure>(testeW);

  const [date, setDate] = useState(dayjs());
  const [startOfTheWeek, setStartOfTheWeek] = useState(date.startOf("week"));
  const [endOfTheWeek, setEndOfTheWeek] = useState(date.endOf("week"));
  const [weekYear, setWeekYear] = useState(dayjs().isoWeek());

  console.log(startOfTheWeek);

  function add1Week() {
    setDate(date.add(1, "week"));
    refreshDates();
  }
  function sub1Week() {
    setDate(date.subtract(1, "week"));
    refreshDates();
  }

  function refreshDates() {
    setStartOfTheWeek(date.startOf("week"));
    setEndOfTheWeek(date.endOf("week"));
    setWeekYear(date.isoWeek());
  }

  // const testefunc2 = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://www.themealdb.com/api/json/v1/1/random.php"
  //     );
  //     setTeste(response.data["meals"]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   testefunc2();
  // }, []);

  return (
    <>
      {currentWeek ? (
        <WeekGridDiv>
          <TRWeek>
            <WeekMealDate colSpan={4}>{`${startOfTheWeek.format(
              "DD-MM"
            )} to ${endOfTheWeek.format("DD-MM")}`}</WeekMealDate>
          </TRWeek>
          <TRWeek>
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
              <WeekMealButton onClick={() => add1Week()}>{">"}</WeekMealButton>
            </td>
          </TRWeek>
          <TRWeek>
            <td></td>
            <TDWeelMealType>Breakfast</TDWeelMealType>
            <TDWeelMealType>Lunch</TDWeelMealType>
            <TDWeelMealType>Dinner</TDWeelMealType>
          </TRWeek>

          <TRWeek>
            <TDWeekMealDay>
              Sunday
              <br></br>
              {startOfTheWeek.format("(DD-MM)")}
            </TDWeekMealDay>
            <TDWeekMeal meal={currentWeek["w_1"]["brk"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_1"]["lun"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_1"]["din"]}></TDWeekMeal>
          </TRWeek>
          <TRWeek>
            <TDWeekMealDay>
              Monday
              <br></br>
              {startOfTheWeek.add(1, "day").format("(DD-MM)")}
            </TDWeekMealDay>
            <TDWeekMeal meal={currentWeek["w_2"]["brk"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_2"]["lun"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_2"]["din"]}></TDWeekMeal>
          </TRWeek>
          <TRWeek>
            <TDWeekMealDay>
              Tuesday
              <br></br>
              {startOfTheWeek.add(2, "day").format("(DD-MM)")}
            </TDWeekMealDay>
            <TDWeekMeal meal={currentWeek["w_3"]["brk"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_3"]["lun"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_3"]["din"]}></TDWeekMeal>
          </TRWeek>
          <TRWeek>
            <TDWeekMealDay>
              Wendsday
              <br></br>
              {startOfTheWeek.add(3, "day").format("(DD-MM)")}
            </TDWeekMealDay>
            <TDWeekMeal meal={currentWeek["w_4"]["brk"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_4"]["lun"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_4"]["din"]}></TDWeekMeal>
          </TRWeek>
          <TRWeek>
            <TDWeekMealDay>
              Thursday
              <br></br>
              {startOfTheWeek.add(4, "day").format("(DD-MM)")}
            </TDWeekMealDay>
            <TDWeekMeal meal={currentWeek["w_5"]["brk"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_5"]["lun"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_5"]["din"]}></TDWeekMeal>
          </TRWeek>
          <TRWeek>
            <TDWeekMealDay>
              Friday
              <br></br>
              {startOfTheWeek.add(5, "day").format("(DD-MM)")}
            </TDWeekMealDay>
            <TDWeekMeal meal={currentWeek["w_6"]["brk"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_6"]["lun"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_6"]["din"]}></TDWeekMeal>
          </TRWeek>
          <TRWeek>
            <TDWeekMealDay>
              Saturday
              <br></br>
              {startOfTheWeek.add(6, "day").format("(DD-MM)")}
            </TDWeekMealDay>
            <TDWeekMeal meal={currentWeek["w_7"]["brk"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_7"]["lun"]}></TDWeekMeal>
            <TDWeekMeal meal={currentWeek["w_7"]["din"]}></TDWeekMeal>
          </TRWeek>
        </WeekGridDiv>
      ) : null}
    </>
  );
}

const TDWeekMeal: React.FC<{ meal?: PlanMeal }> = ({ meal }) => {
  console.log(meal);

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

const TRWeek = styled.tr``;
const TDWeekMealContainer = styled.td`
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
const TDWeekMealDay = styled(TDWeekMealContainer)`
  background-color: #c8161d;
  color: #ffffff;
  border-radius: 5px;
  font-weight: 700;
`;
const TDWeelMealType = styled(TDWeekMealDay)``;
const WeekMealButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: 600;
  border: 1px solid #ffffff;
  background-color: #989898;
  border-radius: 10px;
  color: #ffffff;
`;
const WeekMealDate = styled.td`
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
const WeekGridDiv = styled.table`
  /* width: 100%; */
  border-radius: 15px;
  padding: 1rem;
  border-collapse: separate;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: linear-gradient(45deg, #ffffff, #ececec);
`;
