import WeekMeal from "@/components/weekmeal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  width: 100%;
  padding: 3rem;
`;



export default function WeekGrid() {

  return (
    <>
      <GridContainer>
        <WeekMeal></WeekMeal>
      </GridContainer>
    </>
  );
}
