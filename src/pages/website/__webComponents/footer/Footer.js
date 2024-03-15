import { Box, Typography } from "@mui/material"
import Image from "next/image"

import Logo from "@/__webAssets/svgs/logo-footer.svg"
import Insta from "@/__webAssets/svgs/insta.svg"
import Fb from "@/__webAssets/svgs/fb.svg"
import Li from "@/__webAssets/svgs/li.svg"
import X from "@/__webAssets/svgs/x.svg"

const Footer = () => {

  const logo = {
    width: "25px",
    height: "auto"
  }
  return (
    <Box>

      <Box sx={{
        padding: { lg: "44px 55px 40px 100px", sm: "44px 30px 40px 70px", xs: "40px 0" },
        bgcolor: "#30422E",
        color: "#F3ECDA",
        display: 'flex',
        justifyContent: { sm: "space-between", xs: "center" }
      }}>
        <Box>
          <Image src={Logo} alt="logo" />
          <Typography sx={{ width: "210px", fontSize: "16px", margin: "23px 0", textAlign: { xs: "center", sm: "start" } }}>Echoes of the past, blueprint for the future.</Typography>
          <Box sx={{
            display: "flex",
            columnGap: "13px",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "start" }
          }}>
            <Image src={Insta} alt="logo" style={logo} />
            <Image src={Li} alt="logo" style={logo} />
            <Image src={Fb} alt="logo" style={logo} />
            <Image src={X} alt="logo" style={logo} />
          </Box>
        </Box>

        <Box sx={{ display: "flex", columnGap: "45px" }}>
          <Box sx={{ display: { sm: "block", xs: "none" } }}>
            <Typography sx={{ fontWeight: 800, marginBottom: "19px", fontFamily: "Avenir" }}>COMPANY</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "Avenir" }}>About Us</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "Avenir" }}>Features</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "Avenir" }}>Pricing</Typography>
            <Typography sx={{ fontSize: "16px", fontFamily: "Avenir" }}>Blog</Typography>
          </Box>
          <Box sx={{ display: { sm: "block", xs: "none" } }}>
            <Typography sx={{ fontWeight: 800, marginBottom: "19px", fontFamily: "Avenir" }}>HELP</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "Avenir" }}>Contact Us</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "Avenir" }}>FAQ</Typography>
            <Typography sx={{ fontSize: "16px", marginBottom: "19px", fontFamily: "Avenir" }}>Terms and conditions</Typography>
            <Typography sx={{ fontSize: "16px", fontFamily: "Avenir" }}>Privacy Policy</Typography>
          </Box>
        </Box>
      </Box >

      <Box sx={{ textAlign: "center", padding: "23px 0", fontSize: { xs: "12px", sx: "14px" } }}>© Copyright  2024 LifeScript</Box>
    </Box>
  )
}

export default Footer