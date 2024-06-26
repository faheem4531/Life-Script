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
import Image from "next/image";
import BgLogo from "@/_assets/png/bg-steps.png"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);
const CreditCard = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { Subscription, price } = router.query;

  return (
    <Box sx={{ position: "relative" }}>
      <Layout>
        <SubscriptionHeader
          title={`${t("SubsPlan.SubsHeaderTitle")}`}
          description={t("SubsPlan.SubsHeaderDescription")}
        />

        <Box
          sx={{
            borderRadius: " 16.148px",
            mt: "55px",
            height: "100%", position: "relative", zIndex: 2
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
                  mainTitle={t("landingPage.pricingSection.category1")}
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
                  mainTitle={t("landingPage.pricingSection.category2")}
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
                  mainTitle={t("landingPage.pricingSection.category3")}
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
      <Box sx={{ position: "absolute", right: 0, bottom: 0 }}>
        <Image
          src={BgLogo}
          alt="Giving Tree Logo"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </Box>
  );
};

export default CreditCard;
