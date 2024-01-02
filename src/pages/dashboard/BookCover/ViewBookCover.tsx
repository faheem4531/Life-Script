import Layout from "@/components/Layout/Layout";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import logo from "@/_assets/svg/SmallLogoWhite.svg";
import { getBookCover, selectCoverData } from "@/store/slices/chatSlice";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { renderToString } from "react-dom/server";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

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

  const generatePDFOne = async (
    title,
    subtitle,
    name,
    imgUrl,
    color
    ) => {

    const logo = "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1703775146/thelifescript/Vector2665ca7b6e91b2c78eb3976317d845f1e3fec5b46b8aa10f2de595ccfef0d2bb_xzgh3l.png";
    const pdfWidth = 380;
    const pdfHeight = 255;
    const pageWidth = 169.5;
    const tail = 41;
    const pdf = new jsPDF({
      unit: "mm", // Set the unit to millimeters
      format: [pdfWidth, pdfHeight], // Convert inches to millimeters (15 inches x 10 inches)
      orientation: "landscape",
    });

    const text2 = subtitle?.toUpperCase();
    const text1 = title?.toUpperCase();
    const writter = name?.toUpperCase();
    const bgcolor = color?.toString();
    const imageUrl = imgUrl;
    // Section 1: Blue background
    pdf.setFillColor(bgcolor);
    pdf.rect(0, 0, pageWidth, pdfHeight, "F"); // Convert inches to millimeters

    // Section 2: Yellow background
    pdf.setFillColor(255, 255, 255);
    pdf.rect(pageWidth, 0, 1, pdfHeight, "F"); // Convert inches to millimeters
    pdf.setFillColor(bgcolor);
    pdf.rect(170.5, 0, 39, pdfHeight, "F"); // Convert inches to millimeters
    pdf.setFillColor(255, 255, 255);
    pdf.rect(209.5, 0, 1, pdfHeight, "F"); // Convert inches to millimeters

    let y = 5; // Initial y-coordinate

    for (let i = 0; i < text2.length; i++) {
      const char = text2[i];
      pdf.setFontSize(10);
      pdf.setTextColor(255, 255, 255);
      pdf.text(char, 190, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    pdf.setFontSize(10);
    pdf.setTextColor(255, 255, 255);
    pdf.text("  |  ", 190, y, { angle: 270 });

    y = y + 6;

    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFontSize(10);
      pdf.setTextColor(255, 255, 255);
      pdf.text(char, 190, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }
    pdf.addImage(imageUrl, "JPEG", 180, 225, 20, 20);

    // Section 3: Blue background
    pdf.setFillColor(bgcolor);
    pdf.rect(pageWidth + tail, 0, pageWidth, pdfHeight, "F"); // Convert inches to millimeters
    const centerX = pageWidth + tail + pageWidth / 2; // Convert inches to millimeters

    // 1st Text: "A good book" with font size 16px
    pdf.setFontSize(16);
    pdf.setTextColor(255, 255, 255);
    pdf.text(text1, centerX, 50.8, { align: "center" }); // Convert inches to millimeters

    // 2nd Text: "New Book" font size 22px, bold, and underlined
    pdf.setFontSize(22);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(255, 255, 255);
    pdf.text(text2, centerX, 66.04, {
      align: "center",
    }); // Convert inches to millimeters

    const imgWidth = 140; // Convert inches to millimeters
    const imgHeight = 80; // Convert inches to millimeters
    const xPos = pageWidth + tail + (pageWidth - imgWidth) / 2; // Convert inches to millimeters
    const yPos = 87; // Convert inches to millimeters
    pdf.addImage(imageUrl, "JPEG", xPos, yPos, imgWidth, imgHeight);

    // 4th Text: "- good book -" font size 16px
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(16);
    pdf.text(`-   ${writter}   -`, centerX, 178.4, { align: "center" }); // Convert inches to millimeters

    pdf.save("my_document.pdf");
  };

  const generatePDFTwo = async (
    title,
    subtitle,
    name,
    imgUrl,
    color) => {
    const pdfWidth = 380;
    const pdfHeight = 255;
    const pageWidth = 169.5;
    const tail = 41;
    const pdf = new jsPDF({
      unit: "mm", // Set the unit to millimeters
      format: [pdfWidth, pdfHeight], // Convert inches to millimeters (15 inches x 10 inches)
      orientation: "landscape",
    });

    const text2 = subtitle?.toUpperCase();
    const text1 = title?.toUpperCase();
    const writter = name?.toUpperCase();
    const bgColor = color.toString();
    const imageUrl = imgUrl;
    // Section 1: Blue background
    pdf.setFillColor(bgColor);
    pdf.rect(0, 0, pageWidth, pdfHeight, "F"); // Convert inches to millimeters

    // Section 2: Yellow background
    pdf.setFillColor(255, 255, 255);
    pdf.rect(pageWidth, 0, 1, pdfHeight, "F"); // Convert inches to millimeters
    pdf.setFillColor(bgColor);
    pdf.rect(170.5, 0, 39, pdfHeight, "F"); // Convert inches to millimeters
    pdf.setFillColor(255, 255, 255);
    pdf.rect(209.5, 0, 1, pdfHeight, "F"); // Convert inches to millimeters

    let y = 5; // Initial y-coordinate

    for (let i = 0; i < text2.length; i++) {
      const char = text2[i];
      pdf.setFontSize(10);
      pdf.setTextColor(255, 255, 255);
      pdf.text(char, 190, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    pdf.setFontSize(10);
    pdf.setTextColor(255, 255, 255);
    pdf.text("  |  ", 190, y, { angle: 270 });

    y = y + 6;

    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFontSize(10);
      pdf.setTextColor(255, 255, 255);
      pdf.text(char, 190, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }
    pdf.addImage(imageUrl, "JPEG", 180, 225, 20, 20);

    // Section 3
    pdf.setFillColor(bgColor);
    pdf.rect(pageWidth + tail, 0, pageWidth, pdfHeight, "F"); // Convert inches to millimeters
    const centerX = pageWidth + tail + pageWidth / 2; // Convert inches to millimeters

    // 1st Text: "A good book" with font size 16px
    pdf.setFontSize(16);
    pdf.setTextColor(255, 255, 255);
    pdf.text(text1, centerX, 35, { align: "center" }); // Convert inches to millimeters

    const imgWidth = 100; // Convert inches to millimeters
    const imgHeight = 120; // Convert inches to millimeters
    const xPos = pageWidth + tail + (pageWidth - imgWidth) / 2; // Convert inches to millimeters
    const yPos = 50; // Convert inches to millimeters
    pdf.addImage(imageUrl, "JPEG", xPos, yPos, imgWidth, imgHeight);

    // 2nd Text: "New Book" font size 22px, bold, and underlined
    pdf.setFontSize(22);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(255, 255, 255);
    pdf.text(text2, centerX, 190, {
      align: "center",
    }); // Convert inches to millimeters

    pdf.setDrawColor(255, 255, 255);
    pdf.setLineWidth(1);
    pdf.line(265, 200, 325, 200,);

    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(16);
    pdf.text(`-   ${writter}   -`, centerX, 215, { align: "center" }); // Convert inches to millimeters

    pdf.save("my_document.pdf");
  };

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
                onClick={() =>
                  CoverNumber.toString() === "2"
                    ? generatePDFTwo(byline, title, subtitle, imageLink, selectedColor)
                    : generatePDFOne(byline, title, subtitle, imageLink, selectedColor)
                }
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
