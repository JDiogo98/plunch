import axios from "axios";
import test from "node:test";
import cookie from "cookie";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { getCookie } from "cookies-next";
import { fetchUserData } from "./contextAuthFunctions";
import { Meal, MealsList } from "./SearchTypes";
import { searchMeals } from "./searchMeals";

interface MealList {
  meals: Meal[];
}

interface MealListNull {
  meals: null;
}

const MealListNullHolder = {
  meals: null,
};

interface ContextProps {
  meals: MealList | MealListNull;
  setMeals: Dispatch<SetStateAction<MealList>>;
  searchMeals: (term: string) => MealList | void | undefined;
  userData: any;
  getUserData: any;
  getSearchMeals: any;
  navOption: string;
  setNavOption: (value: string) => void;
}

const GlobalContext = createContext<ContextProps>({
  meals: MealListNullHolder,
  setMeals: (): MealList[] => [],
  searchMeals: (term: string) => {},
  userData: undefined,
  getUserData: undefined,
  getSearchMeals: undefined,
  navOption: "home",
  setNavOption: (value: string) => "home",
});

export const GlobalContextProvider = ({ children }: any) => {
  const [meals, setMeals] = useState<MealList | MealListNull>(
    MealListNullHolder
  );
  const [userData, setUserData] = useState<any>(undefined);
  const [navOption, setNavOption] = useState<string>("home");

  async function getSearchMeals(term: string): Promise<void> {
    try {
      const searchMealsResults = await searchMeals(term);
      setMeals(searchMealsResults);
    } catch (error) {
      console.error("Erro ao buscar refeições:", error);
    }
  }

  async function getUserData() {
    const userDataResult = await fetchUserData();
    setUserData(userDataResult);
  }

  return (
    <GlobalContext.Provider
      value={{
        meals,
        getSearchMeals,
        userData,
        getUserData,
        navOption,
        setNavOption,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
