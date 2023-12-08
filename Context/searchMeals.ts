import axios from "axios";
import { MealsList } from "./SearchTypes";

export async function searchMeals(term: string): Promise<MealsList> {
  try {
    if (term.includes("random")) {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      return response.data;
    } else {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
      return response.data;
    }
  } catch (error) {
    throw new Error("Error at searching Meals");
  }
}
