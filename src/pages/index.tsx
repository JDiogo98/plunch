import React from "react";
import plunchLogo from "../../public/Logo-W_R.png";
import styled from "styled-components";
import Image from "next/image";
import M_E1 from "../../public/M - E1.jpg";
import M_E2 from "../../public/M - E2.jpg";
import M_D2 from "../../public/M - D2.jpg";

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
  padding: 3rem;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const LandingLogo = styled(Image)``;

export default function LandingPage() {
  return (
    <>
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
              marginBottom: "15rem"
            }}
          ></div>
          <LandingImages
            style={{ gridColumn: "1/1", gridRow: "2/2"}}
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
      </Container>
    </>
  );
}
