"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import Pen from "@/__webAssets/svgs/writing-pen.svg";
import OurBooks from "@/__webComponents/books/OurBooks";
import ComparisonDetails from "@/__webComponents/comparisonDetails/ComparisonDetails";
import Experience from "@/__webComponents/experience/Experience";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import GifTab from "@/__webComponents/gifTab/GifTab";
import LandingIntro from "@/__webComponents/Introduction/LandingIntro";
import DiscoverQuestions from "@/__webComponents/questions/DiscoverQuestions";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";
import WhyLifeScript from "@/__webComponents/whyLifeScript/WhyLifeScript";
import Working from "@/__webComponents/working/Working";
import {
  useAlternativeFeaturesGif,
  UseAlternativeQA,
  useFeaturesComparison,
  useHomeTestimonials,
  useOurBookCoverforAlternative,
  usePricingComparison,
  useSuggestedQuestions,
  useWhyLifeScript,
  useWorkingDetails,
} from "@/utils/webContent";

const StoryworthAlternative = () => {
  const { t } = useTranslation();
  const workingDetails = useWorkingDetails(t);
  const pricingComparison = usePricingComparison(t);
  const featuresComparison = useFeaturesComparison(t);
  const storyWorthAlternativeQs = UseAlternativeQA(t);
  const homeTestimonials = useHomeTestimonials(t);
  const whyLifeScript = useWhyLifeScript(t);
  const suggestedQuestions = useSuggestedQuestions(t);
  const ourBookCoverforAlternative = useOurBookCoverforAlternative(t);
  const featuresGif = useAlternativeFeaturesGif(t);

  return (
    <>
      <Head>
        <title>The Best Storyworth Alternative - LifeScript</title>
        <meta
          name="description"
          content="Save time, efforts and enjoy a more personalised, secure and supportive storytelling experience with no hidden costs. Try now for free!"
        />
      </Head>

      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <LandingIntro
          heading={"LifeScript, the best Storyworth"}
          marked={"alternative"}
          discription="Save time, efforts and enjoy a more personalized, secure and
            supportive storytelling experience with no hidden costs."
          buttonText="Start writing for free"
          alt=" An opened autobiography book, showcasing LifeScript as the best Storyworth alternative for capturing life stories."
          imgTitle="Opened autobiography book - LifeScript as a Storyworth alternative"
          lineWidth={250}
        />
        <Box sx={{ mt: { md: "-120px", sm: "-80px", xs: "-20px" } }}>
          <Experience
            panelsData={featuresGif}
            headingStyle={false}
            heading="How we’re "
            marked="different"
          />
        </Box>
        <WhyLifeScript data={whyLifeScript} />
        <Box
          sx={{
            margin: {
              md: "100px 0 100px",
              sm: "100px 0 -90px",
              xs: " 10px 0 -50px",
            },
          }}
        >
          <ComparisonDetails
            cardsDetail={pricingComparison}
            heading={"LifeScript vs Storyworth cost"}
          />
          <ComparisonDetails
            cardsDetail={featuresComparison}
            heading={t("pricingSection.featureComparison.title")}
            marked={t("pricingSection.featureComparison.subTitle")}
          />
        </Box>
        <Working
          data={workingDetails}
          heading={"How LifeScript "}
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
        <Testimonial
          reviews={homeTestimonials}
          heading="What our customers say"
        />
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
        </Box>
        <GotQuestions questions={storyWorthAlternativeQs} />
        <ContactFooter
          title={"Still have "}
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
