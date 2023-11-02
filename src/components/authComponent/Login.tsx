import { LoginData } from "@/interface/authInterface";
import { googleLogin, login } from "@/store/slices/authSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Divider, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useGoogleLogin } from "@react-oauth/google";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import fbLogo from "../../../public/fbIcon.svg";
import googleLogo from "../../../public/googleIcon.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch: any = useDispatch();
  const router = useRouter();
  const [loginFailed, setLoginFailed] = useState(false);
  const { t } = useTranslation();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberMeChange = (event: any) => {
    setRememberMe(event.target.checked);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleLoginSuccess(tokenResponse),
    onError: () => handleGoogleLoginFailure(),
  });

  const handleGoogleLoginSuccess = (e: any) => {
    console.log("test", e);
    dispatch(googleLogin({ credential: e.access_token }))
      .unwrap()
      .then(() => {
        toast.success("Signed in successfully");
        router.push("/change-password/getStarted");
      })
      .catch((error: any) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLoginFailure = () => {
    toast.error("Failed to signup with google");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data: LoginData) => {
      console.log("data", data);
      setLoginFailed(false);
      setLoading(true);
      dispatch(login(data))
        .unwrap()
        .then(() => {
          toast.success("Logged in successfully");
          setLoading(false);
          router.push("/change-password/getStarted");
        })
        .catch((error: any) => {
          setLoginFailed(true);
          setLoading(false);
        });
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .required("Password is required"),
    }),
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box>
        <Box>
          <Typography
            sx={{
              // marginRight: "300px",
              fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
            }}
          >
            {t("login-page.email")}
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            sx={{
              marginTop: "10px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
              },
              width: "460px",
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
                // marginRight: "300px",
                marginTop: "24px",
                // fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
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
                width: "460px",
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
          {loginFailed && (
            <Box sx={{ marginTop: "10px" }}>
              <Typography sx={{ color: "red" }}>
                Incorrect password or email
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
              // gap: 15,
              // marginLeft: { sm: "", md: "120px" },
              // justifyContent: "center",
            }}
          >
            {/* <Box>
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
                    fontSize: "16",
                  },
                }}
              />
            </Box> */}
            <Box
              sx={{ cursor: "pointer" }}
              onClick={(event: any) => router.push("/verify/forgetPassword")}
            >
              <Typography
                sx={{
                  // marginTop: "9px",
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
              marginTop: "20px",
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
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
          <Box>
            <Button
              variant="contained"
              type="submit"
              onClick={() => handleGoogleLogin()}
              sx={{
                alignItems: "center",
                borderRadius: "13px",
                backgroundColor: "white",
                color: "black",
                maxWidth: "68px",
                maxHeight: "47px",

                marginTop: "10px",
                "& .MuiButton-startIcon": {},
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
            ></Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              type="submit"
              onClick={() => handleGoogleLogin()}
              sx={{
                alignItems: "center",
                borderRadius: "13px",
                backgroundColor: "white",
                color: "black",
                maxWidth: "68px",
                maxHeight: "47px",

                marginTop: "10px",
                // paddingTop: "20px",
                // paddingBottom: "20px",
                "& .MuiButton-startIcon": {},
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              startIcon={
                <Image src={fbLogo} alt="Google Logo" width={24} height={24} />
              }
            ></Button>
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
    // {/* </Grid> */}
    // {/* </Grid> */}
  );
};

export default Login;
