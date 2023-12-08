import Link from "next/link";
import styled from "styled-components";
import { HomeSvg } from "./svgHome";
import { SearchSvg } from "./svgSearch ";
import { sign } from "crypto";
import { AccountSvg } from "./svgAccount";
import { useState } from "react";
import { useGlobalContext } from "../../Context/store";

const NavContainer = styled.nav`
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
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
`;

const NavBarLinks = styled(Link)`
  &:hover {
    opacity: 0.4;
  }
`;

const NavBar = () => {
  const { navOption, setNavOption } = useGlobalContext();

  return (
    <NavContainer>
      <NavBarLinks href="/dashboard" onClick={() => setNavOption("home")}>
        <HomeSvg
          color={navOption == "home" ? "#c8161d" : "#757575"}
          size={"3rem"}
        ></HomeSvg>
      </NavBarLinks>
      <NavBarLinks href="/meals" onClick={() => setNavOption("search")}>
        <SearchSvg
          color={navOption == "search" ? "#c8161d" : "#757575"}
          size={"2.4rem"}
        ></SearchSvg>
      </NavBarLinks>
      <NavBarLinks href="/login" onClick={() => setNavOption("account")}>
        <AccountSvg
          size={"2rem"}
          color={navOption == "account" ? "#c8161d" : "#757575"}
        ></AccountSvg>
      </NavBarLinks>
    </NavContainer>
  );
};

export default NavBar;
