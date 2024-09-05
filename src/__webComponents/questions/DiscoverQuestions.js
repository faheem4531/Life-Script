"use client";

import LeftStyle from "@/__webAssets/pngs/left-style2.png";
import RightStyle from "@/__webAssets/pngs/right-style2.png";
import Gift from "@/__webAssets/svgs/gift.svg";
import Button from "@/__webComponents/button/Button";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import PrimaryHeading from "../headings/PrimaryHeading";

const DiscoverQuestions = () => {
  const SuggestedQuestions = [
    "What's a lesson you learned the hard way?",
    "What is one thing people would never guess about you?",
    "If money was no object, what would you do all day?",
    "What was the most breathtaking place you've ever visited?",
    "What are your ingredients for happiness?",
    "When you think of the word ‘home,’ which place comes to mind?",
    "How did you meet your significant other?",
    "What is the best job and the worst job you ever had?",
    "What qualities do you value most in a friend?",
    "What is your earliest memory?",
  ];
  const [paused, setPaused] = useState(false);

  return (
    <Box
      sx={{
        margin: {
          sm: "50px 0",
          xs: "20px 0",
        },
      }}
    >
      <PrimaryHeading
        left={LeftStyle}
        right={RightStyle}
        lineWidth="160px"
        showStyle={true}
        marked={true}
        removeStyleMbl={true}
        heading={"Discover our questions"}
        color="#3e4f3c"
      />
      <Box sx={{ margin: { sm: "100px 0 130px", xs: "90px 0" } }}>
        <Marquee speed={80} direction="right" pauseOnHover={true}>
          {SuggestedQuestions.map((item, index) => (
            <QuestionCard question={item} key={index} />
          ))}
        </Marquee>
      </Box>

      <Box sx={{ margin: { md: "0 auto", sm: "0 30px", xs: "0 20px" } }}>
        <Box
          sx={{
            bgcolor: "#fff",
            width: "100%",
            maxWidth: { md: "880px" },
            margin: "0 auto",
            p: { sm: "25px 25px 25px 40px", xs: "20px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { sm: "row", xs: "column" },
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "26px", sm: "22px" },
              mb: { sm: "0px", xs: "20px" },
            }}
          >
            LifeScript offers hundreds of thoughtfully curated questions, with
            the option to create your own or choose from personalised
            suggestions.
          </Typography>
          <Link href={"./"}>
            <Button
              title={"Gift now"}
              width="190px"
              height="56px"
              img1={Gift}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default DiscoverQuestions;

const QuestionCard = ({ question }) => {
  return (
    <Box
      sx={{
        width: "330px",
        height: "245px",
        bgcolor: "#30422E",
        color: "#F3ECDA",
        borderRadius: "10px",
        boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1)",
        fontFamily: "Basely",
        fontSize: "28px",
        lineHeight: "40px",
        fontWeight: 500,
        p: "0 40px",
        display: "flex",
        alignItems: "center",
        mr: "30px",
      }}
    >
      {question}
    </Box>
  );
};
