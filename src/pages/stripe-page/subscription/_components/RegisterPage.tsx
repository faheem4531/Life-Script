"use client";

import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import Image from "next/image";
import googleLogo from "../../../../../public/googleIcon.svg";
import facebookIcon from "../../../../../public/facebookIcon.svg";

import BasicPlanCard from "./BasicPlanCard";

import {
  googleSignup,
  selectSocialUser,
  setSocialUser,
} from "@/store/slices/authSlice";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useSession, signIn, signOut } from "next-auth/react";

const RegisterPage = ({ onClick, selectedTab }) => {
  const dispatch: any = useDispatch();
  const { data: session } = useSession();

  const handleSignin = async (e) => {
    e.preventDefault();
    signIn("facebook", {
      callbackUrl: "/stripe-page/subscription",
    });
  };
  console.log("data", session);
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  const router = useRouter();
  const { price, category } = router.query;
  const { t } = useTranslation();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleLoginSuccess(tokenResponse),
    onError: () => handleGoogleLoginFailure(),
  });

  const handleGoogleLoginSuccess = (e: any) => {
    dispatch(googleSignup({ credential: e.access_token }))
      .unwrap()
      .then((res) => {
        toast.success(t("signup-page.signedUpSuccessfully"));
        router.push(`/getStarted?userName=${res.name}`);
      })
      .catch((error: any) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLoginFailure = () => {
    toast.error(t("signup-page.failedSignupGoogle"));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", }}>
      <Box
        sx={{ marginLeft: "70px", border: "2px soild green", width: "100%" }}
      >
        <Typography variant="h4" sx={{ marginBottom: "60px" }}>
          Register LifeScript
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>

          <Box sx={{ maxWidth: "530px" }}>
            <Box>
              <Typography
                sx={{
                  color: "#30422E",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Name
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your full name"
                name="name"
                sx={{
                  marginBottom: "30px",
                  width: "100%",
                  bgcolor: "white",
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#30422E",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Email
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your email address"
                name="email"
                sx={{
                  marginBottom: "30px",
                  width: "100%",
                  bgcolor: "white",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Box>
                <Divider
                  sx={{
                    backgroundColor: "black",
                    width: "235px",
                  }}
                  orientation="horizontal"
                />
              </Box>
              <Box>
                <Typography sx={{ margin: "0 20px", color: "#0000006B" }}>
                  {"or"}
                </Typography>
              </Box>
              <Box>
                <Divider
                  sx={{
                    backgroundColor: "black",
                    width: "235px",
                  }}
                  orientation="horizontal"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // gap: 1,
                justifyContent: "center",
              }}
            >
              <Box
              //   sx={{ width: { md: "60%", sm: "100%", xs: "70%" } }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => handleGoogleLogin()}
                  sx={{
                    borderRadius: "2px",
                    backgroundColor: "#fff",
                    padding: "20px 0",
                    color: "#30422E",
                    width: "530px",
                    gap: "30px",
                    margin: "30px 0",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    textTransform: "capitalize",
                  }}
                >
                  <Image
                    src={googleLogo}
                    alt="Google Logo"
                  />
                  <Typography>Login with Google</Typography>
                </Button>
              </Box>

              <Box>
                <Button
                  variant="contained"
                  // type="submit"
                  sx={{
                    borderRadius: "2px",
                    backgroundColor: "#fff",
                    padding: "20px 0",
                    color: "#30422E",
                    width: "530px",
                    gap: "30px",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    textTransform: "capitalize",
                  }}
                  onClick={handleSignin}
                >
                  <Image
                    src={facebookIcon}
                    alt="Facebook Logo"
                  />
                  <Typography>Login with Facebook</Typography>
                </Button>
              </Box>
            </Box>

            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "260px",
                height: "50px",
                marginTop: "60px",
                bgcolor: "#e1693b",
                "&:hover": {
                  backgroundColor: "#b5522d",
                },
              }}
              onClick={() => onClick(selectedTab + 1)}
            >
              Continue
            </Button>
          </Box>

          <Box sx={{ margin: "0 35px 35px 0" }}>
            <BasicPlanCard price={price} category={category} />
          </Box>
        </Box>

      </Box>


    </Box>
  );
};

export default RegisterPage;
