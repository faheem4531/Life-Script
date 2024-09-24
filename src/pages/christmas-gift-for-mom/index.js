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
import LandingIntro from "@/__webComponents/Introduction/LandingIntro";
import DiscoverQuestions from "@/__webComponents/questions/DiscoverQuestions";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import Reviews from "@/__webComponents/reviews/Reviews";
import Suggestion from "@/__webComponents/suggestions/Suggestion";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";
import Working from "@/__webComponents/working/Working";
import {
  useChristmasMomSuggestions,
  useOurBookCoverforChristmasMom,
  useChristmasMomFeaturesGif,
  // useRetiredMenQA,
  useChrismasMomTestimonials,
  useSuggestedQuestions,
  useWorkingDetails,
} from "@/utils/webContent";

const ChristmasMom = () => {
  const { t } = useTranslation();
  const christmasMomSuggestions = useChristmasMomSuggestions(t);
  const testimonials = useChrismasMomTestimonials(t);
  const workingData = useWorkingDetails(t);
  // const retiredMenQA = useRetiredMenQA(t);
  const suggestedQuestions = useSuggestedQuestions(t);
  const ourBookCover = useOurBookCoverforChristmasMom(t);
  const featuresGif = useChristmasMomFeaturesGif(t);

  return (
    <>
      <Head>
        <title>The Best Christmas Gift for Mom - LifeScrip</title>
        <meta
          name="description"
          content="Make her holiday special with the perfect Christmas gift for mom, a beautiful hardcover book that captures her life story, reflections, and cherished memories"
        />
      </Head>
      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <LandingIntro
          bgGreen={false}
          heading="LifeScript, the best Christmas gift for"
          marked="mom"
          discription="Make her Christmas special with the gift of memories. Surprise her with an unforgettable journey through her life story, where she can celebrate the highs and lows, reflect on her experiences, and receive a beautiful hardcover book delivered to her doorstep."
          buttonText="Buy now"
          imgTitle="Opened autobiography book for moms’ Christmas gift"
          alt="An opened autobiography book, a heartfelt Christmas gift for moms to share their cherished life stories - LifeScript."
          subContentWidth="1100px"
          lineWidth={150}
        />
        <Box
          sx={{
            marginTop: "-110px",
          }}
        >
          <Suggestion
            heading="A Christmas gift that allows her to:"
            data={christmasMomSuggestions}
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
          details={ourBookCover}
          heading={t("landingPage.bookSection.title")}
          marked={t("landingPage.bookSection.subTitle")}
        />
      <Experience
          panelsData={featuresGif}
          headingStyle={false}
          heading="Features that make it "
          marked="easy"
        />
        {/*   <Reviews
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
            btnLink={"/purchase"}
          />
        </Box>
        <GotQuestions questions={retiredMenQA} /> */}
        <ContactFooter
          title={"Not the right moment? Set a"}
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

export default ChristmasMom;
