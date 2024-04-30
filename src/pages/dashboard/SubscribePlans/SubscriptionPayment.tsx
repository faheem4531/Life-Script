import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { Box, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import {
  subBasicList,
  subPremiumList,
  subStandardList,
} from "../../../utils/subscriptionLists";
import SubscriptionCard from "../SubscribePlans/components/SubscriptionCard";
import PaymentForm from "./components/paymentForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);

const CreditCard = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { Subscription, price } = router.query;

  return (
    <Box>
      <Layout>
        <SubscriptionHeader
          title={`${t("SubsPlan.SubsHeaderTitle")}`}
          description="Each plan comes with lifetime access to LifeScript, premium full-color hardcover book, and free shipping."
        />

        <Box
          sx={{
            bgcolor: "white",
            borderRadius: " 16.148px",
            mt: "55px",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              mt: "25px",
              flexDirection: { xs: "column", md: "row" }
            }}
          >
            <Box flex={1}>
              {Subscription === "BasicPlan" && (
                <SubscriptionCard
                  subList={subBasicList}
                  category="BasicPlan"
                  card="1"
                  mainTitle="Basic"
                  CurrentPlan={null}
                  price={Number(price)}
                  btnCheck={false}
                />
              )}
              {Subscription === "GoldPlan" && (
                <SubscriptionCard
                  subList={subStandardList}
                  category="GoldPlan"
                  card="2"
                  CurrentPlan={null}
                  mainTitle="Standard"
                  price={Number(price)}
                  btnCheck={false}
                />
              )}
              {Subscription === "PremiumPlan" && (
                <SubscriptionCard
                  category="PremiumPlan"
                  CurrentPlan={null}
                  card="3"
                  subList={subPremiumList}
                  mainTitle="Premium"
                  price={Number(price)}
                  btnCheck={false}
                />
              )}
              {/*
               */}
            </Box>
            <Box flex={1}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Elements stripe={stripePromise}>
                  <PaymentForm packageName={Subscription} price={price} />
                </Elements>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default CreditCard;
