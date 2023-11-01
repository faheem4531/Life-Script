import { LoginData } from "@/interface/authInterface";
import { Box, Typography } from "@mui/material";

import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";
import Email from "../../../public/EmailVerification.svg";
import Logo from "../../../public/logo.svg";

const EmailVerificationLink = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const { email } = router.query;

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberMeChange = (event: any) => {
    setRememberMe(event.target.checked);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data: LoginData) => {
      console.log("data", data);
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box sx={{ margin: 0 }}>
        <Image src={Email} alt="image of login" width={650} height={700} />
      </Box>

      <Box>
        <Box textAlign={"center"}>
          <Image src={Logo} width={184} height={100} alt="Logo Image" />
          <Typography
            sx={{ color: "#000000", fontSize: "30px", marginTop: "37.84" }}
          >
            Email Verification{" "}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "291px" }}>
          <Typography
            sx={{ marginTop: "23px", color: "#5B5B5B", fontSize: "21px" }}
          >
            We've sent a verification link to {email}. <br /> Kindly click on
            the link to verify.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailVerificationLink;
