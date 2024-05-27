'use client';
import { Box, Typography } from '@mui/material';
import styles from '../../../../__webComponents/ComponentsStyles.module.css';
import { pricingCard } from '../../../../utils/stripeFlowObjects';
import GiftPricingCard from './GiftPricingCard';

const GiftTabPanel = ({ onClick, selectedTab }) => {

  return (
    <Box>
      <Box
        sx={{
          marginTop: { xs: '15px' },
          fontSize: { sm: '15px', xs: '16px' },
          marginLeft: { sm: '75px', xs: '20px' },
        }}
      >
        <Typography
          sx={{
            fontSize: { md: '52px', sm: '44px', xs: '32px' },
            fontFamily: 'Avenir5 !important',
          }}
        >
          Choose a Payment Plan
        </Typography>
        <Typography sx={{ margin: { sm: '40px 0 20px', xs: '20px 0' } }}>
          Each package comes with a lifetime access to LifeScript platform, one premium full-colour hardcover book, and free shipping.
        </Typography>
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
      >
        {pricingCard.map((item) => (
          <GiftPricingCard key={item.id} category={item.category} price={item.price} card={item.card} id={item.id}  selectedTab={selectedTab} onClick={onClick} />
        ))}
      </Box>
    </Box>
  );
};

export default GiftTabPanel;
