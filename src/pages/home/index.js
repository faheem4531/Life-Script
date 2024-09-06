"use client";

import Experience from "@/__webComponents/experience/Experience";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import NavBar from "@/__webComponents/navBar/NavBar";
import Pricing from "@/__webComponents/pricing/Pricing";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import Suggestion from "@/__webComponents/suggestions/Suggestion";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";
import Working from "@/__webComponents/working/Working";
import { Box } from "@mui/material";
import Head from "next/head";
import OurBooks from "@/__webComponents/books/OurBooks";
import GifTab from "./sections/GifTab";
import Introduction from "./sections/Introduction";
import Reviews from "./sections/Reviews";
import StoryTelling from "./sections/StoryTelling";

import Gift from "@/__webAssets/svgs/gift.svg";
import Shape from "@/__webAssets/svgs/input-shape.svg";
import { useTranslation } from "react-i18next";

import Arthur from "@/__webAssets/webp/testimonials/lifescript-customer-review-arthur-thompson.webp";
import Carlos from "@/__webAssets/webp/testimonials/lifescript-customer-review-carlos-martinez.webp";
import Derek from "@/__webAssets/webp/testimonials/lifescript-customer-review-derek-lee.webp";
import Eleanor from "@/__webAssets/webp/testimonials/lifescript-customer-review-eleanor-rodriguez.webp";
import George from "@/__webAssets/webp/testimonials/lifescript-customer-review-george-watkins.webp";
import Lilly from "@/__webAssets/webp/testimonials/lifescript-customer-review-lilly-thompson.webp";
import Linda from "@/__webAssets/webp/testimonials/lifescript-customer-review-linda-morris.webp";
import Margaret from "@/__webAssets/webp/testimonials/lifescript-customer-review-margaret-campbell.webp";
import Rachel from "@/__webAssets/webp/testimonials/lifescript-customer-review-rachel-nguyen.webp";

import Book1 from "@/__webAssets/webp/bookCovers/anniversary-celebration-gift-book-cover-design.webp";
import Book2 from "@/__webAssets/webp/bookCovers/family-full-picture-life-story-book-cover-design.webp";
import Book3 from "@/__webAssets/webp/bookCovers/grandma-birthday-gift-book-cover-design.webp";
import Book4 from "@/__webAssets/webp/bookCovers/grandparents-book-cover-design.webp";
import Book5 from "@/__webAssets/webp/bookCovers/memoir-gift-book-cover-design.webp";
import Book6 from "@/__webAssets/webp/bookCovers/simplistic-autobiography-book-cover-design-minimalistic.webp";

const HomePage = () => {
  const { t } = useTranslation();

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

  const homeTestimonials = [
    {
      profile: Arthur,
      name: t("landingPage.testimonialSection.testimonial1.name"),
      age: t("landingPage.testimonialSection.testimonial1.age"),
      location: t("landingPage.testimonialSection.testimonial1.location"),
      details: t("landingPage.testimonialSection.testimonial1.details"),
    },
    {
      profile: Eleanor,
      name: t("landingPage.testimonialSection.testimonial2.name"),
      age: t("landingPage.testimonialSection.testimonial2.age"),
      location: t("landingPage.testimonialSection.testimonial2.location"),
      details: t("landingPage.testimonialSection.testimonial2.details"),
    },
    {
      profile: Margaret,
      name: t("landingPage.testimonialSection.testimonial3.name"),
      age: t("landingPage.testimonialSection.testimonial3.age"),
      location: t("landingPage.testimonialSection.testimonial3.location"),
      details: t("landingPage.testimonialSection.testimonial3.details"),
    },
    {
      profile: George,
      name: t("landingPage.testimonialSection.testimonial4.name"),
      age: t("landingPage.testimonialSection.testimonial4.age"),
      location: t("landingPage.testimonialSection.testimonial4.location"),
      details: t("landingPage.testimonialSection.testimonial4.details"),
    },
    {
      profile: Linda,
      name: t("landingPage.testimonialSection.testimonial5.name"),
      age: t("landingPage.testimonialSection.testimonial5.age"),
      location: t("landingPage.testimonialSection.testimonial5.location"),
      details: t("landingPage.testimonialSection.testimonial5.details"),
    },
    {
      profile: Derek,
      name: t("landingPage.testimonialSection.testimonial6.name"),
      age: t("landingPage.testimonialSection.testimonial6.age"),
      location: t("landingPage.testimonialSection.testimonial6.location"),
      details: t("landingPage.testimonialSection.testimonial6.details"),
    },
    {
      profile: Lilly,
      name: t("landingPage.testimonialSection.testimonial7.name"),
      age: t("landingPage.testimonialSection.testimonial7.age"),
      location: t("landingPage.testimonialSection.testimonial7.location"),
      details: t("landingPage.testimonialSection.testimonial7.details"),
    },
    {
      profile: Carlos,
      name: t("landingPage.testimonialSection.testimonial8.name"),
      age: t("landingPage.testimonialSection.testimonial8.age"),
      location: t("landingPage.testimonialSection.testimonial8.location"),
      details: t("landingPage.testimonialSection.testimonial8.details"),
    },
    {
      profile: Rachel,
      name: t("landingPage.testimonialSection.testimonial9.name"),
      age: t("landingPage.testimonialSection.testimonial9.age"),
      location: t("landingPage.testimonialSection.testimonial9.location"),
      details: t("landingPage.testimonialSection.testimonial9.details"),
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
        <Introduction />
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
        <StoryTelling />
        <Reviews />
        <Experience
          heading={t("landingPage.featureSection.title")}
          marked={t("landingPage.featureSection.subTitle")}
        />
        <Pricing />
        <OurBooks
          details={ourBookCoverHome}
          heading={t("landingPage.bookSection.title")}
          marked={t("landingPage.bookSection.subTitle")}
        />
        <Testimonial
          reviews={homeTestimonials}
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
