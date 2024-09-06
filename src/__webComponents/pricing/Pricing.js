"use client";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "../ComponentsStyles.module.css";
import PrimaryHeading from "../headings/PrimaryHeading";
import PricingCard from "./Card";
const Pricing = ({ cardData }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        margin: {
          lg: "170px 95px  130px",
          sm: "150px 30px",
          xs: "80px 20px 100px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <PrimaryHeading
          lineWidth="140px"
          heading={t("landingPage.pricingSection.title")}
          marked={t("landingPage.pricingSection.subTitle")}
          showStyle={false}
        />

        <Box
          sx={{
            marginTop: { xs: "15px" },
            fontSize: { sm: "24px", xs: "16px" },
            width: { sm: "60%", xs: "90%" },
            fontFamily: "Avenir",
          }}
        >
          {t("landingPage.pricingSection.description")}
          <Typography
            sx={{
              fontSize: { sm: "24px", xs: "16px" },
              fontWeight: 900,
              display: "inline",
            }}
          >
            {t("landingPage.pricingSection.subDescription")}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          alignItems: "center",
          columnGap: "17px",
          rowGap: "50px",
          justifyContent: "center",
        }}
        className={styles.cardsMain}
      >
        {cardData.map((item) => (
          <PricingCard
            key={item.id}
            category={item.category}
            price={item.price}
            card={item.card}
            id={item.id}
          />
        ))}
      </Box>
      <Typography
        sx={{
          marginTop: "20px",
          fontSize: "24px",
          fontWeight: 900,
          color: "#495845",
          textAlign: "center",
          fontFamily: "Avenir8 !important",
        }}
      >
        {t("landingPage.pricingSection.pricingBelowText")}
      </Typography>
    </Box>
  );
};

export default Pricing;
