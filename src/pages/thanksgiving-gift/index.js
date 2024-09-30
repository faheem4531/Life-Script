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
  useThanksgivingTestimonials,
  useThanksgivingFeaturesGif,
  useThanksgivingQA,
  useThanksgivingSuggestions,
  useOurBookCoverforThanksgiving,
  useSuggestedQuestions,
  useWorkingDetails,
} from "@/utils/webContent";

const ThanksGiving = () => {
  const { t } = useTranslation();
  const sugestionData = useThanksgivingSuggestions(t);
  const testimonials = useThanksgivingTestimonials(t);
  const workingData = useWorkingDetails(t);
  const shortQA = useThanksgivingQA(t);
  const suggestedQuestions = useSuggestedQuestions(t);
  const ourBookCover = useOurBookCoverforThanksgiving(t);
  const featuresGif = useThanksgivingFeaturesGif(t);

  return (
    <>
      <Head>
        <title>The Best Thanksgiving Gift - LifeScript</title>
        <meta
          name="description"
          content="Make their holiday special with the most meaningful Thanksgiving gift, a beautiful book that captures their life story, reflections, and cherished memories."
        />
        <link rel="canonical" href="https://www.thelifescript.com/thanksgiving-gift" />
      </Head>
      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <LandingIntro
          bgGreen={false}
          heading="LifeScript, the best Thanksgiving"
          marked="gift"
          discription="Give a timeless Thanksgiving gift by helping your loved one preserve their story, celebrate the moments that mattered, and receive a personalized hardcover book filled with memories."
          buttonText="Buy now"
          imgTitle="Opened autobiography book as a Thanksgiving gift"
          alt="An opened autobiography book, a heartfelt Thanksgiving gift for sharing cherished life stories - LifeScript."
          subContentWidth="900px"
          lineWidth={140}
        />
        <Box
          sx={{
            marginTop: "-110px",
          }}
        >
          <Suggestion
            heading="A Thanksgiving gift that helps your loved one to"
            data={sugestionData}
            btnTxt="Gift now"
            btnImg={Gift}
            bigImage={true}
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
        <Reviews
          review="This Thanksgiving, I wanted to give my mom something meaningful, something that would really connect us as a family. LifeScript turned out to be the perfect gift. Every time we talk now, she shares a story I’ve never heard before, and it’s like I’m getting to know her in a whole new way. She’s so proud of the book she’s creating, and honestly, we’re all excited to read it. LifeScript brought us closer this holiday season, and I’m so grateful for that. It’s more than a gift—it’s a lasting memory."
          author="Sarah G."
        />
        <Box
          sx={{
            m: { md: "100px 0 0", sm: "70px 0 -70px", xs: "120px 0 -40px" },
          }}
        >
          <GifTab
            heading="Surprise your loved one with a Thanksgiving
gift that will transform their memories into a beautiful book delivered to their doorstep."
            button={"Gift now"}
            icon={Gift}
            btnLink={"/purchase"}
          />
        </Box>
        <GotQuestions questions={shortQA} />
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

export default ThanksGiving;
