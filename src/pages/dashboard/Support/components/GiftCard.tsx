import ModalImage from "@/_assets/png/view-template-modal.png";
import Layout from "@/components/Layout/Layout";
import GlobelBtn from "@/components/button/Button";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import { customerSupport } from "@/store/slices/chatSlice";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import AddChapterName from '@/components/dashboardComponent/AddChapterName';

const GiftCard = ({ image, info, btntext, onClick }) => {

  return (
    <Box sx={{ p: "25px 13px 30px", borderRadius: "4px", bgcolor: "#fff", textAlign: "center", maxWidth: "500px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Image src={image} alt="image" />
      <Typography sx={{ fontSize: "20px", color: "#30422E", m: "30px 0 50px" }}>{info}</Typography>
      <GlobelBtn
        btnText={btntext}
        onClick={onClick}
        width="300px"
      />
    </Box>
  );
};

export default GiftCard;
