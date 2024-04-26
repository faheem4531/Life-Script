import { Box, Button, Checkbox, Divider, FormControlLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import BasicPlanCard from './BasicPlanCard';
import Image from 'next/image';
import stripeLogo from "../../../../../public/stripeLogo.svg";
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from "next/router";
import PaymentProcessingModal from './Modal';

const PurchaseForm = ({ onClick, selectedTab }) => {
  const router = useRouter();
  const { price, category } = router.query;

  const [selectedBooks, setSelectedBooks] = useState('default');
  const [referralCode, setReferralCode] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [subscribeUpdates, setSubscribeUpdates] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  const options = [
    { value: 'default', label: 'Included with Subscription', hidden: true },
    { value: 1, label: "(1 extra books)", price: "+ $78", color: "#e1693b" },
    { value: 2, label: "(2 extra books)", price: "+ $138", color: "#e1693b" },
    { value: 3, label: "(3 extra books)", price: "+ $679", color: "#e1693b" },
    { value: 4, label: "(4 extra books)", price: "+ $378", color: "#e1693b" },
    { value: 5, label: "(5 extra books)", price: "+ $455", color: "#e1693b" }
  ];

  const handleChange = (event) => {
    setSelectedBooks(event.target.value);
  };

  const handleReferralCodeChange = (event) => {
    setReferralCode(event.target.value);
  };

  const handleCardHolderChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  const handleCvcChange = (event) => {
    setCvc(event.target.value);
  };

  const handleSubscribeUpdatesChange = (event) => {
    setSubscribeUpdates(event.target.checked);
  };

  const handleSubmit = async (event) => {
    setOpenModal(true)
    event.preventDefault();
    // Placeholder for API integration
    console.log({
      selectedBooks,
      referralCode,
      cardHolderName,
      cardNumber,
      expiry,
      cvc,
      subscribeUpdates,
    });
    // You can call your API endpoint here and handle the response accordingly
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box className={"Container"} sx={{ width: "100%", maxWidth: "1370px", margin: { sm: "0 0 30px 70px", xs: "0 20px 30px 20px" } }}>
          <Box>
            <Typography sx={{ fontSize: "30px", marginBottom: "20px" }}>Purchase LifeScript</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", columnGap: "50px" }}>

            <Box sx={{ maxWidth: { sm: "600px", xs: "100%" }, width: "100%" }}>
              <Box>
                <Typography
                  sx={{
                    color: "#30422E",
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  }}
                >
                  Number of books
                </Typography>
                <Select
                  value={selectedBooks}
                  onChange={handleChange}
                  sx={{ width: "100%", backgroundColor: "white", marginBottom: "50px" }}
                >
                  {options.map((option, index) => (
                    <MenuItem key={option.value} value={option.value} hidden={option.hidden}>
                      {selectedBooks === option.value && <CheckIcon sx={{ marginRight: '8px', color: "#e1693b" }} />} {/* Conditional rendering */}
                      <span>{`${index + 1}. ${option.label}`}</span>
                      <span style={{ color: option.color, marginLeft: "10px" }}>{option.price}</span>
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ marginBottom: "40px" }}>
                <Typography>Referred by a friend? Enter Referral code here</Typography>
                <Divider sx={{ width: "100%" }} />

                <TextField
                  label="Referral Code"
                  value={referralCode}
                  onChange={handleReferralCodeChange}
                  sx={{ width: "100%", backgroundColor: "white", marginTop: "15px" }}
                />
              </Box>

              <Box>
                <Typography>Checkout</Typography>
                <Divider sx={{ width: "100%", marginBottom: "50px" }} />

                <Typography sx={{ marginBottom: "5px" }}>Prefer to enter details manually? Please provide your payment info below.</Typography>

                <Box>
                  <TextField
                    label="Card Holder Name"
                    value={cardHolderName}
                    onChange={handleCardHolderChange}
                    sx={{ width: "100%", backgroundColor: "white" }}
                  />
                  <TextField
                    label="Card Number"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    sx={{ width: "100%", backgroundColor: "white" }}
                  />
                  <Box sx={{ width: "100%", display: "flex" }}>
                    <TextField
                      label="MM/YY"
                      value={expiry}
                      onChange={handleExpiryChange}
                      sx={{ width: "50%", backgroundColor: "white" }}
                    />
                    <TextField
                      label="CVC"
                      value={cvc}
                      onChange={handleCvcChange}
                      sx={{ width: "50%", backgroundColor: "white" }}
                    />
                  </Box>

                </Box>
              </Box>

              <Box sx={{ border: "1px solid black", padding: "10px", borderRadius: "5px", marginTop: "30px", width: "100%" }}>
                <FormControlLabel
                  control={<Checkbox checked={subscribeUpdates} onChange={handleSubscribeUpdatesChange} sx={{ color: "black" }} />}
                  label="Yes, send me updates with storytelling techniques, inspirational stories, and exclusive offers."
                />
              </Box>

              <Box sx={{ backgroundColor: "#c5c4ae", padding: "10px", width: "100%", marginTop: "20px" }}>
                <Typography sx={{ fontSize: "14px" }}>
                  We treasure your privacy and security. Proceeding with this purchase means you’re okay with LifeScript&rsquos terms and conditions and privacy policy.
                </Typography>
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{
                  width: "200px",
                  marginTop: "50px",
                  bgcolor: "#e1693b",
                  "&:hover": {
                    backgroundColor: "#b5522d",
                  },
                }}>
                Buy for $135
              </Button>

              <Box sx={{ marginTop: "50px", display: "flex", columnGap: "10px", alignItems: "center" }}>
                <Typography>Secure Payment with</Typography>
                <Image
                  src={stripeLogo}
                  alt='Stripe logo Image'
                />
              </Box>
            </Box>

            <Box sx={{ margin: "0 35px 35px 0", display: { md: "block", sm: "none", xs: "none" } }}>
              <BasicPlanCard price={price} category={category} />
            </Box>
          </Box>
        </Box>
      </Box >

      <PaymentProcessingModal
        openModal={openModal}
        selectedTab={selectedTab}
        handleClose={() => setOpenModal(false)} stripeSucceed={undefined} stripeFailed={undefined}      />
    </>

  );
}

export default PurchaseForm;