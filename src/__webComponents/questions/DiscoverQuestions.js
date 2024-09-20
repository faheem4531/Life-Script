"use client";

import LeftStyle from "@/__webAssets/pngs/left-style2.png";
import RightStyle from "@/__webAssets/pngs/right-style2.png";
import Gift from "@/__webAssets/svgs/gift.svg";
import Button from "@/__webComponents/button/Button";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import PrimaryHeading from "../headings/PrimaryHeading";

const DiscoverQuestions = ({ questions, cardData }) => {
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
        heading={"Discover our questions"}
        color="#3e4f3c"
      />
      <Box sx={{ margin: { sm: "100px 0 130px", xs: "90px 0" } }}>
        <Marquee speed={80} direction="right" pauseOnHover={true}>
          {questions.map((item, index) => (
            <QuestionCard question={item} key={index} />
          ))}
        </Marquee>
      </Box>

      {cardData && (
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
              {cardData}
            </Typography>
            <Link href={"./purchase"}>
              <Button
                title={"Gift now"}
                width="190px"
                height="56px"
                img1={Gift}
              />
            </Link>
          </Box>
        </Box>
      )}
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
