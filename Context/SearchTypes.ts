export type StringOrNull = string | null;

export interface Meal {
  idMeal: StringOrNull;
  strMeal: StringOrNull;
  strDrinkAlternate: StringOrNull;
  strCategory: StringOrNull;
  strArea: StringOrNull;
  strInstructions: StringOrNull;
  strMealThumb: StringOrNull;
  strTags: StringOrNull;
  strYoutube: StringOrNull;
  strIngredient1: StringOrNull;
  strIngredient2: StringOrNull;
  strIngredient3: StringOrNull;
  strIngredient4: StringOrNull;
  strIngredient5: StringOrNull;
  strIngredient6: StringOrNull;
  strIngredient7: StringOrNull;
  strIngredient8: StringOrNull;
  strIngredient9: StringOrNull;
  strIngredient10: StringOrNull;
  strIngredient11: StringOrNull;
  strIngredient12: StringOrNull;
  strIngredient13: StringOrNull;
  strIngredient14: StringOrNull;
  strIngredient15: StringOrNull;
  strIngredient16: StringOrNull;
  strIngredient17: StringOrNull;
  strIngredient18: StringOrNull;
  strIngredient19: StringOrNull;
  strIngredient20: StringOrNull;
  strMeasure1: StringOrNull;
  strMeasure2: StringOrNull;
  strMeasure3: StringOrNull;
  strMeasure4: StringOrNull;
  strMeasure5: StringOrNull;
  strMeasure6: StringOrNull;
  strMeasure7: StringOrNull;
  strMeasure8: StringOrNull;
  strMeasure9: StringOrNull;
  strMeasure10: StringOrNull;
  strMeasure11: StringOrNull;
  strMeasure12: StringOrNull;
  strMeasure13: StringOrNull;
  strMeasure14: StringOrNull;
  strMeasure15: StringOrNull;
  strMeasure16: StringOrNull;
  strMeasure17: StringOrNull;
  strMeasure18: StringOrNull;
  strMeasure19: StringOrNull;
  strMeasure20: StringOrNull;
  strSource: StringOrNull;
  strImageSource: StringOrNull;
  strCreativeCommonsConfirmed: StringOrNull;
  dateModified: StringOrNull;
}

export interface MealsList {
  meals: Meal[];
}

export const initialState: MealsList = {
  meals: [
    {
      idMeal: null,
      strMeal: "Let's Cook",
      strDrinkAlternate: null,
      strCategory: null,
      strArea: null,
      strInstructions: null,
      strMealThumb: null,
      strTags: null,
      strYoutube: null,
      strIngredient1: null,
      strIngredient2: null,
      strIngredient3: null,
      strIngredient4: null,
      strIngredient5: null,
      strIngredient6: null,
      strIngredient7: null,
      strIngredient8: null,
      strIngredient9: null,
      strIngredient10: null,
      strIngredient11: null,
      strIngredient12: null,
      strIngredient13: null,
      strIngredient14: null,
      strIngredient15: null,
      strIngredient16: null,
      strIngredient17: null,
      strIngredient18: null,
      strIngredient19: null,
      strIngredient20: null,
      strMeasure1: null,
      strMeasure2: null,
      strMeasure3: null,
      strMeasure4: null,
      strMeasure5: null,
      strMeasure6: null,
      strMeasure7: null,
      strMeasure8: null,
      strMeasure9: null,
      strMeasure10: null,
      strMeasure11: null,
      strMeasure12: null,
      strMeasure13: null,
      strMeasure14: null,
      strMeasure15: null,
      strMeasure16: null,
      strMeasure17: null,
      strMeasure18: null,
      strMeasure19: null,
      strMeasure20: null,
      strSource: null,
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
  ],
};
