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
  padding: 15px;
  height: 100%;
  border-radius: 15px;
  min-width: 420px;
  max-width: 700px;
  margin: auto;
  justify-self: center;
  @media (min-width: 320px) {
    width: 92%;
  }
`;
const SearchPageInput = styled.input`
  border-radius: 15px;
  width: 60%;
  border: none;
  padding: 10px;
  margin-left: 15px;
  background-color: #ececec;
  outline: none;
  font-size: 16px;
`;

const UnispiredButton = styled.button`
  width: 60%;
  margin: auto;
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

const ISpan = styled.span`
  border-radius: 50px;
  background-color: white;
  color: red;
  padding: 5px;
  cursor: pointer;
  display: block;
  border: 1px solid red;
  &:hover {
    display: none;
  }
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
  // Create the state to search meals
  const [searchTerm, setSearchTerm] = useState<string>("");
  // Getting the functions from the context
  const { meals, getSearchMeals, setNavOption, addMealProcess } =
    useGlobalContext();
  // Create the LoadingState to display de the loader when the promisse is fetched
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // The function that trigger the search at the context.
  const handleSearch = async (e: MouseEvent | FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await getSearchMeals(searchTerm);
    setIsLoading(false);
  };

  // the functions that set loading when the initial data still null and set the nav option to "search"
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
      getSearchMeals("a");
    };

    fetchData();
  }, []);

  return (
    <>
      <Backgroud></Backgroud>
      <div style={{ display: "flex", width: "100%", justifyContent: "start" }}>
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

          <div
            style={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            <UnispiredButton onClick={() => getSearchMeals("random")}>
              Feeling Unispired?
            </UnispiredButton>
            <ISpan>i</ISpan>
          </div>
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
