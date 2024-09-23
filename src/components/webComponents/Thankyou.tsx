import BgLogo from "@/_assets/svg/BgLogo.svg";
import Logo from "@/_assets/svg/logo-dashboard.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import GlobelBtn from "../button/Button";

const Thankyou = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f3ecda",
        color: "#3e4f3c",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#30422e",
          display: "flex",
          position: "fixed",
          left: "0",
          top: "0",
          width: "100%",
          alignItems: "center",
          padding: "26px 0 26px 17px",
        }}
      >
        <Link href={"./"}>
          <Image src={Logo} alt="Logo" />
        </Link>
      </Box>

      <Box sx={{
        bgcolor: "#30422E",
        maxWidth: {md:"730px",sm:"500px", xs:"90%"},
        maxHeight: {md:"370px",sm:"260px",xs:"200px"},
        height: "100%",
        color: "#F3ECDA",
        fontSize: {md:"50px",sm:"36px",xs:"24px"},
        fontWeight: 600,
        mt:"5%",
        width: "100%",
        borderRadius: "10px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        WELCOME TO THE <br /> 7-DAY FREE TRIAL!
        <Typography sx={{ mt: {md:"30px",sm:"20px",xs:"20px"}, fontSize: {sm:"15px",xs:"12px"}, fontWeight: 600 }}>
          You’ve gifted the Basic Plan. <br /> The recipient will receive their gift on the scheduled date.
        </Typography>
      </Box>
      <Box mt={{md:"50px",sm:"30px",xs:"20px"}}>
        <Link href={'/'} passHref>
          <GlobelBtn
            btnText="Continue"
            width="210px"
            fontSize={{ md: "21px", sm: "18px", xs: "16px" }}
          />
        </Link>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: "0px",
          bottom: "0px",
          zIndex: 10,
          maxWidth: { lg: "700px", md: "550px", sm: "450px", xs: "300px" },
          width: "100%",
        }}
      >
        <Image
          src={BgLogo}
          alt="Giving Tree Logo"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  )
}

export default Thankyou