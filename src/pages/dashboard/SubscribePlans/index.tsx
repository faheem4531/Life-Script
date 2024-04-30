import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  subBasicList,
  subPremiumList,
  subStandardList,
} from "../../../utils/subscriptionLists";
import SubscriptionCard from "./components/SubscriptionCard";

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
    <Box>
      <Layout>
        <Box
          sx={{
            p: { xs: "15px 10px", sm: "0px" },
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
              flexWrap: "wrap",
              justifyContent: { sm: "start", xs: "center" },
            }}
          >
            <SubscriptionCard
              subList={subBasicList}
              mainTitle="Basic Package"
              mainDescription="Access to basic features of lifescript."
              offerTitle="Basic Plan Offerings"
              price={planPrices.basic}
              buttonDisable={disableButton.basic}
              onClick={(pkgPrice) => {
                typeof window !== "undefined" &&
                  router.push(
                    `/dashboard/SubscribePlans/SubscriptionPayment?Subscription=BasicPlan&price=${pkgPrice}`
                  );
              }}
              plan={planCheck !== "FreePlan"}
            />
            <SubscriptionCard
              subList={subStandardList}
              mainTitle="Standard Package"
              mainDescription="Access to smart generative features of lifescript."
              offerTitle="Standard Plan Offerings"
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
              mainTitle="Premium Package"
              mainDescription="Access to premium features of lifescript."
              offerTitle="Premium Plan Offerings"
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
        </Box>
      </Layout>
    </Box>
  );
};

export default SubscribePlan;
