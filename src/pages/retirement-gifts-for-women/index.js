"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import Gift from "@/__webAssets/svgs/gift.svg";
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
  useOurBookCoverforRetiredWomen,
  useRetiredWomenQA,
  useRetiredWomenFeaturesGif,
  useRetiredWomenSuggestions,
  useRetiredWomenTestimonials,
  useSuggestedQuestions,
  useWorkingDetails,
} from "@/utils/webContent";

const RetiredWomen = () => {
  const { t } = useTranslation();
  const workingData = useWorkingDetails(t);
  const retiredWomenQA = useRetiredWomenQA(t);
  const retiredWomenSuggestions = useRetiredWomenSuggestions(t);
  const testimonials = useRetiredWomenTestimonials(t);
  const suggestedQuestions = useSuggestedQuestions(t);
  const ourBookCoverforRetiredWomen = useOurBookCoverforRetiredWomen(t);
  const featuresGif = useRetiredWomenFeaturesGif(t);

  return (
    <>
      <Head>
        <title>The best retirement gift for women - LifeScript</title>
        <meta
          name="description"
          content="Surprise her with an unforgettable trip down memory lane, where she can share her life story, celebrate the ups and downs and receive a beautiful hardcover book."
        />
      </Head>
      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <LandingIntro
          bgGreen={false}
          heading="LifeScript, the best retirement gift for "
          marked="women"
          discription="Surprise her with an unforgettable trip down memory lane, where she can share her life story, celebrate the ups and downs, reflect along the way, and receive a beautiful hardcover book delivered right to her doorstep"
          buttonText="Buy Now"
          imgTitle="Opened autobiography book for women’s retirement gift"
          alt="An opened autobiography book, a thoughtful retirement gift for women to share their life stories - LifeScript."
          subContentWidth="900px"
          lineWidth={150}
        />
        <Box
          sx={{
            marginTop: "-110px",
          }}
        >
          <Suggestion
            heading="A retirement gift that helps her:"
            data={retiredWomenSuggestions}
            btnTxt="Gift now"
            btnImg={Gift}
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
          details={ourBookCoverforRetiredWomen}
          heading={t("landingPage.bookSection.title")}
          marked={t("landingPage.bookSection.subTitle")}
        />
        <Experience
          panelsData={featuresGif}
          headingStyle={false}
          heading="Features that make it easy "
          marked="easy"
        />
        <Reviews
          review="When my daughter gave me LifeScript, I wasn’t sure I’d have much to say. But once I started going through the memories, it became something really special. I ended up writing about things I hadn’t thought about in years, and it led to some great conversations with my kids. They loved hearing stories from my past, things we never really talked about before. When I saw the finished book, it felt unreal—I never imagined I’d have a book of my own. It’s something I’m proud of and something my family will always have."
          author="Alice J."
        />
        <Box
          sx={{
            m: { md: "100px 0 0", sm: "70px 0 -70px", xs: "120px 0 -40px" },
          }}
        >
          <GifTab
            heading="Give the perfect retirement gift and let her turn a lifetime of memories into a beautiful keepsake."
            button={"Gift now"}
            icon={Gift}
            btnLink={"/stripe-page"}
          />
        </Box>
        <GotQuestions questions={retiredWomenQA} />
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

export default RetiredWomen;
