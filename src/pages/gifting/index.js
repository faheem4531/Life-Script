'use client'

import { Box } from "@mui/material";
import Footer from "@/__webComponents/footer/Footer";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import HeroGifting from "./sections/Introduction";
import Gifting from "./sections/Gifting";
import Experience from "@/__webComponents/experience/Experience";
import Working from "@/__webComponents/working/Working";
import DesignCard from "./sections/DesignCard";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import { useTranslation } from "react-i18next";
import {
  useBookCoverHome,
  useHomeFeaturesGif,
  useHomeHero,
  useHomeQA,
  useHomeSuggestions,
  useHomeTestimonials,
  usePricingCardDetails,
  useStoryTelling,
  useWorkingDetails,
} from "@/utils/webContent";

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
        title="Still have any questions?"
        subTitle="Contact us Now!!!"
        input1="Your email address"
        input2="What’s the occasion?"
        input3="When it’s happening?"
        button="Get in touch!"
      />
      <Footer />
    </Box>
  )
}

export default GiftingPage;