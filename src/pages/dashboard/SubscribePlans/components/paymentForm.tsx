import TransitionsDialog from "@/components/modal/TransitionDialog";
import { stripePayment } from "@/store/slices/chatSlice";
import { Box, Button, TextField, Typography } from "@mui/material";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);

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
  const dispatch: any = useDispatch();
  const options = useOptions();
  const [isError, setIsError] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [confirmationStripe, setConfirmationStripe] = useState(false);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    setConfirmationStripe(false);
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardNumberElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      setLoading(false);
      setIsError(true);
    } else {
      console.log("token", result.token);
      dispatch(
        stripePayment({
          country: "USA",
          amount: 1000,
          token: result.token,
          packageName: "PremiumPlan",
          cardHolderName: cardHolderName,
        })
      )
        .unwrap()
        .then(async (res) => {
          if (res.status !== "succeeded") {
            const result1 = await stripe.confirmCardPayment(res.client_secret, {
              payment_method: {
                card: card,
              },
            });
          }
        })
        .catch(() => setLoading(false));
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <Box>
          <Box mb="20px">
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              Card Number
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
                onChange={(event) => {
                  console.log("CardNumberElement [change]", event);
                  setIsError(!event.complete || !!event.error);
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
              onChange={(event: any) => setCardHolderName(event.target.value)}
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
              mb: "20px",
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
                  onChange={(event) => {
                    console.log("CardExpiryElement [change]", event);
                    setIsError(!event.complete || !!event.error);
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
                  onChange={(event) => {
                    console.log("CardCvcElement [change]", event);
                    setIsError(!event.complete || !!event.error);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
            opacity: loading || isError || !cardHolderName ? 0.6 : 1,
          }}
        >
          <Button
            onClick={() => {
              if (!loading && !isError && cardHolderName) {
                setConfirmationStripe(true);
              }
            }}
            // disabled={loading || isError || !cardHolderName}
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
          >
            {loading ? "Processing..." : "Choose Plan"}
          </Button>
        </Box>
      </Box>
      <TransitionsDialog
        open={confirmationStripe}
        heading="Premium Plan"
        description="An amount of $1,750 will be deducted from your selected bank account. Do you really want to proceed?"
        cancel={() => {
          setConfirmationStripe(false);
        }}
        closeModal={() => {
          setConfirmationStripe(false);
        }}
        proceed={handleSubmit}
      />
    </>
  );
};

export default dynamic(() => Promise.resolve(PaymentForm), {
  ssr: false
})
