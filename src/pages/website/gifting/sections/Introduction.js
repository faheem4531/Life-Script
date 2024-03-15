import { Box, Typography } from "@mui/material";
import styles from "./gift.module.css"
import Button from "@/pages/website/__webComponents/button/Button";
import Image from "next/image";
import PrimaryHeading from "@/pages/website/__webComponents/headings/PrimaryHeading";

import Logo from "@/__webAssets/svgs/logo-footer.svg"
import Pen from "@/__webAssets/svgs/writing-pen.svg"

const HeroGifting = () => {
  return (
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#F4F4F4",
      textAlign: "center",
      padding: { sm: "0", xs: "0 20px" }
    }}
      className={styles.giftIntro}
    >
      <Image src={Logo} alt="logo" className={styles.logo} />
      <PrimaryHeading showStyle={false} direction="column" heading="The Commemoration " marked="Chronicle" color="#F3ECDA" />
      <Typography sx={{ fontSize: "16px", maxWidth: "720px", margin: { sm: "40px 0 30px", xs: "25px 0 30px" } }}>
        Craft an ideal gift: a compilation of stories shared by friends and family, elegantly gathered within a stunning book.
      </Typography>
      <Box sx={{ width: { sm: "230px", xs: "100%" } }}>
        <Button
          title='Start Writing for Free'
          width='100%'
          height='55px'
          img1={Pen}
        />
      </Box>
      <Typography
        sx={{ fontSize: '11px', lineHeight: '24px', fontWeight: 500, margin: '10px 0 150px' }}
      >No credit card required
      </Typography>
    </Box>
  )
}

export default HeroGifting;