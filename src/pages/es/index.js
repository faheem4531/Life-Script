"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import Gift from "@/__webAssets/svgs/gift.svg";
import Shape from "@/__webAssets/svgs/input-shape.svg";
import OurBooks from "@/__webComponents/books/OurBooks";
import Experience from "@/__webComponents/experience/Experience";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import GifTab from "@/__webComponents/gifTab/GifTab";
import NavBar from "@/__webComponents/navBar/NavBar";
import Pricing from "@/__webComponents/pricing/Pricing";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import Reviews from "@/__webComponents/reviews/Reviews";
import StoryTelling from "@/__webComponents/storyTelling/StoryTelling";
import Suggestion from "@/__webComponents/suggestions/Suggestion";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";
import Working from "@/__webComponents/working/Working";
import Introduction from "../home/components/Introduction"

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

const HomePage = () => {
  const { t } = useTranslation();
  const heroSec = useHomeHero();
  const testimonials = useHomeTestimonials(t);
  const pointsArray = useWorkingDetails(t);
  const homeQuestionPanel = useHomeQA(t);
  const homeSuggestions = useHomeSuggestions(t);
  const ourBookCoverHome = useBookCoverHome();
  const storyTelling = useStoryTelling(t);
  const pricingCardDetails = usePricingCardDetails(t);
  const homeFeaturesGif = useHomeFeaturesGif(t);

  return (
    <>
      <Head>
        <title>
          Crea o Regala Fácilmente un Libro de Autobiografía Personal - LifeScript
        </title>
        <meta
          name="description"
          content="Convierte tus historias en un hermoso libro de tapa dura para preservar recuerdos y conectar con la familia, o regala esta experiencia inigualable a tu mamá, papá o abuelos."
        />
        <link rel="alternate" href="https://www.thelifescript.com/es/" hreflang="es" />
        <link rel="alternate" href="https://www.thelifescript.com/" hreflang="en" />
        <link rel="canonical" href="https://www.thelifescript.com/es/" />

      </Head>
      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <NavBar logo={"home"} color="#3E4F3C"/>
        <Introduction data={heroSec} />
        <Working
          data={pointsArray}
          heading={t("landingPage.howItWorks.heading")}
          marked={t("landingPage.howItWorks.subHeading")}
          width={"300px"}
        />
        <Suggestion
          heading={t("landingPage.perfectSection.title")}
          bgGreen={false}
          data={homeSuggestions}
        />
        <GifTab
          heading={t("landingPage.perfectSection.content5.cardText")}
          button={t("landingPage.perfectSection.content5.btntext")}
          icon={Gift}
        />
        <StoryTelling data={storyTelling} />
        <Reviews
          review={t("landingPage.reviewSection.Description")}
          author={t("landingPage.reviewSection.author")}
        />
        <Experience
          panelsData={homeFeaturesGif}
          heading={t("landingPage.featureSection.title")}
          marked={t("landingPage.featureSection.subTitle")}
        />
        <Pricing cardData={pricingCardDetails} />
        <OurBooks
          details={ourBookCoverHome}
          heading={t("landingPage.bookSection.title")}
          marked={t("landingPage.bookSection.subTitle")}
        />
        <Testimonial
          reviews={testimonials}
          marked={t("landingPage.testimonialSection.title")}
          subTitle={t("landingPage.testimonialSection.subTitle")}
        />
        <GotQuestions questions={homeQuestionPanel} />
        <ContactFooter
          title={t("landingPage.reminderSection.title")}
          marked={t("landingPage.reminderSection.subTitle")}
          date={true}
          subTitle={t("landingPage.reminderSection.description")}
          input1={t("landingPage.reminderSection.input1")}
          input2={t("landingPage.reminderSection.input2")}
          input3={t("landingPage.reminderSection.input3")}
          button={t("landingPage.reminderSection.btnText")}
          shape={Shape}
        />
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;
