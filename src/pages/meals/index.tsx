"use client";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { BackSvg } from "../../../public/landingImgs/back";
import { AuthButton } from "../login";
import { SearchSvg } from "../../../public/landingImgs/searchSvg";
import { useState } from "react";
import {
  GlobalContextProvider,
  useGlobalContext,
} from "../../../Context/store";
import { MealsResults } from "@/components/mealsResults";
import { NoResultsMessage } from "@/components/noResults";

const SearchPageContainer = styled.div`
  display: grid;
  padding: 1rem;
  height: 100%;
  width: 100%;
  gap: 2rem;
  /* grid-template-rows: 1fr 0.5fr 1fr 7fr 2fr 1fr; */
`;
const SearchPageInput = styled.input`
  border-radius: 15px;
  border: none;
  padding: 0.6rem;
  margin-left: 1rem;
  background-color: #ececec;
  outline: none;
  font-size: 1.3rem;
`;

const UnispiredButton = styled(AuthButton)`
  grid-row: 3/4;
  border-radius: 10px;
  padding: 0.4rem 1rem 0.4rem 1rem;
  margin: 1rem;
`;

const ResultsContainer = styled.div`
  overflow: scroll;
  height: 80%;
  min-height: 70vh;
  max-height: 80vh;
  /* display: grid; */
  padding: 0.56em;
`;

const SerchInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  background-color: #ececec;
`;

const SearchButton = styled.button`
  outline: none;
  padding: 0;
  border-radius: 25px;
  border: none;
`;

const SearchMealsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { meals, searchMeals } = useGlobalContext();

  const handleSearch = (e: any) => {
    e.preventDefault();
    searchMeals(searchTerm);
  };

  return (
    <>
      <SearchPageContainer>
        <BackSvg></BackSvg>
        <form onSubmit={handleSearch}>
          <SerchInputContainer>
            <SearchPageInput
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Meal"
              type="text"
            ></SearchPageInput>
            <SearchButton type="submit" onClick={() => searchMeals(searchTerm)}>
              <SearchSvg></SearchSvg>
            </SearchButton>
          </SerchInputContainer>
        </form>

        <UnispiredButton>Unispired</UnispiredButton>
        <ResultsContainer>
          {meals["meals"] ? (
            Object.values(meals["meals"]).map((v) => {
              return <MealsResults key={v["idMeal"]} meal={v}></MealsResults>;
            })
          ) : (
            <NoResultsMessage />
          )}
        </ResultsContainer>
      </SearchPageContainer>
    </>
  );
};

export default SearchMealsPage;
