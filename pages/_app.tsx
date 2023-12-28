import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalContextProvider } from "../Context/store";
import { NavBar } from "@/components/navBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <NavBar>
        <Component {...pageProps} />;
      </NavBar>
    </GlobalContextProvider>
  );
}
