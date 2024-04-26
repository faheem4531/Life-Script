import { Box, Button, Checkbox, Divider, FormControlLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import BasicPlanCard from './BasicPlanCard';
import CheckIcon from '@mui/icons-material/Check';
import stripeLogo from "../../../../../public/stripeLogo.svg";
import ModalImage from "@/_assets/png/view-template-modal.png";
import GlobelBtn from "@/components/button/Button";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import { stripePaymentRegister, VerifyReferralCode } from "@/store/slices/chatSlice";
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
import { toast } from 'react-toastify';
import PaymentProcessingModal from './Modal';
import Check from "@/_assets/svg/varifyedCheck.svg"
import UnCheck from "@/_assets/svg/unVarifiedCheck.svg"

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

const PurchaseForm = ({ onClick, selectedTab }) => {



  const [selectedBooks, setSelectedBooks] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const [subscribeUpdates, setSubscribeUpdates] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [paymentSucess, setPaymentSucess] = useState(false)
  const [paymentFail, setPaymentFail] = useState(false)




  //New Data
  const dispatch: any = useDispatch();
  const options = useOptions();
  const [isError, setIsError] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [confirmationStripe, setConfirmationStripe] = useState(false);
  const [stripeSucceed, setStripeSucceed] = useState(false);
  const [stripeFailed, setStripeFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [commissionState, setCommissionState] = useState(0);
  const stripe = useStripe();
  const router = useRouter();
  const elements = useElements();
  const { t } = useTranslation();

  const { price, category } = router.query;


  function replaceCategory(category) {
    switch (category) {
      case "Basic":
        return "BasicPlan";
      case "Standard":
        return "GoldPlan";
      case "Premium":
        return "PremiumPlan";
    }
  }


  const HandleVerifyReferralCode = async (id) => {
    dispatch(
      VerifyReferralCode({
        id: referralCode
      })
    )
      .unwrap()
      .then((res) => {

        setCommissionState(res.commission_percent);
        // Show toast message when referral code is verified
        setPaymentSucess(true)
        setPaymentFail(false)
        toast.success("Referral code verified successfully!");
      })
      .catch(() => {
        // Handle error
        setPaymentSucess(false)
        setPaymentFail(true)
        toast.error("Error verifying referral code!");
      });
  }

  const totalPriceCalculation = (subscriptionPrice, booksNumber) => {
    let totalBookPrice = booksNumber * 39;
    let totalPriceWithBook = subscriptionPrice + totalBookPrice;
    return totalPriceWithBook
  }

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
      const totalPrice = totalPriceCalculation(subscriptionPrice, selectedBooks)

      // console.log("Total Price:", totalPrice);

      // const payload = {
      //   country: "USA",
      //   amount: totalPrice,
      //   token: result.token,
      //   packageName: replaceCategory(category),
      //   cardHolderName: cardHolderName,
      //   numberOfBooks: selectedBooks && selectedBooks,
      //   bookPrice: selectedBooks && selectedBooks * 39,
      //   commission: commissionState,
      //   processFrom: "register"
      // };

      // console.log("Payload:", payload);
      dispatch(
        stripePaymentRegister({
          country: "USA",
          amount: totalPrice,
          token: result.token,
          packageName: replaceCategory(category),
          cardHolderName: cardHolderName,
          numberOfBooks: selectedBooks && selectedBooks,
          bookPrice: selectedBooks && selectedBooks * 39,
          commission: commissionState,
          processFrom: "register"
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


  const dropDownOptions = [
    { value: 0, label: 'Included with Subscription', hidden: true },
    { value: 1, label: "(1 extra books)", price: "+ $78", color: "#e1693b" },
    { value: 2, label: "(2 extra books)", price: "+ $138", color: "#e1693b" },
    { value: 3, label: "(3 extra books)", price: "+ $679", color: "#e1693b" },
    { value: 4, label: "(4 extra books)", price: "+ $378", color: "#e1693b" },
    { value: 5, label: "(5 extra books)", price: "+ $455", color: "#e1693b" }
  ];

  const handleChange = (event) => {
    setSelectedBooks(event.target.value);
  };

  const handleReferralCodeChange = (event) => {
    setReferralCode(event.target.value);
  };


  const handleSubscribeUpdatesChange = (event) => {
    setSubscribeUpdates(event.target.checked);
  };

  // const handleSubmit = async (event) => {
  //   setOpenModal(true)
  //   event.preventDefault();
  //   // Placeholder for API integration
  //   console.log({
  //     selectedBooks,
  //     referralCode,
  //     cardHolderName,
  //     cardNumber,
  //     expiry,
  //     cvc,
  //     subscribeUpdates,
  //   });
  //   // You can call your API endpoint here and handle the response accordingly
  // };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box className={"Container"} sx={{ width: "100%", maxWidth: "1370px", margin: { sm: "0 0 30px 70px", xs: "0 20px 30px 20px" } }}>
          <Box>
            <Typography sx={{ fontSize: "30px", marginBottom: "20px" }}>Purchase LifeScript</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", columnGap: "50px" }}>

            <Box sx={{ maxWidth: { sm: "600px", xs: "100%" }, width: "100%" }}>
              <Box>
                <Typography
                  sx={{
                    color: "#30422E",
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  }}
                >
                  Number of books
                </Typography>
                <Select
                  value={selectedBooks}
                  onChange={handleChange}
                  sx={{ width: "100%", backgroundColor: "white", marginBottom: "50px" }}
                >
                  {dropDownOptions.map((option, index) => (
                    <MenuItem key={option.value} value={option.value} hidden={option.hidden}>
                      {selectedBooks === option.value && <CheckIcon sx={{ marginRight: '8px', color: "#e1693b" }} />} {/* Conditional rendering */}
                      <span>{`${index + 1}. ${option.label}`}</span>
                      <span style={{ color: option.color, marginLeft: "10px" }}>{option.price}</span>
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ marginBottom: "40px", position: "relative" }}>
                <Typography>Referred by a friend? Enter Referral code here</Typography>
                <Divider sx={{ width: "100%" }} />

                <TextField
                  label="Referral Code"
                  value={referralCode}
                  onChange={handleReferralCodeChange}
                  sx={{ width: "100%", backgroundColor: "white", marginTop: "15px", }}
                />
                <Box sx={{
                  position: "absolute",
                  right: "12px",
                  bottom: "12px",
                  borderRadius: "4px", p: "0 10px",
                  display: "flex",
                  alignItems: "center",
                  bgcolor: (paymentSucess && "#7F886B") || (paymentFail && "#F06262") || (!paymentFail && !paymentSucess && "#F4F4F4"),
                }}>
                  <Button sx={{ color: paymentSucess || paymentFail ? "#FFF" : "#30422E" }}
                    onClick={() => { HandleVerifyReferralCode(referralCode) }}>
                    Verify
                  </Button>
                  {paymentSucess || paymentFail && <Image src={paymentSucess ? Check : UnCheck} alt="checks" />}
                </Box>
              </Box>

              <Box>
                <Typography>Checkout</Typography>
                <Divider sx={{ width: "100%", marginBottom: "50px" }} />

                <Typography sx={{ marginBottom: "5px" }}>Prefer to enter details manually? Please provide your payment info below.</Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Box>
                      <TextField
                        variant="outlined"
                        onChange={(event: any) => setCardHolderName(event.target.value)}
                        placeholder={`${t("SubsPlan.CardholderName")}`}
                        name="title"
                        sx={{
                          // marginTop: "10px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "3px",
                            backgroundColor: "white",
                            // border: "1px solid gray",
                            height: "46px",
                            p: "10px 22px",
                          },
                          width: "100%",
                        }}
                      />
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          width: "100%",
                          // marginTop: "10px",
                          borderRadius: "3px",
                          backgroundColor: "white",
                          p: "12px 35px",
                          // border: "1px solid #186F65",
                          border: "1px solid gray",
                        }}
                      >
                        <CardNumberElement
                          options={{
                            ...options,
                            placeholder: 'Card Number', // Placeholder text
                          }}
                          onChange={(event) => {
                            // console.log("CardNumberElement [change]", event);
                            setIsError(!event.complete || !!event.error);
                          }}
                        />
                      </Box>
                    </Box>



                    <Box
                      sx={{
                        display: "flex",
                        // gap: "20px",
                        alignItems: "center",
                        width: "100%",
                        // mb: "20px",
                      }}
                    >
                      <Box sx={{ width: "50%" }}>
                        <Box
                          sx={{
                            width: "100%",
                            // marginTop: "10px",
                            borderRadius: "3px",
                            backgroundColor: "white",
                            p: "12px 35px",
                            border: "1px solid gray",
                          }}
                        >
                          <CardExpiryElement
                            options={options}
                            onChange={(event) => {
                              // console.log("CardExpiryElement [change]", event);
                              setIsError(!event.complete || !!event.error);
                            }}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ width: "50%" }}>
                        <Box
                          sx={{
                            width: "100%",
                            // marginTop: "10px",
                            borderRadius: "3px",
                            backgroundColor: "white",
                            p: "12px 35px",
                            border: "1px solid gray",
                          }}
                        >
                          <CardCvcElement
                            options={options}
                            onChange={(event) => {
                              // console.log("CardCvcElement [change]", event);
                              setIsError(!event.complete || !!event.error);
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ border: "1px solid black", padding: "10px", borderRadius: "5px", marginTop: "30px", width: "100%" }}>
                      <FormControlLabel
                        control={<Checkbox checked={subscribeUpdates} onChange={handleSubscribeUpdatesChange} sx={{ color: "black" }} />}
                        label="Yes, send me updates with storytelling techniques, inspirational stories, and exclusive offers."
                      />
                    </Box>

                    <Box sx={{ backgroundColor: "#c5c4ae", padding: "10px", width: "100%", marginTop: "20px" }}>
                      <Typography sx={{ fontSize: "14px" }}>
                        We treasure your privacy and security. Proceeding with this purchase means you’re okay with LifeScript&rsquos terms and conditions and privacy policy.
                      </Typography>
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
                        bgColor="#b5522d"
                        color="white"
                        btnText={
                          loading
                            ? "Loading..."
                            : `Buy for $${Number(price) + (selectedBooks && selectedBooks * 39)}`
                        }
                        onClick={() => {
                          if (!loading && !isError && cardHolderName) {
                            setConfirmationStripe(true);
                          }
                        }}
                        p={"10px 20px"}
                        width={"200px"}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>



              {/* <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{
                  width: "200px",
                  marginTop: "50px",
                  bgcolor: "#e1693b",
                  "&:hover": {
                    backgroundColor: "#b5522d",
                  },
                }}>
                Buy for $135
              </Button> */}

              <Box sx={{ marginTop: "50px", display: "flex", columnGap: "10px", alignItems: "center" }}>
                <Typography>Secure Payment with</Typography>
                <Image
                  src={stripeLogo}
                  alt='Stripe logo Image'
                />
              </Box>
            </Box>

            <Box sx={{ margin: "0 35px 35px 0", display: { md: "block", sm: "none", xs: "none" } }}>
              <BasicPlanCard price={price} category={category} />
            </Box>
          </Box>
        </Box>
      </Box >


      <PaymentProcessingModal
        openModal={confirmationStripe}
        selectedTab={selectedTab}
        handleClose={() => setConfirmationStripe(false)}
        stripeSucceed={stripeSucceed}
        stripeFailed={stripeFailed}
      />
      {/* <PaymentProcessingModal
        openModal={openModal}
        selectedTab={selectedTab}
        handleClose={() => setOpenModal(false)}
      /> */}
      {/* <TransitionsDialog
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
      /> */}

      {/* <CustomizationDialog
        open={stripeSucceed || stripeFailed}
        title=""
        handleClose={() => {
          setStripeSucceed(false);
          setStripeFailed(false);
          // stripeFailed
          //   ? router.push("/dashboard/SubscribePlans")
          //   : router.push("/dashboard/chapters");
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
            {stripeFailed ? `${t("SubsPlan.Sorry")}` : `${t("SubsPlan.TY")}`}
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
              bgColor="#197065"
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
      </CustomizationDialog> */}
    </>

  );
}

// export default PurchaseForm;
export default dynamic(() => Promise.resolve(PurchaseForm), {
  ssr: false,
});