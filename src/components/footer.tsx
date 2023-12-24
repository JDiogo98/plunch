import React from "react";
import styled from "styled-components";
import Image from "next/image";
import DownloadAppStore from "../../public/DownloadAppStore.svg";
import DownloadPlayStore from "../../public/DownloadGoogle Play.svg";

import { InstaSvg } from "../../public/InstaSvg";
import { FaceSvg } from "../../public/faceSvg";
import { WhatsSvg } from "../../public/WhatsSvg";

const LandingFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  width: calc(100% - 30px);
  background-color: #c8161d;
  color: #ffffff;
  padding: 15px;
  margin-top: 50px;

  @media (min-width: 1199px) {
    flex-direction: row;
    justify-content: space-evenly;
    transform: translateY(20%);
  }
`;

const FooterTitle = styled.span`
  font-size: 1.5rem;
  margin: 25px;
`;

const DownloadsDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  gap: 20px;
  justify-content: space-between;
`;

const AppsLink = styled(Image)`
  max-width: 80%;
  height: auto;
`;

const FooterLink = styled.span`
  font-size: 1.5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const DivContainer = styled.div`
  margin: 25px;
`;

export function Footer() {
  return (
    <>
      <LandingFooter>
        <DivContainer>
          <FooterTitle>Download our App</FooterTitle>
          <DownloadsDiv>
            <AppsLink src={DownloadAppStore} alt="Error at AppStore"></AppsLink>
            <AppsLink
              src={DownloadPlayStore}
              alt="Error at PlayStore"
            ></AppsLink>
          </DownloadsDiv>
        </DivContainer>
        <DivContainer>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialContainer>
            <InstaSvg></InstaSvg>
            <FaceSvg></FaceSvg>
            <WhatsSvg></WhatsSvg>
          </SocialContainer>
        </DivContainer>
        <FooterTitle>© 2023 Plunch, Inc</FooterTitle>
        <LinksContainer>
          <FooterLink>Privacy</FooterLink>
          <FooterLink> - </FooterLink>
          <FooterLink>Terms</FooterLink>
          <FooterLink> - </FooterLink>
          <FooterLink>About Us</FooterLink>
        </LinksContainer>
      </LandingFooter>
    </>
  );
}
