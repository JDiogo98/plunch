import Link from "next/link";
import styled from "styled-components";
import { HomeSvg } from "./svgHome";
import { SearchSvg } from "./svgSearch ";
import { AccountSvg } from "./svgAccount";
import { nullAddMealProcess, useGlobalContext } from "../../Context/store";
import { BackSvg } from "../../public/landingImgs/back";
import { LogOutSvg } from "./svgLogout";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const NavContainer = styled.div`
  width: 100%;
`;

const NavBottomContainer = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  position: fixed;
  place-self: center;
  bottom: 0;
  min-height: 70px;
  align-items: center;
  background-color: #ffffff;
  z-index: 5;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
`;

const NavTopContainer = styled(NavBottomContainer)`
  top: 0;
  position: absolute;
  width: 100%;
  max-height: 50px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  grid-template-columns: 1fr 3fr 1fr;
  margin: 0 auto 1rem auto;
  padding-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 25px;
  place-items: center;
  place-self: center;
  background: none;
`;
const NavBarLinks = styled(Link)`
  &:hover {
    opacity: 0.4;
  }
`;

export const NavBar = ({ children }: any) => {
  const { navOption, setNavOption, isAuth, setAddMealProcess, setIsAuth } =
    useGlobalContext();

  const router = useRouter();

  function setLogOut() {
    setIsAuth({ firstName: "", isAuth: false, lastName: "" });
    deleteCookie("authToken");
    setNavOption("landing");
    router.push("/");
  }

  function handleBackButton() {
    switch (navOption) {
      case "search":
        router.push("/dashboard");
        break;
      case "home":
        router.push("/meals");
        break;
      case "meal":
        router.push("/meals");
        break;
    }
  }

  const NavFlag = !(
    navOption === "landing" ||
    navOption === "login" ||
    navOption === "signup"
  );

  return (
    <>
      {NavFlag ? (
        <NavContainer>
          {children}
          <NavTopContainer>
            <div onClick={() => handleBackButton()}>
              <BackSvg></BackSvg>
            </div>
            <p></p>
            <div onClick={() => setLogOut()}>
              <LogOutSvg></LogOutSvg>
            </div>
          </NavTopContainer>
          <NavBottomContainer>
            <NavBarLinks
              href="/dashboard"
              onClick={() => {
                setNavOption("home"), setAddMealProcess(nullAddMealProcess);
              }}
            >
              <HomeSvg
                color={navOption === "home" ? "#c8161d" : "#757575"}
                size={"3rem"}
              ></HomeSvg>
            </NavBarLinks>
            <NavBarLinks
              href="/meals"
              onClick={() => {
                setNavOption("search"), setAddMealProcess(nullAddMealProcess);
              }}
            >
              <SearchSvg
                color={navOption === "search" ? "#c8161d" : "#757575"}
                size={"2.4rem"}
              ></SearchSvg>
            </NavBarLinks>
            <NavBarLinks
              href="/login"
              onClick={() => {
                setNavOption("account"), setAddMealProcess(nullAddMealProcess);
              }}
            >
              <AccountSvg
                size={"2rem"}
                color={navOption === "account" ? "#c8161d" : "#757575"}
              ></AccountSvg>
            </NavBarLinks>
          </NavBottomContainer>
        </NavContainer>
      ) : (
        children
      )}
    </>
  );
};
