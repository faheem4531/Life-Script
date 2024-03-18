'use client'

import { Box } from "@mui/material";
import Footer from "@/__webComponents/footer/Footer";
import ContactFooter from "@/__webComponents/footer/ContactFooter";
import HeroGifting from "./sections/Introduction";
import Gifting from "./sections/Gifting";
import Experience from "@/__webComponents/experience/Experience";
import Working from "@/__webComponents/working/Working";
import DesignCard from "./sections/DesignCard";
import GotQuestions from "@/__webComponents/questions/GotQuestions";

const GiftingPage = () => {

  const pointsArray = [
    {
      no: "01",
      title: "Invite friends & family to contribute.",
      discription: "We’ll follow up to remind people to share."
    },
    {
      no: "02",
      title: "People share their memories.",
      discription: "You can review and reorganize everything in one place."
    },
    {
      no: "03",
      title: "Receive a beautiful keepsake book.",
      discription: "Professionally-designed cover styles, and books made to last."
    },
  ]

  return (
    <Box sx={{ bgcolor: "#f3ecda", color: "#3e4f3c" }}>
      <HeroGifting />
      <Gifting />
      <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
        <Experience />
      </Box>
      <Working data={pointsArray} heading=" How it" marked="works" />
      <DesignCard />
      <GotQuestions />
      <ContactFooter
        title="Still have any questions?"
        subTitle="Contact us Now!!!"
        input1="Your email address"
        input2="What’s the occasion?"
        input3="When it’s happening?"
        button="Get in touch!"
      />
      <Footer />
    </Box>
  )
}

export default GiftingPage;