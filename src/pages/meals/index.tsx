"use client";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { BackSvg } from "../../../public/landingImgs/back";
import { AuthButton } from "../login";
import { SearchSvg } from "../../../public/landingImgs/searchSvg";
import { FormEvent, useState } from "react";
import {
  GlobalContextProvider,
  useGlobalContext,
} from "../../../Context/store";
import { MealsResults } from "@/components/mealsResults";
import { NoResultsMessage } from "@/components/noResults";

const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  width: 95%;
  max-width: 700px;
  margin: auto;
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
  width: 80%;
  padding: 0.4rem 1rem 0.4rem 1rem;
`;

const ResultsContainer = styled.div`
  overflow: scroll;
  height: 80%;
  min-height: 70vh;
  max-height: 80vh;
  /* display: grid; */
  padding: 0.56em;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #9a9696;
  }
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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { meals, getSearchMeals, setNavOption } = useGlobalContext();

  setNavOption("search");

  const handleSearch = (search: string, e: MouseEvent | FormEvent) => {
    e.preventDefault();
    getSearchMeals(searchTerm);
  };

  if (meals["meals"] == null) {
    getSearchMeals("a");
  }

  return (
    <>
      <SearchPageContainer>
        <BackSvg></BackSvg>
        <form onSubmit={(e) => handleSearch(searchTerm, e)}>
          <SerchInputContainer>
            <SearchPageInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Meal"
              type="text"
            ></SearchPageInput>
            <SearchButton
              type="submit"
              onClick={(e) => handleSearch(searchTerm, e)}
            >
              <SearchSvg></SearchSvg>
            </SearchButton>
          </SerchInputContainer>
        </form>
        <UnispiredButton onClick={() => getSearchMeals("random")}>
          Unispired
        </UnispiredButton>
        <ResultsContainer>
          {meals["meals"] !== null ? (
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
