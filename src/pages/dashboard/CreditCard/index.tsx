import Layout from "@/components/Layout/Layout";
import CompletedChapterHeader from "@/components/dashboardComponent/CompletedChapterHeader";
import { Box, Typography } from "@mui/material";
import React from "react";
import SubscriptionCard from "../SubscribePlans/components/SubscriptionCard";
import {
  subPremiumList,
  subBasicList,
  subStandardList,
} from "../../utils/subscriptionLists";
import { useRouter } from "next/router";
import PaymentForm from "./paymentForm";

const CreditCard = () => {
  const router = useRouter();
  const  {Subscription}  = router.query;

  return (
    <Box>
      <Layout>
        <CompletedChapterHeader />

        <Box
          sx={{
            bgcolor: "white",
            borderRadius: " 16.148px",
            p: { xs: "15px 20px", lg: "26px 48px" },
            mt: "28px",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#081131",
              fontSize: " 16.498px",
              fontWeight: 600,
              letterSpacing: "0.458px",
              mb: "26px",
              textAlign: "center",
            }}
          >
            Choose a subscription plan below before Aug30th,2023 to unlock this
            special offer.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              mt: "25px",
            }}
          >
            <Box flex={1}>
                {Subscription === "BasicPlan" && 
              <SubscriptionCard
                subList={subBasicList}
                mainTitle="Basic Plan"
                mainDescription="Lorem ipsum dolor sit amet consectetur."
                price="Free"
                offerTitle="Basic Plan Offerings"
                btnCheck={false}
              />}
                 {Subscription === "StandardPlan" && 
              <SubscriptionCard subList={subStandardList} mainTitle="Standard Plan" mainDescription="Lorem ipsum dolor sit amet consectetur." price="$875" offerTitle="Standard Plan Offerings" btnCheck={false}/>}
                 {Subscription === "PremiumPlan" && 
              <SubscriptionCard subList={subPremiumList} mainTitle="Premium Plan" mainDescription="Lorem ipsum dolor sit amet consectetur." price="$875" offerTitle="Premium Plan Offerings" btnCheck={false}/> }
              {/* 
          */}
            </Box>
            <Box flex={1}>
              <Box sx={{
                bgcolor: "#F8F6F9",
                borderRadius: "5px",
                width: "100%",
                height: "100%",
                p: "28px 35px"
              }}>
                <Box>
                    <PaymentForm/>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default CreditCard;
