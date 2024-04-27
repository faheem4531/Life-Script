'use client';
import Logo from '@/_assets/svg/logo-dashboard.svg';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PurchaseForm from '../subscription/_components/PurchaseForm';
import RegisterPage from '../subscription/_components/RegisterPage';
import { useSession } from 'next-auth/react';
import { facebookLogin } from '@/store/slices/authSlice';
import { useDispatch } from 'react-redux';
import GiftTabPanel from './_components/GiftTabPanel';
import GiftTabBar from './_components/GiftTabBar';
import DeliveryForm from './_components/DeliveryForm';
import Bg from '@/_assets/png/bg-hurt-lite.png';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);

const GiftSubscriptionPage = () => {
  const dispatch: any = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      if (session.user) {
        setSelectedTab(3);
        const payload = {
          name: session.user.name,
          email: session.user.email,
        };
        dispatch(facebookLogin(payload));
      }
    }
  }, [session, dispatch]);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const tabsData = [
    { label: 'CHOOSE PLAN', active: selectedTab === 0 },
    { label: 'DELIVERY', active: selectedTab === 1 },
    { label: 'REGISTER', active: selectedTab === 2 && !session },
    { label: 'PAYMENT', active: selectedTab === 3 },
  ];

  return (
    <>
      <Box
        sx={{
          bgcolor: '#f3ecda',
          minHeight: '100vh',
          color: '#3e4f3c',
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
          <GiftTabBar tabs={tabsData} onClick={() => { }} />
        </Box>

        <Box sx={{ position: 'relative' }}>
          <Box mt="60px" sx={{ position: 'relative', zIndex: 10 }}>
            {selectedTab === 0 && <GiftTabPanel selectedTab={selectedTab} onClick={handleTabClick} />}
            {selectedTab === 1 && <DeliveryForm selectedTab={selectedTab} onClick={handleTabClick} />}
            {selectedTab === 2 && !session && <RegisterPage selectedTab={selectedTab} onClick={handleTabClick} />}
            {selectedTab === 3 &&
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

export default GiftSubscriptionPage;
