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
import ReferAdvertise from './components/ReferAdvertise';

const ReferAFriend = () => {
  // const dispatch: any = useDispatch();
  // const [subject, setSubject] = useState("");
  // const [description, setDescription] = useState("");
  // const [showTooltip, setShowTooltip] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const { t } = useTranslation();

  // const handleComplaint = () => {
  //   dispatch(customerSupport({ subject: subject, description: description }))
  //     .unwrap()
  //     .then(() => {
  //       setShowModal(true);
  //       setDescription("");
  //       setSubject("");
  //     })
  //     .catch(() => toast.error("Failed to create your ticket"));
  // };

  return (
    <Box>
      <Layout>
        <Box
          sx={{
            p: { sm: "0px", xs: "10px 10px" },
          }}
        >
          <AddChapterName
            chapterId
            chapter="Refer a Friend"
            title="refer"
          />
          <ReferAdvertise />

          <Box
            sx={{
              display: "flex",
              gap: "30px",
              borderRadius: "4x",
              bgcolor: "#F3ECDA",
              p: { md: "30px", sm: "20px 20px", xs: "16px" },
              mt: "26px",
              flexWrap: "wrap",
            }}
          >

          </Box>
        </Box>
      </Layout>

    </Box>
  );
};

export default ReferAFriend;
