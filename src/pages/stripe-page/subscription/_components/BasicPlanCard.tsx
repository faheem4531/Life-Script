"use client";
import Check from "@/__webAssets/svgs/check.svg";
import Lock from "@/__webAssets/svgs/lock.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import grandmaBookImage from "../../../../../public/grandmaBookImage.svg";
import premiumBookImage from "../../../../../public/premiumBookImage.svg";
import standardBookImage from "../../../../../public/standardBookImage.svg";
import { BasicArray, PremiumArray, StandardArray } from "../../../../utils/stripeFlowObjects";
const BasicPlanCard = ({ price, category }) => {
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
      {(category == "Basic" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Image
            src={grandmaBookImage}
            alt="grandma Book Image "
            width={250}
            height={348}
          />
        </Box>
      )) ||
        (category == "Standard" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Image
              src={standardBookImage}
              alt="grandma Book Image "
              width={250}
              height={348}
            />
          </Box>
        )) ||
        (category == "Premium" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Image
              src={premiumBookImage}
              alt="grandma Book Image "
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
          {category ? `${category} Plan` : "Choose Plan"}
        </Typography>

        <Box>
          <Typography>
            Includes a premium full-color hardcover book, free shipping and
            lifetime access to LifeScript with:
          </Typography>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          {(category == "Basic" && (
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
            (category == "Standard" && (
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
            (category == "Premium" && (
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
        </Box>

        <Box
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
        </Box>
      </Box>
    </Box>
  );
};

export default BasicPlanCard;
