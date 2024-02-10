import axios from "axios";
import { Meal } from "./SearchTypes";
import dayjs from "dayjs";

export async function getMealRecipe(id: string | string[] | undefined) {
  const dataResponse = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  return dataResponse.data;
}

export function splitIngredients(list: Meal) {
  const Ingredients = Object.entries(list);
  const filteredIngredients = Ingredients.filter(
    (i) => i[0].includes("strIngredient") && i[1] !== null && i[1] !== ""
  );

  const returnList = [];

  const ingredientsIndex = 29; // This relates to the data structure, where the database response always contains the same number of parameters regardless of the required ingredients. The quantities and ingredients follow the same order, with the first corresponding to 29 and the second to 29+1.

  for (let i = 0; i < filteredIngredients.length; i++) {
    returnList.push([
      filteredIngredients[i][1],
      Ingredients[i + ingredientsIndex][1],
    ]);
  }

  return returnList;
}

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

export function addingTo(d: any, y: any, m: any) {
  const currentWeek = y.split("_");

  const weekAtTheYear = +d[2];

  const amountOfDays = currentWeek[0] * 7 + toAddDays(weekAtTheYear);
  console.log(amountOfDays);

  const date = dayjs(`01-01-20${currentWeek[1]}`).add(amountOfDays, "day");

  return `Add to ${date.format("dddd")} ${toAddMeal(m)} at ${date.format(
    "DD-MMM"
  )} `;
}
