import React from "react";
import plunchLogo from "../../public/Logo-W_R.png";
import styled from "styled-components";
import Image from "next/image";
import DownloadAppStore from "../../public/DownloadAppStore.svg";
import DownloadPlayStore from "../../public/DownloadGoogle Play.svg";
import M_E1 from "../../public/M - E1.jpg";
import M_E2 from "../../public/M - E2.jpg";
import M_D2 from "../../public/M - D2.jpg";
import { InstaSvg } from "../../public/InstaSvg";
import { stringify } from "querystring";
import { FaceSvg } from "../../public/faceSvg";
import { WhatsSvg } from "../../public/WhatsSvg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImagesContainer = styled.div`
  padding: 2rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
`;

const LandingImages = styled(Image)`
  width: 100%;
  border-radius: 25px;
  height: auto;
  display: block;
`;

const LandingText = styled.span`
  color: black;
  text-align: justify;
  font-family: "Geomanist", sans-serif;
  padding: 3rem;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const LandingButton = styled.button`
  background-color: #c8161d;
  color: #ffffff;
  border: none;
  padding: 1.5rem;
  margin: 2rem;
  font-family: "Geomanist", sans-serif;
  border-radius: 25px;
  font-size: 2.5rem;
`;

const LandingLogo = styled(Image)`
  margin-top: -5rem;
  z-index: -3;
`;

const LandingFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c8161d;
  color: #ffffff;
  margin-top: 5rem;
  padding: 2rem;
`;


const FooterTitle = styled.span`
padding: 4rem;
font-size: 3rem;
`

const DownloadsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;


const AppsLink = styled(Image)`
  max-width: 100%;
  width: 20rem;
  height: auto;
`;

export default function LandingPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/geomanist" />
      <Container>
        <ImagesContainer>
          <LandingImages
            style={{ gridColumn: "1/1", gridRow: "1/1", marginTop: "-20rem" }}
            src={M_E1}
            alt="Image Error"
          ></LandingImages>
          <div
            style={{
              backgroundColor: "#C8161D",
              borderRadius: "25px",
              marginTop: "-20rem",
              marginBottom: "15rem",
            }}
          ></div>
          <LandingImages
            style={{ gridColumn: "1/1", gridRow: "2/2" }}
            src={M_E2}
            alt="Image Error"
          ></LandingImages>
          <LandingImages
            style={{ gridColumn: "2/3", gridRow: "2/3", marginTop: "-15rem" }}
            src={M_D2}
            alt="Image Error"
          ></LandingImages>
        </ImagesContainer>

        <LandingLogo src={plunchLogo} alt="Logo - Error"></LandingLogo>
        <LandingText>
          Transform your meals, transform your week! Plan, organize, and
          innovate with ease. Record your recipes, search online, and simplify
          family meal planning. Discover the freedom of a more practical kitchen
          with Plunch!
        </LandingText>
        <LandingButton>Log In</LandingButton>
        <LandingButton>Sign Up</LandingButton>
      </Container>
      <LandingFooter>
        <FooterTitle>Download our App</FooterTitle>
        <DownloadsDiv>
          <AppsLink src={DownloadAppStore} alt="Error at AppStore"></AppsLink>
          <AppsLink src={DownloadPlayStore} alt="Error at PlayStore"></AppsLink>
        </DownloadsDiv>
        <FooterTitle>Follow Us</FooterTitle>
          <div style={{display: "flex", gap: "2rem"}}>
        <InstaSvg></InstaSvg>
        <FaceSvg></FaceSvg>
        <WhatsSvg></WhatsSvg>
        </div>
      </LandingFooter>
    </>
  );
}
