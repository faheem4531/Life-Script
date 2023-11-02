"use client";
import { changePassword } from "@/store/slices/authSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
const CryptoJS = require("crypto-js");

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Forget from "../../../public/ForgetPasswod.svg";
import Logo from "../../../public/logo.svg";

import { ChangePassword } from "@/interface/authInterface";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch: any = useDispatch();

  const router = useRouter();
  const currentUrl = router.asPath;
  const token = getTokenFromURL(currentUrl);
  const ciphertext = token?.replace(/ /g, "+");
  console.log("token", token, typeof token);

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
      console.log("data", data);
      const newData = data;
      delete newData["confirmPassword"];
      dispatch(changePassword(newData))
        .unwrap()
        .then(() => {
          toast.success("Password changed successfully");
          router.push("/");
        })
        .catch((error: any) => {
          toast.error(error.message);
        });
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password")], "Passwords does not match"),
    }),
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around",backgroundColor:'#FFF7EA' }}>
      <Box sx={{ margin: 0 }}>
      <Image
            src={Forget}
            alt="login Image"
            style={{ height: "100%", maxHeight: "92vh", width: "100%" }}
          />
      </Box>

      <Box>
        <Box textAlign={"center"}>
          <Image src={Logo} width={223} height={135} alt="Logo Image" />
          <Typography
            sx={{ color: "#000000", fontSize: "30px", marginTop: "50px" }}
          >
            Reset Password
          </Typography>
        </Box>

        <Box>
          <Box>
            <Typography
              sx={{
                // marginRight: "450px",

                marginTop: "34px",
                fontSize: "21px",
              }}
            >
              Password
            </Typography>
          </Box>
          <TextField
            sx={{
              marginTop: "15px",
              "& .MuiOutlinedInput-root": {
                backgroundColor:'white',
                borderRadius: "50px", // Adjust the border radius as needed
              },
              width: "580px",
            }}
            placeholder="Password"
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
        </Box>
        {formik.touched.password && formik.errors.password && (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        )}
        <Box>
          <Box>
            <Typography
              sx={{
                // marginRight: "450px",

                marginTop: "40px",
                fontSize: "21px",
              }}
            >
              Confirm Password
            </Typography>
          </Box>
          <TextField
            sx={{
              marginTop: "15px",
              "& .MuiOutlinedInput-root": {
                backgroundColor:'white',
                borderRadius: "50px", // Adjust the border radius as needed
              },
              width: "580px",
            }}
            placeholder="Confirm password"
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
        </Box>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span style={{ color: "red" }}>{formik.errors.confirmPassword}</span>
        )}
        <Box
          sx={{
            justifyContent: "center",
            textAlign: "center",
            marginTop: "110px",
          }}
        >
          <Button
            variant="contained"
            onClick={(event) => formik.handleSubmit()}
            type="submit"
            disabled={!formik.values.email}
            sx={{
              borderRadius: "48px",
              backgroundColor: "#186F65",
              color: "white",
              width: "404px",
              pt: "16px",
              pb: "16px",

              "&:hover": {
                backgroundColor: "#186F65",
              },
              textTransform: "none",
            }}
          >
            Reset Password
          </Button>

          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.42);",
              marginTop: "20px",
              fontSize: "18px",
            }}
          >
            After clicking Reset Password. You will be redirected to the <br />{" "}
            login page.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
