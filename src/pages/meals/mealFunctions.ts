import axios from "axios";
import { log } from "console";
import { Meal } from "../../../Context/SearchTypes";
import { LogInContainer } from "../login";
import dayjs from "dayjs";

export async function getMealRecipe(id: string | string[] | undefined) {
  try {
    console.log("teste do id na função ", id);
    const dataResponse = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );
    return dataResponse.data;
  } catch (error) {
    console.log("Error at getting recipe", error);
  }
}

export function splitIngredients(list: Meal) {
  const Ingredients = Object.entries(list);
  const filteredIngredients = Ingredients.filter(
    (i) => i[0].includes("strIngredient") && i[1] !== null && i[1] !== ""
  );

  const returnList = [];

  for (let i = 0; i < filteredIngredients.length; i++) {
    returnList.push([filteredIngredients[i][1], Ingredients[i + 29][1]]);
  }

  return returnList;
}

const weekD = "w_7";
const weekY = "50_23";

var weekOfYear: any = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

function toAddDays(tA: any) {
  console.log(tA);

  switch (tA) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
    case 5:
      return 4;
    case 6:
      return 5;
    default:
      return 6;
  }
}

function toAddMeal(m: any) {
  switch (m) {
    case "brk":
      return "Breakfast";
    case "lun":
      return "Lunch";
    default:
      return "Dinner";
  }
}

export function addingTo(d, y, m) {
  const currentWeek = y.split("_");
  const amountOfDays = currentWeek[0] * 7 + toAddDays(d[2] * 1);
  console.log(amountOfDays);

  const date = dayjs(`01-01-20${currentWeek[1]}`).add(amountOfDays, "day");

  return `Add to ${date.format("dddd")} ${toAddMeal(m)} at ${date.format(
    "DD-MMM"
  )} `;
}

