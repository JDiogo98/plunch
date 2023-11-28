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
  width: 100%;
  background-color: #c8161d;
  color: #ffffff;
  padding: 2rem;
`;

const FooterTitle = styled.span`
  padding: 2rem;
  font-size: 2rem;
`;

const DownloadsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
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
  gap: 2rem;
`;

export function Footer() {
  return (
    <>
      <LandingFooter>
        <FooterTitle>Download our App</FooterTitle>
        <DownloadsDiv>
          <AppsLink src={DownloadAppStore} alt="Error at AppStore"></AppsLink>
          <AppsLink src={DownloadPlayStore} alt="Error at PlayStore"></AppsLink>
        </DownloadsDiv>
        <FooterTitle>Follow Us</FooterTitle>
        <SocialContainer>
          <InstaSvg></InstaSvg>
          <FaceSvg></FaceSvg>
          <WhatsSvg></WhatsSvg>
        </SocialContainer>
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
