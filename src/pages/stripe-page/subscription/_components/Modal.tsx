"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Logo from "@/_assets/svg/Frame.svg";
import Image from "next/image";
import { ReloadingBar } from "@/components/dashboardComponent/LinearProgressBar";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
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
}) {
  const [value, setValue] = useState(0);
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

  function handleLetMeIn() {
    const name = localStorage.getItem("username");
    router.push(`/getStarted?userName=${name}`);
  }
  useEffect(() => {
    if (value === 100 && selectedTab === "gift") {
      const timeoutId = setTimeout(() => {
        router.push("/");
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
        localStorage.clear();
      };
    }
  }, [value, selectedTab, router]);

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
            {value === 100 && selectedTab !== "verify" && stripeSucceed
              ? t(
                  "stripeFlow.stripePage.emailVerificationModal.transactionSuccessful"
                )
              : selectedTab !== "verify" && stripeFailed
              ? t(
                  "stripeFlow.stripePage.emailVerificationModal.transactionFailed"
                )
              : selectedTab !== "verify"
              ? t("stripeFlow.stripePage.emailVerificationModal.Processing")
              : ""}
            {selectedTab == "verify" &&
              t(
                "stripeFlow.stripePage.emailVerificationModal.emailVerification"
              )}
          </Typography>
          {selectedTab !== "verify" && !stripeFailed && (
            <Box sx={{ width: { xs: "300px", sm: "470px" } }}>
              <ReloadingBar value={value} />
            </Box>
          )}
          {value == 100 && selectedTab == 2 && !stripeFailed && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleLetMeIn}
              sx={{
                width: "260px",
                marginTop: { sm: "40px", xs: "25px" },
                bgcolor: "#e1693b",
                "&:hover": {
                  backgroundColor: "#b5522d",
                },
              }}
            >
              {t("stripeFlow.stripePage.emailVerificationModal.letMeIn")}
            </Button>
          )}
          {value == 100 && selectedTab == "gift" && (
            <Typography sx={{ marginTop: { sm: "40px", xs: "25px" } }}>
              {t("stripeFlow.stripePage.emailVerificationModal.giftRecipient")}
            </Typography>
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