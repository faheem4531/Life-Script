import Layout from "@/components/Layout/Layout";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getBookCover, selectCoverData } from "@/store/slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";

const ViewBookCover = () => {
  const dispatch:any = useDispatch();
  const router = useRouter();
  const coverData = useSelector(selectCoverData);
  const {CoverNumber} = router.query;  
  const [title, setTitle] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [byline, setByline] = useState("");

  const [selectedColor, setSelectedColor] = useState<string>("#197065");

  useEffect(() => {
    dispatch(getBookCover());
  },[]);
  useEffect(() => {
    if(coverData){
      setByline(coverData.byLine);
      setTitle(coverData.title);
      setSubtitle(coverData.subTitle);
      setImageLink(coverData.image);
      setSelectedColor(coverData.color);
    }
  },[coverData])
  return (
    <div>
      <Layout>
        <SelectBookCoverHeader />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            mt: "20px",
          }}
        >
          <Box flex={"auto"}>
            <Box
              display="flex"
              gap="30px"
              mt="10px"
              mb="20px"
              justifyContent="flex-end"
            >
              <Button
                sx={{
                  height: { sx: "25px", md: "30px", lg: "45px" },
                  borderRadius: "26.267px",
                  border: " 0.71px solid #197065",
                  p: { xs: "8px 20px", lg: "10.358px 26.989px" },
                  fontSize: { xs: "12px", md: "14px", lg: "18.752px" },
                  color: "#197065",
                  textTransform: "capitalize",
                }}
                onClick={() => {}}
              >
                Print Book
              </Button>
              <Button
                sx={{
                  height: { sx: "25px", md: "30px", lg: "45px" },
                  borderRadius: "26.267px",
                  border: " 0.71px solid #197065",
                  p: { xs: "8px 20px", lg: "10.358px 26.989px" },
                  fontSize: { xs: "12px", md: "14px", lg: "18.752px" },
                  color: "white",
                  textTransform: "capitalize",
                  bgcolor: "#197065",
                  "&:hover": {
                    bgcolor: "#197065",
                  },
                }}
                onClick={() => {
                  router.push(
                    `/dashboard/BookCover/EditBookCover?CoverNumber=${CoverNumber}`
                  );
                }}
              >
                Edit Cover
              </Button>
            </Box>
            <Box>
              <SelectBookCoverCard
                landScape={CoverNumber?.toString()}
                title={title}
                subtitle={subtitle}
                Byline={byline}
                droppedImage={imageLink}
                ColourPalette={selectedColor}
              />
            </Box>
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default ViewBookCover;
