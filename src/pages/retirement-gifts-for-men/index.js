"use client";

import ContactFooter from "@/__webComponents/footer/ContactFooter";
import Footer from "@/__webComponents/footer/Footer";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import LandingIntro from "@/__webComponents/Introduction/LandingIntro";
import Suggestion from "@/__webComponents/suggestions/Suggestion";
import Testimonial from "@/__webComponents/Testimonial/Testimonial";

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
      title: "Connect with his family",
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
      name: "Michael S.",
      details:
        "It’s been so meaningful to reflect on my life and share my memories with my family through LifeScript. I’ve enjoyed telling my grandkids about my past, something I might never have done in such a structured way. My grandkids gifted me this for my retirement, and it feels great knowing they want to learn about my early years.",
    },
    {
      name: "Thomas C.",
      details:
        "LifeScript has turned into a fantastic retirement hobby. It’s heartwarming to reflect on my experiences and share them with my family. The hardcover book will be a lasting reminder of my journey, and I’m so glad my children thought of giving me this gift.",
    },
    {
      name: "Edward L.",
      details:
        "My daughter gave me LifeScript as a retirement gift, and I didn’t expect to enjoy it so much. It’s like going on a journey through my own life. I’ve been able to share stories that I’d almost forgotten about, and now they're preserved forever.",
    },
    {
      name:"Kevin J.",
      details: "This experience with LifeScript has been a lot of fun. I love documenting our family's stories so future generations can read them and feel a connection to our past. It feels like I'm keeping the memories of those who came before me alive, showing that their lives mattered.",
    },
    {
      name: "George P.",
      details:"I was hesitant at first when my wife gifted me LifeScript, but it has turned into one of the most rewarding experiences. I’ve been able to recount my life's adventures and leave a lasting legacy for my grandkids. The weekly questions really help keep me engaged.",
    },
    {
      name:"Henry K.",
      details: "I never thought I'd be writing a book, but LifeScript has made it possible. My daughter bought this for my retirement, and it's given me a chance to share my memories, which are now beautifully bound in a book that my family can cherish forever.",
    }
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
