"use client";

import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import Experience from "@/__webComponents/experience/Experience";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import Working from "@/__webComponents/working/Working";
import {
  useHomeFeaturesGif,
  useHomeQA,
  useWorkingDetails,
} from "@/utils/webContent";
import DesignCard from "./sections/DesignCard";
import Gifting from "./sections/Gifting";
import HeroGifting from "./sections/Introduction";

const GiftingPage = () => {
  const { t } = useTranslation();
  const pointsArray = useWorkingDetails(t);
  const homeFeaturesGif = useHomeFeaturesGif(t);
  const homeQuestionPanel = useHomeQA(t);

  return (
    <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
      <HeroGifting />
      <Gifting />
      <Box sx={{ display: { sm: "none", xs: "none", md: "block" } }}>
        <Experience
          panelsData={homeFeaturesGif}
          heading={t("landingPage.featureSection.title")}
          marked={t("landingPage.featureSection.subTitle")}
        />
      </Box>
      <Working data={pointsArray} heading=" How it" marked="works" />
      <DesignCard />
      <GotQuestions questions={homeQuestionPanel} />
      <ContactFooter
        title="Still have questions?"
        subTitle="Contact us now"
        input1="Your email address"
        input2="What’s the occasion?"
        input3="When it’s happening?"
        button="Get in touch!"
      />
      <Footer />
    </Box>
  );
};

export default GiftingPage;
