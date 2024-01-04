import ModalImage from "@/_assets/png/view-template-modal.png";
import GlobelBtn from "@/components/button/Button";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import { stripeDone } from "@/store/slices/authSlice";
import { stripePayment } from "@/store/slices/chatSlice";
import { Box, TextField, Typography } from "@mui/material";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
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

const PaymentForm = ({ packageName, price }) => {
  const dispatch: any = useDispatch();
  const options = useOptions();
  const [isError, setIsError] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [confirmationStripe, setConfirmationStripe] = useState(false);
  const [stripeSucceed, setStripeSucceed] = useState(false);
  const [stripeFailed, setStripeFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const router = useRouter();
  const elements = useElements();

  const handleSubmit = async (event) => {
    const subscriptionPrice = Number(price);
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
      setStripeFailed(true);
    } else {
      dispatch(
        stripePayment({
          country: "USA",
          amount: subscriptionPrice,
          token: result.token,
          packageName: packageName,
          cardHolderName: cardHolderName,
        })
      )
        .unwrap()
        .then(async (res) => {
          if (res?.status !== "succeeded") {
            const secureResult = await stripe.confirmCardPayment(
              res?.client_secret,
              {
                payment_method: {
                  card: card,
                },
              }
            );
            if (secureResult?.paymentIntent?.status === "succeeded") {
              setStripeSucceed(true);
            }else{setStripeFailed(true);}
          } else {
            setStripeSucceed(true);
          }
        })
        .catch((error) => {
          setLoading(false);
          setStripeFailed(true);
        });
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
          <Box>
            <GlobelBtn
              bgColor="#197065"
              color="white"
              btnText={loading ? "Processing..." : "Choose Plan"}
              onClick={() => {
                if (!loading && !isError && cardHolderName) {
                  setConfirmationStripe(true);
                }
              }}
              p={"10px 20px"}
              width={"100%"}
            />
          </Box>
        </Box>
      </Box>
      <TransitionsDialog
        open={confirmationStripe}
        heading="Premium Plan"
        description={`An amount of $${price} will be deducted from your selected bank account. Do you really want to proceed?`}
        cancel={() => {
          setConfirmationStripe(false);
        }}
        closeModal={() => {
          setConfirmationStripe(false);
        }}
        proceed={handleSubmit}
      />
      <CustomizationDialog
        open={stripeSucceed || stripeFailed}
        title=""
        handleClose={() => {
          setStripeSucceed(false);
          setStripeFailed(false);
          stripeFailed
            ? router.push("/dashboard/SubscribePlans")
            : router.push("/dashboard/chapters");
        }}
        customStyles={{ backgroundColor: "auto" }}
      >
        <Box sx={{ textAlign: "center", p: "20px" }}>
          <Box
            sx={{
              width: { md: "91.562px", sm: "66.54px", xs: "41.709px" },
              height: { md: "60.005px", sm: "43.607px", xs: "27.334px" },
              margin: "auto",
            }}
          >
            <Image
              alt="image"
              src={ModalImage}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { md: "22px", sm: "21.679px", xs: "15.508px" },
              fontWeight: 700,
              color: "#070707",
              margin: "15px 0",
            }}
          >
            {stripeFailed ? "Sorry" : "Thank You!"}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "16.5px", sm: "16.259px", xs: "11.631px" },
              color: "#070707",
              width: { md: "400px", sm: "300px", xs: "180px" },
              margin: { md: "0 120px", sm: "0px 55px", xs: "0px" },
            }}
          >
            {stripeFailed
              ? "Stripe Failed to proceed your Payment"
              : "Your Package has been Upgraded"}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "20px",
            }}
          >
            <GlobelBtn
              bgColor="#197065"
              color="white"
              btnText={stripeFailed ? "Try Later" : "Start Using"}
              onClick={() => {
                stripeFailed
                  ? router.push("/dashboard/SubscribePlans")
                  : router.push("/dashboard/chapters");
                setStripeSucceed(false);
                setStripeFailed(false);
              }}
            />
          </Box>
        </Box>
      </CustomizationDialog>
    </>
  );
};

export default dynamic(() => Promise.resolve(PaymentForm), {
  ssr: false,
});
