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
import LPSuggestion from "@/__webComponents/suggestions/LPSuggestion";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";
import Working from "@/__webComponents/working/Working";
import {
  useGrandmaGiftTestimonials,
  useGrandmaGiftFeaturesGif,
  useGrandmaGiftQA,
  useGrandmaGiftSuggestions,
  useOurBookCoverforGrandmaGift,
  useSuggestedQuestions,
  useWorkingDetails,
} from "@/utils/landingPagesContent";

const miniMainImage = "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1727950980/assets/grandma-receiving-gift-from-granddaughter_x1dmkv.webp"

const GiftForGrandma = () => {
  const { t } = useTranslation();
  const sugestionData = useGrandmaGiftSuggestions(t);
  const testimonials = useGrandmaGiftTestimonials(t);
  const workingData = useWorkingDetails(t);
  const shortQA = useGrandmaGiftQA(t);
  const suggestedQuestions = useSuggestedQuestions(t);
  const ourBookCover = useOurBookCoverforGrandmaGift(t);
  const featuresGif = useGrandmaGiftFeaturesGif(t);

  return (
    <>
      <Head>
        <title>Best Gifts for Grandma | Surprise her with a Beautiful Keepsake</title>
        <meta
          name="description"
          content="Give a personalized gift for grandma with an unforgettable journey through her life’s stories preserved in a beautiful hardcover book delivered to her doorstep."
        />
        <link rel="canonical" href="https://www.thelifescript.com/gifts-for-grandma" />
      </Head>
      
      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <LandingIntro
          bgGreen={false}
          heading="Among the best gifts for"
          marked="grandma"
          discription="Surprise her with an unforgettable journey through her cherished memories, where she can share the stories of her life, celebrate precious moments, and create a legacy with a beautifully crafted hardcover book delivered right to her doorstep."
          buttonText="Buy now"
          imgTitle="Opened autobiography book as a gift for grandma"
          alt="An opened autobiography book, a thoughtful gift for grandmas to share their cherished life stories - LifeScript."
          subContentWidth="1100px"
          lineWidth={200}
          miniImage={miniMainImage}
          miniImageAlt="A joyful moment of a grandma receiving a thoughtful gift from her granddaughter, symbolizing the perfect personalized gift for grandma - LifeScript."
          miniImageTitle="Grandma receiving a gift from her granddaughter - gifts for grandma"
          miniImageWidth={245}
          miniLeft="150px"
        />
        <Box
          sx={{
            marginTop: "-110px",
          }}
        >
          <LPSuggestion
            heading="A personalized gift for grandma to:"
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
          review="When I gave my grandma LifeScript, I wasn’t sure how much she’d enjoy it. But it turned out to be the best gift I could have given her. She started writing down stories from her life—things I had never heard before. It’s been so special hearing about her childhood, her parents, and everything that made her who she is. Watching her go through these memories has brought us even closer, and the fact that we’ll have this book forever means everything to me. LifeScript isn’t just a gift—it’s a way to keep her with us, in her own words."
          author="Emma P."
        />
        <Box
          sx={{
            m: { md: "100px 0 0", sm: "70px 0 -70px", xs: "120px 0 -40px" },
          }}
        >
          <GifTab
            heading="Give the perfect grandma gift and let her turn a lifetime of memories into a beautiful keepsake."
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


export default GiftForGrandma;