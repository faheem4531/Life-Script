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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { font } from "../../../styles/font";

const BookCoverTab = ({ setSelectedTab, pages }) => {
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

  const onClickHandler = async () => {
    setLoading(true);
    try {
      await generateAndUploadPDF();
    } catch (error) {
      // Handle errors if needed
      console.error("Error generating or uploading PDF:", error);
    }
  };
  const generatePDFOne = async (
    title,
    subtitle,
    name,
    imgUrl,
    color,
    spine = 11.5
  ) => {
    const logo =
      "https://res.cloudinary.com/dchdhz06m/image/upload/a_90/v1715681713/Frame_jgcftx.png";
    const offset = 20; // Offset value in millimeters
    const pdfHeight = 269 + 2 * offset; // Height with offset
    const pageWidth = (355.5 - spine) / 2; // Adjusted pageWidth based on the total width minus the spine
    const pdfWidth = 2 * pageWidth + spine + 2 * offset; // Width with offset
    const pdf = new jsPDF({
      unit: "mm", // Set the unit to millimeters
      format: [pdfWidth, pdfHeight], // Convert inches to millimeters (15 inches x 10 inches)
      orientation: "landscape",
    });
  
    pdf.addFileToVFS("WorkSans-normal.ttf", font);
    pdf.addFont("WorkSans-normal.ttf", "WorkSans", "normal");
  
    const text2 = subtitle?.toUpperCase();
    const text1 = title?.toUpperCase();
    const writter = name?.toUpperCase();
    const bgcolor = color?.toString();
    const imageUrl = imgUrl;
  
    // Draw the offset background color
    pdf.setFillColor(bgcolor);
    pdf.rect(0, 0, pdfWidth, pdfHeight, "F");
  
    // Section 1:
    pdf.setFillColor(bgcolor);
    pdf.rect(offset, offset, pageWidth, pdfHeight - 2 * offset, "F");
  
    // Section 2:
    pdf.setFillColor(255, 255, 255);
    pdf.rect(pageWidth + offset, offset, 1, pdfHeight - 2 * offset, "F"); // spine first border
    pdf.setFillColor(bgcolor);
    pdf.rect(pageWidth + offset + 1, offset, spine - 2, pdfHeight - 2 * offset, "F"); // inner spine
    pdf.setFillColor(255, 255, 255);
    const spineBorder2 = pageWidth + offset + spine - 1;
    pdf.rect(spineBorder2, offset, 1, pdfHeight - 2 * offset, "F"); // spine second border
  
    let y = offset + 5; // Initial y-coordinate
    const fontSize = 10; //prev was minus 3
    const textCenter = pageWidth + spine / 2 - 1.3 + offset;
  
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
    pdf.text("  |  ", pageWidth + spine / 2 - 1 + offset, y, { angle: 270 });
  
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
  
    const logoSize = spine < 22 ? spine - 3 : 20;
    const tailcenter = pageWidth + (spine - logoSize) / 2 + offset;
    pdf.addImage(logo, "png", tailcenter, 225 + offset, logoSize, logoSize);
  
    pdf.setFillColor(bgcolor);
    pdf.rect(pageWidth + spine + offset, offset, pageWidth, pdfHeight - 2 * offset, "F");
    const centerX = pageWidth + spine + pageWidth / 2 + offset;
    const newImage = coverData && coverData?.coverPagePhoto;
    const newData = {imageUrl:newImage}
    const newImageLink = await dispatch(uploadImageWithCloudinary(newData));
    pdf.addImage(newImageLink?.payload, "png", pageWidth + spine + offset, offset, pageWidth, pdfHeight - 2 * offset);
  
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
        console.log("Uploaded PDF URL:", pdfUrl);
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
                  btnText="Back"
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
                  btnText={loading ? "Saving..." : "Next"}
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
