'use client';
import Logo from '@/_assets/svg/logo-dashboard.svg';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PurchaseForm from './_components/PurchaseForm';
import RegisterPage from './_components/RegisterPage';
import TabPanel from './_components/TabPanel';
import NewTabBar from './_components/NewTabBar';
import { useSession } from 'next-auth/react';
import { facebookLogin } from '@/store/slices/authSlice';
import { useDispatch } from 'react-redux';

const SubscriptionPage = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      if (session.user) {
        setSelectedTab(2);
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
    { label: 'REGISTER', active: selectedTab === 1 && !session },
    { label: 'PAYMENT', active: selectedTab === 2 },
  ];

  return (
    <>
      <Box
        sx={{
          bgcolor: '#f3ecda',
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
          <NewTabBar tabs={tabsData} onClick={handleTabClick} />
        </Box>

        <Box>
          <Box mt="60px">
            {selectedTab === 0 && <TabPanel selectedTab={selectedTab} onClick={handleTabClick} />}
            {selectedTab === 1 && !session && <RegisterPage selectedTab={selectedTab} onClick={handleTabClick} />}
            {selectedTab === 2 && <PurchaseForm selectedTab={selectedTab} onClick={handleTabClick} />}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SubscriptionPage;
