import { LoginData } from "@/interface/authInterface";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import Forget from "../../../public/ForgetPasswod.svg";
import SignupImage from "../../../public/Signup.svg";
import fbLogo from "../../../public/fbIcon.svg";
import googleLogo from "../../../public/googleIcon.svg";
import Logo from "../../../public/logo.svg";
import styles from "./Login.module.css";

const ForgetPassword = () => {
  // const isXs = useMediaQuery("(max-width:600px)");
  // const isMd = useMediaQuery("(min-width:601px) and (max-width:960px)");
  // const isLg = useMediaQuery("(min-width:961px)");
  // const isXl = useMediaQuery('(min-width: 1050px)');

  // let imageStyle = {
  //   width: "300px",
  //   height: "400px",
  // };

  // if (isMd) {
  //   imageStyle = {
  //     width: "400px",
  //     height: "500px",
  //   };
  // }

  // if (isLg) {
  //   imageStyle = {
  //     width: "500px",
  //     height: "700px",
  //   };
  // }

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
    // <Grid container spacing={1}>
    //   <Grid item xs={12} md={6} sm={6} textAlign={"center"}>
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box sx={{ margin: 0 }}>
        <Image
          src={Forget}
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
Forgot Password?          </Typography>
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
              Email 
            </Typography>
            <TextField
              variant="outlined"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
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
          {formik.touched.email && formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          )}
          <Typography sx={{marginTop:'23px', color :'#5B5B5B', fontSize:'21px'}}>
          We’ve sent you an email with a verification link. Kindly <br /> click on it and reset your password.
          </Typography>
          
          <Box sx={{ justifyContent: "center", textAlign: "center", marginTop:'130px' }}>
            <Button
              variant="contained"
              onClick={(event) => formik.handleSubmit()}
              type="submit"
              sx={{
                borderRadius: "48px",
                backgroundColor: "#186F65",
                color: "white",
                width: "310px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#186F65",
                },
                textTransform:'none'
              }}
            >
              Next
            </Button>

        <Typography sx={{color:'rgba(0, 0, 0, 0.42);', marginTop:'20px'}}>Already have an account? Login</Typography>
          </Box>
      
        </Box>
      </Box>
    </Box>
    // {/* </Grid> */}
    // {/* </Grid> */}
  );
};

export default ForgetPassword ;
