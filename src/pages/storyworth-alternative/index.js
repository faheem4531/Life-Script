"use client";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import StoryWorthy from "@/__webAssets/pngs/storyworth-alternative-logo.png";
import LifeScriptLogo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg";
import Pen from "@/__webAssets/svgs/writing-pen.svg";
import Experience from "@/__webComponents/experience/Experience";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";
import WhyLifeScript from "@/__webComponents/whyLifeScript/WhyLifeScript";
import Working from "@/__webComponents/working/Working";
import LandingIntro from "../../__webComponents/Introduction/LandingIntro";
import DiscoverQuestions from "../../__webComponents/questions/DiscoverQuestions";
import GifTab from "../home/sections/GifTab";
import OurBooks from "../home/sections/OurBooks";
import PricingDetails from "../pricing/sections/PricingDetails";

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
        <LandingIntro
          heading={"LifeScript, the best Storyworth"}
          marked={"alternative"}
          discription="Save time, efforts and enjoy a more personalized, secure and
            supportive storytelling experience with no hidden costs."
          buttonText="Start Writing for Free"
        />
        <Experience
          headingStyle={false}
          heading="How we’re "
          marked="different"
        />
        <WhyLifeScript />
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
        <Working
          data={pointsArray}
          heading={t("landingPage.howItWorks.heading")}
          marked={t("landingPage.howItWorks.subHeading")}
          width={"300px"}
        />
        <DiscoverQuestions />
        <OurBooks />
        <Testimonial
          reviews={homeTestimonials}
          heading="What our customers say"
        />
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