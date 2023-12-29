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
        <Box>
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
        <Box
          sx={{
            bgcolor: "#fff",
            marginTop: "20px",
            borderRadius: "34px",
            padding: { xl: "50px 70px 100px", sm: "50px 40px 80px" },
            border: "1px solid #197065",
          }}
        >
          <RichText questionId={questionId} />
        </Box>
      </Layout>
    </>
  );
}
