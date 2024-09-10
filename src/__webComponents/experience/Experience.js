import FlowerLine from "@/__webAssets/pngs/full-style.png";
import Line from "@/__webAssets/svgs/line-orange.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "../ComponentsStyles.module.css";
import CustomizedAccordions from "./Accordion";

const Experience = ({ heading, marked, headingStyle = true, panelsData }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        margin: {
          lg: "150px 0  100px",
          md: "170px 0 130px",
          sm: "80px 0 50px",
          xs: "40px 20px",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <Box
          sx={{
            fontSize: { md: "54px", sm: "44px", xs: "32px" },
            fontWeight: 500,
            fontFamily: "Besley !important",
            textAlign: { sm: "center", xs: "center" },
          }}
        >
          {heading}{" "}
          <span className={styles.marked}>
            {marked}
            <Image
              src={Line}
              alt="mark"
              className={styles.suggestionUnderLine}
              loading="lazy"
            />
          </span>
        </Box>
        {headingStyle && (
          <Image
            src={FlowerLine}
            alt="logo"
            className={styles.fullStyle}
            loading="lazy"
          />
        )}
      </Box>

      <Box
        sx={{
          margin: {
            lg: "120px 60px 120px 130px",
            md: "100px 40px 70px 70px",
            sm: "30px 20px 50px",
            xs: "30px 20px 50px",
          },
          display: "flex",
          flexDirection: {
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          },
          justifyContent: "center",
          columnGap: { lg: "140px", md: "70px" },
          alignItems: "center",
        }}
      >
        <CustomizedAccordions panelsData={panelsData} />
      </Box>
      <Link href="/features">
        <Typography
          sx={{
            fontSize: "18px",
            border: "1px solid #30422E",
            borderRadius: "4px",
            padding: "10px 25px 7px",
            fontFamily: "Avenir",
          }}
          className={styles.seeMorebtn}
        >
          {t("landingPage.featureSection.btnText")}
        </Typography>
      </Link>
    </Box>
  );
};

export default Experience;
