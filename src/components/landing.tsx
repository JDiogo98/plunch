import React from "react";
import plunchLogo from "../../public/Logo-W_R.png";
import imgChicken from "../../public/landingImgs/imgChicken.jpg";
import imgSalad from "../../public/landingImgs/imgSalad.jpg";
import imgFamily from "../../public/landingImgs/imgFamily.jpg";
import imgLunch from "../../public/landingImgs/imgLunch.jpg";
import imgShop from "../../public/landingImgs/imgShop.jpg";
import imgTable from "../../public/landingImgs/imgTable.jpeg";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const BannerContainer = styled.div`
  padding: 2rem;
  width: 100%;
  display: grid;
  gap: 1rem;
  background-color: white;
  grid-template-rows: auto auto 2fr;
  margin-bottom: -30%;
  grid-template-areas:
    "g_imgSalad   g_red1"
    "g_imgFamily g_imgChicken"
    "g_Elements g_Elements";
`;

const FamilyImg = styled(Image)`
  width: 100%;
  border-radius: 25px;
  height: auto;
  transform: translateY(-50%);
  grid-area: g_imgFamily;
`;

const SaladImg = styled(Image)`
  width: 100%;
  border-radius: 25px;
  height: auto;
  transform: translateY(-50%);
  grid-area: g_imgSalad;
`;
const ChickenImg = styled(Image)`
  width: 100%;
  border-radius: 25px;
  height: auto;
  transform: translateY(-75%);
  grid-area: g_imgChicken;
`;
const LunchImg = styled(Image)`
  width: 100%;
  border-radius: 25px;
  height: auto;
  grid-area: g_imgLunch;
  display: none;
`;
const ShopImg = styled(Image)`
  width: 100%;
  border-radius: 25px;
  height: auto;
  grid-area: g_imgShop;
  display: none;
`;
const TableImg = styled(Image)`
  width: 100%;
  border-radius: 25px;
  height: auto;
  grid-area: g_imgTable;
  display: none;
`;
const RedElement1 = styled.div`
  background-color: #c8161d;
  border-radius: 25px;
  width: 100%;
  transform: translateY(-75%);
  grid-area: g_red1;
`;
const RedElement2 = styled.div`
  background-color: #c8161d;
  border-radius: 25px;
  width: 100%;
  grid-area: g_red2;
  display: none;
`;
const LandingText = styled.h1`
  text-align: justify;
  font-family: "Geomanist", sans-serif;
  color: black;
  margin-bottom: 3rem;
  font-size: 1rem;
`;
const LandingButtonLogIn = styled.button`
  background-color: #c8161d;
  color: #ffffff;
  border: none;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  margin: 0 1rem 0 1rem;
  font-family: "Geomanist", sans-serif;
  border-radius: 25px;
  font-size: 1.5rem;
`;
const LandingButtonSignUp = styled(LandingButtonLogIn)`
  margin: 2rem;
`;
const LandingLogo = styled(Image)`
  width: 100%;
  height: auto;
`;
const ElementsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: g_Elements;
  z-index: 5;
  transform: translateY(-20%);
`;
export default function Banner() {
  return (
    <>
      <BannerContainer>
        <FamilyImg src={imgFamily} alt="Image Error"></FamilyImg>
        <SaladImg src={imgSalad} alt="Image Error"></SaladImg>
        <ChickenImg src={imgChicken} alt="Image Error"></ChickenImg>
        <LunchImg src={imgLunch} alt="Image Error"></LunchImg>
        <TableImg src={imgTable} alt="Image Error"></TableImg>
        <ShopImg src={imgShop} alt="Image Error"></ShopImg>
        <RedElement1></RedElement1>
        <RedElement2></RedElement2>
        <ElementsContainer>
          <LandingLogo src={plunchLogo} alt="Logo - Error"></LandingLogo>
          <LandingText>
            Transform your meals, transform your week! Plan, organize, and
            innovate with ease. Record your recipes, search online, and simplify
            family meal planning. Discover the freedom of a more practical
            kitchen with Plunch!
          </LandingText>

          <LandingButtonLogIn>
            <Link href={"/login"} style={{ all: "unset" }}>
              Log In
            </Link>
          </LandingButtonLogIn>

          <LandingButtonSignUp>
            <Link href={"/signup"} style={{ all: "unset" }}>
              Sign Up
            </Link>
          </LandingButtonSignUp>
        </ElementsContainer>
      </BannerContainer>
    </>
  );
}
