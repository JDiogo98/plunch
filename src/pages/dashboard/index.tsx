import WeekMeal from "@/components/weekmeal";
import axios from "axios";
import styled from "styled-components";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import cookie from "cookie";
import {
  GlobalContextProvider,
  useGlobalContext,
} from "../../../Context/store";
import { useEffect, useState } from "react";

const GridContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 20%;
`;


export default function WeekGrid() {
  const { getUserData, userData, setNavOption } = useGlobalContext();




  setNavOption("home");
  useEffect(() => {
    async function fetchData() {
      try {
        await getUserData();
        
      } catch (error) {
        throw new Error("Error at fetching UserData");
      }
    }
    if (!userData) {
      fetchData();
    }
  }, [getUserData, userData]);

  return (
    <>
      <GridContainer>
        {userData && <WeekMeal userData={userData}></WeekMeal>}
      </GridContainer>
    </>
  );
}
