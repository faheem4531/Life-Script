"use client";
// External libraries and frameworks
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// Custom components and modules
import { formatDate } from "../../../../utils/highOrderFunctions";
import { createBasicArray, createPremiumArray, createStandardArray } from "../../../../utils/stripeFlowObjects";

// Assets
import Check from "@/__webAssets/svgs/check.svg";
import Lock from "@/__webAssets/svgs/lock.svg";
import EditIconPriceCard from "@/_assets/svg/EditIconPriceCard.svg";

import { purchaseBooks } from "@/utils/constants/constants";
const { Basic, Standard, Premium } = purchaseBooks;

const GiftPlanCard = ({ price, category }) => {
  const { t } = useTranslation();
  const BasicArray = createBasicArray(t);
  const StandardArray = createStandardArray(t);
  const PremiumArray = createPremiumArray(t);

  const receiverName = localStorage.getItem("receiverName");
  const selectedDate = localStorage.getItem("selectedDate");
  const sendMessage = localStorage.getItem("sendMessage");

  return (
    <Box
      sx={{
        borderRadius: "3px",
        width: { lg: "445px", md: "400px", sm: "500px", xs: "100%" },
        height: "auto",
        backgroundColor: "#c5c4ae",
        float: "right",
        marginRight: { md: "20px", sm: "0", xs: "0" },
      }}
    >
      {(category == t("stripeFlow.pricePlanCard.TabPanel.category1") && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Image
            src={Basic}
            title="Basic Plan Gift - Giving the Gift of a Memoir or LifeStory Book"
            alt="A heartwarming image of an elderly couple in an embrace, representing the value of gifting a memoir or lifestory book through the Basic plan."
            width={250}
            height={348}
          />
        </Box>
      )) ||
        (category == t("stripeFlow.pricePlanCard.TabPanel.category2") && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Image
              src={Standard}
              title="Standard Plan Gift - A Memoir or Autobiography Book for Cherished Moments"
              alt="An elderly couple enjoying a playful moment on a swing, symbolizing treasured memories preserved in a memoir or autobiography book, gifted through the Standard plan."
              width={250}
              height={348}
            />
          </Box>
        )) ||
        (category == t("stripeFlow.pricePlanCard.TabPanel.category3") && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Image
              src={Premium}
              title="Premium Plan Gift - The Perfect Memoir or Autobiography Book for Family Legacy"
              alt="A warm family portrait at sunset by the lake, representing the shared memories and stories preserved in a gifted family memoir or autobiography book through the Premium plan."
              width={250}
              height={348}
            />
          </Box>
        ))}
      <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
        <Typography
          sx={{
            color: "#30422e",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          {category ? `${category} ${t("stripeFlow.pricePlanCard.TabPanel.plan")}` : `${t("stripeFlow.pricePlanCard.TabPanel.choosePlan")}`}
        </Typography>

        <Box>
          <Typography>
            {t("stripeFlow.pricePlanCard.TabPanel.commonText")}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          {(category == t("stripeFlow.pricePlanCard.TabPanel.category1") && (
            <Box>
              {BasicArray.map((item, index) => (
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
                  <Typography sx={{ fontSize: "15px", fontFamily: "Avenir" }}>
                    {item.dis}
                  </Typography>
                </Box>
              ))}
            </Box>
          )) ||
            (category == t("stripeFlow.pricePlanCard.TabPanel.category2") && (
              <Box>
                {StandardArray.map((item, index) => (
                  <Box
                    sx={{
                      display: "flex",
                      columnGap: "25px",
                      alignItems: "center",
                      marginBottom: "24px",
                    }}
                    key={index}
                  >
                    <Image
                      src={item.standardStatus ? Check : Lock}
                      alt="check"
                    />
                    <Typography sx={{ fontSize: "15px", fontFamily: "Avenir" }}>
                      {item.dis}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )) ||
            (category == t("stripeFlow.pricePlanCard.TabPanel.category3") && (
              <Box>
                {PremiumArray.map((item, index) => (
                  <Box
                    sx={{
                      display: "flex",
                      columnGap: "25px",
                      alignItems: "center",
                      marginBottom: "24px",
                    }}
                    key={index}
                  >
                    <Image
                      src={item.PrimuimStatus ? Check : Lock}
                      alt="check"
                    />
                    <Typography sx={{ fontSize: "15px", fontFamily: "Avenir" }}>
                      {item.dis}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ))}

          {/* Extra Info */}
          {receiverName && (
            <Box
              sx={{
                width: { lg: "380px", md: "350px" },
                height: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                  Details:
                </Typography>
                <Image
                  alt="icon"
                  src={EditIconPriceCard}
                  style={{ color: "#293624" }}
                />
              </Box>
              <Divider sx={{ marginTop: "5px", marginBottom: "15px" }} />

              <Box sx={{ marginTop: "5px", marginBottom: "10px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "800" }}>
                  Deliver to:{" "}
                </Typography>
                <Typography>
                  {receiverName && receiverName}
                </Typography>
              </Box>
              <Box sx={{ marginTop: "5px", marginBottom: "10px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "800" }}>
                  Date:{" "}
                </Typography>
                <Typography>
                  {selectedDate && formatDate(selectedDate)}
                </Typography>
              </Box>
              <Box sx={{ marginTop: "5px", marginBottom: "10px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "800" }}>
                  Gift Message:{" "}
                </Typography>
                <Typography sx={{ width: "300px" }}>
                  {sendMessage && sendMessage}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "700",
            borderBottom: "1px solid #BFC4B5",
            padding: "10px 0",
            marginBottom: "34px",
            fontFamily: "Avenir8",
          }}
        >
          {price ? `$${price}` : "$0"}
        </Typography>
      </Box>
    </Box>
  );
};

export default GiftPlanCard;
