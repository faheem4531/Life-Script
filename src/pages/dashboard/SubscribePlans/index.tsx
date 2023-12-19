import Layout from "@/components/Layout/Layout";
import React, { useEffect, useState } from "react";
import VerticalTabs from "./components/VerticalTabs";
import CompletedChapterHeader from "@/components/dashboardComponent/CompletedChapterHeader";
import { Box, Typography } from "@mui/material";
import SubscriptionCard from "./components/SubscriptionCard";
import {
  subPremiumList,
  subBasicList,
  subStandardList,
} from "../../../utils/subscriptionLists";
import { useRouter } from "next/router";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";

const SubscribePlan = () => {
  const router = useRouter();
  const [planPrices, setPlanPrices] = useState({
    basic: 100,
    standard: 150,
    premium: 200,
  });
  const [disableButton, setDisableButton] = useState({
    basic: false,
    standard: false,
    premium: false,
  });

  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("token");
    const decodedToken = jwt.decode(token);
    const accessRole = decodedToken.accessRole;
    accessRole === "PremiumPlan" || accessRole === "BasicPlan";
    if (accessRole === "PremiumPlan") {
      setDisableButton({
        standard: true,
        basic: true,
        premium: true,
      });
    } else if (accessRole === "StandardPlan") {
      setDisableButton({
        ...disableButton,
        basic: true,
        standard: true,
      });
      setPlanPrices({
        ...planPrices,
        premium: planPrices?.premium / 2,
      });
    } else if (accessRole === "BasicPlan") {
      setDisableButton({
        ...disableButton,
        basic: true,
      });
      setPlanPrices({
        ...planPrices,
        standard: planPrices?.standard / 2,
        premium: planPrices?.premium / 2,
      });
    } else {
      //do nothing
    }
  }, []);

  return (
    <Box>
      <Layout>
        <SubscriptionHeader
          title="Subscription Plan"
          description="Choose a subscription plan below before Aug30th,2023 to unlock this special offer."
        />

        {/* <Box
      sx={{
        bgcolor: "white",
        borderRadius: " 16.148px",
        p: { xs: "15px 20px", lg:"26px 48px"},
        mt: "28px",
        height: "100%"
      }}
    >
      <Typography
        sx={{
          color: "#081131",
          fontSize: " 16.498px",
          fontWeight: 600,
          letterSpacing: "0.458px",
          mb: "65px",
          textAlign: "center",
        }}
      >
        Choose a subscription plan below before Aug30th,2023 to unlock this
        special offer.
      </Typography>
            <VerticalTabs/>
</Box> */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "15px", md: "20px", lg: "40px" },
            mt: "20px",
            flexWrap: "wrap",
          }}
        >
          <SubscriptionCard
            subList={subBasicList}
            mainTitle="Basic Plan"
            mainDescription="Lorem ipsum dolor sit amet consectetur."
            price={planPrices.basic}
            buttonDisable={disableButton.basic}
            offerTitle="Basic Plan Offerings"
            onClick={(pkgPrice) => {
              typeof window !== 'undefined' && router.push(
                `/dashboard/SubscribePlans/SubscriptionPayment?Subscription=BasicPlan&price=${pkgPrice}`
              );
            }}
          />
          <SubscriptionCard
            subList={subStandardList}
            mainTitle="Standard Plan"
            mainDescription="Lorem ipsum dolor sit amet consectetur."
            price={planPrices?.standard}
            buttonDisable={disableButton.standard}
            offerTitle="Standard Plan Offerings"
            onClick={(pkgPrice) => {
              typeof window !== 'undefined' && router.push(
                `/dashboard/SubscribePlans/SubscriptionPayment?Subscription=GoldPlan&price=${pkgPrice}`
              );
            }}
          />
          <SubscriptionCard
            subList={subPremiumList}
            mainTitle="Premium Plan"
            mainDescription="Lorem ipsum dolor sit amet consectetur."
            price={planPrices?.premium}
            buttonDisable={disableButton.premium}
            offerTitle="Premium Plan Offerings"
            onClick={(pkgPrice) => {
              typeof window !== 'undefined' && router.push(
                `/dashboard/SubscribePlans/SubscriptionPayment?Subscription=PremiumPlan&price=${pkgPrice}`
              );
            }}
          />
        </Box>
      </Layout>
    </Box>
  );
};

export default SubscribePlan;
