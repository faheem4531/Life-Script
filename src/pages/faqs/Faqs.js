"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Faq.module.css";

import Points from "@/__webAssets/svgs/lifescript-frequently-asked-questions-element.svg";
import { useTranslation } from "react-i18next";
const Faqs = () => {
  const { t } = useTranslation();
  console.log("Faq page");
  const QAs = [
    {
      question: t("faqsSections.question1.question"),
      answer: t("faqsSections.question1.answer"),
    },
    {
      question: t("faqsSections.question2.question"),
      answer: t("faqsSections.question2.answer"),
    },
    {
      question: t("faqsSections.question3.question"),
      answer: t("faqsSections.question3.answer"),
    },
    {
      question: t("faqsSections.question4.question"),
      answer: t("faqsSections.question4.answer"),
    },
    {
      question: t("faqsSections.question5.question"),
      answer: t("faqsSections.question5.answer"),
    },
    {
      question: t("faqsSections.question6.question"),
      answer: t("faqsSections.question6.answer"),
    },
    {
      question: t("faqsSections.question7.question"),
      answer: t("faqsSections.question7.answer"),
    },
    {
      question: t("faqsSections.question8.question"),
      answer: t("faqsSections.question8.answer"),
    },
    {
      question: t("faqsSections.question9.question"),
      answer: t("faqsSections.question9.answer"),
    },
    {
      question: t("faqsSections.question10.question"),
      answer: t("faqsSections.question10.answer"),
    },
    {
      question: t("faqsSections.question11.question"),
      answer: t("faqsSections.question11.answer"),
    },
    {
      question: t("faqsSections.question12.question"),
      answer: t("faqsSections.question12.answer"),
    },
    {
      question: t("faqsSections.question13.question"),
      answer: t("faqsSections.question13.answer"),
    },
    {
      question: t("faqsSections.question14.question"),
      answer: t("faqsSections.question14.answer"),
    },
    {
      question: t("faqsSections.question15.question"),
      answer: t("faqsSections.question15.answer"),
    },
    {
      question: t("faqsSections.question16.question"),
      answer: t("faqsSections.question16.answer"),
    },
  ];

  return (
    <Box
      sx={{
        padding: {
          lg: "200px 260px 150px 150px",
          md: "150px 70px 150px 100px",
          sm: "100px 50px",
          xs: "80px 16px 150px",
        },
      }}
      className={styles.hurtBg}
    >
      <Box
        sx={{
          borderBottom: "1px solid #E1683B",
          paddingBottom: { md: "35px", sx: "25px", xs: "15px" },
          paddingLeft: { sm: "0", xs: "15px" },
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: { md: "60px", sm: "50px", xs: "32px" },
            fontWeight: 500,
            fontFamily: "Besley !important",
          }}
        >
          <h1 className={styles.pureHeadings}>{t("faqsSections.title")}</h1>
        </Typography>
        {/* <Typography sx={{ fontSize: "16px", fontWeight: 500 }}> */}
        <Typography
          fontFamily="Avenir"
          variant="h2"
          className={styles.pureHeadings}
        >
          {t("faqsSections.description")}
        </Typography>
        {/* </Typography> */}
      </Box>
      <Box
        sx={{
          marginTop: { md: "120px", sx: "80px", xs: "50px" },
          display: "flex",
          position: "relative",
        }}
      >
        <Image
          src={Points}
          alt="A graphic element in the FAQ section that presents beautifully the answers to most common questions - LifeScript"
          title="LifeScript faq graphic element"
          className={styles.qsPoints}
        />

        <Box>
          {QAs.map((item, index) => (
            <QuestionNo
              key={index}
              qs={item.question}
              ans={item.answer}
              index={index}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Faqs;

function QuestionNo({ qs, ans, index }) {
  return (
    <Box
      sx={{
        margin: { md: " 0 0 70px 60px", sx: "0 0 50px 0", xs: "0 0 25px 0" },
        maxWidth: "820px",
        borderBottom: index < 15 && { sm: "0", xs: "1px solid #E1683B" },
        paddingBottom: index < 15 && { sm: "0", xs: "20px" },
      }}
    >
      <Box
        sx={{
          fontWeight: 500,
          fontFamily: "Besley !important",
          display: "flex",
          columnGap: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: { sm: "24px", xs: "20px" },
            fontFamily: "Avenir5 !important",
            width: { sm: "30px", xs: "20px" },
          }}
        >
          {index + 1}
          {"."}
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: { sm: "24px", xs: "20px" },
            fontFamily: "Avenir5 !important",
          }}
        >
          <h3 className={styles.pureHeadings}>{qs}</h3>
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "16px",
          padding: { sm: "20px 0 0 40px", xs: "15px 0 0 30px" },
        }}
      >
        {ans}
      </Typography>
    </Box>
  );
}
