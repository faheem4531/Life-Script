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
  localStorage.setItem("price", price.toString());
  localStorage.setItem("category", category.toString());
  const { t } = useTranslation();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleLoginSuccess(tokenResponse),
    onError: () => handleGoogleLoginFailure(),
  });

  const handleGoogleLoginSuccess = (e: any) => {
    dispatch(googleSignup({ credential: e.access_token }))
      .unwrap()
      .then((res:any) => {
        toast.success(t("signup-page.signedUpSuccessfully"));
        if (res.onBoarding === "false") {
          router.push("/stripe-page/subscription");
        } else {
          // If onBoarding is false, continue with the existing redirection
          router.push(`/getStarted/getTitle?userName=${res?.name}`); 
        }
      })
      // .then((res:any) => {
      //   toast.success(t("signup-page.signedUpSuccessfully"));
       
      //     router.push("/stripe-page/subscription");
      //     // router.push(`/getStarted/getTitle?userName=${res?.name}`); 
       
      // })
      // .catch((error: any) => {
      //   toast.error(error.message);
      // });
  };

  const handleGoogleLoginFailure = () => {
    toast.error(t("signup-page.failedSignupGoogle"));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", }}>
      <Box
        sx={{ margin: { sm: "0 0 0 70px", xs: "0 20px" }, border: "2px soild green", width: "100%", maxWidth: "1370px" }}
      >
        <Typography variant="h4" sx={{ marginBottom: { sm: "60px", xs: "30px" } }}>
          Register LifeScript
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", columnGap: "50px" }}>

          <Box sx={{ maxWidth: { sm: "530px", xs: "100%" }, width: "100%" }}>
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
                    width: { lg: "235px", md: "160px", sm: "235px", xs: "130px" },
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
                    width: { lg: "235px", md: "160px", sm: "235px", xs: "130px" },
                  }}
                  orientation="horizontal"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => handleGoogleLogin()}
                  sx={{
                    borderRadius: "2px",
                    backgroundColor: "#fff",
                    padding: "20px 0",
                    color: "#30422E",
                    width: "100%",
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
                    width: "100%",
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

          <Box sx={{ margin: "0 35px 35px 0", display: { md: "block", sm: "none", xs: "none" } }}>
            <BasicPlanCard price={price} category={category} />
          </Box>
        </Box>

      </Box>


    </Box>
  );
};

export default RegisterPage;
