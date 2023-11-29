"use client";
import Layout from "@/components/Layout/Layout";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
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
