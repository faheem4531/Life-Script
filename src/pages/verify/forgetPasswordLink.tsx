import { LoginData } from "@/interface/authInterface";
import { Box, Typography } from "@mui/material";

import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";
import Forget from "../../../public/ForgetPasswod.svg";
import Logo from "../../../public/logo.svg";

const ForgetPasswordLink = () => {
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#FFF7EA",
        height: "100vh",
        p: "20px",
      }}
    >
      <Box sx={{ margin: 0 }}>
        <Image
          src={Forget}
          alt="login Image"
          style={{ height: "100%", maxHeight: "92vh", width: "100%" }}
        />
      </Box>

      <Box>
        <Box textAlign={"center"}>
          <Image src={Logo} width={223} height={165} alt="Logo Image" />
          <Typography
            sx={{ color: "#000000", fontSize: "30px", marginTop: "40px" }}
          >
            Forgot Password?{" "}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          <Box>
            <Typography
              sx={{
                color: "#5B5B5B",
                fontSize: "21px",
                justifyContent: "left",
              }}
            >
              Reset Password link has been sent to <br />
              {email}. Please click on the link to <br /> reset your password
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPasswordLink;
