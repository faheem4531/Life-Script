'use client';
import Logo from '@/_assets/svg/logo-dashboard.svg';
import { Box, CircularProgress } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PurchaseForm from './_components/PurchaseForm';
import RegisterPage from './_components/RegisterPage';
import TabPanel from './_components/TabPanel';
import NewTabBar from './_components/NewTabBar';
import { useSession, signOut } from 'next-auth/react';
import { facebookLogin, googleSignup } from '@/store/slices/authSlice';
import { useDispatch } from 'react-redux';
import Bg from '@/_assets/png/bg-hurt-lite.png';


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useGoogleLogin } from "@react-oauth/google";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);

const SubscriptionPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch: any = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      if (session.user) {
        // console.log('session data subscription', session)
        // setSelectedTab(2);
        const payload = {
          name: session.user.name,
          email: session.user.email,
          type: "register"
        };
        dispatch(facebookLogin(payload))
          .unwrap() 
          .then((res)=>{
            console.log("Res Console Subscription" ,res)
            setSelectedTab(2);
            toast.success("login with facebook");
          })
          .catch((error) => {
            // signOut();
            toast.error("User Already Exist");
            // setSelectedTab(1);
            // router.push("/")
        });
      }
    }
  }, [session, dispatch]);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleLoginSuccess(tokenResponse),
    onError: () => handleGoogleLoginFailure(),
  });

  const paymentType = localStorage.getItem("paymentType")
  console.log("acnascascb ascubajscb bacsucabc", paymentType)
  const handleGoogleLoginSuccess = (e: any) => {
    dispatch(googleSignup({ credential: e.access_token, type: "register" }))
      .unwrap()
      .then((res: any) => {
        toast.success(t("signup-page.signedUpSuccessfully"));
        // if (res.onBoarding === "false") {
        //   router.push("/stripe-page/subscription");
        // } else {
        //   // If onBoarding is false, continue with the existing redirection
        //   router.push(`/getStarted?userName=${res?.name}`);
        // }
        if (paymentType === "buynow") {
          router.push("/stripe-page/subscription");
          setSelectedTab(2);
        } else {
          // If onBoarding is false, continue with the existing redirection
          router.push(`/getStarted?userName=${res?.name}`);
        }
      })
      .catch(() => {
        toast.error("User Already Exsit");
      });
  };

  const handleGoogleLoginFailure = () => {
    toast.error(t("signup-page.failedSignupGoogle"));
  };


  const tabsData = [
    { label: 'CHOOSE PLAN', active: selectedTab === 0 },
    { label: 'REGISTER', active: selectedTab === 1 && !session && handleGoogleLogin },
    // { label: 'REGISTER', active: selectedTab === 1 && session && handleGoogleLogin  },
    { label: 'PAYMENT', active: selectedTab === 2 },
  ];

  return (
    <>
      <Box
        sx={{
          bgcolor: '#f3ecda',
          color: '#3e4f3c',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            bgcolor: '#30422e',
            padding: '26px 0 26px 15px',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <Image src={Logo} alt="Logo" />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: '70px',
            marginLeft: { sm: '70px', xs: '20px' },
          }}
        >
          <NewTabBar tabs={tabsData} handleGoogleLogin={handleGoogleLogin} onClick={() => { }} />
        </Box>

        <Box sx={{ position: 'relative' }}>
          <Box mt="60px" sx={{ position: 'relative', zIndex: 10 }}>
            {selectedTab === 0 && <TabPanel selectedTab={selectedTab} onClick={handleTabClick} />}
            {selectedTab === 1 && !session && <RegisterPage selectedTab={selectedTab} onClick={handleTabClick} handleGoogleLogin={handleGoogleLogin} />}
            {selectedTab === 2 &&
              <Elements stripe={stripePromise}>
                <PurchaseForm selectedTab={selectedTab} onClick={handleTabClick} />
              </Elements>
            }
          </Box>
          <Box sx={{ position: 'absolute', right: 0, bottom: 0, display: { md: 'block', sm: 'none', xs: 'none' } }}>
            <Image src={Bg} alt="img" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SubscriptionPage;
