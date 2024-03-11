'use client'
import { Box, Typography } from "@mui/material";
import PricingCard from "./Card";
import styles from "../ComponentsStyles.module.css"

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
  function handleHover(id) {

    // if (id == 'basic') {
    //   const basicCard = document.getElementById('basic')
    //   basicCard.classList.remove("sideCard");
    // }
    // if (id == 'standard') {
    //   const standardCard = document.getElementById('standard')
    //   standardCard.classList.remove("sideCard");
    // }
    // if (id == 'primium') {
    //   const primiumCard = document.getElementById('primium')
    //   primiumCard.classList.remove("sideCard");
    // }

    // const hoveredCard = document.getElementById(id)
    // hoveredCard.classList.add("midCard");

    // console.log(hoveredCard.classList, 'basic')
    // console.log(standardCard.classList, 'standard')
    // console.log(primiumCard.classList, 'primiumCard')
  }

  return (
    <Box sx={{
      margin: { lg: '170px 95px', sm: "150px 30px", xs: "80px 20px 100px" },
    }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "60px" }}>
        <Typography sx={{ fontSize: { md: "52px", sm: "44px", xs: "32px" }, fontWeight: 500, fontFamily: "Besley !important" }}>Our Pricing Plan</Typography>
        <Box sx={{ marginTop: { xs: "15px" }, fontSize: { sm: "24px", xs: "16px" }, width: { sm: "60%", xs: "90%" }, fontFamily: "Avenir" }}>
          Each package comes with a one-year Lifescript subscription,
          a premium full-color hardcover book, and <Typography sx={{ fontWeight: 900, display: "inline" }}>free shipping.</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: { md: "row", sm: "column", xs: "column" }, alignItems: "center", columnGap: "17px", rowGap: "50px", justifyContent: "center" }} className={styles.cardsMain} >
        {pricingCard.map((item) => <PricingCard
          key={item.id}
          category={item.category}
          price={item.price}
          card={item.card}
          id={item.id}
          handleHover={handleHover}
        />)}
      </Box>
      <Typography sx={{ marginTop: "20px", fontSize: "20px", fontWeight: 900, color: "#495845", textAlign: "center" }}>30 days money back guarantee </Typography>

    </Box>
  )
}

export default Pricing;