"use client";

import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

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
import Introduction from "./components/Introduction";

import Gift from "@/__webAssets/svgs/gift.svg";
import Shape from "@/__webAssets/svgs/input-shape.svg";

import Book1 from "@/__webAssets/webp/bookCovers/anniversary-celebration-gift-book-cover-design.webp";
import Book2 from "@/__webAssets/webp/bookCovers/family-full-picture-life-story-book-cover-design.webp";
import Book3 from "@/__webAssets/webp/bookCovers/grandma-birthday-gift-book-cover-design.webp";
import Book4 from "@/__webAssets/webp/bookCovers/grandparents-book-cover-design.webp";
import Book5 from "@/__webAssets/webp/bookCovers/memoir-gift-book-cover-design.webp";
import Book6 from "@/__webAssets/webp/bookCovers/simplistic-autobiography-book-cover-design-minimalistic.webp";

const StoryImage1 =
  "https://lifescript-media.s3.eu-north-1.amazonaws.com/happy-grandma-holding-her-granddaughter.webp";
const StoryImage2 =
  "https://lifescript-media.s3.eu-north-1.amazonaws.com/grandpa-writing-by-hand-his-memoir.webp";
const StoryImage3 =
  "https://lifescript-media.s3.eu-north-1.amazonaws.com/grandma-recording-her-memories-over-the-phone.webp";
const StoryImage4 =
  "https://lifescript-media.s3.eu-north-1.amazonaws.com/three-generations-family-smiling-at-the-camera.webp";

import AssistedEditing from "@/__webAssets/gif/assisted-editing-demo-animation.webp";
import AutoPhoto from "@/__webAssets/gif/Auto-photo-improvement-demo-animation.webp";
import FamilyTree from "@/__webAssets/gif/family-tree-feature-demo-animation.webp";
import FormattingFeatures from "@/__webAssets/gif/formatting-features-demo-animation.webp";
import Narrative from "@/__webAssets/gif/narrative-fusion-demo-animation.webp";
import VoiceToText from "@/__webAssets/gif/voice-to-text-feature-demo-animation.webp";

import { useHomeHero, useHomeTestimonials } from "@/utils/webContent";
const HomePage = () => {
  const { t } = useTranslation();
  const heroSec = useHomeHero();
  const testimonials = useHomeTestimonials(t);

  const pointsArray = [
    {
      no: "01",
      title: t("landingPage.howItWorks.step1.title"),
      discription: t("landingPage.howItWorks.step1.description"),
    },
    {
      no: "02",
      title: t("landingPage.howItWorks.step2.title"),
      discription: t("landingPage.howItWorks.step2.description"),
    },
    {
      no: "03",
      title: t("landingPage.howItWorks.step3.title"),
      discription: t("landingPage.howItWorks.step3.description"),
    },
    {
      no: "04",
      title: t("landingPage.howItWorks.step4.title"),
      discription: t("landingPage.howItWorks.step4.description"),
    },
  ];

  const homeQuestionPanel = [
    {
      qs: t("landingPage.questionSection.question1.qs"),
      ans: t("landingPage.questionSection.question1.ans"),
      panel: "panel1",
      isexpanded: false,
    },
    {
      qs: t("landingPage.questionSection.question2.qs"),
      ans: t("landingPage.questionSection.question2.ans"),
      panel: "panel2",
      isexpanded: false,
    },
    {
      qs: t("landingPage.questionSection.question3.qs"),
      ans: t("landingPage.questionSection.question3.ans"),
      panel: "panel3",
      isexpanded: false,
    },
    {
      qs: t("landingPage.questionSection.question4.qs"),
      ans: t("landingPage.questionSection.question4.ans"),
      panel: "panel4",
      isexpanded: false,
    },
    {
      qs: t("landingPage.questionSection.question5.qs"),
      ans: t("landingPage.questionSection.question5.ans"),
      panel: "panel5",
      isexpanded: false,
    },
    {
      qs: t("landingPage.questionSection.question6.qs"),
      ans: t("landingPage.questionSection.question6.ans"),
      panel: "panel6",
      isexpanded: false,
    },
    {
      qs: t("landingPage.questionSection.question7.qs"),
      ans: t("landingPage.questionSection.question7.ans"),
      panel: "panel7",
      isexpanded: false,
    },
    {
      qs: t("landingPage.questionSection.question8.qs"),
      ans: t("landingPage.questionSection.question8.ans"),
      panel: "panel8",
      isexpanded: false,
    },
  ];

  const homeSuggestions = [
    {
      title: t("landingPage.perfectSection.content1.title"),
      subTitle: t("landingPage.perfectSection.content1.subTitle"),
    },
    {
      title: t("landingPage.perfectSection.content2.title"),
      subTitle: t("landingPage.perfectSection.content2.subTitle"),
    },
    {
      title: t("landingPage.perfectSection.content3.title"),
      subTitle: t("landingPage.perfectSection.content3.subTitle"),
    },
    {
      title: t("landingPage.perfectSection.content4.title"),
      subTitle: t("landingPage.perfectSection.content4.subTitle"),
    },
  ];

  const ourBookCoverHome = [
    {
      coverImage: Book1,
      alt: "A book cover design with an old man celebrating anniversary with his wife on a swing - LifeScript",
      title: "Half picture-half title book cover design",
    },
    {
      coverImage: Book2,
      alt: "A full book cover picture design of a life story book with family standing in front of a lake - LifeScript",
      title: "Full-picture book cover design",
    },
    {
      coverImage: Book3,
      alt: "A book cover design with an old couple celebrating grandma birthday - LifeScript",
      title: "Full-picture book cover design",
    },
    {
      coverImage: Book4,
      alt: "A book cover design with a couple in the forest enjoying the sun and playing around - LifeScript",
      title: "Side picture book cover design",
    },
    {
      coverImage: Book5,
      alt: "Memoir book cover design with small picture of author and customizable text - LifeScript",
      title: "Memoir book cover design",
    },
    {
      coverImage: Book6,
      alt: "Simplistic design of autobiography book cover with minimalistic elements that you can customize - LifeScript",
      title: "Simplistic design of autobiography book cover",
    },
  ];

  const stories = [
    {
      heading: t("landingPage.storyTelling.story1.heading"),
      content: t("landingPage.storyTelling.story1.content"),
      image: StoryImage1,
      alt: t("landingPage.storyTelling.story1.alt"),
      title: t("landingPage.storyTelling.story1.title"),
      direction: t("landingPage.storyTelling.story1.direction"),
    },
    {
      heading: t("landingPage.storyTelling.story2.heading"),
      content: t("landingPage.storyTelling.story2.content"),
      image: StoryImage2,
      alt: t("landingPage.storyTelling.story2.alt"),
      title: t("landingPage.storyTelling.story2.title"),
      direction: t("landingPage.storyTelling.story2.direction"),
    },
    {
      heading: t("landingPage.storyTelling.story3.heading"),
      content: t("landingPage.storyTelling.story3.content"),
      image: StoryImage3,
      alt: t("landingPage.storyTelling.story3.alt"),
      title: t("landingPage.storyTelling.story3.title"),
      direction: t("landingPage.storyTelling.story3.direction"),
    },
    {
      heading: t("landingPage.storyTelling.story4.heading"),
      content: t("landingPage.storyTelling.story4.content"),
      image: StoryImage4,
      alt: t("landingPage.storyTelling.story4.alt"),
      title: t("landingPage.storyTelling.story4.title"),
      direction: t("landingPage.storyTelling.story4.direction"),
    },
  ];
  const pricingCardDetails = [
    {
      id: "basic",
      category: t("landingPage.pricingSection.category1"),
      price: "$139",
      card: "1",
    },
    {
      id: "standard",
      category: t("landingPage.pricingSection.category2"),
      price: "$179",
      card: "2",
    },
    {
      id: "primium",
      category: t("landingPage.pricingSection.category3"),
      price: "$239",
      card: "3",
    },
  ];

  const homeFeaturesGif = [
    {
      panel: "panel1",
      timer: 11000,
      heading: "landingPage.featureSection.accordion1.heading",
      description: "landingPage.featureSection.accordion1.description",
      imageSrc: Narrative,
      alt: "Narrative fusion feature demo animation showing how it works - LifeScript",
      imgTitle: "Narrative Fusion demo animation",
    },
    {
      panel: "panel2",
      timer: 6000,
      heading: "landingPage.featureSection.accordion2.heading",
      description: "landingPage.featureSection.accordion2.description",
      imageSrc: AssistedEditing,
      alt: "Assisted Editing feature demo animation showing how the spelling and grammar check works - LifeScript",
      imgTitle: "Assisted Editing demo animation",
    },
    {
      panel: "panel3",
      timer: 10700,
      heading: "landingPage.featureSection.accordion3.heading",
      description: "landingPage.featureSection.accordion3.description",
      imageSrc: VoiceToText,
      alt: "Voice-to-text feature demo animation showing how your recorded words translate into written text - LifeScript",
      imgTitle: "Voice-to-text demo animation",
    },
    {
      panel: "panel4",
      timer: 10700,
      heading: "landingPage.featureSection.accordion4.heading",
      description: "landingPage.featureSection.accordion4.description",
      imageSrc: FamilyTree,
      alt: "Family Tree feature demo animation showing how your family members visualize across generations - LifeScript",
      imgTitle: "Family tree demo animation",
    },
    {
      panel: "panel5",
      timer: 5000,
      heading: "landingPage.featureSection.accordion5.heading",
      description: "landingPage.featureSection.accordion5.description",
      imageSrc: FormattingFeatures,
      alt: "Formatting Features demo animation showing how you can use bold, italics and other formatting - LifeScript",
      imgTitle: "Formatting features demo animation",
    },
    {
      panel: "panel6",
      timer: 7600,
      heading: "landingPage.featureSection.accordion6.heading",
      description: "landingPage.featureSection.accordion6.description",
      imageSrc: AutoPhoto,
      alt: "Auto photo improvement demo animation showing how once you upload image we upscale and fit - LifeScript",
      imgTitle: "Auto photo improvement feature demo animation",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Easily Create or Gift a Personal Autobiography Book - LifeScript
        </title>
        <meta
          name="description"
          content="Turn your stories into a beautiful hardcover book to preserve memories and connect with family or gift this unparalleled experience to your mom, dad, or grandparent."
        />
      </Head>
      <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <NavBar logo={"home"} color="#3E4F3C" />
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
          content={homeSuggestions}
        />
        <GifTab
          heading={t("landingPage.perfectSection.content5.cardText")}
          button={t("landingPage.perfectSection.content5.btntext")}
          icon={Gift}
        />
        <StoryTelling data={stories} />
        <Reviews />
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
