import ModalImage from "@/_assets/svg/Frame.svg";
import GlobelBtn from "@/components/button/Button";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import { getLuluBalance } from "@/store/slices/authSlice";
import { luluPrinting } from "@/store/slices/chatSlice";
import {
  Box,
  Checkbox,
  CircularProgress,
  Typography,
  colors,
} from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CheckoutForm from "./components/CheckoutForm";
import ShippingCard from "./components/ShippingCard";
import { useTranslation } from "react-i18next";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY!
);

const Checkout = ({ setSelectedTab, setCount, count, remainingPayment }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [luluSuccess, setLuluSuccess] = useState(false);
  const [luluFailed, setLuluFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  const [payment, setPayment] = useState(0);
  const [stripeToken, setStripeToken] = useState<string | null>(null);

  const luluBalance = useSelector(
    (state: { auth: any }) => state.auth.luluBalance
  );

  const handleTokenReceived = (token: string) => {
    setStripeToken(token);
  };

  const handleFinish = async () => {
    if (!isChecked) {
      toast.error(t("checkout.errorMessageNoToken"));
      return;
    }

    setLoading(true);
    try {
      if (stripeToken || payment <= 0) {
        await dispatch(luluPrinting({ quantity: count })).unwrap();
        setLuluSuccess(true);
      } else {
        toast.error(t("checkout.errorMessageNoToken"));
      }
    } catch (error) {
      setLuluFailed(true);
      toast.error(t("checkout.errorMessagePaymentFailed"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(getLuluBalance());
  }, [dispatch]);

  return (
    <Box sx={{ bgcolor: "white", borderRadius: "4.164px" }}>
      <Box sx={{ display: "flex", alignItems: "start", mb: "40px" }}>
        <Checkbox
          color="success"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Typography
          sx={{
            fontSize: { md: "18.752px", sm: "16px", xs: "14px" },
            width: "70%",
          }}
        >
          {t("checkout.description")}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        sx={{
          flexDirection: { md: "row", xs: "column", sm: "column" },
          justifyContent: payment > 0 ? "space-between" : "center",
          bgcolor: "#F3ECDA",
          borderRadius: "4px",
          p: "20px 30px",
          gap : "20px"
        }}
      >
        {payment > 0 && (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              quantity={count}
              remainingPayment={payment}
              onTokenReceived={handleTokenReceived}
            />
          </Elements>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: payment > 0 ? "center" : "end",
            width:
              payment > 0
                ? { xl: "37%", lg: "37%", md: "50%", sm: "100%", xs: "100%" }
                : { xl: "35%", lg: "35%", md: "50%", sm: "75%", xs: "100%" },
          }}
        >
          <Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ShippingCard
                setPayment={setPayment}
                setCount={setCount}
                count={count}
                quantity={luluBalance?.quantity}
                amount={luluBalance?.amount}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: 2,
          my: "20px",
        }}
      >
        <GlobelBtn
          btnText={t("checkout.backBtn")}
          color="#E1683B"
          border="1px solid #E1683B"
          bgColor="#fff"
          onClick={() => setSelectedTab(3)}
        />
        <GlobelBtn
          bgColor="#E1683B"
          color="white"
          btnText={t("checkout.finishBtn")}
          disabled={!isChecked || (payment > 0 && !stripeToken) || loading}
          border="0px"
          onClick={() => {
            if (!loading) {
              handleFinish();
            }
          }}
          isLoading={loading}
        />
      </Box>
      <CustomizationDialog
        open={luluSuccess || luluFailed}
        title=""
        handleClose={() => {
          setLuluFailed(false);
          setLuluSuccess(false);
          router.push("/dashboard/overview");
        }}
        customStyles={{ backgroundColor: "auto", borderRadius: "22px" }}
        marginTop={0}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: { md: "120px", sm: "66.161px", xs: "47px" },
              margin: "auto",
            }}
          >
            <Image
              alt="image"
              src={ModalImage}
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { md: "22px", sm: "21.679px", xs: "15.508px" },
              fontWeight: 700,
              color: "#30422E",
              margin: { md: "25px 0", sm: "15px 0px", xs: "5px" },
            }}
          >
            Printing API
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "16.5px", sm: "16.259px", xs: "11.631px" },
              color: "#30422E",
              width: { md: "400px", sm: "300px", xs: "180px" },
              margin: { md: "0 120px", sm: "0px 55px", xs: "0px" },
            }}
          >
            {luluSuccess
              ? t("checkout.luluPrintingModal.dipatchedText")
              : t("checkout.luluPrintingModal.failedText")}
          </Typography>
          <Box
            sx={{
              margin: { md: "40px 0 30px", sm: "22px 0", xs: "16px 0" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GlobelBtn
              btnText={t("checkout.luluPrintingModal.continueBtn")}
              bgColor="#E1683B"
              color="white"
              onClick={() => {
                setLuluSuccess(false);
                router.push("/dashboard/overview");
              }}
              width={{ md: "234px", sm: "153px", xs: "103px" }}
            />
          </Box>
        </Box>
      </CustomizationDialog>
    </Box>
  );
};

export default Checkout;
