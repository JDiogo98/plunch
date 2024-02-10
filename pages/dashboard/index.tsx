import styled from "styled-components";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import cookie from "cookie";
import { useEffect } from "react";
import WeekMeal from "@/components/weekmeal";
import { useRouter } from "next/router";
import { Loader } from "@/components/Loader";
import { Backgroud } from "@/components/background";
import { fetchUserData } from "../../Context/contextAuthFunctions";
import { nullAddMealProcess, useGlobalContext } from "../../Context/store";

const GridContainer = styled.div`
  width: 100%;
  margin: auto;
  max-width: 900px;
  margin-top: 140px;
`;

// Getting the userData from the ServerSideProps
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Getting the cookie to check the authToken at the backend

  const cookiesToken = context.req.headers.cookie || "";
  const parsedCookies = cookie.parse(cookiesToken);
  const authToken = parsedCookies.authToken;
  // if the token does't existing, redirect to he login page
  if (!authToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  let userServerPropsResponse;

  // if the authToken exist try to check if its valid
  try {
    //if its valid, store the userData and return it as a prop to the component.
    userServerPropsResponse = await fetchUserData(authToken);
  } catch (error) {
    // if isn't valid redirect to he login page
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
  // getting the functions from the global context to change the states

  const {
    setNavOption,
    setIsAuth,
    setSessionWeeks,
    setUserData,
    setAddMealProcess,
  } = useGlobalContext();

  // use router to redirect to another pages
  const router = useRouter();

  // when the component is mounted the the nav option to "home" and if the prop is null reload after 4s.
  useEffect(() => {
    setNavOption("home");
    if (userData == null) {
      setTimeout(() => {
        router.reload();
      }, 4000);
    }
    // if the userData is valid, set the data to the states.
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
          <Backgroud></Backgroud>
          <GridContainer>
            <WeekMeal userData={userData}></WeekMeal>
          </GridContainer>
        </>
      ) : (
        <>
          <div style={{ marginTop: "300px" }}>
            <Loader flag={true} />
          </div>
        </>
      )}
    </>
  );
}
