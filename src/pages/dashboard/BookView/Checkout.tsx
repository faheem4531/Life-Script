import ModalImage from "@/_assets/svg/Frame.svg";
import GlobelBtn from "@/components/button/Button";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import { getLuluBalance } from "@/store/slices/authSlice";
import { luluPrinting } from "@/store/slices/chatSlice";
import { Box, Checkbox, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import CheckoutForm from "./components/CheckoutForm";
import ShippingCard from "./components/ShippingCard";
import { useTranslation } from "react-i18next";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);

const Checkout = ({ setSelectedTab, setCount, count, remainingPayment }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [luluSuccess, setLuluSuccess] = useState(false);
  const [luluFailed, setLuluFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  const [payment, setPayment] = useState(0)

  const handleFinish = () => {
    if (isChecked === true) {
      setLoading(true);
      dispatch(luluPrinting({ quantity: count }))
        .unwrap()
        .then(() => {
          setLuluSuccess(true);
          setLoading(false);
        })
        .catch(() => {
          setLuluFailed(true);
          toast.error("Failed to call Lulu api");
          setLoading(false);
        });

      //router.push("/dashboard/overview"
    }
  };

  useEffect(() => {
    dispatch(getLuluBalance());
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "4.164px",
          p: "20px 24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            mb: "40px",
          }}
        >
          <Box >
            <Checkbox
              color="success"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { md: "18.752px", sm: "16px", xs: "14px" },
              width: "70%",
            }}
          >
            {t("checkout.description")}
          </Typography>
        </Box>
        <Box display={"flex"} sx={{ flexDirection: { md: "row", xs: "column", sm: "column" }, gap: "30px", bgcolor: "#F3ECDA", borderRadius: "4px", p: "20px 30px" }}>
          {payment > 0 && (
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  quantity={count}
                  remainingPayment={payment}
                />
              </Elements>
            </Box>
          )}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: payment > 0 ? "end" : "center",
            }}
          >
            <Box width={"100%"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: remainingPayment > 0 ? "end" : "center",
                }}
              >
                <ShippingCard setPayment={setPayment} setCount={setCount} count={count} quantity />
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
          <Box>
            <GlobelBtn
              btnText= {t("checkout.backBtn")}
              color="#E1683B"
              border="1px solid #E1683B"
              bgColor="#fff"
              onClick={() => {
                setSelectedTab(3);
              }}
            />
          </Box>
          <Box
            sx={{
              opacity: !isChecked ? "0.5" : "1",
            }}
          >
            <GlobelBtn
              bgColor="#E1683B"
              color="white"
              btnText={t("checkout.finishBtn")}
              disabled={!isChecked}
              border="0px"
              onClick={!loading && handleFinish}
            />
          </Box>
        </Box>
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
              margin: { md: "25px 0", sm: "15px 0px", xs: "5px" },
            }}
          >
            Lulu Printing API
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "16.5px", sm: "16.259px", xs: "11.631px" },
              color: "#30422E",
              width: { md: "400px", sm: "300px", xs: "180px" },
              margin: { md: "0 120px", sm: "0px 55px", xs: "0px" },
            }}
          ></Typography>
          {luluSuccess
            ?  t("checkout.luluPrintingModal.dipatchedText")
            : t("checkout.luluPrintingModal.failedText")}
          <Box
            sx={{
              margin: { md: "40px 0 30px", sm: "22px 0", xs: "16px 0" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GlobelBtn
              btnText={ t("checkout.luluPrintingModal.continueBtn")}
              bgColor="#E1683B"
              color="white"
              onClick={() => {
                router.push("/dashboard/overview");
                setLuluSuccess(false);
                setLuluFailed(false);
              }}
              width={{ md: "234px", sm: "153px", xs: "103px" }}
            />
          </Box>
        </Box>
      </CustomizationDialog>

      {/* <TransitionsDialog
        open={luluSuccess || luluFailed}
        heading="Lulu Printing API"
        description={
          luluSuccess
            ? "Your Printing Call has been dispatched. You can check status in Overview page"
            : "Your Printing Call has been Failed. Try again with valid inputs"
        }
        cancel={() => {
          setLuluFailed(false);
          setLuluSuccess(false);
        }}
        closeModal={() => {
          setLuluFailed(false);
          setLuluSuccess(false);
        }}
        proceed={() => router.push("/dashboard/BookView")}
      /> */}
    </>
  );
};

export default Checkout;
