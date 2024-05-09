import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  subBasicList,
  subPremiumList,
  subStandardList,
} from "../../../utils/subscriptionLists";
import SubscriptionCard from "./components/SubscriptionCard";
import stripeLogo from "../../../../public/stripeLogo.svg";
import Image from "next/image";
import BgLogo from "@/_assets/png/bg-steps.png"

const SubscribePlan = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [planCheck, setPlanCheck] = useState("FreePlan");
  const [planPrices, setPlanPrices] = useState({
    basic: 139,
    standard: 179,
    premium: 239,
  });
  const [disableButton, setDisableButton] = useState({
    basic: false,
    standard: false,
    premium: false,
  });

  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt?.decode(token);
      const accessRole = decodedToken?.accessRole;
      if (accessRole === "PremiumPlan") {
        setDisableButton({
          standard: true,
          basic: true,
          premium: true,
        });
      } else if (accessRole === "GoldPlan") {
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
    }
  }, []);

  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt.decode(token);
      const accessRole = decodedToken?.accessRole;
      console.log("acccedfgdj", accessRole);

      if (accessRole) {
        setPlanCheck(accessRole);
      }
    }
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Layout>
        <Box
          sx={{
            p: { xs: "15px 10px", sm: "0px" }, position: "relative", zIndex: 2
          }}
        >
          <SubscriptionHeader
            title={`${t("SubsPlan.SubsHeaderTitle")}`}
            description="Each plan comes with lifetime access to LifeScript, premium full-color hardcover book, and free shipping."
          />
          <Box
            sx={{
              display: "flex",
              gap: { xs: "15px", md: "20px", lg: "40px" },
              mt: "20px",
              flexDirection: { md: "row", sm: "column", xs: "column" },
              justifyContent: { md: "center" },
              alignItems: "center"
            }}
          >
            <SubscriptionCard
              subList={subBasicList}
              mainTitle="Basic"
              category="BasicPlan"
              card="1"
              price={planPrices.basic}
              buttonDisable={disableButton.basic}
              onClick={(pkgPrice) => {
                typeof window !== "undefined" &&
                  router.push(
                    `/dashboard/SubscribePlans/SubscriptionPayment?Subscription=BasicPlan&price=${pkgPrice}`
                  );
              }}
              CurrentPlan={planCheck}
              plan={planCheck !== "FreePlan"}
            />
            <SubscriptionCard
              subList={subStandardList}
              mainTitle="Standard"
              category="GoldPlan"
              card="2"
              CurrentPlan={planCheck}
              price={planPrices?.standard}
              buttonDisable={disableButton.standard}
              onClick={(pkgPrice) => {
                typeof window !== "undefined" &&
                  router.push(
                    `/dashboard/SubscribePlans/SubscriptionPayment?Subscription=GoldPlan&price=${pkgPrice}`
                  );
              }}
              plan={planCheck !== "FreePlan" && planCheck !== "BasicPlan"}
            />
            <SubscriptionCard
              subList={subPremiumList}
              mainTitle="Premium"
              card="3"
              CurrentPlan={planCheck}
              category="PremiumPlan"
              price={planPrices?.premium}
              buttonDisable={disableButton.premium}
              onClick={(pkgPrice) => {
                typeof window !== "undefined" &&
                  router.push(
                    `/dashboard/SubscribePlans/SubscriptionPayment?Subscription=PremiumPlan&price=${pkgPrice}`
                  );
              }}
              plan={
                planCheck !== "FreePlan" &&
                planCheck !== "BasicPlan" &&
                planCheck !== "GoldPlan"
              }
            />
          </Box>
          <Box sx={{ marginTop: "50px", display: "flex", columnGap: "10px", alignItems: "center" }}>
            <Typography>Secure Payment with</Typography>
            <Image
              src={stripeLogo}
              alt='Stripe logo Image'
            />
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

export default SubscribePlan;
