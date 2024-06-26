import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Refer from "@/_assets/svg/refer-advertise.svg";
import { useTranslation } from "react-i18next";


const ReferAdvertise = () => {
const {t}= useTranslation();
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
         {t("referAFriend.imageText.text1")}
        </Typography>
        <Image src={Refer} alt="image" />
        <Typography
          sx={{ fontSize: "20px", color: "#30422E" }}>
          {t("referAFriend.imageText.text2")}
        </Typography>
      </Box>
      <Typography
        sx={{ fontSize: "22px", color: "#30422E", mt: "20px", textAlign: "center", p: "0 20px" }}>
{t("referAFriend.imageText.description")}
      </Typography>
    </Box>

  );
};

export default ReferAdvertise
  ;
