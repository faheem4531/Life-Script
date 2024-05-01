import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Refer from "@/_assets/svg/refer-advertise.svg";


const ReferAdvertise = () => {

  return (
    <Box>
      <Box sx={{
        p: "20px", mt: "25px",
        borderRadius: "4px",
        bgcolor: "#F4F4F4",
        display: "flex",
        alignItems: "center",
        gap: "40px",
        justifyContent: "center",
        flexDirection: { md: "row", sm: "column", xs: "column" }
      }}
      >
        <Typography
          sx={{ fontSize: "20px", color: "#30422E", ml: "-20px" }}>
          They get $10 off their order
        </Typography>
        <Image src={Refer} alt="image" />
        <Typography
          sx={{ fontSize: "20px", color: "#30422E" }}>
          You get a free book
        </Typography>
      </Box>
      <Typography
        sx={{ fontSize: "22px", color: "#30422E", mt: "20px", textAlign: "center", p: "0 20px" }}>
        Gift your friends a 10% discount and for every successful referral, you&apos;ll earn a free full-color hardcover copy of your autobiography. Start sharing and let&apos;s eternalise memories!
      </Typography>
    </Box>

  );
};

export default ReferAdvertise
  ;
