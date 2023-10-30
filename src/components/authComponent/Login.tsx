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
import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import LoginImage from "../../../public/Login.svg";
import SignupImage from "../../../public/Signup.svg";
import fbLogo from "../../../public/fbIcon.svg";
import googleLogo from "../../../public/googleIcon.svg";
import Logo from "../../../public/logo.svg";
import styles from "./Login.module.css";

const Login = () => {
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
          src={LoginImage}
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
            Your Autobiography Companion
          </Typography>
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          <Typography sx={{ color: "#5B5B5B" }}>
            Continue the immersive experience of expressing your
          </Typography>
          <Typography sx={{ color: "#5B5B5B" }}>
            {" "}
            personal narrative in a unique way.
          </Typography>

          <Box>
            <Typography
              sx={{
                marginRight: "300px",
                marginTop: "56px",
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              Email Address
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter Your E-mail Address"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
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
          <Box>
            <Box>
              <Typography
                sx={{
                  marginRight: "300px",
                  marginTop: "40px",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Password
              </Typography>
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
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            {formik.touched.password && formik.errors.password && (
              <span
                style={{
                  color: "red",
                }}
              >
                {formik.errors.password}
              </span>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                // gap: 15,
                marginTop: "10px",
                // marginLeft: { sm: "", md: "120px" },
                // justifyContent: "center",
              }}
            >
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                  sx={{
                    "& .MuiTypography-root": {
                      // fontSize: { xs: 12, sm: 14, md: 12, lg: 16 },
                      fontSize: "16",
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    marginTop: "9px",
                    // fontSize: { xs: 12, sm: 14, md: 12, lg: 16 },
                    fontSize: "16",
                  }}
                >
                  Forget Password?
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ justifyContent: "center", textAlign: "center" }}>
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
              }}
            >
              Login
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <Box>
                <Divider
                  sx={{
                    marginTop: "10px",

                    backgroundColor: "black",
                    width: "97px",
                  }}
                  orientation="horizontal"
                />
              </Box>
              <Box>
                <Typography sx={{ marginLeft: "10px", color: "#0000006B" }}>
                  Or Login with
                </Typography>
              </Box>
              <Box>
                <Divider
                  sx={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    backgroundColor: "black",
                    width: "97px",
                  }}
                  orientation="horizontal"
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ justifyContent: "center", textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={(event) => formik.handleSubmit()}
              type="submit"
              sx={{
                borderRadius: "48px",
                backgroundColor: "white",
                color: "black",
                width: "310px",
                marginTop: "20px",
                paddingTop: "20px",
                paddingBottom: "20px",
                "& .MuiButton-startIcon": {
                  marginRight: "8px", // Adjust the spacing between the icon and text
                },
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              startIcon={
                <Image
                  src={googleLogo}
                  alt="Google Logo"
                  width={24}
                  height={24}
                />
              }
            >
              Login with Google
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    // {/* </Grid> */}
    // {/* </Grid> */}
  );
};

export default Login;
