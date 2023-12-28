import styled from "styled-components";
import { FormEvent, useEffect, useState } from "react";
import { NoResultsMessage } from "@/components/noResults";
import { AddSvg } from "@/components/svgAdd";
import { Loader } from "@/components/Loader";
import { BlackMText } from "@/components/textsAndSizes";
import cookie from "cookie";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { Backgroud } from "@/components/background";
import { fetchUserData } from "../../Context/contextAuthFunctions";
import { useGlobalContext } from "../../Context/store";
import { SearchSvg } from "../../public/landingImgs/searchSvg";
import { addingTo } from "../../Context/mealFunctions";
import { MealsResults } from "@/components/mealsResults";

const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem;
  height: 100%;
  border-radius: 15px;
  width: 92%;
  max-width: 700px;
  margin: auto;
  justify-self: center;
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

const UnispiredButton = styled.button`
  width: 60%;
  margin: auto;
  margin-top: 20px;
  border-radius: 15px;
  outline: none;
  border: none;
  color: #ffffff;
  background-color: #c8161d;
  padding: 5px;
`;

const ResultsContainer = styled.div`
  margin-top: 25px;
  overflow-y: scroll;
  padding: 0.56em;
  margin-bottom: 90px;
  max-height: 500px;
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
    background-color: #d5d3d3;
  }
`;

const SerchInputContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
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

const SearchMealsPage = ({ userData }: any) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { meals, getSearchMeals, setNavOption, addMealProcess } =
    useGlobalContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleSearch = async (e: MouseEvent | FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await getSearchMeals(searchTerm);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setNavOption("search");
      if (meals["meals"] == null) {
        try {
          await getSearchMeals("a");
        } catch (error) {
          console.error("Error fetching search meals:", error);
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Backgroud></Backgroud>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <SearchPageContainer>
          <form onSubmit={(e) => handleSearch(e)}>
            <SerchInputContainer>
              <SearchPageInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.trim())}
                placeholder="Search Meal"
                type="text"
              ></SearchPageInput>
              <SearchButton type="submit" onClick={(e) => handleSearch(e)}>
                <SearchSvg></SearchSvg>
              </SearchButton>
            </SerchInputContainer>
          </form>
          <UnispiredButton onClick={() => getSearchMeals("random")}>
            Unispired
          </UnispiredButton>
          {addMealProcess["currentDay"] && (
            <BlackMText>
              {addingTo(
                addMealProcess["currentDay"],
                addMealProcess["currentWeek"],
                addMealProcess["currentMeal"]
              )}
            </BlackMText>
          )}
          <ResultsContainer>
            {isLoading ? (
              <Loader flag={isLoading} />
            ) : meals["meals"] !== null ? (
              <>
                {Object.values(meals["meals"]).map((v) => (
                  <MealsResults key={v["idMeal"]} meal={v}>
                    {addMealProcess["currentDay"] && <AddSvg></AddSvg>}
                  </MealsResults>
                ))}
              </>
            ) : (
              <NoResultsMessage />
            )}
          </ResultsContainer>
        </SearchPageContainer>
      </div>
    </>
  );
};

export default SearchMealsPage;
