'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from "@/_assets/svg/Frame.svg"
import Image from 'next/image';
import { ReloadingBar } from "@/components/dashboardComponent/LinearProgressBar";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#F3ECDA',
  color: "#30422E",
  borderRadius: "2px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

export default function PaymentProcessingModal({ openModal, handleClose, selectedTab,stripeSucceed,stripeFailed }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the value by 1 every 40 milliseconds (4 seconds / 100)
      setValue((prevValue) => {
        // Check if the value has reached 100, if yes, clear the interval
        if (prevValue === 100) {
          clearInterval(interval);
          return prevValue;
        }
        // Otherwise, continue incrementing
        return prevValue + 1;
      });
    }, 40);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500, style: { backgroundColor: 'rgba(48, 66, 46, 0.85)' },
        },
      }}
    >
      <Fade in={openModal}>
        <Box sx={{ ...style, padding: { sm: "40px", xs: "30px" } }}>
          <Image src={Logo} alt="logo" />
          <Typography id="transition-modal-title" sx={{ margin: { sm: "40px 0", xs: "25px 0" }, fontSize: { sm: "32px", xs: "28px" } }}>
            {value === 100 && selectedTab !== "verify" ? 'Transaction Successful!' : selectedTab !== "verify" ? 'Processing..' : ''}
            {selectedTab == "verify" && "Email Verification"}
          </Typography>
          {selectedTab !== "verify" &&
            < Box sx={{ width: { xs: "300px", sm: "470px" } }}>
              <ReloadingBar value={value} />
            </Box>}
          {value == 100 && selectedTab == 2 &&
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: "260px",
                marginTop: { sm: "40px", xs: "25px" },
                bgcolor: "#e1693b",
                "&:hover": {
                  backgroundColor: "#b5522d",
                },
              }}>
              Let me in
            </Button>
          }
          {value == 100 && selectedTab == 3 &&
            <Typography sx={{ marginTop: { sm: "40px", xs: "25px" } }}>
              The gift recipient will receive their gift via email on the date provided. More details about your gift will be emailed to you shortly!</Typography>
          }
          {selectedTab === "verify" &&
            <Typography sx={{ maxWidth: "400px" }}>
              Please check your email to set-up password and start writing your LifeScript.
            </Typography>
          }
        </Box>
      </Fade>
    </Modal >
  );
}