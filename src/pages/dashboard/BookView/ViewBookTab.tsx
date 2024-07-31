import { lazy, Suspense, useState } from "react";
import { Box, Typography } from "@mui/material";
import GlobelBtn from "@/components/button/Button";
import ShippingModal from "@/components/modal/ShippingModal";
import { useTranslation } from "react-i18next";
import alertImage from "@/_assets/png/alert.png";
import Image from "next/image";

const PDFViewer = lazy(() => import("@/pages/PDFBookView/view"));

const ReviewInterior = ({ setSelectedTab, interior, totalInteriorPages }) => {
    const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const pdfUrl = interior;


  return (
    <Box>
      {totalInteriorPages && totalInteriorPages < 60 && (
        <Box
          sx={{
            backgroundColor: "#F2D2BD",
            border: "1px solid black",
            padding: "10px 10px 10px",
            display : "flex",
            gap : "10px",
            borderRadius : "5px",
          }}
        >
          <Box sx = {{padding : "1px"}}>
          <Image src={alertImage} alt="alert.png" width={13} height={13}/></Box>
          <Typography sx={{ color: "black" }}>
            {t(
              "reviewBook.pageLimitMessage",
              "We can only print books with more than 60 pages. Please consider adding a few more chapters."
            )}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          p: {
            xl: "20px 20px",
            lg: "20px 20px",
            md: "20px 20px",
            sm: "10px 10px",
            xs: "10px 10px",
          },
          bgcolor: "#F3ECDA",
          borderRadius: 4,
          height: {xl  : "90vh", lg  : "90vh", md : "100vh", sm : "100vh", xs : "100vh"},
        }}
      >
        <Suspense fallback={<div>Loading PDF Viewer...</div>}>
          <PDFViewer pdfUrl={pdfUrl}/>
        </Suspense>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mt: "30px",
        }}
      >
        <GlobelBtn
          btnText={t("reviewBook.backBtn")}
          color="#E1683B"
          border="1px solid #E1683B"
          bgColor="#fff"
          width="110px"
          onClick={() => setSelectedTab(1)}
        />
        <GlobelBtn
          bgColor="#E1683B"
          color="white"
          width="110px"
          btnText={t("reviewBook.nextBtn")}
          onClick={() => setOpen(true)}
          disabled={totalInteriorPages < 60}
        />
      </Box>
      <ShippingModal
        open={open}
        setOpen={setOpen}
        setSelectedTab={setSelectedTab}
      />
    </Box>
  );
};

export default ReviewInterior;
