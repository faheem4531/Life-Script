'use client';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import GiftPlanCard from './GiftPlanCard';
import { DatePicker } from '@mui/x-date-pickers';



const DeliveryForm = ({ onClick, selectedTab }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [recipientName, setRecipientName] = useState(''); // State for recipient's name
  const [recipientEmail, setRecipientEmail] = useState(''); // State for recipient's name
  const [giftMessage, setGiftMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const router = useRouter();

  const minDate = new Date();

  const { price, category } = router.query;

  const handleRecipientNameChange = (event) => {
    setRecipientName(event.target.value);
  };
  const handleRecipientEmailChange = (event) => {
    setRecipientEmail(event.target.value);
  };

  const handleGiftMessageChange = (event) => {
    setGiftMessage(event.target.value);
  };

  const handleSenderNameChange = (event) => {
    setSenderName(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box className={'Container'} sx={{ width: '100%', maxWidth: '1370px', margin: { sm: '0 0 30px 70px', xs: '0 20px 30px 20px' } }}>
        <Box>
          <Typography sx={{ fontSize: '40px', marginBottom: '20px' }}>Personalize Your Gift</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            columnGap: '50px',
          }}
        >
          <Box sx={{ maxWidth: { sm: '600px', xs: '100%' }, width: '100%' }}>
            <Box>
              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  Recipient’s Full Name
                </Typography>
                <TextField
                variant="outlined"
                placeholder="Enter Recipient’s full name"
                name="name"
                value={recipientName} // Value from state
                onChange={handleRecipientNameChange} // State update function
                sx={{
                  marginBottom: '30px',
                  width: '100%',
                  bgcolor: 'white',
                }}
              />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  Recipient’s Email
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter Recipient’s email address"
                  name="email"
                  value={recipientEmail} // Value from state
                  onChange={handleRecipientEmailChange} // State update function
                  sx={{
                    marginBottom: '30px',
                    width: '100%',
                    bgcolor: 'white',
                  }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  Send my gift on:
                </Typography>
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={minDate}
                  sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '2px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderRadius: '2px',
                      },
                    },
                  }}
                />
              </Box>
            </Box>

            <Box>
              <Divider sx={{ width: '100%', marginTop: '30px' }} />

              <Typography sx={{ marginTop: '30px', marginBottom: '30px', fontSize: '20px' }}>Add a gift message!</Typography>

              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  From
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Your name and all others taking part of this gift."
                  name="from"
                  value={senderName}
                  onChange={handleSenderNameChange}
                  sx={{
                    marginBottom: '30px',
                    width: '100%',
                    bgcolor: 'white',
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: '#30422E',
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 12 },
                  }}
                >
                  Your Message
                </Typography>
                <TextField
                  placeholder="Hello, I've gifted you a LifeScript subscription, allowing you to easily share and preserve your stories in a beautiful hardcover book."
                  multiline
                  rows={7}
                  maxRows={10}
                  value={giftMessage}
                  onChange={handleGiftMessageChange}
                  sx={{ width: '100%', backgroundColor: '#FAFAFA' }}
                />
              </Box>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => onClick(selectedTab + 1)}
              sx={{
                width: '200px',
                marginTop: '50px',
                bgcolor: '#e1693b',
                '&:hover': {
                  backgroundColor: '#b5522d',
                },
              }}
            >
              Continue
            </Button>
          </Box>
          <Box
            sx={{
              margin: '0 35px 35px 0',
              display: { md: 'block', sm: 'none', xs: 'none' },
            }}
          >
            <GiftPlanCard
              price={price}
              category={category}
              giftMessage={giftMessage}
              senderName={senderName}
              selectedDate={selectedDate}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeliveryForm;
