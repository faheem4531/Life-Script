import Layout from "@/components/Layout/Layout";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import RichText from "./richtext";
export default function Answers() {
  const router = useRouter();
  const { chapterName } = router.query;
  console.log("textttt", chapterName);

  return (
    <>
      <Layout>
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "34px",
            padding: "50px 70px 100px",
            border: "1px solid #197065"
          }}
        >
          <RichText questionText={chapterName} />
        </Box>
      </Layout>
    </>
  );
}
