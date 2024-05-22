'use client'

import { Box, Typography } from "@mui/material";
import CustomizationDialog from "./CustomizationDialog";
import Image from "next/image";
import GlobelBtn from "../button/Button";
import { useEffect, useState } from "react";

const FamilyTreeAddModal = ({
  setFamilyEditModal,
  familyEditModal,
  nodeData,
  onClick,
}) => {
  const Male = "./familyTreeRelations/male.svg";
  const Female = "./familyTreeRelations/female.svg";
  const [info, setInfo] = useState({
    name: "",
    image: Male,
    type: "",
    spouse: false,
  });
  console.log(nodeData, "nodeData");

  useEffect(() => {
    if (nodeData.data) {
      setInfo({
        name: nodeData.data.name,
        image: nodeData.data.image
          ? nodeData.data.image
          : nodeData.data.gender == "Male"
            ? Male
            : Female,
        type: "edit",
        spouse: false,
      });
    }
  }, [nodeData]);

  return (
    <Box sx={{ bgcolor: "" }}>
      <CustomizationDialog
        open={familyEditModal}
        title=""
        handleClose={() => {
          setFamilyEditModal(false);
        }}
        customStyles={{
          width: { md: "500px", sm: "400px", xs: "100%" },
          p: { md: "20px", sm: "15px", xs: "10px" },
          color: "#30422E",
        }}
      >
        <Box
          sx={{
            m: "0 auto 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image src={info.image} alt="img" width={120} height={120} />
          <Typography
            sx={{
              fontSize: "14px",
              mt: "6px",
              fontFamily: "Avenir5 !important",
            }}
          >
            {info.name}
          </Typography>
          <Box
            sx={{
              maxWidth: "420px",
              width: "100%",
              mt: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {info.spouse == false && (
              <GlobelBtn
                width="100%"
                btnText="Add New Family Member"
                onClick={() => onClick(info.name, "add", nodeData)}
              />
            )}
            <GlobelBtn
              width="100%"
              btnText="Edit This Family Member"
              bgColor="transparnet"
              border="1px solid #E1683B"
              color="#E1683B"
              onClick={() => onClick(info.name, "edit", nodeData)}
            />
          </Box>
        </Box>
      </CustomizationDialog>
    </Box>
  );
};

export default FamilyTreeAddModal;
