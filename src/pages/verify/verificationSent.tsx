import { LoginData } from "@/interface/authInterface";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
    <Box sx={{
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: {
        md: "repeat(2, minmax(0, 1fr))",
        xs: "repeat(1, minmax(0, 1fr))"
      },
      gap: '1rem',
      backgroundColor: "#FFF7EA",
      minHeight: "100vh",
      p: "20px",
      boxSizing: 'border-box',
      color: "#000"
    }}>
      <Box sx={{ margin: 0, display: { md: 'block', xs: 'none' } }}>
        <Image src={Email} alt="image of login" style={{ height: "100%", maxHeight: "92vh", width: "100%" }} />
      </Box>

      <Box >
        <Box textAlign={"center"}>
          <Image src={Logo} width={184} height={100} alt="Logo Image" />
          <Typography
            sx={{ color: "#000000", fontSize: "30px", marginTop: "37.84" }}
          >
            {t("VerificationSent.emailVerification")}{" "}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20%" }}>
          <Typography
            sx={{ marginTop: "23px", color: "#5B5B5B", fontSize: "21px", textAlign: 'center' }}
          >
            {t("VerificationSent.verifcationLink")} {email}. <br /> {t("VerificationSent.clicktoVerify")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailVerificationLink;
