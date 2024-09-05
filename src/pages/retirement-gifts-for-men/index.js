"use client";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import Pen from "@/__webAssets/svgs/writing-pen.svg";
import Experience from "@/__webComponents/experience/Experience";
import LandingIntro from "@/__webComponents/Introduction/LandingIntro";
import DiscoverQuestions from "@/__webComponents/questions/DiscoverQuestions";
import Suggestion from "@/__webComponents/suggestions/Suggestion";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";
import Working from "@/__webComponents/working/Working";
import GifTab from "../home/sections/GifTab";
import OurBooks from "../home/sections/OurBooks";

import Arthur from "@/__webAssets/webp/testimonials/lifescript-customer-review-arthur-thompson.webp";
import Carlos from "@/__webAssets/webp/testimonials/lifescript-customer-review-carlos-martinez.webp";
import Derek from "@/__webAssets/webp/testimonials/lifescript-customer-review-derek-lee.webp";
import Eleanor from "@/__webAssets/webp/testimonials/lifescript-customer-review-eleanor-rodriguez.webp";
import George from "@/__webAssets/webp/testimonials/lifescript-customer-review-george-watkins.webp";
import Lilly from "@/__webAssets/webp/testimonials/lifescript-customer-review-lilly-thompson.webp";
import Linda from "@/__webAssets/webp/testimonials/lifescript-customer-review-linda-morris.webp";
import Margaret from "@/__webAssets/webp/testimonials/lifescript-customer-review-margaret-campbell.webp";
import Rachel from "@/__webAssets/webp/testimonials/lifescript-customer-review-rachel-nguyen.webp";

const StoryworthAlternative = () => {
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

  const storyWorthAlternativeQs = [
    {
      qs: "How much does Storyworth cost?",
      ans: "Storyworth costs $99 for 12 months of access, which includes a black-and-white book. To upgrade to a full-color book, there is an additional fee of $40 for up to 300 pages or $60 for 300 to 480 pages. For orders outside the US, additional delivery charges apply.",
      panel: "panel1",
      isexpanded: false,
    },
    {
      qs: "How much does an additional book from Storyworth cost?",
      ans: "An additional black-and-white book from Storyworth costs $39, while a full-color book costs $79 for up to 300 pages or $99 for 300 to 480 pages. Shipping costs are not included.",
      panel: "panel2",
      isexpanded: false,
    },
    {
      qs: "Are Storyworth questions personalised?",
      ans: "No, Storyworth questions are not personalised. The questions are sent regularly via email in random order and are not tailored to individual experiences.",
      panel: "panel3",
      isexpanded: false,
    },
    {
      qs: "What are the best Storyworth alternatives?",
      ans: "The best alternatives to Storyworth are LifeScript, Storii, Alifeuntold, Remento, Meminto, Mylifeinabook and other.",
      panel: "panel4",
      isexpanded: false,
    },
    {
      qs: "Is Storyworth available in other languages?",
      ans: "No, Storyworth is available only in English. If you are looking for a Storyworth alternative for Spanish speakers - LifeScript is available in Spanish.",
      panel: "panel6",
      isexpanded: false,
    },
    {
      qs: "Does my father have to pay extra if I gift him Storyworth?",
      ans: "Yes, if your father wants a full-color book, he will need to pay an additional $40–$60, and unfortunately, you can't prepay this fee. If he's located outside the US, he will also have to pay extra for delivery.",
      panel: "panel7",
      isexpanded: false,
    },
    {
      qs: "What kind of customer support does Storyworth offer?",
      ans: "Yes, only via email while LifeScript offers live chat support, email support and tutorial videos.",
      panel: "panel8",
      isexpanded: false,
    },
    {
      qs: "Are there Storyworth alternatives in Australia,the UK or Canada?",
      ans: "People often search for Storyworth alternatives in Australia, the UK, and Canada due to high shipping fees outside the US. LifeScript is the only alternative that offers free international delivery.",
      panel: "panel5",
      isexpanded: false,
    },
  ];

  const retiredMenSuggestions = [
    {
      title: "Celebrate his life story",
      subTitle:
        "Retirement isn’t just an end—it’s a celebration of his entire life’s journey. Give him the opportunity to capture his legacy in his own words, creating a keepsake that honors his achievements and preserves his wisdom for years to come.",
    },
    {
      title: "Share his story and wisdom",
      subTitle:
        "Every man has a story worth telling. Help him share the triumphs, challenges, and life lessons that have shaped him. This is his chance to inspire and guide his family with the wisdom he’s gained over a lifetime.",
    },
    {
      title: "Connect him with his family",
      subTitle:
        "His stories are the threads that weave the fabric of family. Uncover memories that have never been shared, bringing loved ones closer and ensuring his voice is heard for generations.",
    },
    {
      title: "Reflect on his life’s journey",
      subTitle:
        "Retirement is a time for reflection. Dive deep into the moments that defined his path, finding joy in the details that might have been forgotten. This is more than a gift—it’s a journey through his past.",
    },
  ];

  const noImageTestimonials = [
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
          content={retiredMenSuggestions}
        />
        <Testimonial
          reviews={noImageTestimonials}
          heading="What our customers say"
        />

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
        <GotQuestions questions={storyWorthAlternativeQs} />
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
