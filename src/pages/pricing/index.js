'use client'

import Head from 'next/head';
import { Box } from "@mui/material";
import Footer from "@/__webComponents/footer/Footer";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import NavBar from "@/__webComponents/navBar/NavBar";
import GotQuestions from "@/__webComponents/questions/GotQuestions";
import styles from "./sections/Pricing.module.css"

import LifeScriptLogo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg"
import Pricing from "@/__webComponents/pricing/Pricing";
import Working from "@/__webComponents/working/Working";
import Check from "@/__webAssets/svgs/check-square.svg"
import PricingDetails from "./sections/PricingDetails";
import StoryWorthy from "@/__webAssets/pngs/storyworth-alternative-logo.png"

const PricingPage = () => {

  const pointsArray = [
    {
      icon: Check,
      title: "Autobiography, Not Just Q&A",
      discription: "Lifescript enables users to craft a book with chapters, reflecting their lives with depth and professionalism, all while keeping it simple and engaging."
    },
    {
      icon: Check,
      title: "Ease of Use and Support",
      discription: "Our platform is user-friendly and comes with comprehensive support like FAQs, instructional videos, and live chat. Our users spend less time proofreading and editing, zero time configuring photos, and plenty of time on the voice-to-text feature when they don't feel like typing."
    },
    {
      icon: Check,
      title: "Understanding Ancestry",
      discription: "If we know who we came from, we may better understand who we are. Lifescript helps users build their family tree with photos, names, and birthplaces, making it easy to see the connections between the different generations."
    },

  ]

  const pricingDetails = [
    {
      header: "Benefits",
      bgColor: "#E1683B",
      data: [
        "Free trial",
        "Lifetime access with full-color hardcover book",
        "No additional cost for gift receiver",
        "Price for additional full-color hardcover book",
        "Free worldwide Shipping",
        "Language supported",
        "Book page limit",
        "Unlimited photo uploads",
        "Video tutorials and live chat support",
      ]
    },
    {
      logo: LifeScriptLogo,
      alt: " the logo of LifeScript that represents a grandpa telling stories to his grandson under the cover of a book",
      title: "LifeScript logo",
      bgColor: "#30422E",
      data: [
        "Yes",
        "Yes, for 139$",
        "Yes",
        "39$ (up to 600 pages)",
        "Yes",
        "English and Spanish",
        "600",
        "Yes",
        "Yes",
      ]
    },
    {
      logo: StoryWorthy,
      alt: "the logo icon of a picture with mountain landscape that represents photo upscaling and autofitting - LifeScript",
      title: "Storyworth",
      bgColor: "#15372F",
      sCase: true,
      data: [
        "No",
        "139$",
        "For a full-color book, 40$ additional. Cannot be prepaid by gifter",
        "79$ (up to 300 pages) ,99$ (up to 480 pages)",
        "No, only for US.",
        "English",
        "300 (480 if you pay 20$ additionally)",
        "Yes",
        "No"
      ]
    }
  ]

  const featuresDetails = [
    {
      header: "Features",
      bgColor: "#E1683B",
      data: [
        "Question and Answer Format",
        "Narrative Fusion Format",
        "Formatting Features (bold, italics and more)",
        "Assisted Editing and Grammar Check",
        "Voice-To-Text",
        "Family Tree",
        "Auto Photo Improvement",
        "Mobile and Tablet-friendly"
      ]
    },
    {
      logo: LifeScriptLogo,
      alt: " the logo of LifeScript that represents a grandpa telling stories to his grandson under the cover of a book",
      title: "LifeScript logo",
      bgColor: "#30422E",
      data: [
        "Yes",
        "Yes, in Standard and Premium",
        "Yes",
        "Yes",
        "Yes, in Standard and Premium",
        "Yes, in Standard and Premium",
        "Yes",
        "Yes",
      ]
    },
    {
      logo: StoryWorthy,
      alt: "the logo icon of a picture with mountain landscape that represents photo upscaling and autofitting - LifeScript",
      title: "Storyworth",
      bgColor: "#15372F",
      data: [
        "Yes",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "Yes",
      ]
    }
  ]

  return (

    <>
      <Head>
        <title>Pricing Plans and Competitor Comparison</title>
        <meta
          name="description"
          content=" Each package includes a full year of access to our platform, a premium full-color hardcover book and free shipping."
        />
      </Head>


      <Box sx={{ minHeight: "100vh", bgcolor: "#f3ecda", color: "#3e4f3c" }} className={styles.pricingPage}>
        <NavBar color="#F3ECDA" logo={LifeScriptLogo} />
        <Pricing />
        <Working data={pointsArray} heading="Lifescript vs Storyworth" subHeading="How we’re different:" />
        <Box sx={{ margin: { sm: "100px 0 -100px", xs: " 10px 0 -50px" } }}>
          <PricingDetails cardsDetail={pricingDetails} heading="Pricing and Book" marked="Details" />
          <PricingDetails cardsDetail={featuresDetails} heading="Features " marked="Comparison" />
        </Box>
        <GotQuestions />
        <ContactFooter
          title="Still confused? Ask"
          marked=" away!"
          lineWidth={150}
          subTitle="Contact us Now!!!"
          input1="Your name"
          input2="Your email address"
          input3="What’s on your mind?"
          button="Get in touch!"
        />
        <Footer />
      </Box>
    </>
  )
}

export default PricingPage;