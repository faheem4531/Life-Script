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
      sx={{ padding: "150px 160px  200px 110px" }}
      className={styles.gotQsBg}
    >
      <Typography sx={{ fontSize: "52px", fontWeight: 500, fontFamily: "Besley !important" }}>Got Questions?</Typography>
      <Typography sx={{ fontSize: "20px", marginTop: "10px" }}>Got Questions? We&apos;ve Got Answers!</Typography>
      <Box sx={{ margin: "85px 0 0", display: "flex", columnGap: "10%" }}>
        <Box sx={{ width: "45%" }}>
          {DumyQs1.slice(0, 4).map((item, index) => <Question
            key={index}
            qs={item.qs}
            ans={item.ans}
            panelNo={item.panel}
            expanded={item.isexpanded}
            handleExpands={handleExpands}
          />)}
        </Box>

        <Box sx={{ width: "45%" }}>
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
      <Link href="/faqs">
        <Typography sx={{ textAlign: "center", fontSize: "24px", marginTop: "80px" }}>See More</Typography>
      </Link>
    </Box>
  )
}
export default GotQuestions