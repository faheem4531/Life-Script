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
  useOurBookCoverforRetiredMen,
  useRetiredMenFeaturesGif,
  useRetiredMenQA,
  useRetiredMenSuggestions,
  useRetiredMenTestimonials,
  useSuggestedQuestions,
  useWorkingDetails,
} from "@/utils/webContent";

const RetiredMen = () => {
  const { t } = useTranslation();
  const workingData = useWorkingDetails(t);
  const retiredMenQA = useRetiredMenQA(t);
  const retiredMenSuggestions = useRetiredMenSuggestions(t);
  const testimonials = useRetiredMenTestimonials(t);
  const suggestedQuestions = useSuggestedQuestions(t);
  const ourBookCoverforAlternative = useOurBookCoverforRetiredMen(t);
  const featuresGif = useRetiredMenFeaturesGif(t);

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
          heading="LifeScript, the best retirement gift for "
          marked = "men"
          discription="Surprise him with an unforgettable trip down memory lane, where he can share his life story, celebrate the ups and downs, reflect along the way, and receive a beautiful hardcover book delivered right to his doorstep"
          buttonText="Buy Now"
          imgTitle="Opened autobiography book for men’s retirement gift"
          alt="An opened autobiography book, a thoughtful retirement gift for men to share their life stories - LifeScript."
          subContentWidth = "900px"
          lineWidth={150}
        />
        <Box
          sx={{
            marginTop: "-110px",
          }}
        >
          <Suggestion
            heading="A retirement gift empowering him to:"
            data={retiredMenSuggestions}
            btnTxt="Gift now"
            btnImg={Gift}
          />
        </Box>
        <Testimonial reviews={testimonials} heading="What our customers say" />
        <Working
          data={workingData}
          heading={"How LifeScript"}
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
          heading="Features that make it "
          marked="easy"
        />
        <Reviews
          review="When my daughter first gave me LifeScript as a retirement gift, I wasn’t sure what to make of it. I’m not much of a writer, and I didn’t think I had much to say. But after sitting down with it, I started remembering things I hadn’t thought about in years. I’m talking about little moments, stuff I thought was long forgotten. Now I’m hooked. It’s weird how it pulls stories out of you. My grandkids love hearing the tales, and I’m happy knowing they’ll have a piece of me when I’m gone. What started as a simple gift turned into something really meaningful."
          author="Tom S. - retired firefighter"
        />
        <Box
          sx={{
            m: { md: "100px 0 0", sm: "70px 0 -70px", xs: "120px 0 -40px" },
          }}
        >
          <GifTab
            heading="Give the perfect retirement gift and let him turn a lifetime of memories into a beautiful keepsake."
            button={"Gift now"}
            icon={Gift}
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

export default RetiredMen;
