'use client'
import { Box, Typography } from "@mui/material";
import PricingCard from "./Card";
import styles from "../ComponentsStyles.module.css"
import PrimaryHeading from "../headings/PrimaryHeading";

const Pricing = () => {

  const pricingCard = [
    {
      id: "basic",
      category: "Basic",
      price: "$139",
      card: "1"
    },
    {
      id: "standard",
      category: "Standard",
      price: "$179",
      card: "2"
    },
    {
      id: "primium",
      category: "Premium",
      price: "$239",
      card: "3"
    },
  ]

  return (
    <Box sx={{
      margin: { lg: '170px 95px  130px', sm: "150px 30px", xs: "80px 20px 100px" },
    }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "60px" }}>
        <PrimaryHeading lineWidth="140px" heading="Our Pricing" marked="Plan" showStyle={false} />

        <Box sx={{ marginTop: { xs: "15px" }, fontSize: { sm: "24px", xs: "16px" }, width: { sm: "60%", xs: "90%" }, fontFamily: "Avenir" }}>
          Each package comes with a one-year LifeScript subscription,
          a premium full-color hardcover book, and <Typography sx={{ fontSize: "24px", fontWeight: 900, display: "inline" }}>free shipping.</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: { md: "row", sm: "column", xs: "column" }, alignItems: "center", columnGap: "17px", rowGap: "50px", justifyContent: "center" }} className={styles.cardsMain} >
        {pricingCard.map((item) => <PricingCard
          key={item.id}
          category={item.category}
          price={item.price}
          card={item.card}
          id={item.id}
        />)}
      </Box>
      <Typography sx={{ marginTop: "20px", fontSize: "24px", fontWeight: 900, color: "#495845", textAlign: "center", fontFamily: "Avenir8 !important" }}>30 days money back guarantee </Typography>

    </Box >
  )
}

export default Pricing;