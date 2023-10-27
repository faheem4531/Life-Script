import { SignupData } from "@/interface/authInterface";
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
import { useState } from "react";
import * as Yup from "yup";
import SignupImage from "../../../public/Signup.svg";
import googleLogo from "../../../public/googleIcon.svg";
import Logo from "../../../public/logo.svg";

import Link from "next/link";
import fbLogo from "../../../public/fbIcon.svg";

const Signup = () => {
  const isXs = useMediaQuery("(max-width:600px)");
  const isMd = useMediaQuery("(min-width:601px) and (max-width:960px)");
  const isLg = useMediaQuery("(min-width:961px)");

  let imageStyle = {
    width: "300px", // Default width for xs screens
    height: "400px", // Default height for xs screens
  };

  if (isMd) {
    imageStyle = {
      width: "400px", // Customize this for md screens
      height: "500px", // Customize this for md screens
    };
  }

  if (isLg) {
    imageStyle = {
      width: "500px", // Customize this for lg screens
      height: "700px", // Customize this for lg screens
    };
  }

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
      username: "",
      password: "",
    },
    onSubmit: async (data: SignupData) => {
      console.log("data2", data);
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
      username: Yup.string().required("User Name is required"),
    }),
  });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
        <Image
          src={SignupImage}
          width={500}
          height={600}
          alt="Signup Image"
          style={imageStyle}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
        <Image src={Logo} width={184} height={100} alt="Logo Image" />
        <Box sx={{ marginTop: "70px" }}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>

          <Box>
            <Typography
              sx={{
                marginRight: "300px",
                marginTop: "10px",
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              Email Address
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px", // Adjust the border radius as needed
                },
                width: "400px",
              }}
            />
          </Box>
          {formik.touched.email && formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          )}
          <Box>
            <Typography
              sx={{
                marginRight: "300px",
                marginTop: "10px",
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              User name
            </Typography>
            <TextField
              variant="outlined"
              placeholder="UserName"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px", // Adjust the border radius as needed
                },
                width: "400px",
              }}
            />
          </Box>
          {formik.touched.username && formik.errors.username && (
            <span style={{ color: "red" }}>{formik.errors.username}</span>
          )}
          <Box>
            <Box>
              <Typography
                sx={{
                  marginRight: "300px",
                  marginTop: "10px",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Password
              </Typography>
              <TextField
                sx={{
                  marginTop: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px", // Adjust the border radius as needed
                  },
                  width: "400px",
                }}
                placeholder="Password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type={showPassword ? "text" : "password"}
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
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            )}
            <Box
              sx={{
                display: "flex",
                gap: 15,
                marginTop: "15px",
                // marginLeft: { sm: "", md: "120px" },
                justifyContent: "center",
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
                      fontSize: { xs: 12, sm: 14, md: 12, lg: 16 },
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    marginTop: "9px",
                    fontSize: { xs: 12, sm: 14, md: 12, lg: 16 },
                  }}
                >
                  {" "}
                  Forgot Password?
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            onClick={(event) => formik.handleSubmit()}
            sx={{
              borderRadius: "10px",
              backgroundColor: "#186F65",
              color: "white",
              width: "300px",
              marginTop: "10px",
              "&:hover": {
                backgroundColor: "#186F65",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
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
            <Typography sx={{ marginLeft: "10px" }}>Or Sign Up with</Typography>
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
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Link href="#">
            <Paper
              elevation={4}
              sx={{
                width: "68px",
                height: "40px",
                paddingTop: "20px",
                borderRadius: "14px",
              }}
            >
              <Image src={googleLogo} alt="Sign in with google" />
            </Paper>
          </Link>
          <Link href="#">
            <Paper
              elevation={4}
              sx={{
                width: "68px",
                height: "40px",
                paddingTop: "20px",
                borderRadius: "14px",
              }}
            >
              <Image src={fbLogo} alt="Sign in with facebook." />
            </Paper>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
