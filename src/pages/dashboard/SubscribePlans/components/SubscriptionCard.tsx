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
  mainDescription: string;
  category: string;
  card: string;
  price: number;
  offerTitle: string;
  CurrentPlan: string;
  onClick?: any;
  btnCheck?: boolean;
  buttonDisable?: boolean;
  plan?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subList,
  mainTitle,
  mainDescription,
  price,
  buttonDisable,
  offerTitle,
  CurrentPlan,
  onClick,
  btnCheck = true,
  plan,
  category, card,
}) => {
  const { t } = useTranslation();
  // console.log(CurrentPlan, "category");
  console.log(plan, " plan ", category);

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
        width: "330px",
        height: "660px",
        position: "relative",
      }}
      backgroundColor={card == "2" ? "#30422E" : "#F4F4F4"}
      color={card == "2" && "#f4f4f4"}
    // id={id}
    // onMouseOver={() => handleHover(id)}
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
          {category}
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
          // btnText={!plan ? "Upgrade" : CurrentPlan == "GoldPlan" && category == "Standard" ? "Current" : "Downgrade"}
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

    // <Box
    //   sx={{
    //     bgcolor: "white",
    //     p: "24px 34px",
    //     borderRadius: "11px",
    //     border: "1px solid #CCC",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     minWidth: { xs: "260px", md: "205px", lg: "250px" },
    //   }}
    // >
    //   <Box>
    //     <Box
    //       sx={{
    //         fontSize: { md: "30.5px", sm: "24px", xs: "20px" },
    //         letterSpacing: "0.458px",
    //         fontWeight: "700",
    //         textTransform: "capitalize",
    //         mb: { md: "17px", sm: "13px", xs: "8px" },
    //       }}
    //     >
    //       {mainTitle}
    //     </Box>

    //     <Box
    //       sx={{
    //         fontSize: { md: "10.999px", xs: "8.5px" },
    //         letterSpacing: "0.458px",
    //         fontWeight: "600",
    //         textTransform: "capitalize",
    //         mb: { md: "17px", sm: "13px", xs: "8px" },
    //       }}
    //     >
    //       {mainDescription}
    //     </Box>

    //     <Box
    //       sx={{
    //         fontSize: { md: "30.5px", sm: "24px", xs: "20px" },
    //         letterSpacing: "0.458px",
    //         fontWeight: "700",
    //         textTransform: "capitalize",
    //         mb: { md: "17px", sm: "13px", xs: "8px" },
    //         color: "#197065",
    //       }}
    //     >
    //       ${price}
    //     </Box>

    //     <Box
    //       sx={{
    //         width: "100%",
    //         height: "2px",
    //         bgcolor: "#CCCCCC",
    //         mb: { md: "17px", sm: "13px", xs: "8px" },
    //       }}
    //     ></Box>

    //     <Box
    //       sx={{
    //         fontSize: { md: "16.498px", sm: "14px", xs: "12px" },
    //         letterSpacing: "0.458px",
    //         fontWeight: "700",
    //         textTransform: "capitalize",
    //         mb: "14px",
    //       }}
    //     >
    //       {offerTitle}
    //     </Box>

    //     {/* <Box
    //       sx={{
    //         fontSize: { md: "12.832px", sm: "10px", xs: "9px" },
    //         letterSpacing: "0.458px",
    //         fontWeight: "600",
    //         textTransform: "capitalize",
    //         mb: "22px",
    //         color: "#081131",
    //       }}
    //     >
    //       Lorem ipsum dolor sit amet consectetur.
    //     </Box> */}

    //     <Box
    //       sx={{
    //         mb: "20px",
    //         height: "22vh",
    //         overflowY: "auto",
    //         "&::-webkit-scrollbar": { display: "none" },
    //       }}
    //     >
    //       {subList?.map((items, index) => {
    //         return (
    //           <Box key={index}>
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 alignItems: "center",
    //                 gap: "14px",
    //                 fontSize: { md: "12.832px", sm: "10px", xs: "9px" },
    //                 color: "#081131",
    //                 mb: { md: "18px", sm: "13px", xs: "8px" },
    //               }}
    //             >
    //               <Box>
    //                 <Image src={SmallTick} alt="SmallTick" />
    //               </Box>
    //               <Box>{items.label}</Box>
    //             </Box>
    //           </Box>
    //         );
    //       })}
    //     </Box>
    //   </Box>

    //   {btnCheck && (
    //     <Box>
    //       <GlobelBtn
    //         bgColor="#197065"
    //         color="white"
    //         btnText={`${t("SubsPlan.cardBtn")}`}
    //         onClick={() => onClick(price)}
    //         disabled={plan}
    //         width={"100%"}
    //       />
    //     </Box>
    //   )}
    // </Box>
  );
};

export default SubscriptionCard;
