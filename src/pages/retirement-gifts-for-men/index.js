"use client";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import Pen from "@/__webAssets/svgs/writing-pen.svg";
import Experience from "@/__webComponents/experience/Experience";
import Working from "@/__webComponents/working/Working";
import LandingIntro from "../../__webComponents/Introduction/LandingIntro";
import DiscoverQuestions from "../../__webComponents/questions/DiscoverQuestions";
import GifTab from "../home/sections/GifTab";
import OurBooks from "../home/sections/OurBooks";
import Testimonial from "../home/sections/Testimonial";

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
        <Experience
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
        <Testimonial />
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
