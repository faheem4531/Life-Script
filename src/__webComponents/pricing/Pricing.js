"use client";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PrimaryHeading from "../headings/PrimaryHeading";
import PricingCard from "./Card";
const Pricing = ({ cardData,variant="h2" }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        margin: {
          lg: "170px 50px 130px",
          sm: "150px 0px 100px",
          xs: "80px 0px 60px",
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
          variant={variant}
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
          overflowX: { xs: "auto", sm: "auto", md: "none" },
          padding: {
            sm: "0 0 30px",
            xs: "0 0 30px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { lg: "center", sm: "start", xs: "start" },
            alignItems: "center",
            columnGap: "16px",
          }}
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
