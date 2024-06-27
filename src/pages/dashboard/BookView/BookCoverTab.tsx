import GlobelBtn from "@/components/button/Button";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import {
  getBookCover,
  selectCoverData,
  updateBook,
  uploadImage,
  uploadImageWithCloudinary
} from "@/store/slices/chatSlice";
import { Box, CircularProgress } from "@mui/material";
import jsPDF from "jspdf";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { font } from "../../../styles/font";
import { useTranslation } from "next-i18next";

const BookCoverTab = ({ setSelectedTab, pages }) => {
  const {t}=useTranslation();
  const [title, setTitle] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [byline, setByline] = useState("");
  const [selectedColor, setSelectedColor] = useState<string>("#197065");

  const dispatch: any = useDispatch();
  const [spineSize, setSpineSize] = useState(null);
  const coverData = useSelector(selectCoverData);
  const [loading, setLoading] = useState(false);
  const [finalCover, setFinalCover] = useState("");
  const handleClick = (event: any) => {
    event.stopPropagation();
  };
  const router = useRouter();
  const { CoverNumber } = router.query;

  const onClickHandler = async () => {
    setLoading(true);
    try {
      await generateAndUploadPDF();
    } catch (error) {
      // Handle errors if needed
      console.error("Error generating or uploading PDF:", error);
    }
  };

  // const generatePDFOne = async (
  //   title,
  //   subtitle,
  //   name,
  //   imgUrl,
  //   color,
  //   spine = 6
  // ) => {
  //   const logo =
  //     "https://lifescript-media.s3.eu-north-1.amazonaws.com/0c666ff5-3889-47f1-9727-901ad3995330-Screen%20Shot%202024-01-19%20at%206.49.32%20PM.png";
  //   const pdfHeight = 255;
  //   const pageWidth = 170; //prev was 169.5
  //   const tail = spine < 6 ? 6 : spine;
  //   const pdfWidth = pageWidth + pageWidth + tail;
  //   const pdf = new jsPDF({
  //     unit: "mm", // Set the unit to millimeters
  //     format: [pdfWidth, pdfHeight], // Convert inches to millimeters (15 inches x 10 inches)
  //     orientation: "landscape",
  //   });

  //   pdf.addFileToVFS("WorkSans-normal.ttf", font);

  //   pdf.addFont("WorkSans-normal.ttf", "WorkSans", "normal");

  //   const text2 = subtitle?.toUpperCase();
  //   const text1 = title?.toUpperCase();
  //   const writter = name?.toUpperCase();
  //   const bgcolor = color?.toString();
  //   const imageUrl = imgUrl;
  //   // Section 1:
  //   pdf.setFillColor(bgcolor);
  //   pdf.rect(0, 0, pageWidth, pdfHeight, "F"); // Convert inches to millimeters

  //   // Section 2:
  //   pdf.setFillColor(255, 255, 255);
  //   pdf.rect(pageWidth, 0, 1, pdfHeight, "F"); // spine first border
  //   pdf.setFillColor(bgcolor);
  //   pdf.rect(171, 0, tail - 2, pdfHeight, "F"); // inner spine
  //   pdf.setFillColor(255, 255, 255);
  //   const spineBorder2 = pageWidth + tail - 1;
  //   pdf.rect(spineBorder2, 0, 1, pdfHeight, "F"); // spine second border

  //   let y = 5; // Initial y-coordinate
  //   const fontSize = 10; //prev was minus 3
  //   const textCenter = pageWidth + tail / 2 - 1.3;

  //   for (let i = 0; i < text2.length; i++) {
  //     const char = text2[i];
  //     pdf.setFontSize(fontSize);
  //     pdf.setFont("WorkSans");
  //     if (coverData?.coverNumber === "5") {
  //       pdf.setTextColor(255, 255, 255);
  //     } else {
  //       pdf.setTextColor(0, 0, 0);
  //     }
  //     // pdf.setTextColor(255, 255, 255);
  //     pdf.text(char, textCenter, y, { angle: 270 });
  //     y = y + 3; // Move to the next line for each character
  //   }

  //   pdf.setFontSize(fontSize);
  //   pdf.setFont("WorkSans");
  //   pdf.setTextColor(255, 255, 255);
  //   pdf.text("  |  ", pageWidth + tail / 2 - 1, y, { angle: 270 });

  //   y = y + 6;

  //   for (let i = 0; i < writter.length; i++) {
  //     const char = writter[i];
  //     pdf.setFontSize(fontSize);
  //     pdf.setFont("WorkSans");
  //     if (coverData?.coverNumber === "5") {
  //       pdf.setTextColor(255, 255, 255);
  //     } else {
  //       pdf.setTextColor(0, 0, 0);
  //     }
  //     // pdf.setTextColor(255, 255, 255);
  //     pdf.text(char, textCenter, y, { angle: 270 });
  //     y = y + 3; // Move to the next line for each character
  //   }
  //   const logoSize = tail < 22 ? tail - 3 : 20;
  //   const tailcenter = pageWidth + (tail - logoSize) / 2;
  //   pdf.addImage(logo, "png", tailcenter, 225, logoSize, logoSize);

  //   // Section 3:
  //   // pdf.setFillColor(bgcolor);
  //   // pdf.rect(pageWidth + tail, 0, pageWidth, pdfHeight, "F");
  //   // const centerX = pageWidth + tail + pageWidth / 2;

  //   // // 1st Text: "A good book" with font size 16px
  //   // pdf.setFontSize(16);
  //   // pdf.setFont("WorkSans");
  //   // pdf.setTextColor(255, 255, 255);
  //   // pdf.text(text1, centerX, 50.8, { align: "center" });

  //   // // 2nd Text: "New Book" font size 22px, bold, and underlined
  //   // pdf.setFontSize(30);
  //   // pdf.setFont("WorkSans");
  //   // pdf.setTextColor(255, 255, 255);
  //   // pdf.text(text2, centerX, 66.04, {
  //   //   align: "center",
  //   // }); // Convert inches to millimeters

  //   // const imgWidth = 140; // Convert inches to millimeters
  //   // const imgHeight = 80; // Convert inches to millimeters
  //   // const xPos = pageWidth + tail + (pageWidth - imgWidth) / 2; // Convert inches to millimeters
  //   // const yPos = 87; // Convert inches to millimeters
  //   // pdf.addImage(imageUrl, "JPEG", xPos, yPos, imgWidth, imgHeight);

  //   // // 4th Text: "- good book -" font size 16px
  //   // pdf.setFont("WorkSans");
  //   // pdf.setTextColor(255, 255, 255);
  //   // pdf.setFontSize(16);
  //   // pdf.text(`-   ${writter}   -`, centerX, 178.4, { align: "center" }); // Convert inches to millimeters

  //   pdf.setFillColor(bgcolor);
  //   pdf.rect(pageWidth + tail, 0, pageWidth, pdfHeight, "F");
  //   const centerX = pageWidth + tail + pageWidth / 2;
  //   const newImage = coverData && coverData?.coverPagePhoto;
  //   const newData = {imageUrl:newImage}
  //   const newImageLink = await dispatch(uploadImageWithCloudinary(newData));
  //   pdf.addImage(newImageLink?.payload, "png", pageWidth + tail, 0, pageWidth, pdfHeight);

  //   const pdfContent = pdf.output("datauristring"); // Get the PDF content as a data URI

  //   return pdfContent;
  // };
  const generatePDFOnep = async (
    title,
    subtitle,
    name,
    imgUrl,
    color,
    spine = 2
  ) => {
    const logo =
      "https://res.cloudinary.com/dchdhz06m/image/upload/a_90/v1715681713/Frame_jgcftx.png";
      // "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo_lifescript+1.png";
    const pdfHeight = 229 + 40; // Adding 20mm offset for top and bottom
    const pageWidth = 153; // prev was 169.5
    const tail = spine < 6 ? 6 : spine;
    const pdfWidth = pageWidth + pageWidth + tail + 40; // Adding 20mm offset for left and right
    const pdf = new jsPDF({
      unit: "mm", // Set the unit to millimeters
      format: [pdfWidth, pdfHeight], // Updated format with offset
      orientation: "landscape",
    });
  
    pdf.addFileToVFS("WorkSans-normal.ttf", font);
    pdf.addFont("WorkSans-normal.ttf", "WorkSans", "normal");
  
    const text2 = subtitle?.toUpperCase();
    const text1 = title?.toUpperCase();
    const writter = name?.toUpperCase();
    const bgcolor = color?.toString();
    const imageUrl = imgUrl;
  
    // Full background color including the offset area
    pdf.setFillColor(bgcolor);
    pdf.rect(0, 0, pdfWidth, pdfHeight, "F");
  
    // Section 1: Main content area
    pdf.setFillColor(bgcolor);
    pdf.rect(20, 20, pageWidth, pdfHeight - 40, "F");
  
    // Section 2: Spine and inner spine
    pdf.setFillColor(bgcolor);
    pdf.rect(20 + pageWidth, 20, 1, pdfHeight - 40, "F"); // spine first border
    pdf.setFillColor(bgcolor);
    pdf.rect(21 + pageWidth, 20, tail - 2, pdfHeight - 40, "F"); // inner spine
    pdf.setFillColor(bgcolor);
    const spineBorder2 = 20 + pageWidth + tail - 1;
    pdf.rect(spineBorder2, 20, 1, pdfHeight - 40, "F"); // spine second border
  
    let y = 25; // Initial y-coordinate with offset
    const fontSize = 10; // prev was minus 3
    const textCenter = 20 + pageWidth + tail / 2 - 1.3;
  
    for (let i = 0; i < text2.length; i++) {
      const char = text2[i];
      pdf.setFontSize(fontSize);
      pdf.setFont("WorkSans");
      if (coverData?.coverNumber === "5") {
        pdf.setTextColor(255, 255, 255);
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }
  
    pdf.setFontSize(fontSize);
    pdf.setFont("WorkSans");
    pdf.setTextColor(255, 255, 255);
    pdf.text("  |  ", 20 + pageWidth + tail / 2 - 1, y, { angle: 270 });
  
    y = y + 6;
  
    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFontSize(fontSize);
      pdf.setFont("WorkSans");
      if (coverData?.coverNumber === "5") {
        pdf.setTextColor(255, 255, 255);
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }
    const logoSize = tail < 22 ? tail - 3 : 20;
    const tailcenter = 20 + pageWidth + (tail - logoSize) / 2;
    pdf.addImage(logo, "png", tailcenter, 225, logoSize, logoSize);
  
    pdf.setFillColor(bgcolor);
    pdf.rect(20 + pageWidth + tail, 20, pageWidth, pdfHeight - 40, "F");
    const centerX = 20 + pageWidth + tail + pageWidth / 2;
    const newImage = coverData && coverData?.coverPagePhoto;
    const newData = { imageUrl: newImage };
    const newImageLink = await dispatch(uploadImageWithCloudinary(newData));
    pdf.addImage(newImageLink?.payload, "png", 20 + pageWidth + tail, 20, pageWidth, pdfHeight - 40);
  
    const pdfContent = pdf.output("datauristring"); // Get the PDF content as a data URI
  
    return pdfContent;
  };
  const generatePDFOne = async (
    title,
    subtitle,
    name,
    imgUrl,
    color,
    spine = 10.2 // Updated spine width
  ) => {
    const logo = CoverNumber === "5" ? "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo+(5)+LifeScript+2+(1).png"
      :"https://res.cloudinary.com/dchdhz06m/image/upload/a_90/v1715681713/Frame_jgcftx.png";
    const pdfHeight = 229 + 40; // Adding 20mm offset for top and bottom
    const leftContentWidth = 144; // Width of the left content area
    const rightContentWidth = 144; // Width of the right content area
    const gutterWidth = 8; // Gutter width on both sides
    const spineWidth = spine;
    const offset = 20; // 20 mm on each side for the offset
    const pdfWidth = leftContentWidth + gutterWidth + spineWidth + gutterWidth + rightContentWidth + 2 * offset; // Total PDF width
  
    const pdf = new jsPDF({
      unit: "mm", // Set the unit to millimeters
      format: [pdfWidth, pdfHeight], // Updated format with offset
      orientation: "landscape",
    });
  
    pdf.addFileToVFS("WorkSans-normal.ttf", font);
    pdf.addFont("WorkSans-normal.ttf", "WorkSans", "normal");
  
    const text2 = subtitle?.toUpperCase();
    const text1 = title?.toUpperCase();
    const writter = name?.toUpperCase();
    const bgcolor = color?.toString();
    const imageUrl = imgUrl;
  
    // Full background color including the offset area
    pdf.setFillColor(bgcolor);
    pdf.rect(0, 0, pdfWidth, pdfHeight, "F");
  
    // Section 1: Left content area
    pdf.setFillColor(bgcolor);
    pdf.rect(offset, offset, leftContentWidth, pdfHeight - 2 * offset, "F");
  
    // Section 2: Left gutter
    pdf.setFillColor(bgcolor);
    pdf.rect(offset + leftContentWidth, offset, gutterWidth, pdfHeight - 2 * offset, "F");
  
    // Section 3: Spine and inner spine
    pdf.setFillColor(bgcolor);
    pdf.rect(offset + leftContentWidth + gutterWidth, offset, 1, pdfHeight - 2 * offset, "F"); // spine first border
    pdf.setFillColor(bgcolor);
    pdf.rect(offset + leftContentWidth + gutterWidth + 1, offset, spineWidth - 2, pdfHeight - 2 * offset, "F"); // inner spine
    pdf.setFillColor(bgcolor);
    const spineBorder2 = offset + leftContentWidth + gutterWidth + spineWidth - 1;
    pdf.rect(spineBorder2, offset, 1, pdfHeight - 2 * offset, "F"); // spine second border
  
    // Section 4: Right gutter
    pdf.setFillColor(bgcolor);
    pdf.rect(offset + leftContentWidth + gutterWidth + spineWidth, offset, gutterWidth, pdfHeight - 2 * offset, "F");
  
    // Section 5: Right content area
    pdf.setFillColor(bgcolor);
    pdf.rect(offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth, offset, rightContentWidth, pdfHeight - 2 * offset, "F");
  
    let y = 25; // Initial y-coordinate with offset
    const fontSize = 10; // Font size
    const textCenter = offset + leftContentWidth + gutterWidth + spineWidth / 2 - 1.3;
  
    for (let i = 0; i < text2.length; i++) {
      const char = text2[i];
      pdf.setFontSize(fontSize);
      pdf.setFont("WorkSans");
      pdf.setTextColor(0, 0, 0); // Default text color
  
      if (coverData?.coverNumber === "5") {
        pdf.setTextColor(255, 255, 255); // White text for cover number 5
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }
  
    pdf.setFontSize(fontSize);
    pdf.setFont("WorkSans");
    pdf.setTextColor(255, 255, 255); // Separator color
    pdf.text("  |  ", offset + leftContentWidth + gutterWidth + spineWidth / 2 - 1, y, { angle: 270 });
  
    y = y + 6;
  
    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFontSize(fontSize);
      pdf.setFont("WorkSans");
      pdf.setTextColor(255, 255, 255); // Default text color
  
      if (coverData?.coverNumber === "5") {
        pdf.setTextColor(255, 255, 255); // White text for cover number 5
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }
  
    const logoSize = spineWidth < 22 ? spineWidth - 3 : 20;
    const tailcenter = offset + leftContentWidth + gutterWidth + (spineWidth - logoSize) / 2;
    pdf.addImage(logo, "png", tailcenter, 225, logoSize, logoSize);
  
    const centerX = offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth + rightContentWidth / 2;
    const newImage = coverData && coverData?.coverPagePhoto;
    const newData = { imageUrl: newImage };
    const newImageLink = await dispatch(uploadImageWithCloudinary(newData));
    pdf.addImage(newImageLink?.payload, "png", offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth, offset, rightContentWidth, pdfHeight - 2 * offset);
  
    const pdfContent = pdf.output("datauristring"); // Get the PDF content as a data URI
  
    return pdfContent;
  };

  
  
  
  
  
  

  const generateAndUploadPDF = async () => {
    const pdfContent = await generatePDFOne(
      coverData.byLine,
      coverData.title,
      coverData.subTitle,
      coverData.image,
      coverData.color,
      spineSize
    );

    // Convert data URI to Blob
    const pdfBlob = await fetch(pdfContent).then((res) => res.blob());

    // Create FormData and append the Blob
    const formData = new FormData();
    formData.append("image", pdfBlob, "luluBookCover.pdf");

    // Make API request to upload PDF to Cloudinary
    dispatch(uploadImage(formData))
      .unwrap()
      .then((pdfUrl) => {

        dispatch(updateBook({ coverPdf: pdfUrl }))
          .unwrap()
          .then(() => {
            setLoading(false);
            setSelectedTab(2);
          });
      });
  };

  useEffect(() => {
    dispatch(getBookCover());
  }, []);

   // Calculate spine size based on the number of pages
   function calculatePageSize(pages) {
    const spineSize = (pages * 0.5 / 10) + 1.2 + 4;
    return spineSize;
  }

  useEffect(() => {
    if (pages) {
      const spine = calculatePageSize(pages);
      setSpineSize(spine);
    }
  }, [pages]);

  // function calculatePageSize(pages) {
  //   if (pages >= 0 && pages <= 23) {
  //     return 0;
  //   } else if (pages >= 24 && pages <= 84) {
  //     return 6;
  //   } else if (pages >= 85 && pages <= 140) {
  //     return 13;
  //   } else if (pages >= 141 && pages <= 168) {
  //     return 16;
  //   } else if (pages >= 169 && pages <= 194) {
  //     return 17;
  //   } else if (pages >= 195 && pages <= 222) {
  //     return 19;
  //   } else if (pages >= 223 && pages <= 250) {
  //     return 21;
  //   } else if (pages >= 251 && pages <= 278) {
  //     return 22;
  //   } else if (pages >= 279 && pages <= 306) {
  //     return 24;
  //   } else if (pages >= 307 && pages <= 334) {
  //     return 25;
  //   } else if (pages >= 335 && pages <= 360) {
  //     return 27;
  //   } else if (pages >= 361 && pages <= 388) {
  //     return 29;
  //   } else if (pages >= 389 && pages <= 416) {
  //     return 30;
  //   } else if (pages >= 417 && pages <= 444) {
  //     return 32;
  //   } else if (pages >= 445 && pages <= 472) {
  //     return 33;
  //   } else if (pages >= 473 && pages <= 500) {
  //     return 35;
  //   } else if (pages >= 501 && pages <= 528) {
  //     return 37;
  //   } else if (pages >= 529 && pages <= 556) {
  //     return 38;
  //   } else if (pages >= 557 && pages <= 582) {
  //     return 40;
  //   } else if (pages >= 583 && pages <= 610) {
  //     return 41;
  //   } else if (pages >= 611 && pages <= 638) {
  //     return 43;
  //   } else if (pages >= 639 && pages <= 666) {
  //     return 44;
  //   } else if (pages >= 667 && pages <= 694) {
  //     return 46;
  //   } else if (pages >= 695 && pages <= 722) {
  //     return 48;
  //   } else if (pages >= 723 && pages <= 750) {
  //     return 49;
  //   } else if (pages >= 751 && pages <= 778) {
  //     return 51;
  //   } else if (pages >= 779 && pages <= 799) {
  //     return 52;
  //   } else if (pages >= 800) {
  //     return 54;
  //   } else {
  //     // Handle invalid input
  //     return null;
  //   }
  // }
  useEffect(() => {
    if (coverData) {
      setByline(coverData.byLine);
      setTitle(coverData.title);
      setSubtitle(coverData.subTitle);
      setImageLink(coverData.image);
      setSelectedColor(coverData.color);
      setFinalCover(coverData.coverPagePhoto);
    }
  }, [coverData]);

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (

        <Box onClick={(e) => handleClick(e)}>
          <SelectBookCoverCard
            landScape={coverData.coverNumber?.toString()}
            title={title}
            subtitle={subtitle}
            Byline={byline}
            droppedImage={imageLink}
            ColourPalette={selectedColor}
            finalCover={finalCover}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: 2,
              mt: '40px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                pb: '20px',
              }}
            >
              <Box>
                <GlobelBtn
                  btnText={t("reviewBook.backBtn")}
                  color="#E1683B"
                  bgColor="#fff"
                  border="1px solid #E1683B"
                  onClick={() => setSelectedTab(0)}
                  width="110px"
                />
              </Box>
              <Box>
                <GlobelBtn
                  bgColor="#E1683B"
                  color="white"
                  btnText={loading ? "Saving..." : t("reviewBook.nextBtn")}
                  border="0px"
                  width="110px"
                  onClick={onClickHandler}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BookCoverTab;
