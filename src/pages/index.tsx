"use client";
import { Inter } from "next/font/google";
import Head from "next/head";

import { Provider as StoreProvider } from "react-redux";

import { store } from "../store/store";

// import WProofreaderSDK from "@webspellchecker/wproofreader-sdk-js";
import AuthPage from "./_auth/Auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <StoreProvider store={store}>
        <Head>
          <title>LifeScript</title>
          <meta
            name="facebook-domain-verification"
            content="4juom1wbc7mn3on53shgvpk9p7oyua"
          />
        </Head>
        <AuthPage />
      </StoreProvider>
    </>
  );
}
