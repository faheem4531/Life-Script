import Layout from "@/components/Layout/Layout";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { getBookCover, selectCoverData } from "@/store/slices/chatSlice";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { renderToString } from "react-dom/server";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

const ViewBookCover = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  const coverData = useSelector(selectCoverData);
  const { CoverNumber } = router.query;
  const [title, setTitle] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [byline, setByline] = useState("");
  const elementRef = useRef(null);

  const [selectedColor, setSelectedColor] = useState<string>("#197065");

  useEffect(() => {
    dispatch(getBookCover());
  }, []);

  useEffect(() => {
    if (coverData) {
      setByline(coverData.byLine);
      setTitle(coverData.title);
      setSubtitle(coverData.subTitle);
      setImageLink(coverData.image);
      setSelectedColor(coverData.color);
    }
  }, [coverData]);
  
  const generatePDF = () => {
    htmlToImage.toPng(document.getElementById('bookcoverpdf'), { quality: 1 })
      .then((dataUrl) => 
      {
        const pdf = new jsPDF('l', 'in', [14.5, 10]);
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        // pdf.internal.pageSize.width = imgProps.width;
        // pdf.internal.pageSize.height = imgProps.height;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight); // Corrected parameter
        console.log("pdfwidth2",pdf.internal.pageSize.getWidth(), "22", pdf.internal.pageSize.getHeight());

        pdf.save("download.pdf");
      });
  };
  


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
                onClick={generatePDF}
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
            <Box ref={elementRef} id={"bookcoverpdf"}>
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
