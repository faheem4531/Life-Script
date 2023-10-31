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

const ResetPassword = () => {


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
   
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box sx={{ margin: 0 }}>
        <Image
          src={Forget}
          alt="image of login"
          width={650}
          height={700}
      
        />


      </Box>
     
      <Box
     
      >
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
                fontSize: '21px',
              }}
            >
              Password
            </Typography>
            </Box>
              <TextField
                sx={{
                  marginTop: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px", // Adjust the border radius as needed
                  },
                  width: "580px",
                }}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
            <Typography
              sx={{
                // marginRight: "450px",
                
                marginTop: "40px",
                fontSize: '21px',
              }}
            >
             Confirm Password
            </Typography>
            </Box>
              <TextField
                sx={{
                  marginTop: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px", // Adjust the border radius as needed
                  },
                  width: "580px",
                }}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
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
              sx={{
                borderRadius: "48px",
                backgroundColor: "#186F65",
                color: "white",
                width: "404px",
                pt:'16px',
                pb:'16px',
                
                "&:hover": {
                  backgroundColor: "#186F65",
                },
                textTransform: "none",
              }}
            >
              Continue
            </Button>

            <Typography
              sx={{ color: "rgba(0, 0, 0, 0.42);", marginTop: "20px",fontSize:'18px' }}
            >
             After clicking Rest Password. You will be redirected to the <br/> login page.
            </Typography> 
            </Box>
            </Box>
      </Box>
    
  
  );
};

export default ResetPassword;
