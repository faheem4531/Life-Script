"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import LifeScriptLogo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";
import ComparisonDetails from "@/__webComponents/comparisonDetails/ComparisonDetails";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import NavBar from "@/__webComponents/navBar/NavBar";
import Pricing from "@/__webComponents/pricing/Pricing";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import Working from "@/__webComponents/working/Working";
import styles from "./Pricing.module.css";

import {
  useFeaturesComparison,
  useHomeQA,
  usePricingCardDetails,
  usePricingComparison,
  usePricingWorkingData,
} from "@/utils/webContent";

const PricingPage = () => {
  const { t } = useTranslation();
  const pointsArray = usePricingWorkingData(t);
  const pricingDetails = usePricingComparison(t);
  const featuresDetails = useFeaturesComparison(t);
  const homeQuestionPanel = useHomeQA(t);
  const pricingCardDetails = usePricingCardDetails(t);

  return (
    <>
      <Head>
        <title>Pricing Plans and Competitor Comparison</title>
        <meta
          name="description"
          content="Each package includes lifetime access to our platform, premium full-color hardcover book and free shipping."
        />
      </Head>

      <Box
        sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}
        className={styles.pricingPage}
      >
        <NavBar color="#F3ECDA" logo={LifeScriptLogo} />
        <Pricing cardData={pricingCardDetails} />
        <Working
          data={pointsArray}
          width="340px"
          heading={t("pricingSection.title")}
          subHeading={t("pricingSection.subTitle")}
        />
        <Box sx={{ margin: { sm: "100px 0 -100px", xs: " 10px 0 -50px" } }}>
          <ComparisonDetails
            cardsDetail={pricingDetails}
            heading={t("pricingSection.bookDetails.title")}
            marked={t("pricingSection.bookDetails.subTitle")}
          />
          <ComparisonDetails
            cardsDetail={featuresDetails}
            heading={t("pricingSection.featureComparison.title")}
            marked={t("pricingSection.featureComparison.subTitle")}
          />
        </Box>
        <GotQuestions questions={homeQuestionPanel} />
        <ContactFooter
          title={t("pricingSection.stillConfusedSection.title")}
          marked={t("pricingSection.stillConfusedSection.title2")}
          lineWidth={150}
          subTitle={t("pricingSection.stillConfusedSection.subTitle")}
          input1={t("pricingSection.stillConfusedSection.input1")}
          input2={t("pricingSection.stillConfusedSection.input2")}
          input3={t("pricingSection.stillConfusedSection.input3")}
          button={t("pricingSection.stillConfusedSection.btnText")}
        />
        <Footer />
      </Box>
    </>
  );
};

export default PricingPage;
