import CoverImg from "@/_assets/png/selectBookCover.png";
// import logo from "@/_assets/svg/SmallLogoWhite.svg";
import logo from "@/_assets/svg/Frame.svg";
import { Box, CircularProgress, colors } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { jsPDF } from "jspdf";
import { useDispatch } from "react-redux";

import { uploadImage } from "@/store/slices/chatSlice";
import axios from "axios";
import GlobelBtn from "../button/Button";
import { styled } from '@mui/material/styles';

interface SelectBookCoverCardProps {
  landScape?: string;
  title?: string;
  subtitle?: string;
  Byline?: string;
  droppedImage?: any;
  ColourPalette?: string;
  finalCover: string;
  isLoading?: boolean;
}

const SelectBookCoverCard: React.FC<SelectBookCoverCardProps> = ({
  landScape,
  title = "",
  subtitle = "",
  Byline = "",
  ColourPalette = "",
  droppedImage,
  finalCover,
  isLoading = false,
}) => {
  const currentPath = usePathname();
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
const { CoverNumber } = router.query;
  const [initialStates, setInitialStates] = useState<{
    [key: string]: string[];
  }>({});

  const uploadImageonCloud = (formData) => {
    fetch(formData)
      .then((response) => response.blob())
      .then((imgBlob) => {
        const formData = new FormData();
        formData.append("image", imgBlob);
        dispatch(uploadImage(formData))
          .unwrap()
          .then((res) => {

            // setSvgPng(res);
          });
      });
  };

  const downloadPdf = async () => {
    try {
      const svgElement = document.getElementById("mysvg");

      const doc: any = new jsPDF();

      // 3. Extract SVG data (optional, for more control):
      const svgData = new XMLSerializer().serializeToString(svgElement);



      // **Choose the appropriate method based on your preference:**

      // **Method A: Using jsPDF's built-in SVG support (if applicable):**
      if (doc.addSVG) {
        await doc.addSVG(svgData, 0, 0); // Adjust coordinates as needed
      } else {
        console.warn(
          "jsPDF does not support native SVG rendering. Using alternative method."
        );
      }

      // **Method B: Converting SVG to canvas and then adding to PDF (fallback):**
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      // const img = new Image(0, 0);
      const img = document.createElement("img");
      //  const img = img.setAttribute("img");
      img.onload = () => {

        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imgData = canvas.toDataURL("image/png"); // Convert to PNG for compatibility

        uploadImageonCloud(imgData);



        doc.addImage(imgData, "PNG", 0, 0); // Adjust coordinates as needed
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`; // Encode SVG data
      // img.src = "https://thelifescript.com";

      // 4. Save the PDF:
      // const pdfBlob = await doc.output("blob");
      // const formData = new FormData();
      // formData.append("image", pdfBlob);
      // uploadImageonCloud(formData);

      // const blobUrl = URL.createObjectURL(pdfBlob);


      // const link = document.createElement("a");
      // link.download = "your_filename.pdf";
      // link.href = blobUrl;
      // // link.href = "https://thelifescript.com";
      // link.click();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const heightWidthImage = (CoverNumber) => {
    if (CoverNumber === "1") return { width: "1904", height: "2519" };
    else if (CoverNumber === "2") return { width: "1658", height: "2610" };
    else if (CoverNumber === "3") return { width: "2350", height: "3878" };
    else if (CoverNumber === "4") return "#F8F8F0";
    else if (CoverNumber === "5") return "#231f20";
    else if (CoverNumber === "6") return "#F8F8F0";
  };

  // useEffect(() => {
  //   if (title && subtitle && droppedImage) {
  //     appendTitleToSVG(subtitle, "author-text", landScape);
  //     appendTitleToSVG(title, "heading-text", landScape);
  //     onDrop(droppedImage);
  //   }
  // });

  // useEffect(() => {
  //   // Fetch initial content of specified elements and store in state
  //   // const headingText = document.getElementById("heading-text");
  //   // const authorText = document.getElementById("author-text");
  //   // const otherText = document.getElementById("other-text");

  //   const statesToFetch = [
  //     { id: "heading-text" },
  //     { id: "author-text" },
  //     // { id: "other-text", key: "otherText" },
  //     // Add more elements if needed
  //   ];

  //   statesToFetch.forEach(({ id }) => {
  //     const element = document.getElementById(id);

  //     if (element) {
  //       const spans = element.getElementsByTagName("tspan");
  //       const initialContent: string[] = [];

  //       for (let i = 0; i < spans.length; i++) {
  //         initialContent.push(spans[i].textContent || "");
  //       }

  //       setInitialStates((prev) => ({
  //         ...prev,
  //         [id]: initialContent,
  //       }));
  //     }
  //   });
  // }, []);

  // const onDrop = (droppedImage) => {
  //   const coverImageElement = document.getElementById(
  //     "coverImage"
  //   ) as HTMLImageElement;
  //   if (coverImageElement) {
  //     convertUrlToBase64(droppedImage).then((result) => {

  //       coverImageElement.setAttribute(
  //         "xlink:href",
  //         `data:image/png;base64,${result}`
  //       );
  //       const dems: any = heightWidthImage(landScape);
  //       coverImageElement.setAttribute("width", dems.width);
  //       coverImageElement.setAttribute("height", dems.height);
  //     });
  //   }
  // };

  // async function convertUrlToBase64(url) {
  //   try {
  //     const response = await axios.get(url, { responseType: "arraybuffer" });
  //     const base64 = Buffer.from(response.data, "binary").toString("base64");

  //     return base64;
  //   } catch (error) {
  //     console.error("Error converting URL to base64:", error.message);
  //     throw error;
  //   }
  // }

  const viewBookCheck = currentPath == "/dashboard/BookCover/ViewBookCover";

  // function appendTitleToSVG(title: string, elmId: string, CoverNumber) {
  //   const headingText = document.getElementById(elmId);

  //   if (headingText) {
  //     // Clear existing content
  //     headingText.innerHTML = "";

  //     if (title.trim() === "") {
  //       // If the title is empty, show predefined text spans
  //       const defaultTexts = initialStates[elmId];

  //       defaultTexts.forEach((defaultText) => {
  //         const defaultTspan = document.createElementNS(
  //           "http://www.w3.org/2000/svg",
  //           "tspan"
  //         );
  //         if (
  //           !(CoverNumber === "2" && elmId === "author-text") &&
  //           !(CoverNumber === "6" && elmId === "author-text") &&
  //           !(CoverNumber === "5" && elmId === "heading-text") &&
  //           !(CoverNumber === "5" && elmId === "author-text") &&
  //           !(CoverNumber === "6" && elmId === "heading-text")
  //         ) {
  //           defaultTspan.setAttribute("x", "50%");
  //           defaultTspan.setAttribute("dy", "1.2em");
  //         }
  //         defaultTspan.appendChild(document.createTextNode(`${defaultText}`));
  //         headingText.appendChild(defaultTspan);
  //       });
  //     } else {
  //       const words = title.split(" ");
  //       let currentTspan: SVGTSpanElement | null = null;

  //       words.forEach((word) => {
  //         if (
  //           !currentTspan ||
  //           currentTspan.innerHTML.length + word.length > 12
  //         ) {
  //           // Create a new tspan if not exists or the current one is full
  //           currentTspan = document.createElementNS(
  //             "http://www.w3.org/2000/svg",
  //             "tspan"
  //           );
  //           if (
  //             !(CoverNumber === "2" && elmId === "author-text") &&
  //             !(CoverNumber === "6" && elmId === "author-text") &&
  //             !(CoverNumber === "5" && elmId === "heading-text") &&
  //             !(CoverNumber === "5" && elmId === "author-text") &&
  //             !(CoverNumber === "6" && elmId === "heading-text")
  //           ) {


  //             currentTspan.setAttribute("x", "50%");
  //             currentTspan.setAttribute("dy", "1.2em");
  //           }
  //           headingText.appendChild(currentTspan);
  //         }

  //         // Append the word to the current tspan
  //         currentTspan?.appendChild(document.createTextNode(`${word} `));
  //       });
  //     }
  //   }
  // }

  // const getCoverImage = (coverNumber: number) => {
  //   const imgArray = [];
  //   for (let i = 1; i <= coverNumber; i++) {
  //     imgArray.push(Img[`Cover${i}`]);
  //   }
  //   return imgArray[coverNumber - 1];
  // };

  const WhiteLogo = styled('img')({
    filter: 'invert(70%) brightness(200%)', // Inverts black to white
  });

  return (
    <Box
      sx={{
        position: "relative",
        "&:hover .hoverBox": {
          display:
            currentPath == "/dashboard/BookCover/SelectBookCover" && "flex",
          cursor: "pointer",
        },
      }}
    >
      {currentPath === "/dashboard/BookView" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            m: "30px 0 20px"
          }}
        >
          <GlobelBtn
            btnText="Edit"
            onClick={() => {
              router.push("/dashboard/BookCover/SelectBookCover");
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          bgcolor: "#dededd",
          borderRadius: "4px",
          width: "100%",
          height: "100%",
          p: "30px 20px",
          overflowX: "auto",
        }}
      >


        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // gap: !viewBookCheck
            //   ? { xs: "15px", sm: "20px", md: "25px", lg: "30px", xl: "43px" }
            //   : "2px",

            gap: "2px",
          }}
        >
          {ColourPalette && (
            <Box
            sx={{
              width: { xs: "260px", md: "240px", lg: "287.611px" },
              height: "414.319px",
              bgcolor: CoverNumber === "2" || landScape === "2" ? "#fafafa" : (ColourPalette.length === 0 ? "#197065" : ColourPalette),
              color: "white",
              textAlign: "center",
              p: "10px",
            }}
            ></Box>
          )}

          {/* <Image src={svgIcon} alt="My SVG" width={200} height={200} />  Spain Start*/}

          <Box
           sx={{
            bgcolor: CoverNumber === "2" || landScape === "2"
              ? "#fafafa"
              : ColourPalette && ColourPalette.length === 0
              ? "#197065"
              : ColourPalette,
            color: "white",
            fontSize: "9.924px",
            fontWeight: "300",
            padding: "5px 8px",
            display: "flex",
            height: "415px",
          }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              <Box
                sx={{
                  color: landScape === "5" ? "white" : "black",
                }}
              >
                {title.length == 0 ? (
                  <span> {t("BookCoverCard.title")}</span>
                ) : (
                  title
                )}{" "}
                |{" "}
                {subtitle.length == 0 ? (
                  <span> {t("BookCoverCard.author")}</span>
                ) : (
                  subtitle
                )}
              </Box>
              <Box
                sx={{
                  color: landScape === "5" ? "white" : "black",
                  transform: "rotate(0deg)",
                  marginBottom: "10px"
                }}
              >
                {/* <Image src={logo} alt="" width={25}
                /> */}
                {/* <Image src={"https://lifescript-media.s3.eu-north-1.amazonaws.com/logo.svg"} alt="" width={25} height={60}
                /> */}
                {landScape === "5" || CoverNumber === "5"  ? <WhiteLogo
                  src="https://lifescript-media.s3.eu-north-1.amazonaws.com/logo.svg"
                  alt="Logo"
                  width={25}
                  height={60}
                /> : <Image src={"https://lifescript-media.s3.eu-north-1.amazonaws.com/logo.svg"} alt="" width={25} height={60}
                />}

              </Box>
            </Box>
          </Box>

          {/* Front page*/}
          <Box
            id="selectBookCoverCard"
            sx={{
              // width: { xs: "240px", md: "240px", lg: "287.611px" },
              // height: "414.319px",
              // mr: 4,
              // bgcolor: ColourPalette.length == 0 ? "#197065" : ColourPalette,
              // color: "white",
              textAlign: "center",
              padding: 0,
              margin: 0,
              gap: 0,
              // p: "10px",
            }}
          >
            {/* {landScape &&
              title &&
              subtitle &&
              getCoverImage(parseInt(landScape))({
                title: title,
                id: "mysvg",
                sx: {
                  fontSize: "414px",
                  marginLeft: "-58px",
                  background: "none",
                },
                // svgRef,

                // filters: "drop-shadow(rgba(0 0 0 0))",
              })} */}
            {isLoading ? (
              <CircularProgress />
            ) : (
              <img
                // fill={true}
                width={290}
                height={414}
                src={finalCover}
                alt=" Image"
              />
            )}
          </Box>

          {/* <Box
            sx={{
              width: { xs: "240px", md: "240px", lg: "287.611px" },
              height: "414.319px",
              bgcolor: ColourPalette.length == 0 ? "#197065" : ColourPalette,
              color: "white",
              textAlign: "center",
              p: "10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "1.942px solid white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontSize: { sm: "12px", md: "13px", lg: "15.559px" },
                    fontWeight: 300,
                    letterSpacing: "2.956px",
                    wordBreak: "break-all",
                    p: "0px 15px",
                  }}
                >
                  {Byline.length == 0 ? "" : Byline}
                </Box>

                <Box
                  mt={landScape === "1" && "12px"}
                  display="flex"
                  flexDirection={
                    landScape === "1" ? "column" : "column-reverse"
                  }
                >
                  <Box
                    sx={{
                      fontSize: { sm: "16px", md: "18px", lg: "22.275px" },
                      fontWeight: 600,
                      width: landScape === "1" ? "70%" : "100%",
                      margin: "auto",
                      pb: landScape === "2" && "20px",
                      wordBreak: "break-all",
                      p: "0px 15px",
                    }}
                  >
                    {title.length == 0 ? (
                      <span> {t("BookCoverCard.title")}</span>
                    ) : (
                      title
                    )}
                    <Box
                      sx={{
                        borderBottom: "2.5px solid white",
                        width: landScape === "1" ? "82%" : "58%",
                        margin: "auto",
                        pt: landScape === "2" && "20px",
                      }}
                    ></Box>
                  </Box>

                  <Box
                    sx={{
                      width:
                        landScape === "1"
                          ? { xs: "80%", md: "200px", lg: "212.377px" }
                          : "91.274px",
                      height: landScape === "1" ? "104.868px" : "149.534px",
                      margin:
                        landScape === "1" ? "45px auto 17px" : "25px auto",
                    }}
                  >
                    {droppedImage ? (
                      <img
                        src={droppedImage}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <Image
                        src={CoverImg}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Box>
                </Box>

                <Box
                  sx={{
                    fontSize: "9.336px",
                    fontWeight: 400,
                    letterSpacing: "0.373px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    wordBreak: "break-all",
                  }}
                >
                  <span>-</span>
                  {subtitle.length == 0 ? (
                    <span>{t("BookCoverCard.author")}</span>
                  ) : (
                    subtitle
                  )}
                  <span>-</span>
                </Box>
              </Box>
            </Box>
          </Box> */}
        </Box>
        {/* <Box>
          <button onClick={() => downloadPdf()}> click</button>
        </Box> */}
      </Box>
      <Box
        className="hoverBox"
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          background: "rgba(0, 0, 0, 0.46)",
          zIndex: "22",
          width: "100%",
          height: "100%",
          borderRadius: "6.077px",
          display: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "white",
            fontSize: { xs: "18px", md: "20px", lg: "26.935px" },
            fontWeight: "300",
            padding: "5px 8px",
            textTransform: "uppercase",
            letterSpacing: "9.427px",
            textAlign: "center",
          }}
        >
          {t("BookCoverCard.UseThisCover")}
        </Box>
      </Box>
    </Box>
  );
};

export default SelectBookCoverCard;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
