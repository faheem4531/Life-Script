import BookCover from "@/_assets/svg/book-cover-header.svg";
import Layout from "@/components/Layout/Layout";
import GlobelBtn from "@/components/button/Button";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { getBookCover, selectCoverData, uploadImageWithCloudinary } from "@/store/slices/chatSlice";

import { Box } from "@mui/material";
import { jsPDF } from "jspdf";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { font } from "../../../styles/font";

const ViewBookCover = () => {
  const { t } = useTranslation();
  const dispatch: any = useDispatch();
  const router = useRouter();

  const coverData = useSelector(selectCoverData);
  const { CoverNumber } = router.query;
  const [title, setTitle] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [byline, setByline] = useState("");
  const [finalCover, setFinalCover] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const elementRef = useRef(null);

  const [selectedColor, setSelectedColor] = useState<string>("#197065");

  const generatePDFOneOld = async (
    title,
    subtitle,
    name,
    imgUrl,
    color,
    finalCover,
    spine = 10.2
  ) => {
    const logo =
      // "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo2.png";
      "https://res.cloudinary.com/dchdhz06m/image/upload/a_90/v1715681713/Frame_jgcftx.png"
    const pageWidth = 154.8; //prev was 169.5
    const tail = spine;
    const offset = 20; // 20mm offset
    const pdfHeight = 230 + 2 * offset;
    const pdfWidth = pageWidth + pageWidth + spine + 2 * offset;
    const pdf = new jsPDF({
      unit: "mm",
      format: [pdfWidth, pdfHeight],
      orientation: "landscape",
    });

    pdf.addFileToVFS("WorkSans-normal.ttf", font);
    // pdf.addFont("WorkSans-normal.ttf", "WorkSans", "bold");

    const text2 = subtitle?.toUpperCase();
    const text1 = title?.toUpperCase();
    const writter = name?.toUpperCase();
    const bgcolor = color?.toString();
    const imageUrl = imgUrl;

    // Fill the entire background with bgcolor
    pdf.setFillColor(bgcolor);
    pdf.rect(0, 0, pdfWidth, pdfHeight, "F");

    // Section 1:
    pdf.setFillColor(bgcolor);
    pdf.rect(offset, offset, pageWidth, pdfHeight - 2 * offset, "F");

    // Section 2:
    // pdf.setFillColor(255, 255, 255);
    pdf.setFillColor(bgcolor);
    pdf.rect(pageWidth + offset, offset, 1, pdfHeight - 2 * offset, "F"); // spine first border
    pdf.setFillColor(bgcolor);
    pdf.rect(pageWidth + 1 + offset, offset, tail - 2, pdfHeight - 2 * offset, "F"); // inner spine
    // pdf.setFillColor(255, 255, 255);
    pdf.setFillColor(bgcolor);
    const spineBorder2 = pageWidth + spine - 1 + offset;
    pdf.rect(spineBorder2, offset, 1, pdfHeight - 2 * offset, "F"); // spine second border

    let y = offset + 5; // Initial y-coordinate
    const fontSize = 10;
    const textCenter = pageWidth + tail / 2 - 1.3 + offset;

    // bookName
    for (let i = 0; i < text2.length; i++) {
      const char = text2[i];
      pdf.setFont("WorkSans");
      pdf.setFontSize(fontSize);
      if (CoverNumber === "5") {
        pdf.setTextColor(255, 255, 255); // Set text color to white
      } else {
        pdf.setTextColor(0, 0, 0); // Set text color to black
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3;
    }

    pdf.setFont("WorkSans");
    pdf.setFontSize(fontSize);
    pdf.setTextColor(0, 0, 0);
    // pdf.setTextColor(CoverNumber === "5" ? 230 : 255, 255, 255);
    pdf.text("  |  ", textCenter, y, { angle: 270 });

    y = y + 6;

    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFont("WorkSans");
      pdf.setFontSize(fontSize);

      if (CoverNumber === "5") {
        pdf.setTextColor(255, 255, 255); // Set text color to white
      } else {
        pdf.setTextColor(0, 0, 0); // Set text color to black
      }

      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3;
    }

    const logoSize = tail < 22 ? tail - 3 : 20;
    const tailcenter = pageWidth + (tail - logoSize) / 2 + offset;
    pdf.addImage(logo, "png", tailcenter, pdfHeight - 30 - offset, logoSize, logoSize);

    pdf.setFillColor(bgcolor);
    pdf.rect(pageWidth + tail + offset, offset, pageWidth, pdfHeight - 2 * offset, "F");

    const centerX = pageWidth + tail + pageWidth / 2 + offset;
    const newData = { imageUrl: finalCover };
    const newImageLink = await dispatch(uploadImageWithCloudinary(newData));
    pdf.addImage(newImageLink?.payload, "png", pageWidth + tail + offset, offset, pageWidth, pdfHeight - 2 * offset);

    pdf.save("my_document2.pdf");
  };

  const generatePDFOneP = async (
    title,
    subtitle,
    name,
    imgUrl,
    color,
    finalCover,
    spine = 10.2
  ) => {
    const logo = CoverNumber === "5" ? "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo+(5)+LifeScript+2+(1).png"
      : "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo_lifescript+1.png";
    const pdfHeight = 229 + 40; // Adding 20mm offset for top and bottom
    const leftContentWidth = 144; // Width of the left content area
    const rightContentWidth = 144; // Width of the right content area
    const gutterWidth = 8; // Gutter width on both sides
    const spineWidth = spine;
    const offset = 20; // 20 mm on each side for the offset
    const pdfWidth = leftContentWidth + gutterWidth + spineWidth + gutterWidth + rightContentWidth + 2 * offset;
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
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    pdf.setFontSize(fontSize);
    pdf.setFont("WorkSans");
    if (coverData?.coverNumber === "5") {
      pdf.setTextColor(255, 255, 255); // White text for cover number 5
    } else {
      pdf.setTextColor(0, 0, 0);
    } // Separator color
    pdf.text("  |  ", offset + leftContentWidth + gutterWidth + spineWidth / 2 - 1, y, { angle: 270 });

    y = y + 6;

    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFontSize(fontSize);
      pdf.setFont("WorkSans");
      if (coverData?.coverNumber === "5") {
        pdf.setTextColor(255, 255, 255); // White text for cover number 5
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    const logoSize = spineWidth < 22 ? spineWidth - 3 : 20;
    const tailcenter = offset + leftContentWidth + gutterWidth + (spineWidth - logoSize) / 2;
    pdf.addImage(logo, "png", tailcenter, 225, logoSize, logoSize);
    

    const centerX = offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth + rightContentWidth / 2;
    const newData = { imageUrl: finalCover };
    const newImageLink = await dispatch(uploadImageWithCloudinary(newData));
    pdf.addImage(newImageLink?.payload, "png", offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth, offset, rightContentWidth, pdfHeight - 2 * offset);

    pdf.save("my_document2.pdf");
  };

  // without Set Logo and All are set  
  const generatePDFOneP1 = async (
    title,
    subtitle,
    name,
    imgUrl,
    color,
    finalCover,
    spine = 10.2
  ) => {
    const logo = CoverNumber === "5" ? "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo+(5)+LifeScript+2+(1).png"
      : "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo_lifescript+1.png";
    const pdfHeight = 229 + 40; // Adding 20mm offset for top and bottom
    const leftContentWidth = 144; // Width of the left content area
    const rightContentWidth = 144; // Width of the right content area
    const gutterWidth = 8; // Gutter width on both sides
    const spineWidth = spine;
    const offset = 20; // 20 mm on each side for the offset
    const pdfWidth = leftContentWidth + gutterWidth + spineWidth + gutterWidth + rightContentWidth + 2 * offset;
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

    if (CoverNumber === "2") {
      // Section 1: Left content area
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset, offset, leftContentWidth, pdfHeight - 2 * offset, "F");

      // Section 2: Left gutter
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth, offset, gutterWidth, pdfHeight - 2 * offset, "F");

      // Section 3: Spine and inner spine
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth, offset, 1, pdfHeight - 2 * offset, "F"); // spine first border
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth + 1, offset, spineWidth - 2, pdfHeight - 2 * offset, "F"); // inner spine
      pdf.setFillColor("#FAFAFA");
      const spineBorder2 = offset + leftContentWidth + gutterWidth + spineWidth - 1;
      pdf.rect(spineBorder2, offset, 1, pdfHeight - 2 * offset, "F"); // spine second border

      // Section 4: Right gutter
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth + spineWidth, offset, gutterWidth, pdfHeight - 2 * offset, "F");

      // Section 5: Right content area
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth, offset, rightContentWidth, pdfHeight - 2 * offset, "F");


    } else {
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

    }

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
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    pdf.setFontSize(fontSize);
    pdf.setFont("WorkSans");
    if (coverData?.coverNumber === "5") {
      pdf.setTextColor(255, 255, 255); // White text for cover number 5
    } else {
      pdf.setTextColor(0, 0, 0);
    } // Separator color
    pdf.text("  |  ", offset + leftContentWidth + gutterWidth + spineWidth / 2 - 1, y, { angle: 270 });

    y = y + 6;

    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFontSize(fontSize);
      pdf.setFont("WorkSans");
      if (coverData?.coverNumber === "5") {
        pdf.setTextColor(255, 255, 255); // White text for cover number 5
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    const logoSize = spineWidth < 22 ? spineWidth - 3 : 20;
    const tailcenter = offset + leftContentWidth + gutterWidth + (spineWidth - logoSize) / 2;
    pdf.addImage(logo, "png", tailcenter, 225, logoSize, logoSize);

    const newData = { imageUrl: finalCover };
    const newImageLink = await dispatch(uploadImageWithCloudinary(newData));

    if (CoverNumber === "3") {
      const imageWidth = 150; // Width of the image in mm
      const imageHeight = 240;
      const imageY = 14;

      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        imageY,
        imageWidth,
        imageHeight
      );
    } else if (CoverNumber === "2") {
      const imageWidth = 150; // Width of the image in mm
      const imageHeight = 242;
      const imageY = 14;

      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        imageY,
        imageWidth,
        imageHeight
      );
    }
    else if (CoverNumber === "1") {
      const imageWidth = 150; // Width of the image in mm
      const imageHeight = 242;
      const imageY = 14;

      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        imageY,
        imageWidth,
        imageHeight
      );
    }
    else {
      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        offset,
        rightContentWidth,
        pdfHeight - 2 * offset
      );
    }


    pdf.save("my_document2.pdf");
  };

  //Set Image Logo 
  const generatePDFOneP2 = async (
    title,
    subtitle,
    name,
    imgUrl,
    color,
    finalCover,
    spine = 10.2
  ) => {
    const logo = CoverNumber === "5" ? "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo+(5)+LifeScript+2+(1).png"
      : "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo_lifescript+1.png";
    // const pdfHeight = 229 + 40; // Adding 20mm offset for top and bottom
    let pdfHeight: any;
    if (
      coverData?.coverNumber === "1" ||
      coverData?.coverNumber === "3"
    ) {
      pdfHeight = 229 + 30;
    }else if (coverData?.coverNumber === "2"){
      pdfHeight = 229 + 30;
    } else {
      pdfHeight = 229 + 40;  // 20 mm on each side for the offset
    }
    const leftContentWidth = 144; // Width of the left content area
    const rightContentWidth = 144; // Width of the right content area
    const gutterWidth = 8; // Gutter width on both sides
    const spineWidth = spine;
    // const offset = 20; // 20 mm on each side for the offset

    let offset: any;
    if (
      coverData?.coverNumber === "1" ||
      coverData?.coverNumber === "3"
    ) {
      offset = 12;
    } else if (coverData?.coverNumber === "2" ){
      offset = 8;
    }else {
      offset = 20; // 20 mm on each side for the offset
    }
    const pdfWidth = leftContentWidth + gutterWidth + spineWidth + gutterWidth + rightContentWidth + 2 * offset;
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

    if (CoverNumber === "2") {
      // Full background color including the offset area
      pdf.setFillColor("#FAFAFA");
      pdf.rect(0, 0, pdfWidth, pdfHeight, "F");

      // Section 1: Left content area
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset, offset, leftContentWidth, pdfHeight - 2 * offset, "F");

      // Section 2: Left gutter
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth, offset, gutterWidth, pdfHeight - 2 * offset, "F");

      // Section 3: Spine and inner spine
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth, offset, 1, pdfHeight - 2 * offset, "F"); // spine first border
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth + 1, offset, spineWidth - 2, pdfHeight - 2 * offset, "F"); // inner spine
      pdf.setFillColor("#FAFAFA");
      const spineBorder2 = offset + leftContentWidth + gutterWidth + spineWidth - 1;
      pdf.rect(spineBorder2, offset, 1, pdfHeight - 2 * offset, "F"); // spine second border

      // Section 4: Right gutter
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth + spineWidth, offset, gutterWidth, pdfHeight - 2 * offset, "F");

      // Section 5: Right content area
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth, offset, rightContentWidth, pdfHeight - 2 * offset, "F");


    } else {
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

    }

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
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    pdf.setFontSize(fontSize);
    pdf.setFont("WorkSans");
    if (coverData?.coverNumber === "5") {
      pdf.setTextColor(255, 255, 255); // White text for cover number 5
    } else {
      pdf.setTextColor(0, 0, 0);
    } // Separator color
    pdf.text("  |  ", offset + leftContentWidth + gutterWidth + spineWidth / 2 - 1, y, { angle: 270 });

    y = y + 6;

    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFontSize(fontSize);
      pdf.setFont("WorkSans");
      if (coverData?.coverNumber === "5") {
        pdf.setTextColor(255, 255, 255); // White text for cover number 5
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    const originalLogoWidth = 100; // replace with the original width of the logo
    const originalLogoHeight = 300; // replace with the original height of the logo
    const logoSize = spineWidth < 22 ? spineWidth - 3 : 20;

    // Calculate the new height to maintain aspect ratio
    const logoAspectRatio = originalLogoWidth / originalLogoHeight;
    const newLogoHeight = logoSize / logoAspectRatio;

    // Position the logo slightly above the bottom of the spine
    const tailcenterX = offset + leftContentWidth + gutterWidth + (spineWidth - logoSize) / 2;
    const verticalOffset = 10; // Adjust this value to move the logo up or down
    const tailcenterY = pdfHeight - newLogoHeight - offset - verticalOffset; // slightly above the bottom

    pdf.addImage(logo, "png", tailcenterX, tailcenterY, logoSize, newLogoHeight);


    const newData = { imageUrl: finalCover };
    const newImageLink = await dispatch(uploadImageWithCloudinary(newData));

    if (coverData?.coverNumber === "3") {
      const imageWidth = 150; // Width of the image in mm
      const imageHeight = 250;
      const imageY = 4.5;

      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        imageY,
        imageWidth,
        imageHeight
      );
    } else if (coverData?.coverNumber === "2") {
      const imageWidth = 140; // Width of the image in mm
      const imageHeight = 250;
      const imageY = 4.5;

      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        imageY,
        imageWidth,
        imageHeight
      );
    }
    else if (coverData?.coverNumber === "1") {
      const imageWidth = 150; // Width of the image in mm
      const imageHeight = 242;
      const imageY = 14;

      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        imageY,
        imageWidth,
        imageHeight
      );
    }
    else {
      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        offset,
        rightContentWidth,
        pdfHeight - 2 * offset
      );
    }


    pdf.save("my_document2.pdf");
  };

  const generatePDFOne = async (
    title,
    subtitle,
    name,
    imgUrl,
    color,
    finalCover,
    spine = 10.2
  ) => {
    const logo = CoverNumber === "5" ? "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo+(5)+LifeScript+2+(1).png"
      : "https://lifescript-media.s3.eu-north-1.amazonaws.com/logo_lifescript+1.png";
    // const pdfHeight = 229 + 40; // Adding 20mm offset for top and bottom
    let pdfHeight: any;
    if (
      coverData?.coverNumber === "1" ||
      coverData?.coverNumber === "3"
    ) {
      pdfHeight = 229 + 30;
    }else if (coverData?.coverNumber === "2"){
      pdfHeight = 229 + 30;
    } else {
      pdfHeight = 229 + 40;  // 20 mm on each side for the offset
    }
    const leftContentWidth = 144; // Width of the left content area
    const rightContentWidth = 144; // Width of the right content area
    const gutterWidth = 8; // Gutter width on both sides
    const spineWidth = spine;
    // const offset = 20; // 20 mm on each side for the offset

    let offset: any;
    if (
      coverData?.coverNumber === "1" ||
      coverData?.coverNumber === "3"
    ) {
      offset = 12;
    } else if (coverData?.coverNumber === "2" ){
      offset = 8;
    }else {
      offset = 20; // 20 mm on each side for the offset
    }
    const pdfWidth = leftContentWidth + gutterWidth + spineWidth + gutterWidth + rightContentWidth + 2 * offset;
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

    if (CoverNumber === "2") {
      // Full background color including the offset area
      pdf.setFillColor("#FAFAFA");
      pdf.rect(0, 0, pdfWidth, pdfHeight, "F");

      // Section 1: Left content area
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset, offset, leftContentWidth, pdfHeight - 2 * offset, "F");

      // Section 2: Left gutter
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth, offset, gutterWidth, pdfHeight - 2 * offset, "F");

      // Section 3: Spine and inner spine
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth, offset, 1, pdfHeight - 2 * offset, "F"); // spine first border
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth + 1, offset, spineWidth - 2, pdfHeight - 2 * offset, "F"); // inner spine
      pdf.setFillColor("#FAFAFA");
      const spineBorder2 = offset + leftContentWidth + gutterWidth + spineWidth - 1;
      pdf.rect(spineBorder2, offset, 1, pdfHeight - 2 * offset, "F"); // spine second border

      // Section 4: Right gutter
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth + spineWidth, offset, gutterWidth, pdfHeight - 2 * offset, "F");

      // Section 5: Right content area
      pdf.setFillColor("#FAFAFA");
      pdf.rect(offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth, offset, rightContentWidth, pdfHeight - 2 * offset, "F");


    } else {
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

    }

    let y = 30; // Initial y-coordinate with offset
    const fontSize = 10; // Font size
    const textCenter = offset + leftContentWidth + gutterWidth + spineWidth / 2 - 1.3;

    for (let i = 0; i < text2.length; i++) {
      const char = text2[i];
      pdf.setFontSize(fontSize);
      pdf.setFont("WorkSans");
      pdf.setTextColor(0, 0, 0); // Default text color

      if (coverData?.coverNumber === "5") {
        pdf.setTextColor(255, 255, 255); // White text for cover number 5
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    pdf.setFontSize(fontSize);
    pdf.setFont("WorkSans");
    if (coverData?.coverNumber === "5") {
      pdf.setTextColor(255, 255, 255); // White text for cover number 5
    } else {
      pdf.setTextColor(0, 0, 0);
    } // Separator color
    pdf.text("  |  ", offset + leftContentWidth + gutterWidth + spineWidth / 2 - 1, y, { angle: 270 });

    y = y + 6;

    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFontSize(fontSize);
      pdf.setFont("WorkSans");
      if (coverData?.coverNumber === "5") {
        pdf.setTextColor(255, 255, 255); // White text for cover number 5
      } else {
        pdf.setTextColor(0, 0, 0);
      }
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    const originalLogoWidth = 100; // replace with the original width of the logo
    const originalLogoHeight = 300; // replace with the original height of the logo
    
    // Decrease the logo size by reducing the logoSize value
    const logoSize = spineWidth < 22 ? (spineWidth - 3) * 0.8 : 17; // Adjust the multiplier (0.8) and default size (16) as needed
    
    // Calculate the new height to maintain aspect ratio
    const logoAspectRatio = originalLogoWidth / originalLogoHeight;
    const newLogoHeight = logoSize / logoAspectRatio;
    
    // Position the logo slightly above the bottom of the spine
    const logoUp = 5
    const tailcenterX = offset + leftContentWidth + gutterWidth + (spineWidth - logoSize) / 2;
    const verticalOffset = 8; // Adjust this value to move the logo up or down
    const tailcenterY = pdfHeight - newLogoHeight - offset - verticalOffset - gutterWidth - logoUp; // slightly above the bottom
    
    pdf.addImage(logo, "png", tailcenterX, tailcenterY, logoSize, newLogoHeight);
    


    const newData = { imageUrl: finalCover };
    const newImageLink = await dispatch(uploadImageWithCloudinary(newData));

    if (coverData?.coverNumber === "3") {
      const imageWidth = 159; // Width of the image in mm
      const imageHeight = 259;
      const imageY = 0;

      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        imageY,
        imageWidth,
        imageHeight
      );
    } else if (coverData?.coverNumber === "2") {
      const imageWidth = 140; // Width of the image in mm
      const imageHeight = 259;
      const imageY = 0;

      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        imageY,
        imageWidth,
        imageHeight
      );
    }
    else if (coverData?.coverNumber === "1") {
      const imageWidth = 156; // Width of the image in mm
      const imageHeight = 250;
      const imageY = 14;

      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        imageY,
        imageWidth,
        imageHeight
      );
    }
    else {
      pdf.addImage(
        newImageLink?.payload,
        "png",
        offset + leftContentWidth + gutterWidth + spineWidth + gutterWidth,
        offset,
        rightContentWidth,
        pdfHeight - 2 * offset
      );
    }


    pdf.save("my_document2.pdf");
  };

  const generatePDFTwo = async (
    title,
    subtitle,
    name,
    imgUrl,
    color,
    spine = 6
  ) => {
    const logo =
      "https://lifescript-media.s3.eu-north-1.amazonaws.com/0c666ff5-3889-47f1-9727-901ad3995330-Screen%20Shot%202024-01-19%20at%206.49.32%20PM.png";
    const pdfHeight = 255;
    const pageWidth = 170; //prev was 169.5
    const tail = spine;
    const pdfWidth = pageWidth + pageWidth + spine;
    const pdf = new jsPDF({
      unit: "mm", // Set the unit to millimeters
      format: [pdfWidth, pdfHeight],
      orientation: "landscape",
    });

    pdf.addFileToVFS("WorkSans-normal.ttf", font);

    pdf.addFont("WorkSans-normal.ttf", "WorkSans", "bold");

    const text2 = subtitle?.toUpperCase();
    const text1 = title?.toUpperCase();
    const writter = name?.toUpperCase();
    const bgColor = color?.toString();
    const imageUrl = imgUrl;
    // Section 1: Blue background
    pdf.setFillColor(bgColor);
    pdf.rect(0, 0, pageWidth, pdfHeight, "F");

    // Section 2:
    pdf.setFillColor(255, 255, 255);
    pdf.rect(pageWidth, 0, 1, pdfHeight, "F"); // spine first border
    pdf.setFillColor(bgColor);
    pdf.rect(171, 0, tail - 2, pdfHeight, "F"); // inner spine
    pdf.setFillColor(255, 255, 255);
    const spineBorder2 = pageWidth + spine - 1;
    pdf.rect(spineBorder2, 0, 1, pdfHeight, "F"); // spine second border

    let y = 5; // Initial y-coordinate
    const fontSize = 10; //prev was minus 3
    // const textCenter = pageWidth + (tail - (tail - fontSize) / 2) / 2;
    const textCenter = pageWidth + tail / 2 - 1.3;

    for (let i = 0; i < text2.length; i++) {
      const char = text2[i];
      pdf.setFont("WorkSans");
      pdf.setFontSize(fontSize);
      pdf.setTextColor(255, 255, 255);
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }

    pdf.setFont("WorkSans");
    pdf.setFontSize(fontSize);
    pdf.setTextColor(255, 255, 255);
    pdf.text("  |  ", pageWidth + tail / 2 - 1, y, { angle: 270 });

    y = y + 6;

    for (let i = 0; i < writter.length; i++) {
      const char = writter[i];
      pdf.setFont("WorkSans");
      pdf.setFontSize(fontSize);
      pdf.setTextColor(255, 255, 255);
      pdf.text(char, textCenter, y, { angle: 270 });
      y = y + 3; // Move to the next line for each character
    }
    const logoSize = tail < 22 ? tail - 3 : 20;
    const tailcenter = pageWidth + (tail - logoSize) / 2;
    pdf.addImage(logo, "png", tailcenter, 225, logoSize, logoSize);

    // Section 3
    pdf.setFillColor(bgColor);
    pdf.rect(pageWidth + tail, 0, pageWidth, pdfHeight, "F");
    const centerX = pageWidth + tail + pageWidth / 2;

    // 1st Text: "A good book" with font size 16px
    pdf.setFont("WorkSans");
    pdf.setFontSize(16);
    pdf.setTextColor(255, 255, 255);
    pdf.text(text1, centerX, 35, { align: "center" });

    const imgWidth = 100;
    const imgHeight = 120;
    const xPos = pageWidth + tail + (pageWidth - imgWidth) / 2;
    const yPos = 50;
    pdf.addImage(imageUrl, "JPEG", xPos, yPos, imgWidth, imgHeight);

    // 2nd Text: "New Book" font size 22px, bold, and underlined
    pdf.setFontSize(30);
    pdf.setFont("WorkSans");
    pdf.setTextColor(255, 255, 255);
    pdf.text(text2, centerX, 190, {
      align: "center",
    });

    pdf.setDrawColor(255, 255, 255);
    pdf.setLineWidth(1);
    const lineStart = pageWidth + tail + 50;
    pdf.line(lineStart, 200, pdfWidth - 50, 200);

    pdf.setFont("WorkSans");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(16);
    pdf.text(`-   ${writter}   -`, centerX, 215, { align: "center" }); // Convert inches to millimeters

    // pdf.setFillColor(bgColor);
    // pdf.rect(pageWidth + tail, 0, pageWidth, pdfHeight, "F");
    // const centerX = pageWidth + tail + pageWidth / 2;
    // const yPos = 20;

    // const svgString = `<svg id="mysvg" width="100" height="100">this is new</svg>`;

    // pdf.text(svgString, centerX, yPos, {
    //   // Include SVG string with width and height
    //   // Additional styling options for the SVG element can be added here
    // });

    pdf.save("my_document.pdf");
  };

  useEffect(() => {
    dispatch(getBookCover()).then((res) => {
      setIsLoading(false);
    });
  }, []);

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
    <div>
      <Layout>
        {/* <Cover1 id="mysvg" /> */}
        <Box
          sx={{
            p: { md: "0px", xs: "10px 20px" },
          }}
        >
          <SelectBookCoverHeader img={BookCover} discription={`${t("BookCover.BookCover")}`} />

          <Box
            display="flex"
            columnGap="30px"
            rowGap="10px"
            mt="40px"
            mb="20px"
            justifyContent="flex-end"
            flexWrap="wrap"
          >
            <Box>
              <GlobelBtn
                btnText={`${t("BookCoverCard.viewPdf")}`}
                fontSize={{ xs: "12px", md: "16px" }}
                border="1px solid #E1683B"
                color="#E1683B"
                bgColor="transparent"
                onClick={
                  () =>
                    generatePDFOne(
                      byline,
                      title,
                      subtitle,
                      imageLink,
                      selectedColor,
                      finalCover
                    )
                  // finalGetPdf()
                  // CoverNumber.toString() === "2"
                  //   ? generatePDFTwo(
                  //       byline,
                  //       title,
                  //       subtitle,
                  //       imageLink,
                  //       selectedColor
                  //     )
                  //   : generatePDFOne(
                  //       byline,
                  //       title,
                  //       subtitle,
                  //       imageLink,
                  //       selectedColor
                  //     )
                }
                width={"180px"}
              />
            </Box>
            <Box>
              <GlobelBtn
                btnText={`${t("BookCoverCard.editCover")}`}
                bgColor="#30422E"
                color="#fff"
                fontSize={{ xs: "12px", md: "16px" }}
                border="1px solid #197065"
                width={"180px"}
                onClick={() => {
                  router.push(
                    `/dashboard/BookCover/EditBookCover?CoverNumber=${CoverNumber}`
                  );
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              mt: "20px"
            }}
          >
            <Box flex={"auto"}>
              <Box
                ref={elementRef}
                id={"bookcoverpdf"}
                sx={{
                  width: "100%",
                  overflowX: "auto",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                <SelectBookCoverCard
                  landScape={CoverNumber?.toString()}
                  title={title}
                  subtitle={subtitle}
                  Byline={byline}
                  droppedImage={imageLink}
                  ColourPalette={selectedColor}
                  finalCover={finalCover}
                  isLoading={isLoading}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default ViewBookCover;
