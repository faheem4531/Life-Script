"use client";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import NavBar from "@/__webComponents/navBar/NavBar";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import StoryWorthy from "@/__webAssets/pngs/storyworth-alternative-logo.png";
import LifeScriptLogo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";
import Pen from "@/__webAssets/svgs/writing-pen.svg";
import Experience from "@/__webComponents/experience/Experience";
import WhyLifeScript from "@/__webComponents/whyLifeScript/WhyLifeScript";
import Working from "@/__webComponents/working/Working";
import GifTab from "../home/sections/GifTab";
import Testimonial from "../home/sections/Testimonial";
import PricingDetails from "../pricing/sections/PricingDetails";
import Introduction from "./sections/Introduction";

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

  const pricingDetails = [
    {
      header: t("pricingSection.bookDetails.pricingDetailObject1.header"),
      bgColor: "#E1683B",
      data: [
        t("pricingSection.bookDetails.pricingDetailObject1.data.freeTrial"),
        t(
          "pricingSection.bookDetails.pricingDetailObject1.data.lifetimeAccess"
        ),
        t(
          "pricingSection.bookDetails.pricingDetailObject1.data.noAdditionalCost"
        ),
        t(
          "pricingSection.bookDetails.pricingDetailObject1.data.priceForAdditional"
        ),
        t("pricingSection.bookDetails.pricingDetailObject1.data.freeShipping"),
        t(
          "pricingSection.bookDetails.pricingDetailObject1.data.languageSupported"
        ),
        t("pricingSection.bookDetails.pricingDetailObject1.data.bookPageLimit"),
        t(
          "pricingSection.bookDetails.pricingDetailObject1.data.unlimitedPhotoUploads"
        ),
        t(
          "pricingSection.bookDetails.pricingDetailObject1.data.videoTutorials"
        ),
      ],
    },
    {
      logo: LifeScriptLogo,
      alt: t("pricingSection.additionalDetails.alt"),
      title: t("pricingSection.additionalDetails.title"),
      bgColor: "#30422E",
      data: [
        t("pricingSection.bookDetails.additionalDetails.data.yes"),
        t("pricingSection.bookDetails.additionalDetails.data.yesFor139"),
        t("pricingSection.bookDetails.additionalDetails.data.yes"),
        t(
          "pricingSection.bookDetails.additionalDetails.data.priceForAdditional"
        ),
        t("pricingSection.bookDetails.additionalDetails.data.yes"),
        t(
          "pricingSection.bookDetails.additionalDetails.data.languagesSupported"
        ),
        t("pricingSection.bookDetails.additionalDetails.data.pageLimit"),
        t(
          "pricingSection.bookDetails.additionalDetails.data.unlimitedPhotoUploads"
        ),
        t("pricingSection.bookDetails.additionalDetails.data.videoTutorials"),
      ],
    },
    {
      logo: StoryWorthy,
      alt: t("pricingSection.additionalDetails2.alt"),
      title: t("pricingSection.additionalDetails2.title"),
      bgColor: "#15372F",
      sCase: true,
      data: [
        t("pricingSection.bookDetails.additionalDetails2.data.no"),
        t("pricingSection.bookDetails.additionalDetails2.data.priceFor139"),
        t(
          "pricingSection.bookDetails.additionalDetails2.data.priceForFullColorBook"
        ),
        t(
          "pricingSection.bookDetails.additionalDetails2.data.priceForAdditionalBook"
        ),
        t(
          "pricingSection.bookDetails.additionalDetails2.data.noShippingOutsideUS"
        ),
        t(
          "pricingSection.bookDetails.additionalDetails2.data.languageSupported"
        ),
        t("pricingSection.bookDetails.additionalDetails2.data.bookPageLimit"),
        t(
          "pricingSection.bookDetails.additionalDetails2.data.unlimitedPhotoUploads"
        ),
        t(
          "pricingSection.bookDetails.additionalDetails2.data.noVideoTutorials"
        ),
      ],
    },
  ];

  const featuresDetails = [
    {
      header: t("pricingSection.featureComparison.featuresDetails.header"),
      bgColor: "#E1683B",
      data: [
        t(
          "pricingSection.featureComparison.featuresDetails.data.questionAnswerFormat"
        ),
        t(
          "pricingSection.featureComparison.featuresDetails.data.narrativeFusionFormat"
        ),
        t(
          "pricingSection.featureComparison.featuresDetails.data.formattingFeatures"
        ),
        t(
          "pricingSection.featureComparison.featuresDetails.data.assistedEditing"
        ),
        t("pricingSection.featureComparison.featuresDetails.data.voiceToText"),
        t("pricingSection.featureComparison.featuresDetails.data.familyTree"),
        t(
          "pricingSection.featureComparison.featuresDetails.data.autoPhotoImprovement"
        ),
        t(
          "pricingSection.featureComparison.featuresDetails.data.mobileTabletFriendly"
        ),
      ],
    },
    {
      logo: LifeScriptLogo,
      alt: " the logo of LifeScript that represents a grandpa telling stories to his grandson under the cover of a book",
      title: "LifeScript logo",
      bgColor: "#30422E",
      data: [
        t("pricingSection.featureComparison.featuresDetails2.data.yes"),
        t(
          "pricingSection.featureComparison.featuresDetails2.data.yesInStandardPremium"
        ),
        t("pricingSection.featureComparison.featuresDetails2.data.yes"),
        t("pricingSection.featureComparison.featuresDetails2.data.yes"),
        t(
          "pricingSection.featureComparison.featuresDetails2.data.yesInStandardPremium"
        ),
        t(
          "pricingSection.featureComparison.featuresDetails2.data.yesInStandardPremium"
        ),
        t("pricingSection.featureComparison.featuresDetails2.data.yes"),
        t("pricingSection.featureComparison.featuresDetails2.data.yes"),
      ],
    },
    {
      logo: StoryWorthy,
      alt: "the logo icon of a picture with mountain landscape that represents photo upscaling and autofitting - LifeScript",
      title: "Storyworth",
      bgColor: "#15372F",
      data: [
        t("pricingSection.featureComparison.featuresDetails3.data.yes"),
        t("pricingSection.featureComparison.featuresDetails3.data.no"),
        t("pricingSection.featureComparison.featuresDetails3.data.no"),
        t("pricingSection.featureComparison.featuresDetails3.data.no"),
        t("pricingSection.featureComparison.featuresDetails3.data.no"),
        t("pricingSection.featureComparison.featuresDetails3.data.no"),
        t("pricingSection.featureComparison.featuresDetails3.data.no"),
        t("pricingSection.featureComparison.featuresDetails3.data.yes"),
      ],
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
        <title>The Best Storyworth Alternative - LifeScript</title>
        <meta
          name="description"
          content="Save time, efforts and enjoy a more personalised, secure and supportive storytelling experience with no hidden costs. Try now for free!"
        />
      </Head>

      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }}>
        <NavBar color="#3e4f3c" logo="home" />
        <Introduction />
        <Working
          data={pointsArray}
          heading={t("landingPage.howItWorks.heading")}
          marked={t("landingPage.howItWorks.subHeading")}
          width={"300px"}
        />
        <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
          <Experience
            headingStyle={false}
            heading="How we’re "
            marked="different"
          />
        </Box>
        <Box
          sx={{
            margin: {
              md: "100px 0 100px",
              sm: "100px 0 -90px",
              xs: " 10px 0 -50px",
            },
          }}
        >
          <PricingDetails
            cardsDetail={pricingDetails}
            heading={"LifeScript vs Storyworth cost"}
          />
          <PricingDetails
            cardsDetail={featuresDetails}
            heading={t("pricingSection.featureComparison.title")}
            marked={t("pricingSection.featureComparison.subTitle")}
          />
        </Box>
        <WhyLifeScript />
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
