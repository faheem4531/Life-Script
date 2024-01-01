"use client";
import Layout from "@/components/Layout/Layout";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import backArrow from "../../_assets/svg/left.svg";
import RichText from "./richtext";
export default function Answers() {
  const router = useRouter();
  const { questionId } = router.query;

  return (
    <>
      <Layout>
        <Box
          sx={{
            bgcolor: "#fff",
            m: { sm: "0px", xs: "15px" },
            borderRadius: "34px",
            padding: {
              xl: "30px 70px 100px",
              sm: "20px 40px 80px",
              xs: "20px 20px 50px",
            },
            border: "1px solid #197065",
          }}
        >
          <Box mb={2}>
            <Button
              onClick={() => {
                router.back();
              }}
              sx={{
                borderRadius: "26.267px",
                border: " 0.71px solid #197065",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src={backArrow} alt="backArrow" />
            </Button>
          </Box>
          <RichText questionId={questionId} />
        </Box>
      </Layout>
    </>
  );
}
