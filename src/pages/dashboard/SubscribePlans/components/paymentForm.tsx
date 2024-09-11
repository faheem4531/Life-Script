import ModalImage from "@/_assets/svg/Frame.svg";
import GlobelBtn from "@/components/button/Button";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import { stripePayment } from "@/store/slices/chatSlice";
import { Box, TextField, Typography } from "@mui/material";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

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
  const { t } = useTranslation();

  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY, "NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY")

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
            } else {
              setStripeFailed(true);
            }
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

  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY, 'process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY')

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          flexDirection: "column",
          bgcolor: "#F8F6F9",
          p: "28px 35px",
          borderRadius: "4px",
          maxHeight: "480px",
          width: "100%",
        }}
      >
        <Box>
          <Box mb="30px">
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                color: "#30422E",
              }}
            >
              {t("SubsPlan.CardNum")}
            </Typography>
            <Box
              sx={{
                width: "100%",
                marginTop: "10px",
                borderRadius: "4px",
                backgroundColor: "white",
                p: "12px 35px",
                border: "1px solid #30422E",
              }}
            >
              <CardNumberElement
                options={options}
                onChange={(event) => {

                  setIsError(!event.complete || !!event.error);
                }}
              />
            </Box>
          </Box>

          <Box mb="30px">
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                color: "#30422E",
              }}
            >
              {t("SubsPlan.CardholderName")}
            </Typography>
            <TextField
              variant="outlined"
              onChange={(event: any) => setCardHolderName(event.target.value)}
              placeholder={`${t("SubsPlan.CardholderName")}`}
              name="title"
              sx={{
                marginTop: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                  backgroundColor: "white",
                  border: "1px solid #30422E",
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
              mb: "30px",
            }}
          >
            <Box flex={1}>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  color: "#30422E",
                }}
              >
                {t("SubsPlan.ExpDate")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  p: "12px 35px",
                  border: "1px solid #30422E",
                }}
              >
                <CardExpiryElement
                  options={options}
                  onChange={(event) => {

                    setIsError(!event.complete || !!event.error);
                  }}
                />
              </Box>
            </Box>
            <Box flex={1}>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  color: "#30422E",
                }}
              >
                {t("SubsPlan.cvc")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  p: "12px 35px",
                  border: "1px solid #30422E",
                }}
              >
                <CardCvcElement
                  options={options}
                  onChange={(event) => {

                    setIsError(!event.complete || !!event.error);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            margin: "40px 0",
            opacity: loading || isError || !cardHolderName ? 0.6 : 1,
          }}
        >
          <Box>
            <GlobelBtn
              bgColor="#E1683B"
              color="white"
              btnText={loading ? "Loading..." : t("SubsPlan.buyNow")}
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
        heading={`${t("SubsPlan.premPlan")}`}
        description={`${t("SubsPlan.premPlanDes1")} $${price} ${t(
          "SubsPlan.premPlanDes2"
        )}`}
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
        marginTop={0}
      >
        <Box sx={{ textAlign: "center", p: "20px" }}>
          <Box
            sx={{
              width: { md: "120px", sm: "66.54px", xs: "41.709px" },
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
              color: "#30422E",
              margin: "15px 0",
            }}
          >
            {stripeFailed ? `${t("SubsPlan.Sorry")}` : `${t("SubsPlan.TY")}`}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "16.5px", sm: "16.259px", xs: "11.631px" },
              color: "#30422E",
              width: { md: "400px", sm: "300px", xs: "180px" },
              margin: { md: "0 120px", sm: "0px 55px", xs: "0px" },
            }}
          >
            {stripeFailed
              ? `${t("SubsPlan.SorryDes")}`
              : `${t("SubsPlan.TYDes")}`}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "20px",
            }}
          >
            <GlobelBtn
              bgColor="#30422E"
              color="white"
              btnText={
                stripeFailed
                  ? `${t("SubsPlan.sorryBtn")}`
                  : `${t("SubsPlan.TYBtn")}`
              }
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
