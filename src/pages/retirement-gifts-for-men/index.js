"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import Pen from "@/__webAssets/svgs/writing-pen.svg";
import OurBooks from "@/__webComponents/books/OurBooks";
import Experience from "@/__webComponents/experience/Experience";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import GifTab from "@/__webComponents/gifTab/GifTab";
import LandingIntro from "@/__webComponents/Introduction/LandingIntro";
import DiscoverQuestions from "@/__webComponents/questions/DiscoverQuestions";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import Reviews from "@/__webComponents/reviews/Reviews";
import Suggestion from "@/__webComponents/suggestions/Suggestion";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";
import Working from "@/__webComponents/working/Working";
import {
  useAlternativeFeaturesGif,
  useOurBookCoverforAlternative,
  useRetiredMenQA,
  useRetiredMenSuggestions,
  useRetiredMenTestimonials,
  useSuggestedQuestions,
  useWorkingDetails,
} from "@/utils/webContent";

const StoryworthAlternative = () => {
  const { t } = useTranslation();
  const workingData = useWorkingDetails(t);
  const retiredMenQA = useRetiredMenQA(t);
  const retiredMenSuggestions = useRetiredMenSuggestions(t);
  const testimonials = useRetiredMenTestimonials(t);
  const suggestedQuestions = useSuggestedQuestions(t);
  const ourBookCoverforAlternative = useOurBookCoverforAlternative(t);
  const featuresGif = useAlternativeFeaturesGif(t);

  return (
    <>
      <Head>
        <title>The best retirement gift for men - LifeScript</title>
        <meta
          name="description"
          content="Surprise him with an unforgettable trip down memory lane, where he can share his life story, celebrate the ups and downs and receive a beautiful hardcover book."
        />
      </Head>
      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <LandingIntro
          bgGreen={false}
          heading="LifeScript, the best retirement gift for men"
          discription="Surprise him with an unforgettable trip down memory lane, where he can share his life story, celebrate the ups and downs, reflect along the way, and receive a beautiful hardcover book delivered right to his doorstep"
          buttonText="Buy Now"
        />
        <Box
          sx={{
            marginTop: "-110px",
          }}
        >
          <Suggestion
            heading="A retirement gift empowering him to:"
            data={retiredMenSuggestions}
          />
        </Box>
        <Testimonial reviews={testimonials} heading="What our customers say" />
        <Working
          data={workingData}
          heading={"How LifeScrip "}
          marked={"works"}
          width={"300px"}
        />
        <DiscoverQuestions
          questions={suggestedQuestions}
          cardData="LifeScript offers hundreds of thoughtfully curated questions, with the option to create your own or choose 
          from personalised suggestions."
        />
        <OurBooks
          details={ourBookCoverforAlternative}
          heading={t("landingPage.bookSection.title")}
          marked={t("landingPage.bookSection.subTitle")}
        />
        <Experience
          panelsData={featuresGif}
          headingStyle={false}
          heading="Features that make it easy "
          marked="easy"
        />
        <Reviews />
        <Box
          sx={{
            m: { md: "100px 0 0", sm: "70px 0 -70px", xs: "120px 0 -40px" },
          }}
        >
          <GifTab
            heading={"Not sure? Try it now for free!"}
            button={"Free Trial"}
            icon={Pen}
            subHeading="no credit card required."
            btnLink={"/stripe-page"}
          />
        </Box>
        <GotQuestions questions={retiredMenQA} />
        <ContactFooter
          title={"Still have any "}
          marked={"questions?"}
          lineWidth={170}
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

export default StoryworthAlternative;
