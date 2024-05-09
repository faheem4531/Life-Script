import SmallTick from "@/_assets/svg/smallTick.svg";
import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "@/__webComponents/ComponentsStyles.module.css";
import Check from "@/__webAssets/svgs/check.svg";
import Lock from "@/__webAssets/svgs/lock.svg";
import NextIcon from "@/__webAssets/svgs/next.svg";

interface SubscriptionCardProps {
  subList: { label: string }[];
  mainTitle: string;
  category: string;
  card: string;
  price: number;
  CurrentPlan: string;
  onClick?: any;
  btnCheck?: boolean;
  buttonDisable?: boolean;
  plan?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subList,
  mainTitle,
  price,
  buttonDisable,
  CurrentPlan,
  onClick,
  btnCheck = true,
  plan,
  category,
  card,
}) => {
  const { t } = useTranslation();

  const CheckArray = [
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Spelling and grammar assistance ",
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Automatic photo improvement ",
    },

    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Text formatting features  ",
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Narrative Fusion ",
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Voice-to-text ",
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Family Tree",
    },
    {
      standardStatus: false,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Premium book covers",
    },
    {
      standardStatus: false,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Priority customer support",
    },
    {
      standardStatus: false,
      PrimuimStatus: true,
      basicStatus: false,
      dis: "Exclusive access to new features ",
    },
  ];
  return (
    <Box
      sx={{
        borderRadius: "8px",
        maxWidth: btnCheck ? "420px" : "600px",
        height: btnCheck ? "660px" : "575px",
        width: "100%",
        position: "relative",
      }}
      component="div"
      bgcolor={card == "2" ? "#30422E" : "#F4F4F4"}
      color={card == "2" && "#f4f4f4"}
    >
      <Box
        sx={{
          padding: "40px 27px"
        }}
      >
        <Box
          sx={{
            borderRadius: "4px",
            backgroundColor: "#E7E7E7",
            padding: "4px 8px",
            display: "inline",
            color: "#3E4F3C",
            fontFamily: "Avenir5",
          }}
        >
          {mainTitle}
        </Box>
        {category == "GoldPlan" && (
          <Box
            sx={{
              borderRadius: "4px",
              backgroundColor: "#E1683B",
              padding: "4px 8px",
              color: "#F4F4F4",
              marginLeft: "6px",
              display: "inline",
              fontFamily: "Avenir LT Std",
            }}
          >
            Popular
          </Box>
        )}
        <Box
          sx={{
            fontSize: "36px",
            fontWeight: "400",
            borderBottom: "1px solid #BFC4B5",
            padding: "10px 0",
            marginBottom: "34px",
          }}
          className={styles.price}
        >
          ${price}
        </Box>

        {(category == "BasicPlan" && (
          <Box>
            {CheckArray.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  columnGap: "25px",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
                key={index}
              >
                <Image src={item.basicStatus ? Check : Lock} alt="check" />
                <Typography sx={{ fontSize: "14px", fontFamily: "Avenir" }}>
                  {item.dis}
                </Typography>
              </Box>
            ))}
          </Box>
        )) ||
          (category == "GoldPlan" && (
            <Box>
              {CheckArray.map((item, index) => (
                <Box
                  sx={{
                    display: "flex",
                    columnGap: "25px",
                    alignItems: "center",
                    marginBottom: "24px",
                  }}
                  key={index}
                >
                  <Image src={item.standardStatus ? Check : Lock} alt="check" />
                  <Typography sx={{ fontSize: "14px", fontFamily: "Avenir" }}>
                    {item.dis}
                  </Typography>
                </Box>
              ))}
            </Box>
          )) ||
          (category == "PremiumPlan" && (
            <Box>
              {CheckArray.map((item, index) => (
                <Box
                  sx={{
                    display: "flex",
                    columnGap: "25px",
                    alignItems: "center",
                    marginBottom: "24px",
                  }}
                  key={index}
                >
                  <Image src={item.PrimuimStatus ? Check : Lock} alt="check" />
                  <Typography sx={{ fontSize: "14px", fontFamily: "Avenir" }}>
                    {item.dis}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
      </Box>
      <Box sx={{ position: "absolute", bottom: "0", left: "0", right: "0" }}>
        {btnCheck && <GlobelBtn
          bgColor="#E1683B"
          borderRadius="0px 0px 8px 8px"
          color="white"
          btnText={
            !plan ? "Upgrade" :
              (CurrentPlan === category) ? "Current" :
                (CurrentPlan === category) ? "Current" :
                  (CurrentPlan === category) ? "Current" :
                    "Downgrade"
          }
          image2={!plan && NextIcon}
          p="15px 0"
          onClick={() => onClick(price)}
          disabled={plan}
          width={"100%"}
        />}
      </Box>
    </Box>

  );
};

export default SubscriptionCard;
