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
  useGrandparentsGiftFeaturesGif,
  useGrandparentsGiftQA,
  useGrandparentsGiftSuggestions,
  useGrandparentsGiftTestimonials,
  useOurBookCoverforGrandparentsGift,
  useSuggestedQuestions,
  useWorkingDetails,
} from "@/utils/landingPagesContent";

const miniMainImage ="https://res.cloudinary.com/dm3wjnhkv/image/upload/v1725832662/assets/grandma-and-grandpa-laughing-and-eating-ice_cream-happy-memories_nsi0br.webp";

const GiftForGrandparents = () => {
  const { t } = useTranslation();
  const sugestionData = useGrandparentsGiftSuggestions(t);
  const testimonials = useGrandparentsGiftTestimonials(t);
  const workingData = useWorkingDetails(t);
  const shortQA = useGrandparentsGiftQA(t);
  const suggestedQuestions = useSuggestedQuestions(t);
  const ourBookCover = useOurBookCoverforGrandparentsGift(t);
  const featuresGif = useGrandparentsGiftFeaturesGif(t);

  return (
    <>
      <Head>
        <title>
          Gifts for Grandparents | Surprise them with a Beautiful Keepsake
        </title>
        <meta
          name="description"
          content="LifeScript is one of the best gifts for grandparents, offering an unforgettable journey through their life memories, beautifully preserved in a hardcover book."
        />
        <link
          rel="canonical"
          href="https://www.thelifescript.com/gifts-for-grandparents"
        />
      </Head>

      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <LandingIntro
          bgGreen={false}
          heading="The most meaningful gifts for"
          marked="grandparents"
          discription="Surprise your grandparents with an unforgettable journey through their cherished memories, allowing them to share their life stories, celebrate precious moments, and create a lasting legacy with a beautifully crafted hardcover book, delivered right to their doorstep."
          buttonText="Buy now"
          imgTitle="Opened autobiography book as a gift for grandparents"
          alt="An opened autobiography book, a thoughtful gift for grandparents to share their cherished life stories - LifeScript."
          subContentWidth="900px"
          lineWidth={200}
          miniImage={miniMainImage}
          miniImageAlt="Happy grandparents enjoying ice cream together, symbolizing the joy of sharing memories with a personalized gift for grandparents - LifeScript."
          miniImageTitle="Grandparents sharing joyful moments - gifts for grandparents"
          miniImageWidth={310}
          miniLeft="150px"
        />
        <Box
          sx={{
            marginTop: "-110px",
          }}
        >
          <LPSuggestion
            heading="A gift for your grandparents to:"
            data={sugestionData}
            btnTxt="Gift now"
            btnImg={Gift}
            bigImage={true}
          />
        </Box>
        <Testimonial reviews={testimonials} heading="What our customers say" />
        <Box
          sx={{
            m: { md: "70px 0 40px", sm: "70px 0 0px", xs: "120px 0 20px" },
          }}
        >
          <GifTab
            heading="Give the perfect gift for grandparents day and let them turn a lifetime of memories into a beautiful keepsake."
            button={"Gift now"}
            icon={Gift}
            btnLink={"/purchase"}
          />
        </Box>
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
        <Reviews
          review="Giving LifeScript to my grandparents was hands down the best decision I’ve made. I had no idea how much they would enjoy it, but watching them light up as they share stories I’ve never heard before has been incredible. It’s not just a gift—it’s become a way for us to connect and understand each other on a whole new level. Seeing their stories come together in a beautiful book we’ll all have forever? That’s something I never imagined I’d be a part of, and it feels amazing."
          author="Megan R."
        />

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

export default GiftForGrandparents;
