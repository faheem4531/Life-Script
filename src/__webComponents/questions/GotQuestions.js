'use client'

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image"
import Question from "./Question.js"
import styles from "../ComponentsStyles.module.css"
import Link from "next/link.js";

const GotQuestions = () => {

  const [DumyQs1, setDummyQ] = useState([
    {
      qs: "What is included in each subscription?",
      ans: "Full year of access to our platform, full-color hardcover printed book and free delivery.",
      panel: "panel1",
      isexpanded: false,
    },
    {
      qs: "Can I gift a subscription and how does that work?",
      ans: "Absolutely, gifting a subscription is an easy, thoughtful and one of the best last-minute presents. You simply provide the email of the fortunate recipient and choose the date when you’d like the gift card to be sent. Once your purchase is complete, you’ll receive a confirmation email with a link to print out a beautiful gift card. You have the flexibility to email it right away, schedule a time when you want us to send it or print it out for a more personal touch.",
      panel: "panel2",
      isexpanded: false,
    },
    {
      qs: "Is Lifescript available in other languages?",
      ans: "Yes, it is also available in Spanish, and we are excited to expand to more languages soon. We believe that everyones deserves to have their story told regardless of their language.",
      panel: "panel3",
      isexpanded: false,

    },
    {
      qs: "Can I add photos?",
      ans: "Yes, we encourage adding as many photos as you like. You don’t have to worry about photo quality as we automatically upscale and fit your photos within printing requirements!",
      panel: "panel4",
      isexpanded: false,
    },
    {
      qs: "Can I purchase extra books?",
      ans: "Yes, additional full-color hardcover books are available for 39$ each during or after your subscription period.",
      panel: "panel5",
      isexpanded: false,
    },
    {
      qs: "How long will it take?",
      ans: "Your book, your pace! Some people finish their book in 2-3 sittings while others prefer to enjoy the process and continually polish their answers for months. However you choose, enjoy revisiting your unique memories!",
      panel: "panel6",
      isexpanded: false,
    },
    {
      qs: "What is your refund policy?",
      ans: "If you are not entirely satisfied with your Lifescript experience, we offer an easy, no-questions-asked refund within 30 days of purchase, as long as no books have been printed. Your happiness is our highest priority.",
      panel: "panel7",
      isexpanded: false,
    },
    {
      qs: "What happens when my subscription ends?",
      ans: "You will receive a reminder a month before the subscription ends. You will have a chance to complete your stories and order your book. If needed, we offer an additional month for free or to renew the subscription for another year.",
      panel: "panel8",
      isexpanded: false,
    },
  ]);

  const handleExpands = (panel) => {
    setDummyQ(prev => {
      return prev.map(x => {
        if (x.panel === panel) {
          return { ...x, isexpanded: !x.isexpanded }
        } else {
          return { ...x, isexpanded: false }
        }
      })
    })
  }

  return (
    <Box
      sx={{ padding: { lg: "150px 160px  120px 110px", md: "150px 50px 150px", sm: "150px 100px 150px", xs: "120px 20px 80px" } }}
      className={styles.gotQsBg}
    >
      <Typography sx={{ fontSize: { md: "52px", sm: "44px", xs: "32px" }, fontWeight: 500, fontFamily: "Besley !important" }}>Got Questions?</Typography>
      <Typography sx={{ fontSize: { sm: "20px", xs: "16px" }, marginTop: "10px", fontFamily: "Avenir" }}>We&apos;ve Got Answers!</Typography>
      <Box sx={{
        marginTop: { sm: "85px", xs: "45px" }, display: "flex", flexDirection: { md: "row", sm: "column", xs: "column" },
        columnGap: { lg: "10%", md: "5%" }
      }}>
        <Box sx={{ width: "100%" }}>
          {DumyQs1.slice(0, 4).map((item, index) => <Question
            key={index}
            qs={item.qs}
            ans={item.ans}
            panelNo={item.panel}
            expanded={item.isexpanded}
            handleExpands={handleExpands}
          />)}
        </Box>

        <Box sx={{ width: "100%" }}>
          {DumyQs1.slice(4, 8).map((item, index) => <Question
            key={index}
            qs={item.qs}
            ans={item.ans}
            panelNo={item.panel}
            expanded={item.isexpanded}
            handleExpands={handleExpands}
          />)}
        </Box>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Link href="/faqs">
          <Typography sx={{
            textAlign: "center", fontSize: "18px", marginTop: "80px", display: "inline-block",
            border: "1px solid #3E4F3C", padding: "10px 25px 7px", fontFamily: "Avenir", borderRadius: "4px"
          }}
            className={styles.seeMorebtn}
          >See More</Typography>
        </Link>
      </Box>
    </Box>
  )
}
export default GotQuestions