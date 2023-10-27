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
import LoginImage from "../../../public/Login.svg";
import fbLogo from "../../../public/fbIcon.svg";
import googleLogo from "../../../public/googleIcon.svg";
import Logo from "../../../public/logo.svg";

const Login = () => {
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
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} textAlign={"center"}>
        <Image src={LoginImage} alt="image of login" style={imageStyle} />
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
              User name
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter Your E-mail"
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
                  marginTop: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px", // Adjust the border radius as needed
                  },
                  width: "400px",
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
                gap: 15,
                marginTop: "10px",
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
                  Forgot Password?
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            onClick={(event) => formik.handleSubmit()}
            type="submit"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#186F65",
              color: "white",
              width: "300px",
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "#186F65",
              },
            }}
          >
            Login
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
            <Typography sx={{ marginLeft: "10px" }}>Or Login with</Typography>
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

export default Login;
