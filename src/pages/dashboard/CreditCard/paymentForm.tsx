
import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { Box, FormLabel } from '@mui/material';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    CardElement,
    Elements
  } from "@stripe/react-stripe-js";
  import { loadStripe } from '@stripe/stripe-js';
  const stripePromise = loadStripe("pk_test_51KyFHhGeGlEJDOmcCqL8AVqDcShNxk8mTWBBvKDkMqR102d6epu3RY7Zzny8NBbn0D9O3EPm0n7GcgucKBseRue6001dM1qnAu");
  const useOptions = () => {
    const fontSize = '16px';
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize,
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      [fontSize]
    );
  
    return options;
  };

const PaymentForm = () => {

    const options = useOptions();
    let [isError, setIsError] = React.useState(true)

  return (
    <Box>
        <Box>
        <Elements stripe={stripePromise}>
                           
        <CardNumberElement
                          options={options}
                          onReady={() => {
                              console.log("CardNumberElement [ready]");
                          }}
                          onChange={(event) => {
                              console.log("CardNumberElement [change]", event);
                              if (event.complete && !event.error) {
                                setIsError(false)
                            } else {
                                setIsError(true)
                            }    
                          }}
                          onBlur={() => {
                              console.log("CardNumberElement [blur]");
                          }}
                          onFocus={() => {
                              console.log("CardNumberElement [focus]");
                          }}
                      />
                        </Elements>

        </Box>

    </Box>
  );
};

export default PaymentForm;
