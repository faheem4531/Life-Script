import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { Box, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import {
  subBasicList,
  subPremiumList,
  subStandardList,
} from "../../../utils/subscriptionLists";
import SubscriptionCard from "../SubscribePlans/components/SubscriptionCard";
import PaymentForm from "./components/paymentForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);

const CreditCard = () => {
  const router = useRouter();
  const { Subscription, price } = router.query;

  return (
    <Box>
      <Layout>
        <SubscriptionHeader title="Subscription Plan" description="" />

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
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box flex={1}>
              {Subscription === "BasicPlan" && (
                <SubscriptionCard
                  subList={subBasicList}
                  mainTitle="Basic Plan"
                  mainDescription="Lorem ipsum dolor sit amet consectetur."
                  price={Number(price)}
                  offerTitle="Basic Plan Offerings"
                  btnCheck={false}
                />
              )}
              {Subscription === "GoldPlan" && (
                <SubscriptionCard
                  subList={subStandardList}
                  mainTitle="Standard Plan"
                  mainDescription="Lorem ipsum dolor sit amet consectetur."
                  price={Number(price)}
                  offerTitle="Standard Plan Offerings"
                  btnCheck={false}
                />
              )}
              {Subscription === "PremiumPlan" && (
                <SubscriptionCard
                  subList={subPremiumList}
                  mainTitle="Premium Plan"
                  mainDescription="Lorem ipsum dolor sit amet consectetur."
                  price={Number(price)}
                  offerTitle="Premium Plan Offerings"
                  btnCheck={false}
                />
              )}
              {/*
               */}
            </Box>
            <Box flex={1}>
              <Box
                sx={{
                  bgcolor: "#F8F6F9",
                  borderRadius: "5px",
                  width: "100%",
                  height: "100%",
                  p: "28px 35px",
                }}
              >
                <Box>
                  <Elements stripe={stripePromise}>
                    <PaymentForm packageName={Subscription} price={price} />
                  </Elements>
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
