import axios from "axios";
import test from "node:test";
import cookie from "cookie";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { getCookie } from "cookies-next";
import { fetchUserData, updatePlans } from "./contextAuthFunctions";
import { Meal, MealsList, StringOrNull } from "./SearchTypes";
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

interface isAuthInterface {
  isAuth: boolean;
  firstName: string | undefined;
  lastName: string | undefined;
}

type selectedMeal = {
  id: string;
  name: string;
  img: string;
};

export const nullAddMealProcess = {
  currentDay: null,
  currentMeal: null,
  currentWeek: null,
  selectedMeal: null,
};

interface addMealProcessInterface {
  selectedMeal: StringOrNull | any;
  currentWeek: StringOrNull | any;
  currentDay: StringOrNull | any;
  currentMeal: StringOrNull | any;
}

interface ContextProps {
  meals: MealList | MealListNull;
  setMeals: any;
  searchMeals: any;
  userData: any;
  getUserData: any;
  getSearchMeals: any;
  navOption: string;
  setNavOption: (value: string) => void;
  setUpdatePlans: (user_id: string, list_id: string, plans: any) => void;
  isAuth: isAuthInterface;
  setIsAuth: React.Dispatch<React.SetStateAction<isAuthInterface>>;
  addMealProcess: addMealProcessInterface;
  setAddMealProcess: React.Dispatch<
    React.SetStateAction<addMealProcessInterface>
  >;
  sessionWeeks: any | undefined;
  setSessionWeeks: (meals: any) => void;
  setUserData: (data: any) => void;
}

const GlobalContext = createContext<ContextProps>({
  meals: MealListNullHolder,
  setMeals: () => {},
  searchMeals: (term: string) => {},
  userData: undefined,
  getUserData: undefined,
  getSearchMeals: undefined,
  navOption: "home",
  setNavOption: () => {},
  setUpdatePlans: (user_id: string, list_id: string) => {},
  isAuth: { firstName: undefined, lastName: undefined, isAuth: false },
  setIsAuth: () => {},
  addMealProcess: nullAddMealProcess,
  setAddMealProcess: () => {},
  sessionWeeks: undefined,
  setSessionWeeks: () => {},
  setUserData: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [meals, setMeals] = useState<MealList | MealListNull>(
    MealListNullHolder
  );
  const [userData, setUserData] = useState<any>(null);
  const [navOption, setNavOption] = useState<string>("home");
  const [isAuth, setIsAuth] = useState<isAuthInterface>({
    firstName: undefined,
    lastName: undefined,
    isAuth: false,
  });
  const [addMealProcess, setAddMealProcess] =
    useState<addMealProcessInterface>(nullAddMealProcess);

  const [sessionWeeks, setSessionWeeks] = useState(null);

  async function getSearchMeals(term: string): Promise<void> {
    try {
      const searchMealsResults = await searchMeals(term);
      setMeals(searchMealsResults);
    } catch (error) {
      console.error("Erro ao buscar refeições:", error);
    }
  }
  async function getUserData() {
    try {
      const authToken = getCookie("authToken");
      const userDataResult = await fetchUserData(authToken);
      console.log(userDataResult);
      setIsAuth({
        firstName: userDataResult["first_name"],
        lastName: userDataResult["last_name"],
        isAuth: true,
      });
      setUserData(userDataResult);
    } catch (error) {
      setIsAuth({ firstName: undefined, lastName: undefined, isAuth: false });
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  }

  async function setUpdatePlans(user_id: string, list_id: string, plans: any) {
    updatePlans(user_id, list_id, plans);
    return;
  }

  return (
    <GlobalContext.Provider
      value={{
        searchMeals,
        setMeals,
        meals,
        getSearchMeals,
        userData,
        getUserData,
        navOption,
        setNavOption,
        setUpdatePlans,
        setAddMealProcess,
        isAuth,
        setIsAuth,
        addMealProcess,
        sessionWeeks,
        setSessionWeeks,
        setUserData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
