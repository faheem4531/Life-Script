"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import LandingIntro from "@/__webComponents/Introduction/LandingIntro";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import Suggestion from "@/__webComponents/suggestions/Suggestion";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";
import { 
  useRetiredMenQA,
  useRetiredMenSuggestions,
  useRetiredMenTestimonials,
  useWorkingDetails,
} from "@/utils/webContent";

const StoryworthAlternative = () => {
  const { t } = useTranslation();
  const workingData = useWorkingDetails(t);
  const retiredMenQA = useRetiredMenQA(t);
  const retiredMenSuggestions = useRetiredMenSuggestions(t);
  const testimonials = useRetiredMenTestimonials(t);

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
        <Suggestion
          heading="A retirement gift empowering him to:"
          data={retiredMenSuggestions}
        />
        <Testimonial reviews={testimonials} heading="What our customers say" />

        {/* <Experience
          headingStyle={false}
          heading="How we’re "
          marked="different"
        />
        <Working
          data={pointsArray}
          heading={t("landingPage.howItWorks.heading")}
          marked={t("landingPage.howItWorks.subHeading")}
          width={"300px"}
        />
        <DiscoverQuestions />
        <OurBooks />

        <Box
          sx={{
            m: {
              md: "140px 0 0 ",
              sm: "90px 0 -50px",
              xs: "100px 20px 0 30px",
            },
          }}
        >
          <GifTab
            heading={"Not sure? Try it now for free!"}
            button={"Free Trial"}
            icon={Pen}
            subHeading="no credit card required."
            btnLink={"/stripe-page"}
          />
        </Box> */}
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
