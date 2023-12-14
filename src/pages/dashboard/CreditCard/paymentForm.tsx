import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { Box, FormLabel, Input, TextField, Typography, Autocomplete, Button } from "@mui/material";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CountrySelect from "@/components/dashboardComponent/AutoComplete";
const stripePromise = loadStripe(
  "pk_test_51KyFHhGeGlEJDOmcCqL8AVqDcShNxk8mTWBBvKDkMqR102d6epu3RY7Zzny8NBbn0D9O3EPm0n7GcgucKBseRue6001dM1qnAu"
);
const useOptions = () => {
  const fontSize = "16px";
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const PaymentForm = () => {
  const options = useOptions();
  let [isError, setIsError] = React.useState(true);

  return (
    <Box>
      <Box>
        <Elements stripe={stripePromise}>
          <Box mb="20px">
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              CVC
            </Typography>
            <Box
              sx={{
                width: "100%",
                marginTop: "10px",
                borderRadius: "50px",
                backgroundColor: "white",
                p: "12px 35px",
                border: "1px solid #186F65",
              }}
            >
              <CardNumberElement
                options={options}
                onReady={() => {
                  console.log("CardNumberElement [ready]");
                }}
                onChange={(event) => {
                  console.log("CardNumberElement [change]", event);
                  if (event.complete && !event.error) {
                    setIsError(false);
                  } else {
                    setIsError(true);
                  }
                }}
                onBlur={() => {
                  console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                  console.log("CardNumberElement [focus]");
                }}
              />
            </Box>
          </Box>

          <Box mb="20px">
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              Cardholder Name
            </Typography>
            <TextField
              variant="outlined"
              placeholder={"Cardholder Name"}
              name="title"
              sx={{
                marginTop: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  backgroundColor: "white",
                  border: "1px solid #186F65",
                  height: "46px",
                },

                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "0px",
                },
                width: "100%",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              width: "100%",
              mb:"20px"
            }}
          >
            <Box flex={1}>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Expiration Date
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "50px",
                  backgroundColor: "white",
                  p: "12px 35px",
                  border: "1px solid #186F65",
                }}
              >
                <CardExpiryElement
                  options={options}
                  onReady={() => {
                    console.log("CardNumberElement [ready]");
                  }}
                  // onChange={(event) => {
                  //   console.log("CardNumberElement [change]", event);
                  //   setCardExpiry(event);
                  //   if (event.complete && !event.error) {
                  //     props.setIsError(false);
                  //   } else {
                  //     props.setIsError(true);
                  //   }
                  // }}
                  onBlur={() => {
                    console.log("CardNumberElement [blur]");
                  }}
                  onFocus={() => {
                    console.log("CardNumberElement [focus]");
                  }}
                />
              </Box>
            </Box>
            <Box flex={1}>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                CVC
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "50px",
                  backgroundColor: "white",
                  p: "12px 35px",
                  border: "1px solid #186F65",
                }}
              >
                <CardCvcElement
                  options={options}
                  onReady={() => {
                    console.log("CardNumberElement [ready]");
                  }}
                  onChange={(event) => {
                    console.log("CardNumberElement [change]", event);
                    if (event.complete && !event.error) {
                    } else {
                    }
                  }}
                  onBlur={() => {
                    console.log("CardNumberElement [blur]");
                  }}
                  onFocus={() => {
                    console.log("CardNumberElement [focus]");
                  }}
                />
              </Box>
            </Box>
          </Box>

          <CountrySelect/>

          <Button
            sx={{
              height: {sx: "25px", md: "30px", lg:"45px"},
              borderRadius: "26.267px",
              border: " 0.71px solid #197065",
              p: { xs: '8px 20px', lg:"10.358px 26.989px"},
              fontSize: {xs: "12px"},
              color: "white",
              textTransform: "capitalize",
              width: "100%",
              bgcolor: "#197065",
              "&:hover": {
                bgcolor: "#197065",
              }
            }}
          >
            Choose Plan
      </Button>
        </Elements>
      </Box>
    </Box>
  );
};

export default PaymentForm;
