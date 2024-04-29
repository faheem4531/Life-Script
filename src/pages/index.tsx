"use client";
import { Inter } from "next/font/google";
import Head from "next/head";

// import WProofreaderSDK from "@webspellchecker/wproofreader-sdk-js";
import Script from "next/script";
import HomePage from './home';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
{/* 
      <Head>
        <title>LifeScript</title>
        <meta
          name="facebook-domain-verification"
          content="4juom1wbc7mn3on53shgvpk9p7oyua"
        />
        <meta property="og:title" content="The Lifescript" />
        <meta property="og:site_name" content="The Lifescript" />
        <meta property="og:url" content="https://www.thelifescript.com/" />
        <meta property="og:description" content="Turn your stories into a beautiful hardcover book to preserve memories and connect with family or gift this unparalleled experience to your mom, dad or grandparent" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://github.com/Tayyab-103/JavaScript-103/assets/109760448/26d04d82-e102-4c24-961b-9954303bd1b5" />
      </Head> */}

     {/* Include necessary scripts */}
      {/* <FeaturesPage /> */}
      <HomePage />

        <Script
          src="https://r.wdfl.co/rw.js"
          data-rewardful={"797851"}
        ></Script>
        <Script id="rewardful-queue" strategy="beforeInteractive">
          {`(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');`}
        </Script>
     
      {/* <AuthPage /> */}
      {/* <BlogPage /> */}
      {/* <BlogDetailPage /> */}
      {/* <GiftingPage /> */}
    </>
  );
}
