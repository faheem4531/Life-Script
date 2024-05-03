import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const GiftCard = ({ image, info, btntext, onClick ,disabled}) => {

  return (
    <Box sx={{
      p: "25px 13px 30px",
      borderRadius: "4px",
      bgcolor: "#fff",
      textAlign: "center",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
    >
      <Image src={image} alt="image" />
      <Typography
        sx={{ fontSize: "20px", color: "#30422E", m: "30px 0 50px" }}>
        {info}
      </Typography>
      <GlobelBtn
        btnText={btntext}
        onClick={onClick}
        width="300px"
        disabled={disabled}
      />
    </Box>
  );
};

export default GiftCard;
