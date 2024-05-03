"use client";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Image from "next/image";
import facebookIcon from "../../../../../public/facebookIcon.svg";
import googleLogo from "../../../../../public/googleIcon.svg";
import {
  googleSignup,
  signup
} from "@/store/slices/authSlice";
import { useGoogleLogin } from "@react-oauth/google";
import { signIn, signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SignupData } from "@/interface/authInterface";
import PaymentProcessingModal from '../../subscription/_components/Modal';

const RegisterFreeTrial = () => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch: any = useDispatch();
  const { data: session } = useSession();
  console.log("Session Check ", session)

  // useEffect(() => {
  //   if (session) {
  //     if (session.user) {
  //       const payload = {
  //         name: session.user.name,
  //         email: session.user.email
  //       };
  //       dispatch(facebookLogin(payload))
  //       .unwrap() 
  //       .then((res) => {
  //         console.log("Res Console" ,res)
  //         alert(res?.data?.name)
  //         alert(res?.data?.token)
  //         toast.success(t("login with facebook"));
  //         router.push(`/getStarted/getTitle?userName=${res?.name}`); 
  //       })
  //       .catch((error) => {
  //         toast.error(error.message);
  //       });
  //     }
  //   }
  // }, [session]);

  const handleSignin = async (e) => {
    e.preventDefault();
    signIn("facebook", {
      // callbackUrl: `/getStarted/getTitle?userName=${session?.user?.name ?? 'test-user'}`,
      callbackUrl: `/stripe-page/sso-redirecting`,
    });
  };





  console.log("data", session);


  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };



  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleLoginSuccess(tokenResponse),
    onError: () => handleGoogleLoginFailure(),
  });

  const handleGoogleLoginSuccess = (e) => {
    dispatch(googleSignup({ credential: e.access_token, type: "register" }))
      .unwrap()
      .then((res) => {
        console.log("Res Console", res)
        toast.success(t("signup-page.signedUpSuccessfully"));
        router.push(`/getStarted/getTitle?userName=${res?.name}`);
      })
      .catch(() => {
        toast.error("User Already Exsit");
      });
  };

  const handleGoogleLoginFailure = () => {
    toast.error(t("signup-page.failedSignupGoogle"));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    onSubmit: async (data: SignupData) => {
      console.log(data, "dataaaaa");

      dispatch(signup(data))
        .unwrap()
        .then(() => {
          toast.success(t("signup-page.verificationEmailSent"));
          setTimeout(() => {
            setOpenModal(true);
          }, 3000);
          setTimeout(() => {
            const name = localStorage.getItem("username");
            router.push(`/getStarted?userName=${name}`);
          }, 3000);
        })
        .catch((error: any) => {
          toast.error(error?.message || t("signup-page.failedSignup"));
        });
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(t("signup-page.emailRequired")),
      name: Yup.string().required(t("signup-page.nameRequired")),
    }),
  });

  return (

    <>
      <Box
        sx={{ border: "2px soild green", width: "100%" }}
      >
        <Typography variant="h4" sx={{ marginBottom: "60px" }}>
          Register LifeScript
        </Typography>

        <Box sx={{ maxWidth: "600px", width: "100%" }}>
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              sx={{
                marginBottom: "10px",
                width: "100%",
                bgcolor: "white",
              }}
            />
          </Box>
          {formik.touched.name && formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          )}

          <Box>
            <Typography
              sx={{
                color: "#30422E",
                mt: "30px",
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              }}
            >
              Email
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email address"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              sx={{
                marginBottom: "10px",
                width: "100%",
                bgcolor: "white",
              }}
            />
          </Box>
          {formik.touched.email && formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "30px"
            }}
          >
            <Box>
              <Divider
                sx={{
                  backgroundColor: "black",
                  width: { md: "270px", sm: "210px", xs: "130px" },
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
                  width: { md: "270px", sm: "210px", xs: "130px" },
                }}
                orientation="horizontal"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
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
                  padding: "10px 0",
                  color: "#30422E",
                  width: "100%",
                  height: "60px",
                  gap: "30px",
                  marginTop: { xs: "20px" },
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

            {/* Login With Facebook */}
            <Box>
              <Button
                variant="contained"
                // type="submit"
                sx={{
                  borderRadius: "2px",
                  backgroundColor: "#fff",
                  padding: "10px 0",
                  color: "#30422E",
                  width: "100%",
                  height: "60px",
                  gap: "30px",
                  marginTop: { xs: "20px" },
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
            onClick={(event) => formik.handleSubmit()}
            type="submit"
            sx={{
              width: "260px",
              marginTop: "60px",
              height: "50px",
              bgcolor: "#e1693b",
              "&:hover": {
                backgroundColor: "#b5522d",
              },
            }}
          >
            Start 7-Day Free Trial
          </Button>
        </Box>
      </Box>

      <PaymentProcessingModal
        openModal={openModal}
        selectedTab={"verify"}
        handleClose={() => setOpenModal(true)} stripeSucceed={undefined} stripeFailed={undefined}      />

    </>

  );
};

export default RegisterFreeTrial;
