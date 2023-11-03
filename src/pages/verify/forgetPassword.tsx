import { Box, Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { ForgetPassword } from "@/interface/authInterface";
import { forgetPassword } from "@/store/slices/authSlice";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Forget from "../../../public/ForgetPasswod.svg";
import Logo from "../../../public/logo.svg";

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [sentFailed, setSentFailed] = useState(false);
  const dispatch: any = useDispatch();
  const [emailSent, setEmailSent] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberMeChange = (event: any) => {
    setRememberMe(event.target.checked);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      type: "password",
    },
    onSubmit: async (data: ForgetPassword) => {
      console.log("data", data);
      setSentFailed(false);
      dispatch(forgetPassword(data))
        .unwrap()
        .then(() => {
          toast.success("Email sent successfully");
          router.push(`/verify/forgetPasswordLink?email=${data.email}`);
        })
        .catch((error: any) => {
          setSentFailed(true);
        });
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
    }),
  });

  return (
    <Grid
      sx={{
        display: "grid",
        backgroundColor: "#FFF7EA",
        alignItems: 'center',
        gridTemplateColumns: {
          sm: "repeat(2, minmax(0, 1fr))",
          xs: "repeat(1, minmax(0, 1fr))"
        },
        gap: '1rem',
        p: "20px",
        height: "100dvh",
        overflowY: 'scroll',
      }}
    >
      <Box sx={{ margin: 0, display: {sm: 'block', xs: 'none'} }}>
        <Image
          src={Forget}
          alt="login Image"
          style={{ height: "100%", maxHeight: "92vh", width: "100%" }}
        />
      </Box>
      <Box sx={{
        maxWidth: "500px",
        width: '100%',
        margin: '0 auto'
      }}
      >
        <Box textAlign={"center"}>
          <Image src={Logo} width={223} height={165} alt="Logo Image" />
          <Typography
            sx={{ color: "#000000", fontSize: "30px", marginTop: "37.84" }}
          >
            Forgot Password?{" "}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          <Box>
            <Typography
              sx={{ marginTop: "23px", color: "#5B5B5B", fontSize: "21px" }}
            >
              Please enter email associated with the Lifescript <br /> account
              to send password reset link.
            </Typography>
            <Typography
              sx={{
                // marginRight: "300px",
                marginTop: "34px",
                // fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                fontSize: "21px",
              }}
            >
              Email
            </Typography>
            <TextField
              variant="outlined"
              name="email"
              placeholder="Enter you Email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: "50px", // Adjust the border radius as needed
                },
                width: "100%",
              }}
            />
          </Box>
          {formik.touched.email && formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          )}
          {sentFailed && (
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ color: "red" }}>User not found</Typography>
            </Box>
          )}

          <Box
            sx={{
              justifyContent: "center",
              textAlign: "center",
              marginTop: "60px",
            }}
          >
            <Button
              variant="contained"
              onClick={(event) => formik.handleSubmit()}
              type="submit"
              sx={{
                borderRadius: "48px",
                backgroundColor: "#186F65",
                color: "white",
                width: "300px",
                padding: "15px",
                "&:hover": {
                  backgroundColor: "#186F65",
                },
                textTransform: "none",
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ForgetPassword;
