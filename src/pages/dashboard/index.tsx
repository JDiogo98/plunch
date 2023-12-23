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
import { Loader } from "@/components/Loader";
import { Footer } from "@/components/footer";

const GridContainer = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1000px;
  margin-top: 100px;
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookiesToken = context.req.headers.cookie || "";
  const parsedCookies = cookie.parse(cookiesToken);
  const authToken = parsedCookies.authToken;

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
    console.error("Error fetching user data:", error);
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
    sessionWeeks,
  } = useGlobalContext();

  const router = useRouter();

  useEffect(() => {
    setNavOption("home");

    if (userData == null) {
      setTimeout(() => {
        router.reload();
      }, 4000);
    }

    if (userData !== null) {
      setIsAuth({
        firstName: userData["first_name"],
        lastName: userData["last_name"],
        isAuth: true,
      });
      setSessionWeeks(userData["plans_of_user"]["plans"]);
      setUserData(userData);
      setAddMealProcess(nullAddMealProcess);
    }
  }, [userData]);

  return (
    <>
      {userData && userData.plans_of_user?.plans ? (
        <>
          <GridContainer>
            <WeekMeal userData={userData}></WeekMeal>
          </GridContainer>
        </>
      ) : (
        <>
          <div style={{ marginTop: "300px" }}>
            <Loader flag={true} />
            <Footer></Footer>
          </div>
        </>
      )}
    </>
  );
}
