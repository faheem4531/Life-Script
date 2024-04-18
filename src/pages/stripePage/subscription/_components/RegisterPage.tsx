"use client";

import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import Image from "next/image";
import googleLogo from "../../../../../public/googleIcon.svg";
import facebookIcon from "../../../../../public/facebookIcon.svg";

import BasicPlanCard from "../_components/BasicPlanCard"

import { googleSignup } from "@/store/slices/authSlice";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";


const RegisterPage = ({onClick,selectedTab}) => {

  const dispatch: any = useDispatch();
  const router = useRouter();
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

    <Box sx={{display:"flex", justifyContent:"space-between"}}>
    <Box 
    sx={{marginLeft:"100px", border:"2px soild green", width:"50%"}}
    >
      <Typography variant="h4" sx={{marginBottom:"30px"}}>Register LifeScript</Typography>

      <Box sx={{width:"530px"}}>
        {/* <form > */}
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
                marginBottom: "10px",
                width: "100%",
                bgcolor:"white"
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
                marginBottom: "10px",
                width: "100%",
                bgcolor:"white"
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Box>
              <Divider
                sx={{
                  marginTop: "10px",

                  backgroundColor: "black",
                  width: "240px",
                }}
                orientation="horizontal"
              />
            </Box>
            <Box>
              <Typography sx={{ marginLeft: "10px", color: "#0000006B" }}>
                {"or"}
              </Typography>
            </Box>
            <Box>
              <Divider
                sx={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  backgroundColor: "black",
                  width: "240px",
                }}
                orientation="horizontal"
              />
            </Box>
          </Box>

          <Box
          sx={{
            display: "flex",
            flexDirection:"column",
            gap: 1,
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
                padding: "10px 0",
                color: "#30422E",
                width: "530px",
                gap: "10px",
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
              // width={24}
              // height={24}
              />
              <Typography>Login with Google</Typography>
            </Button>
          </Box>

          {/* Login With Facebook */}
          <Box 
        //   sx={{ width: { md: "60%", sm: "100%", xs: "70%" } }}
          >
            <Button
              variant="contained"
              // type="submit"
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fff",
                padding: "10px 0",
                color: "#30422E",
                width: "530px",
                gap: "10px",
                marginTop: { xs: "20px" },
                "&:hover": {
                  backgroundColor: "white",
                },
                textTransform: "capitalize",
              }}
            >
              <Image
                src={facebookIcon}
                alt="Facebook Logo"
              // width={24}
              // height={24}
              />
              <Typography>Login with Facebook</Typography>
            </Button>
          </Box>
        </Box>

          <Button variant="contained" color="primary"  sx={{ width:"200px",marginTop: "50px" ,bgcolor:"#e1693b" , "&:hover": {
                backgroundColor: "#b5522d",
              }, }}
              onClick={() => onClick(selectedTab + 1)}
              >
            Continue
          </Button>
        {/* </form> */}
      </Box>
    </Box>

    <Box sx={{ width:"50%"}}>

        <Box>
        <BasicPlanCard/>

        </Box>
    </Box>

    </Box>
  );
};

export default RegisterPage;
