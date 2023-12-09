import styled from "styled-components";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import cookie from "cookie";
import {
  GlobalContextProvider,
  useGlobalContext,
} from "../../../Context/store";
import { useEffect } from "react";
import { fetchUserData } from "../../../Context/contextAuthFunctions";
import WeekMeal from "@/components/weekmeal";

const GridContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 20%;
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookiesToken = context.req.headers.cookie || "";
  const parsedCookies = cookie.parse(cookiesToken);
  const authToken = parsedCookies.authToken;

  // Check if authToken is not present, then redirect to the login page
  if (!authToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

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
      userData: userServerPropsResponse,
    },
  };
}

export default function WeekGrid({ userData }: any) {
  const { setNavOption, setIsAuth } = useGlobalContext();

  useEffect(() => {
    setNavOption("home");
    setIsAuth({
      firstName: userData["first_name"],
      lastName: userData["last_name"],
      isAuth: true,
    });
  }, []);

  console.log(userData);
  

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
