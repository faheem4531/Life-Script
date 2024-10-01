"use client";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
const CryptoJS = require("crypto-js");

import Logo from "@/_assets/svg/logo.svg";
import { ChangePassword } from "@/interface/authInterface";
import { changePassword } from "@/store/slices/authSlice";
import { useCarouselSliderImages } from "@/utils/webContent";
import Carousel from "../../components/authComponent/Carousel";


const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  const currentUrl = router.asPath;
  const token = getTokenFromURL(currentUrl);
  const ciphertext = token?.replace(/ /g, "+");


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

  useEffect(() => {
    if (ciphertext) {
      const bytes = CryptoJS.AES.decrypt(ciphertext, "No_Key_Found");
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      const decryptedData = JSON.parse(originalText);

      formik.setFieldValue("email", decryptedData.email);
      formik.setFieldValue("otp", decryptedData.otp);
      setUserEmail(decryptedData.email);
      setOtp(decryptedData.otp);
    }
  }, [ciphertext]);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      email: "",
      otp: "",
    },
    onSubmit: async (data: ChangePassword) => {

      const newData = data;
      delete newData["confirmPassword"];
      dispatch(changePassword(newData))
        .unwrap()
        .then(() => {
          toast.success(t("ResetPassword.passwordChangedSuccessfully"));
          router.push("/login");
        })
        .catch((error: any) => {
          toast.error(error.message);
        });
    },
    validationSchema: Yup.object({
      password: Yup.string().required(t("ResetPassword.passwordRequired")),
      confirmPassword: Yup.string()
        .required(t("ResetPassword.confirmPasswordRequired"))
        .oneOf([Yup.ref("password")], t("ResetPassword.passwordDoesn'tMatch")),
    }),
  });

  return (

    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: {
          md: "repeat(2, minmax(0, 1fr))",
          xs: "repeat(1, minmax(0, 1fr))",
        },
        gap: "1rem",
        backgroundColor: "#FFF7EA",
        minHeight: "100dvh",
        p: "20px",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ height: "auto", display: { md: "block", xs: "none" } }}>
        <Carousel items={useCarouselSliderImages} />
      </Box>

      <Box>
        <Box sx={{ textAlign: "center" }}>

          <Box textAlign={"center"}>
            <Image src={Logo} width={330} height={125} alt="Logo Image" />
            <Typography
              sx={{ color: "#3e4f3c", fontSize: "30px", marginTop: "25px" }}
            >
              {t("ResetPassword.resetPassword")}
            </Typography>
          </Box>

          <Box sx={{ maxWidth: "470px", m: "0 auto" }}>
            <Typography
              sx={{
                marginTop: "34px",
                fontSize: "21px",
                color: '#3e4f3c',
                textAlign: "left"
              }}
            >
              {t("ResetPassword.password")}
            </Typography>
            <TextField
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: "4px",
                },
                width: "100%",
              }}
              placeholder={t("ResetPassword.password")}
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={(event: any) =>
                formik.setFieldValue("password", event.target.value)
              }
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.password && formik.errors.password && (
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            )}
          </Box>
          <Box sx={{ maxWidth: "470px", m: "0 auto" }}>
            <Typography
              sx={{
                marginTop: "40px",
                fontSize: "21px",
                color: '#3e4f3c',
                textAlign: "left"
              }}
            >
              {t("ResetPassword.confirmPassword")}
            </Typography>
            <TextField
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: "4px",
                },
                width: "100%",
              }}
              placeholder={t("ResetPassword.confirmPassword")}
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              onChange={(event: any) =>
                formik.setFieldValue("confirmPassword", event.target.value)
              }
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <span style={{ color: "red" }}>{formik.errors.confirmPassword}</span>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            justifyContent: "center",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <Button
            variant="contained"
            onClick={(event) => formik.handleSubmit()}
            type="submit"
            disabled={!formik.values.email}
            sx={{
              borderRadius: "4px",
              backgroundColor: "#3e4f3c",
              color: "white",
              width: "100%",
              maxWidth: "400px",
              pt: "16px",
              pb: "16px",

              "&:hover": {
                backgroundColor: "#3e4f3c",
              },
              textTransform: "none",
            }}
          >
            {t("ResetPassword.confirm")}
          </Button>

          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.42);",
              marginTop: "20px",
              fontSize: "18px",
            }}
          >
            {t("ResetPassword.redirect")} <br />{t("ResetPassword.loginPage")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;