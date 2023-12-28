import React, { useEffect } from "react";
import { Footer } from "@/components/footer";
import { useGlobalContext } from "../Context/store";
import Banner from "@/components/landing";

export default function LandingPage() {
  const { setNavOption } = useGlobalContext();

  useEffect(() => {
    setNavOption("landing");
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/geomanist" />
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}
