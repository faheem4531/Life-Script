import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Refer from "@/_assets/svg/refer-advertise.svg";
import { useEffect, useState } from "react";
import Fb from "@/_assets/svg/fb-orange.svg"
import Email from "@/_assets/svg/email-orange.svg"
import { useDispatch } from "react-redux";
import { GetReferralCode } from "@/store/slices/chatSlice";
import { useTranslation } from "react-i18next";

const CopyReferal = () => {
  const dispatch: any = useDispatch();
  const {t}=useTranslation();
  const [textToCopy, setTextToCopy] = useState('');
  const handleCopyText = () => {
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard!');
  };


  useEffect(() => {
    dispatch(GetReferralCode())
      .unwrap()
      .then((res) => {

        setTextToCopy(res?.referralCode);
      })
  }, []);

  return (
    <Box sx={{
      p: { md: "60px 150px", sm: "30px 40px", xs: "20px" }, mt: "25px",
      borderRadius: "4px",
      bgcolor: "#F3ECDA",
    }}
    >
      <Typography
        sx={{ fontSize: { sm: "22px", xs: "16px" }, color: "#30422E" }}>
       {t("referAFriend.imageText.referalCode")}
      </Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #30422E",
        borderRadius: "4px",
        p: "7px 7px 7px 20px",
        bgcolor: "#fff",
        m: "15px 0 30px"
      }}>
        <Typography>{textToCopy}

        </Typography>
        <GlobelBtn
          btnText={t("referAFriend.imageText.copyCodeBtn")}
          onClick={handleCopyText}
          width="180px"
        />
      </Box>
      <Box sx={{
        display: "flex",
        gap: "20px",
        flexDirection: { sm: "row", xs: "column" }
      }}>
        <GlobelBtn
          btnText={t("referAFriend.imageText.shareViaEmail")}
          color="#E1683B"
          bgColor="transparent"
          border='1px solid #E1683B'
          image={Email}
          // onClick={onClick}
          width="270px"
        />
        <GlobelBtn
          btnText={t("referAFriend.imageText.shareViaFacebook")}
          color="#E1683B"
          bgColor="transparent"
          image={Fb}
          border='1px solid #E1683B'
          // onClick={onClick}
          width="270px"
        />
      </Box>
    </Box>

  );
};

export default CopyReferal
  ;
