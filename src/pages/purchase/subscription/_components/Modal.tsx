"use client";
// External libraries and frameworks
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// UI libraries or component libraries
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// Assets
import Logo from "@/_assets/svg/Frame.svg";

// Custom components or modules
import { ReloadingBar } from "@/components/dashboardComponent/LinearProgressBar";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#F3ECDA",
  color: "#30422E",
  borderRadius: "2px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function PaymentProcessingModal({
  openModal,
  handleClose,
  selectedTab,
  stripeSucceed,
  stripeFailed,
  plan,
  verificationReq
}) {
  const [value, setValue] = useState(0);
  const [emailVerify, setEmailVerication] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    let intervalId;

    if (openModal) {
      intervalId = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue === 100) {
            clearInterval(intervalId);
            return prevValue;
          }
          return prevValue + 1;
        });
      }, 60);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [openModal]);

  const handleGiftPages = () => {
    const timeoutId = setTimeout(() => {
      if (plan === "Basic") {
        router.push("/thank-you/gift-basic");
      }
      else if (plan === "Standard") {
        router.push("/thank-you/gift-standard");
      }
      else {
        router.push("/thank-you/gift-premium");
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      localStorage.clear();
    };
  }

  const handleBuyPages = () => {
    if (verificationReq) {
      setEmailVerication(true);
      localStorage.clear();
      setTimeout(() => {
        if (plan === "Basic") {
          router.push("/thank-you/buy-basic");
        }
        else if (plan === "Standard") {
          router.push("/thank-you/buy-standard");
        } else {
          router.push("/thank-you/buy-premium");
        }
      }, 4000)
    }
    else {

      if (plan === "Basic") {
        router.push(`/thank-you/buy-basic?auth=${"auto"}`);
      }
      else if (plan === "Standard") {
        router.push(`/thank-you/buy-standard?auth=${"auto"}`);
      } else {
        router.push(`/thank-you/buy-premium?auth=${"auto"}`);
      }
    }
  }

  useEffect(() => {
    if (value === 100 && selectedTab === "gift") {
      handleGiftPages();
    }

    if (value === 100 && selectedTab === "buy") {
      handleBuyPages();
    }
  }, [value, selectedTab, plan, verificationReq,]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          style: { backgroundColor: "rgba(48, 66, 46, 0.85)" },
        },
      }}
    >
      <Fade in={openModal}>
        <Box sx={{ ...style, padding: { sm: "40px", xs: "30px" } }}>
          <Image src={Logo} alt="logo" />
          <Typography
            id="transition-modal-title"
            sx={{
              margin: { sm: "40px 0", xs: "25px 0" },
              fontSize: { sm: "32px", xs: "28px" },
            }}
          >
            {!emailVerify && value === 100 && selectedTab !== "verify" && stripeSucceed
              ? t(
                "stripeFlow.stripePage.emailVerificationModal.transactionSuccessful"
              )
              : !emailVerify && selectedTab !== "verify" && stripeFailed
                ? t(
                  "stripeFlow.stripePage.emailVerificationModal.transactionFailed"
                )
                : !emailVerify && selectedTab !== "verify"
                  ? t("stripeFlow.stripePage.emailVerificationModal.Processing")
                  : ""}
            {selectedTab == "verify" &&
              t(
                "stripeFlow.stripePage.emailVerificationModal.emailVerification"
              )}
          </Typography>
          {!emailVerify && selectedTab !== "verify" && !stripeFailed && (
            <Box sx={{ width: { xs: "300px", sm: "470px" } }}>
              <ReloadingBar value={value} />
            </Box>
          )}
          {!emailVerify && value == 100 && selectedTab == "gift" && (

            <Typography sx={{ marginTop: { sm: "40px", xs: "25px" } }}>
              {!emailVerify && t("stripeFlow.stripePage.emailVerificationModal.giftRecipient")}
            </Typography>
          )}
          {emailVerify && (
            <Box textAlign={"center"}>


              {selectedTab == "verify" ? (null) : (<Typography
                sx={{ color: "#000000", fontSize: "30px" }}
              >
                {t("VerificationSent.emailVerification")}
              </Typography>)}


              <Typography sx={{ maxWidth: "400px" }}>
                {t(
                  "stripeFlow.stripePage.emailVerificationModal.emailVerficationDescription"
                )}
              </Typography>
            </Box>
          )}
          {selectedTab === "verify" && (
            <Typography sx={{ maxWidth: "400px" }}>
              {t(
                "stripeFlow.stripePage.emailVerificationModal.emailVerficationDescription"
              )}
            </Typography>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}