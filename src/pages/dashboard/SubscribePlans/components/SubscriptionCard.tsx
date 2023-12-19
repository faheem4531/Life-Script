import { Box, Button } from "@mui/material";
import Image from "next/image";
import SmallTick from "@/_assets/svg/smallTick.svg";
import React from "react";

interface SubscriptionCardProps {
  subList: { label: string }[];
  mainTitle: string;
  mainDescription: string;
  price: number;
  offerTitle: string;
  onClick?: any;
  btnCheck?: boolean;
  buttonDisable? : boolean
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subList,
  mainTitle,
  mainDescription,
  price,
  buttonDisable,
  offerTitle,
  onClick,
  btnCheck = true,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: "24px 34px",
        borderRadius: "11px",
        border: "1px solid #CCC",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minWidth: { xs: "260px", md: "205px", lg: "250px" },
      }}
    >
      <Box>
        <Box
          sx={{
            fontSize: "30.5px",
            letterSpacing: "0.458px",
            fontWeight: "700",
            textTransform: "capitalize",
            mb: "17px",
          }}
        >
          {mainTitle}
        </Box>

        <Box
          sx={{
            fontSize: "10.999px",
            letterSpacing: "0.458px",
            fontWeight: "600",
            textTransform: "capitalize",
            mb: "17px",
          }}
        >
          {mainDescription}
        </Box>

        <Box
          sx={{
            fontSize: "30.5px",
            letterSpacing: "0.458px",
            fontWeight: "700",
            textTransform: "capitalize",
            mb: "17px",
            color: "#197065",
          }}
        >
          ${price}
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "2px",
            bgcolor: "#CCCCCC",
            mb: "17px",
          }}
        ></Box>

        <Box
          sx={{
            fontSize: "16.498px",
            letterSpacing: "0.458px",
            fontWeight: "700",
            textTransform: "capitalize",
            mb: "14px",
          }}
        >
          {offerTitle}
        </Box>

        <Box
          sx={{
            fontSize: "12.832px",
            letterSpacing: "0.458px",
            fontWeight: "600",
            textTransform: "capitalize",
            mb: "22px",
            color: "#081131",
          }}
        >
          Lorem ipsum dolor sit amet consectetur.
        </Box>

        <Box
          sx={{
            mb: "20px",
            height: "22vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {subList?.map((items, index) => {
            return (
              <Box key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontSize: "12.832px",
                    color: "#081131",
                    mb: "18px",
                  }}
                >
                  <Box>
                    <Image src={SmallTick} alt="SmallTick" />
                  </Box>
                  <Box>{items.label}</Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {btnCheck && (
        <Button
          sx={{
            height: { sx: "25px", md: "30px", lg: "45px" },
            borderRadius: "26.267px",
            border: " 0.71px solid #197065",
            p: { xs: "8px 20px", lg: "10.358px 26.989px" },
            fontSize: { xs: "12px" },
            color: "white",
            textTransform: "capitalize",
            width: "100%",
            bgcolor: "#197065",
            "&:hover": {
              bgcolor: "#197065",
            },
          }}
          disabled={buttonDisable}
          onClick={() => onClick(price)}
        >
          Choose Plan
        </Button>
      )}
    </Box>
  );
};

export default SubscriptionCard;
