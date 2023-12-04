import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import getSearchMealsReducer from "./Context/store";

export const store = configureStore({
  reducer: {
    meals: getSearchMealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
