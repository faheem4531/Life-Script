import Layout from "@/components/Layout/Layout";
import React from "react";
import VerticalTabs from "./components/VerticalTabs";
import CompletedChapterHeader from "@/components/dashboardComponent/CompletedChapterHeader";
import { Box, Typography } from "@mui/material";
import SubscriptionCard from "./components/SubscriptionCard";
import {subPremiumList, subBasicList, subStandardList} from "../../utils/subscriptionLists"
import { useRouter } from "next/router";

const SubscribePlan = () => {
  const router = useRouter()

  return (
    <Box>
      <Layout>
        <CompletedChapterHeader />

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
        <Box sx={{
          display: "flex",
          gap: { xs: "15px", md: "20px", lg:"40px"},
          mt: "20px",
          flexWrap: "wrap"
        }}>
          <SubscriptionCard subList={subBasicList} mainTitle="Basic Plan" mainDescription="Lorem ipsum dolor sit amet consectetur." price="Free" offerTitle="Basic Plan Offerings" onClick={()=>{
            router.push("/dashboard/SubscribePlans/SubscriptionPayment?Subscription=BasicPlan")
          }}/>
          <SubscriptionCard subList={subStandardList} mainTitle="Standard Plan" mainDescription="Lorem ipsum dolor sit amet consectetur." price="$875" offerTitle="Standard Plan Offerings" onClick={()=>{
            router.push("/dashboard/SubscribePlans/SubscriptionPayment?Subscription=StandardPlan")
          }}/>
          <SubscriptionCard subList={subPremiumList} mainTitle="Premium Plan" mainDescription="Lorem ipsum dolor sit amet consectetur." price="$875" offerTitle="Premium Plan Offerings" onClick={()=>{
            router.push("/dashboard/SubscribePlans/SubscriptionPayment?Subscription=PremiumPlan")
          }}/>
        </Box>
      </Layout>
    </Box>
  );
};

export default SubscribePlan;
