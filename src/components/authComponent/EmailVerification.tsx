"use client";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { verifyEmail } from "@/store/slices/authSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Email from "../../../public/EmailVerification.svg";
import Logo from "../../../public/logo.svg";

const CryptoJS = require("crypto-js");

const EmailVerification = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch: any = useDispatch();
  const { t } = useTranslation();

  function handleVerifyEmail() {
    dispatch(verifyEmail({ email: userEmail, otp: otp }))
      .unwrap()
      .then(() => {
        toast.success("Email verified successfully");
        router.push("/");
      })
      .catch((error: any) => {
        toast.error(error || "Failed to verify email");
      });
  }

  function getTokenFromURL(url: any) {
    var queryString = url.split("?")[1];
    var params = new URLSearchParams(queryString);
    return params.get("token");
  }
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberMeChange = (event: any) => {
    setRememberMe(event.target.checked);
  };

  const router = useRouter();
  const currentUrl = router.asPath;
  const token = getTokenFromURL(currentUrl);
  const ciphertext = token?.replace(/ /g, "+");
  console.log("token", token, typeof token);

  useEffect(() => {
    if (ciphertext) {
      const bytes = CryptoJS.AES.decrypt(ciphertext, "No_Key_Found");
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      const decryptedData = JSON.parse(originalText);

      setUserEmail(decryptedData.email);
      setOtp(decryptedData.otp);
    }
  }, [ciphertext]);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box sx={{ margin: 0 }}>
        <Image
          src={Email}
          alt="image of login"
          width={650}
          height={700}
          // style={imageStyle}
        />

        {/* </Grid> */}
      </Box>
      {/* <Grid item xs={12} md={6} sm={6} sx={{ textAlign: "center" }}> */}
      <Box
      // textAlign={'center'}
      >
        <Box textAlign={"center"}>
          <Image src={Logo} width={184} height={100} alt="Logo Image" />
          <Typography
            sx={{ color: "#000000", fontSize: "30px", marginTop: "37.84" }}
          >
            {t("Verify.emailVerification")}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          <Box>
            <Typography
              sx={{
                marginRight: "300px",
                marginTop: "56px",
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              {t("Verify.email")}
            </Typography>
            <TextField
              variant="outlined"
              name="email"
              value={userEmail}
              disabled
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px", // Adjust the border radius as needed
                },
                width: "580px",
              }}
            />
          </Box>
          <Typography
            sx={{ marginTop: "23px", color: "#5B5B5B", fontSize: "21px" }}
          >
            {t("Verify.emailVerified")}
            <br /> {t("Verify.proceedForward")}
          </Typography>

          <Box
            sx={{
              justifyContent: "center",
              textAlign: "center",
              marginTop: "130px",
            }}
          >
            <Button
              variant="contained"
              disabled={!userEmail}
              onClick={(event: any) => handleVerifyEmail()}
              sx={{
                borderRadius: "48px",
                backgroundColor: "#186F65",
                color: "white",
                width: "310px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#186F65",
                },
                textTransform: "none",
              }}
            >
              {t("Verify.letsBegin")}{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailVerification;
