"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import BlogDetailPage from "./website/blog/blogDetails"

// import WProofreaderSDK from "@webspellchecker/wproofreader-sdk-js";
import AuthPage from "./_auth/Auth";
import HomePage from './website/homePage';
import FeaturesPage from './website/features';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>LifeScript</title>
        <meta
          name="facebook-domain-verification"
          content="4juom1wbc7mn3on53shgvpk9p7oyua"
        />
      </Head>
      {/* <FeaturesPage /> */}
      {/* <HomePage /> */}
      {/* <BlogPage /> */}
      <BlogDetailPage />
    </>
  );
}
