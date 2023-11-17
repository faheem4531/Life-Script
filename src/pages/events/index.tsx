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
            width: "100%",
            height: "100%",
            pl: "50px",
            pr: "50px",
          }}
        >
          <RichText chapterName={chapterName} />
        </Box>
      </Layout>
    </>
  );
}
