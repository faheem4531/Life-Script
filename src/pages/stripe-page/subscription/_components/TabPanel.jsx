'use client';
import { Box, Typography } from '@mui/material';
import styles from '../../../../__webComponents/ComponentsStyles.module.css';
import PrimaryHeading from '../../../../__webComponents/headings/PrimaryHeading';
import NewPricingCard from './NewPricingCard';

const TabPanel = ({ onClick, selectedTab }) => {
  const pricingCard = [
    {
      id: 'basic',
      category: 'Basic',
      price: '$139',
      card: '1',
    },
    {
      id: 'standard',
      category: 'Standard',
      price: '$179',
      card: '2',
    },
    {
      id: 'primium',
      category: 'Premium',
      price: '$239',
      card: '3',
    },
  ];
  function handleHover(id) {}

  return (
    <Box
      sx={
        {
          //   margin: { lg: '170px 95px  130px', sm: "150px 30px", xs: "80px 20px 100px" },
        }
      }
    >
      <Box>
        <Box
          sx={{
            marginTop: { xs: '15px' },
            fontSize: { sm: '15px', xs: '16px' },
            // width: { sm: '60%', xs: '90%' },
            marginLeft: { sm: '75px', xs: '20px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { md: '52px', sm: '44px', xs: '32px' },
              fontFamily: 'Avenir5 !important',
            }}
          >
            Choose a Subscription Plan
          </Typography>
          <Typography sx={{ margin: { sm: '40px 0 20px', xs: '20px 0' } }}>
            Each package comes with a one-year LifeScript subscription, a premium full-color hardcover book, and free shipping.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', sm: 'column', xs: 'column' },
          alignItems: 'center',
          columnGap: { lg: '50px', sm: '20px' },
          rowGap: '50px',
          justifyContent: 'center',
          padding: ' 0 40px 70px',
        }}
        className={styles.cardsMain}
        onClick={() => onClick(selectedTab + 1)}
      >
        {pricingCard.map((item) => (
          <NewPricingCard key={item.id} category={item.category} price={item.price} card={item.card} id={item.id} handleHover={handleHover} />
        ))}
      </Box>
    </Box>
  );
};

export default TabPanel;
