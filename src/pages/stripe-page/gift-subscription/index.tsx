'use client';
import Logo from '@/_assets/svg/logo-dashboard.svg';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
// import PurchaseForm from '../subscription/_components/PurchaseForm';
import GiftPurchaseForm from './_components/GiftPurchaseForm';
// import RegisterPage from '../subscription/_components/RegisterPage';
// import { useSession } from 'next-auth/react';
// import { facebookLogin } from '@/store/slices/authSlice';
// import { useDispatch } from 'react-redux';
import Bg from '@/_assets/png/bg-hurt-lite.png';
import DeliveryForm from './_components/DeliveryForm';
import GiftTabBar from './_components/GiftTabBar';
import GiftTabPanel from './_components/GiftTabPanel';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from 'next/router';
// import GiftRegisterPage from './_components/GiftRegisterPage';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);

const GiftSubscriptionPage = () => {

  const [giftToUser, setGiftToUser] = useState('')
  const router = useRouter();
  const { inAppGiftFlow } = router.query;
  const [giftParams, setGiftParams] = useState(inAppGiftFlow)
  console.log("inAppGiftFlow", inAppGiftFlow)
  console.log("giftParams", giftParams)

  // const [inAppGift, setInAppGift] = useState(null);

  // useEffect(() => {
  //   // Update the state with inAppGiftFlow from router.query when the component mounts
  //   setInAppGift(router.query.inAppGiftFlow || null);
  // }, [router.query.inAppGiftFlow]);

  // console.log("inAppGift", inAppGift);


  // const [sendMessage, setSendMessage] = useState("");
  //   const [receiverName, setReceiverName] = useState("");
  //   const [selectedDate, setSelectedDate] = useState("");

  //   console.log("sendMessage-----",sendMessage)
  //   console.log("receiverName-----",receiverName)
  //   console.log("selectedDate-----",selectedDate)

  // const dispatch: any = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     if (session.user) {
  //       setSelectedTab(2);
  //       const payload = {
  //         name: session.user.name,
  //         email: session.user.email,
  //       };
  //       dispatch(facebookLogin(payload));
  //     }
  //   }
  // }, [session, dispatch]);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const tabsData = [
    { label: 'CHOOSE PLAN', active: selectedTab >= 0 },
    { label: 'DELIVERY', active: selectedTab >= 1 },
    // { label: 'REGISTER', active: selectedTab === 2 && !session },
    { label: 'PAYMENT', active: selectedTab === 2 },
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
            {selectedTab === 1 && <DeliveryForm selectedTab={selectedTab} onClick={handleTabClick} inAppGiftFlow={giftParams} newData="newDara" setGiftToUser={setGiftToUser} />}

            {/* {selectedTab === 2 && !session && <GiftRegisterPage selectedTab={selectedTab} onClick={handleTabClick} />} */}
            {selectedTab === 2 &&
              <Elements stripe={stripePromise}>
                <GiftPurchaseForm selectedTab={selectedTab} onClick={handleTabClick} inAppGiftFlow={giftParams} giftToUser={giftToUser} />
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
