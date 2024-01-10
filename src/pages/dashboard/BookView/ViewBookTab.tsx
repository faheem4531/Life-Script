import GlobelBtn from "@/components/button/Button";
import PDFViewer from "@/pages/PDFBookView/view";
import { Box } from "@mui/material";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";

const ReviewInterior = ({ setSelectedTab }) => {
  const pdfUrl =
    "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1703831627/thelifescript/dyz9gggtcx4aju0dhn8k.pdf";
  return (
    <Box>
      <Box
        sx={{
          p: "26px 28px",
          bgcolor: "white",
          borderRadius: "7.348px",
          border: "0.367px solid #197065",
          height: "700px",
        }}
      >
        <Box>
          <PDFViewer pdfUrl={pdfUrl} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          py: "20px",
        }}
      >
        <Box>
          <GlobelBtn
            btnText="Back"
            onClick={() => {
              setSelectedTab(1);
            }}
            image={backArrow}
          />
        </Box>
        <Box>
          <GlobelBtn
            bgColor="#186F65"
            color="white"
            btnText="Next"
            image2={NextArrow}
            onClick={() => {
              setSelectedTab(3);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewInterior;
