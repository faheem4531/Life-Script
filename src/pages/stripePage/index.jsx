"use client";
import Head from "next/head";
import QuestionaireS1 from "../stripePage/sections/QuestionaireS1";
import QuestionaireS2 from "../stripePage/sections/QuestionaireS2";

const StripePage = () => {
  return (
    <>
      <Head>
        <title>Stripe Pages Flow </title>
        <meta name="description" content="stripe Pages flow " />
      </Head>

     <QuestionaireS1/>

     <QuestionaireS2/>
    </>
  );
};

export default StripePage;
