import styled from "styled-components";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import cookie from "cookie";
import {
  GlobalContextProvider,
  nullAddMealProcess,
  useGlobalContext,
} from "../../../Context/store";
import { useEffect } from "react";
import { fetchUserData } from "../../../Context/contextAuthFunctions";
import WeekMeal from "@/components/weekmeal";
import { useRouter } from "next/router";

const GridContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 30%;
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookiesToken = context.req.headers.cookie || "";
  const parsedCookies = cookie.parse(cookiesToken);
  const authToken = parsedCookies.authToken;

  // Check if authToken is not present, then redirect to the login page
  // if (!authToken) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/login",
  //     },
  //   };
  // }

  let userServerPropsResponse;

  try {
    userServerPropsResponse = await fetchUserData(authToken);
  } catch (error) {
    userServerPropsResponse = { status: 500 };
    // throw new Error("Error at getting userData");
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: {
      userData: userServerPropsResponse || null,
    },
  };
}

export default function WeekGrid({ userData }: any) {
  const {
    setNavOption,
    setIsAuth,
    setSessionWeeks,
    setUserData,
    setAddMealProcess,
  } = useGlobalContext();

  const router = useRouter();
  useEffect(() => {
    if (userData) {
      setNavOption("home");
      setIsAuth({
        firstName: userData["first_name"],
        lastName: userData["last_name"],
        isAuth: true,
      });
      setSessionWeeks(userData["plans_of_user"]["plans"]);
      setUserData(userData);
      setAddMealProcess(nullAddMealProcess);
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <>
      {userData && (
        <GridContainer>
          <WeekMeal userData={userData}></WeekMeal>
        </GridContainer>
      )}
    </>
  );
}
