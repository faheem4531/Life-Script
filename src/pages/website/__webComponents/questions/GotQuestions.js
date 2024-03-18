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
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lore  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.",
      panel: "panel1",
      isexpanded: false,
    },
    {
      qs: "Can I gift a subscription and how does that work?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lore  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.",
      panel: "panel2",
      isexpanded: false,

    },
    {
      qs: "Is Lifescript available in other languages?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lore  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.",
      panel: "panel3",
      isexpanded: false,

    },
    {
      qs: "Can I add photos?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lore  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.",
      panel: "panel4",
      isexpanded: false,
    },
    {
      qs: "Can I purchase extra books?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lore  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.",
      panel: "panel5",
      isexpanded: false,
    },
    {
      qs: "How long will it take?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lore  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.",
      panel: "panel6",
      isexpanded: false,
    },
    {
      qs: "What is your refund policy?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lore  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.",
      panel: "panel7",
      isexpanded: false,
    },
    {
      qs: "What happens when my subscription ends?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lore  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.",
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
      sx={{ padding: { lg: "150px 160px  200px 110px", md: "150px 50px 150px", sm: "150px 100px 150px", xs: "120px 20px 80px" } }}
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
          }}>See More</Typography>
        </Link>
      </Box>
    </Box>
  )
}
export default GotQuestions