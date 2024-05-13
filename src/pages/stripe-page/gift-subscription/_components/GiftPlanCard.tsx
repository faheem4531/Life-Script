'use client';
import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import grandmaBookImage from '../../../../../public/grandmaBookImage.svg';
import standardBookImage from '../../../../../public/standardBookImage.svg';
import premiumBookImage from '../../../../../public/premiumBookImage.svg';
import Check from '@/__webAssets/svgs/check.svg';
import Lock from '@/__webAssets/svgs/lock.svg';
import EditIconPriceCard from "@/_assets/svg/EditIconPriceCard.svg";

const GiftPlanCard = ({ price, category }) => {

  const receiverName = localStorage.getItem("receiverName")
  const selectedDate = localStorage.getItem("selectedDate")
  const sendMessage = localStorage.getItem("sendMessage")

  const BasicArray = [
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Spelling and grammar assistance "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Automatic photo improvement "
    },

    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Text formatting features  "
    },
  ]
  const StandardArray = [
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Spelling and grammar assistance "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Automatic photo improvement "
    },

    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Text formatting features  "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Narrative Fusion "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Voice-to-text "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Family Tree"
    },
  ]
  const PremiumArray = [
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Spelling and grammar assistance "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Automatic photo improvement "
    },

    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Text formatting features  "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Narrative Fusion "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Voice-to-text "
    },
    {
      standardStatus: true,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Family Tree"
    },
    {
      standardStatus: false,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Premium book covers"
    },
    {
      standardStatus: false,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Priority customer support"
    },
    {
      standardStatus: false,
      PrimuimStatus: true,
      basicStatus: true,
      dis: "Exclusive access to new features "
    },

  ]


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
  };
  return (
    <Box
      sx={{
        borderRadius: '3px',
        width: { lg: '445px', md: '400px', sm: "500px", xs: "100%" },
        height: 'auto',
        backgroundColor: '#c5c4ae',
        float: 'right',
        marginRight: { md: '20px', sm: "0", xs: "0" },
      }}
    >
      {category == 'Basic' &&
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <Image src={grandmaBookImage} alt="grandma Book Image " width={250} height={348} />
        </Box>
        ||
        category == 'Standard' &&
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <Image src={standardBookImage} alt="grandma Book Image " width={250} height={348} />
        </Box>
        ||
        category == 'Premium' &&
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <Image src={premiumBookImage} alt="grandma Book Image " width={250} height={348} />
        </Box>
      }
      <Box sx={{ marginLeft: '20px', marginTop: '20px' }}>
        <Typography
          sx={{
            color: '#30422e',
            fontSize: '30px',
            fontWeight: '700',
          }}
        >
          {category ? `${category} Plan` : 'Choose Plan'}
        </Typography>

        <Box>
          <Typography>Includes a premium full-color hardcover book, free shipping and one year LifeScript subscription with:</Typography>
        </Box>
        <Box sx={{ marginTop: '30px' }}>
          {category == 'Basic' && <Box>
            {
              BasicArray.map((item, index) => <Box
                sx={{
                  display: "flex",
                  columnGap: "25px",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
                key={index}>
                <Image src={item.basicStatus ? Check : Lock} alt="check" />
                <Typography sx={{ fontSize: "15px", fontFamily: "Avenir" }}>{item.dis}</Typography>
              </Box>
              )}
          </Box>
            ||
            category == 'Standard' && <Box>
              {
                StandardArray.map((item, index) => <Box
                  sx={{
                    display: "flex",
                    columnGap: "25px",
                    alignItems: "center",
                    marginBottom: "24px"
                  }}
                  key={index}>
                  <Image src={item.standardStatus ? Check : Lock} alt="check" />
                  <Typography sx={{ fontSize: "15px", fontFamily: "Avenir" }}>{item.dis}</Typography>
                </Box>
                )}
            </Box>
            ||
            category == 'Premium' && <Box>
              {
                PremiumArray.map((item, index) => <Box
                  sx={{
                    display: "flex",
                    columnGap: "25px",
                    alignItems: "center",
                    marginBottom: "24px"
                  }}
                  key={index}>
                  <Image src={item.PrimuimStatus ? Check : Lock} alt="check" />
                  <Typography sx={{ fontSize: "15px", fontFamily: "Avenir" }}>{item.dis}</Typography>
                </Box>
                )}
            </Box>
          }

          {/* Extra Info */}
          {receiverName &&
            <Box sx={{
              width: { lg: '380px', md: '350px' },
              height: 'auto',
            }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                  Details:
                </Typography>
                <Image alt="icon" src={EditIconPriceCard} style={{ color: "#293624" }} />

              </Box>
              <Divider sx={{ marginTop: "5px", marginBottom: "15px" }} />

              <Box sx={{ marginTop: "5px", marginBottom: "10px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "800" }}>Deliver to: </Typography>
                <Typography >
                  {receiverName && receiverName}
                  {/* John Doe */}

                </Typography>
              </Box>
              <Box sx={{ marginTop: "5px", marginBottom: "10px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "800" }}>Date: </Typography>
                <Typography>
                  {selectedDate && formatDate(selectedDate)}
                  {/* 29-03-2024 */}
                </Typography>
              </Box>
              <Box sx={{ marginTop: "5px", marginBottom: "10px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "800" }}>Gift Message: </Typography>
                <Typography sx={{ width: "300px" }}>
                  {sendMessage && sendMessage}
                  {/* “The journey of a thousand miles begins with a single step.” */}
                </Typography>
              </Box>

            </Box>
          }

        </Box>



        <Box
          sx={{
            fontSize: '30px',
            fontWeight: '800',
            borderBottom: '1px solid #BFC4B5',
            padding: '10px 0',
            marginBottom: '34px',
            fontFamily: 'Avenir8',
          }}
        >
          {price ? `$${price}` : "$0"}
          <Typography sx={{ color: 'black', fontSize: '12px', display: 'inline' }}>/ year</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GiftPlanCard;
