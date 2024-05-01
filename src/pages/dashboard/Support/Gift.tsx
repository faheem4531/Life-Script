import Pack from "@/_assets/svg/gift-pack.svg";
import Refer from "@/_assets/svg/refer-link.svg";
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
import GiftCard from './components/GiftCard';
import { useRouter } from "next/router";

const Gift = () => {
  const router = useRouter();
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
            chapter="Gift a Book"
            title="gift"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              borderRadius: "4x",
              bgcolor: "#F3ECDA",
              flexDirection: { md: "row", sm: "column", xs: "column" },
              p: { md: "30px", sm: "20px 20px", xs: "16px" },
              mt: "26px",
            }}
          >
            <GiftCard
              image={Pack}
              info="Give a truly meaningful gift to a friend that will be cherished for generations."
              btntext="Send as a gift"
              onClick={() => { }}
            />
            <GiftCard
              image={Refer}
              info="Get a bonus book for referring a friend, plus they'll enjoy a 10% sign-up discount!"
              btntext="Refer a friend"
              onClick={() => {
                router.push("/dashboard/Support/ReferAFriend");
              }}
            />
          </Box>
        </Box>
      </Layout>

    </Box>
  );
};

export default Gift;
