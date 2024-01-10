import InputWithLabel from "@/components/Input";
import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import TickBg from "../../../../_assets/svg/bgTickIcon.svg";

const CheckoutForm = () => {
  const [success, setSuccess] = useState(true);
  return (
    <>
      {!success ? (
        <Box
          sx={{
            bgcolor: "#F8F6F9",
            borderRadius: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            p: "30px 24px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16.704px",
              fontWeight: 600,
              color: "#171725",
            }}
          >
            Payment for additional books
          </Typography>
          <Typography
            sx={{
              fontSize: "31.7px",
              fontWeight: 600,
              color: "#171725",
            }}
          >
            79$
          </Typography>
          <InputWithLabel
            color="#474E60"
            label="Card Number"
            value={null}
            placeholder="Card Number"
            borderRadius="47.202px"
            bgColor="white"
            border="1px solid #186F65"
          />
          <InputWithLabel
            color="#474E60"
            label="Cardholder Name"
            value={null}
            placeholder="Cardholder Name"
            borderRadius="47.202px"
            bgColor="white"
            border="1px solid #186F65"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <Box flex={1}>
              <InputWithLabel
                color="#474E60"
                label="Expiration Date"
                value={null}
                placeholder="Expiration Date"
                borderRadius="47.202px"
                bgColor="white"
                border="1px solid #186F65"
              />
            </Box>
            <Box flex={1}>
              <InputWithLabel
                color="#474E60"
                label="CVV"
                value={null}
                placeholder="CVV"
                borderRadius="47.202px"
                bgColor="white"
                border="1px solid #186F65"
                type="number"
              />
            </Box>
          </Box>
          <GlobelBtn
            btnText="Proceed to pay"
            bgColor=" #197065"
            color="white"
            p="10px 0px"
            // onClick={() => {
            //   setSuccess(true);
            // }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            bgcolor: "#F8F6F9",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90%",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "144px",
                height: "144px",
                margin: "auto",
              }}
            >
              <Image
                src={TickBg}
                alt="Success Icon"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "24.7px",
                color: "black",
                width: "70%",
                m: "50px auto 0px auto",
                textAlign: "center",
              }}
            >
              Payment successful proceed to Submit
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CheckoutForm;
