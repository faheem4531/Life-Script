import FileIcon from "@/_assets/svg/fileIcon.svg";
import Layout from "@/components/Layout/Layout";
import GlobelBtn from "@/components/button/Button";
import ColorPickerComponent from "@/components/dashboardComponent/ColorPicker";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import {
  bookCover,
  getBookCover,
  selectCoverData,
  updateBookCover,
  uploadImage,
} from "@/store/slices/chatSlice";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Img from "@/_assets/book-cover";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import htmlToImage from "html-to-image";
import Cover1 from "@/_assets/book-cover/Cover1";
import { jsPDF } from "jspdf";
import axios from "axios";

const EditBookCover = () => {
  const router = useRouter();
  const containerRef = useRef(null);
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const { CoverNumber } = router.query;
  const [title, setTitle] = useState("");
  const coverData = useSelector(selectCoverData);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonUpDateLoading, setButtonUpDateLoading] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [byline, setByline] = useState("byline");
  const [coverId, setCoverId] = useState("");
  const [cropper, setCropper] = useState(null);

  // const [finalSvgPng, setFinalSvgPng] = useState(null);

  // const finalSvg = useMemo(() => {
  //   return finalSvgPng;
  // }, [finalSvgPng]);

  const cropperRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("#197065");
  const [droppedImage, setDroppedImage] = useState<
    string | ArrayBuffer | null | any
  >(null);

  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [initialStates, setInitialStates] = useState<{
    [key: string]: string[];
  }>({});

  const onCrop = () => {
    if (cropperRef.current) {
      const croppedCanvas: any = cropperRef.current.cropper.getCroppedCanvas();
      // console.log("cropperCna", croppedCanvas);
      const croppedImageBase64 = croppedCanvas.toDataURL();
      // console.log("croppedImageBase64", croppedImageBase64);

      const coverImageElement = document.getElementById(
        "coverImage"
      ) as HTMLImageElement;

      if (coverImageElement) {
        coverImageElement.setAttribute("xlink:href", croppedImageBase64);
        // const dems: any = heightWidthImage(CoverNumber);
        // coverImageElement.setAttribute("width", dems.width);
        // coverImageElement.setAttribute("height", dems.height);
      }

      setCropper(croppedImageBase64);
      return croppedImageBase64;

      // Apply aspect ratio to the cropped image
      // const aspectRatio = 16 / 9; // Replace this with your desired aspect ratio
      // const canvas = document.createElement("canvas");
      // const context = canvas.getContext("2d");

      // canvas.width = croppedCanvas.width;
      // canvas.height = croppedCanvas.width / aspectRatio;

      // context?.drawImage(croppedCanvas, 0, 0, canvas.width, canvas.height);

      // const croppedImageBase64 = canvas.toDataURL();
      // console.log("croppedImageBase64", croppedImageBase64);

      // const coverImageElement = document.getElementById(
      //   "coverImage"
      // ) as HTMLImageElement;
      // if (coverImageElement) {
      //   coverImageElement.setAttribute("xlink:href", croppedImageBase64);
      // }

      // return croppedImageBase64;
    }
  };

  useEffect(() => {
    // Fetch initial content of specified elements and store in state
    // const headingText = document.getElementById("heading-text");
    // const authorText = document.getElementById("author-text");
    // const otherText = document.getElementById("other-text");

    const statesToFetch = [
      { id: "heading-text" },
      { id: "author-text" },
      // { id: "other-text", key: "otherText" },
      // Add more elements if needed
    ];

    statesToFetch.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        const spans = element.getElementsByTagName("tspan");
        const initialContent: string[] = [];

        for (let i = 0; i < spans.length; i++) {
          initialContent.push(spans[i].textContent || "");
        }

        setInitialStates((prev) => ({
          ...prev,
          [id]: initialContent,
        }));
      }
    });
  }, []); // Run this effect only once when the component mounts

  function appendTitleToSVG(title: string, elmId: string) {
    const headingText = document.getElementById(elmId);

    if (headingText) {
      // Clear existing content
      headingText.innerHTML = "";

      if (title.trim() === "") {
        // If the title is empty, show predefined text spans
        const defaultTexts = initialStates[elmId];

        defaultTexts.forEach((defaultText) => {
          const defaultTspan = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "tspan"
          );
          if (
            !(CoverNumber === "2" && elmId === "author-text") &&
            !(CoverNumber === "6" && elmId === "author-text") &&
            !(CoverNumber === "5" && elmId === "heading-text") &&
            !(CoverNumber === "5" && elmId === "author-text") &&
            !(CoverNumber === "6" && elmId === "heading-text")
          ) {
            defaultTspan.setAttribute("x", "50%");
            defaultTspan.setAttribute("dy", "1.2em");
          }
          defaultTspan.appendChild(document.createTextNode(`${defaultText}`));
          headingText.appendChild(defaultTspan);
        });
      } else {
        const words = title.split(" ");
        let currentTspan: SVGTSpanElement | null = null;

        words.forEach((word) => {
          if (
            !currentTspan ||
            currentTspan.innerHTML.length + word.length > 12
          ) {
            // Create a new tspan if not exists or the current one is full
            currentTspan = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "tspan"
            );
            if (
              !(CoverNumber === "2" && elmId === "author-text") &&
              !(CoverNumber === "6" && elmId === "author-text") &&
              !(CoverNumber === "5" && elmId === "heading-text") &&
              !(CoverNumber === "5" && elmId === "author-text") &&
              !(CoverNumber === "6" && elmId === "heading-text")
            ) {
              console.log("Reached");

              currentTspan.setAttribute("x", "50%");
              currentTspan.setAttribute("dy", "1.2em");
            }
            headingText.appendChild(currentTspan);
          }

          // Append the word to the current tspan
          currentTspan?.appendChild(document.createTextNode(`${word} `));
        });
      }
    }
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 25) {
      appendTitleToSVG(event.target.value, "heading-text");
      setTitle(event.target.value);
    }
  };

  const handleSubtitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 25) {
      appendTitleToSVG(event.target.value, "author-text");
      setSubtitle(event.target.value);
    }
  };

  const handleBylineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 25) {
      setByline(event.target.value);
    }
  };

  useEffect(() => {
    !selectedColor && setSelectedColor("#197065");
  }, [selectedColor]);

  const setColorBasedOnCover = (CoverNumber) => {
    if (CoverNumber === "1") return "#F8F8F0";
    // else if (CoverNumber === "2") return "#ffffff"; //done
    else if (CoverNumber === "2")
      return "#F8F8F0"; //done replace halfwhite with whitw
    else if (CoverNumber === "3") return "#F3ECDA"; //done
    else if (CoverNumber === "4") return "#f3ecda"; //done
    else if (CoverNumber === "5") return "#000000"; //done
    else if (CoverNumber === "6") return "#f3ecda"; //done
  };

  const heightWidthImage = (CoverNumber) => {
    if (CoverNumber === "1") return { width: "1904", height: "2519" };
    else if (CoverNumber === "2") return { width: "1658", height: "2610" };
    else if (CoverNumber === "3") return { width: "2350", height: "3878" };
    // else if (CoverNumber === "4") return "#F8F8F0";
    // else if (CoverNumber === "5") return "#231f20";
    // else if (CoverNumber === "6") return "#F8F8F0";
  };

  const handleSaveCover = async () => {
    setButtonUpDateLoading(true);
    const res1 = await downloadPdf();
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("image", file);

    const reader = new FileReader();
    reader.onload = () => {
      setDroppedImage(reader.result);
      const base64Data = reader.result as string;
      setDroppedImage(base64Data);
      const coverImageElement = document.getElementById(
        "coverImage"
      ) as HTMLImageElement;
      if (coverImageElement) {
        coverImageElement.setAttribute("xlink:href", base64Data);
        // const dems: any = heightWidthImage(CoverNumber);
        // coverImageElement.setAttribute("width", dems.width);
        // coverImageElement.setAttribute("height", dems.height);
      }
    };

    reader.readAsDataURL(file);

    // Make API request
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop,
  });

  const uploadImageonCloud = (formData) => {
    console.log("formData", formData);
    dispatch(uploadImage(formData))
      .unwrap()
      .then((res) => {
        toast.success("image uploaded successfully");

        setImageLink(res);
        setDroppedImage(res);
        return res;
      })
      .catch(() => toast.error("Failed to upload image"));
  };

  useEffect(() => {
    dispatch(getBookCover());
  }, []);

  useEffect(() => {
    if (Array.isArray(coverData) && coverData.length === 0) {
      return; // Do nothing if coverData is an empty array
    }
    if (typeof coverData === "object" && coverData !== null) {
      console.log("into if of useEffect");
      setByline(coverData?.byLine);
      setTitle(coverData?.title);
      setSubtitle(coverData?.subTitle);
      setImageLink(coverData?.image);
      setSelectedColor(coverData?.color);
      setCoverId(coverData?._id);

      appendTitleToSVG(coverData?.subTitle, "author-text");
      appendTitleToSVG(coverData?.title, "heading-text");
      haveCoverImageAlready(coverData?.image);
    }
  }, [coverData]);

  const haveCoverImageAlready = (droppedImage) => {
    const coverImageElement = document.getElementById(
      "coverImage"
    ) as HTMLImageElement;
    if (coverImageElement) {
      convertUrlToBase64(droppedImage).then((result) => {
        coverImageElement.setAttribute(
          "xlink:href",
          `data:image/png;base64,${result}`
        );
        //  const dems: any = heightWidthImage(landScape);
        //  coverImageElement.setAttribute("width", dems.width);
        //  coverImageElement.setAttribute("height", dems.height);
      });
      // coverImageElement.setAttribute("xlink:href", droppedImage);
    }

    // Make API request
  };

  //download Svg
  const downloadPdf = async () => {
    try {
      const svgElement = document.getElementById("mysvg");
      const doc: any = new jsPDF();
      const svgData = new XMLSerializer().serializeToString(svgElement);

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

      // const imgLoadPromise = new Promise<void>((resolve: () => void) => {
      //   img.onload = () => {
      //     canvas.width = img.width;
      //     canvas.height = img.height;
      //     context.drawImage(img, 0, 0);

      //     const imgData = canvas.toDataURL("image/png");
      //     console.log("ImageOn Load???????????", imgData);
      //     uploadImageonCloudNew(imgData);
      //     doc.addImage(imgData, "PNG", 0, 0);

      //     resolve(); // Resolve the promise once the image is loaded
      //   };
      // });

      // img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;

      // // Wait for the image loading operation to complete before moving on
      // await imgLoadPromise;
      // console.log("imgLoadPromise", imgLoadPromise);

      // return true;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imgData = canvas.toDataURL("image/png"); // Convert to PNG for compatibility
        console.log("ImageOn Load???????????", imgData);
        uploadImageonCloudNew(imgData);
        doc.addImage(imgData, "PNG", 0, 0);
      };
      console.log("img", img);
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`; // Encode SVG data
      if (img) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const updateOrSaveCover = (getImageCover) => {
    fetch(cropper)
      .then((response) => response.blob())
      .then((imgBlob) => {
        const formData = new FormData();
        formData.append("image", imgBlob);
        dispatch(uploadImage(formData))
          .unwrap()
          .then((res) => {
            toast.success("image uploaded successfully");

            setImageLink(res);
            setDroppedImage(res);
            setButtonLoading(true);
            dispatch(
              coverId
                ? updateBookCover({
                    id: coverId,
                    CoverNumber: CoverNumber,
                    title: title,
                    subTitle: subtitle,
                    byLine: byline,
                    color: setColorBasedOnCover(CoverNumber),
                    image: cropper ? res : imageLink,
                    coverPagePhoto: getImageCover,
                  })
                : bookCover({
                    coverNumber: CoverNumber,
                    title: title,
                    subTitle: subtitle,
                    byLine: "byline",
                    color: setColorBasedOnCover(CoverNumber),
                    image: res,
                    coverPagePhoto: getImageCover,
                  })
            )
              .unwrap()
              .then(() => {
                router.push(
                  `/dashboard/BookCover/ViewBookCover?CoverNumber=${CoverNumber}`
                );
              })
              .catch(() => {
                toast.error("Failed to save data");
                setButtonLoading(false);
              });
          })
          .catch(() => toast.error("Failed to upload image"));
      });
  };

  const uploadImageonCloudNew = async (formData) => {
    fetch(formData)
      .then((response) => response.blob())
      .then(async (imgBlob) => {
        const formData = new FormData();
        formData.append("image", imgBlob);
        const res = await dispatch(uploadImage(formData)).unwrap();
        console.log("into local storage", res);
        localStorage.removeItem("image1");
        localStorage.setItem("image1", res);
        if (res) {
          updateOrSaveCover(res);
        }
        // setFinalSvgPng(res);
        return res;
      });
  };

  async function convertUrlToBase64(url) {
    try {
      const response = await axios.get(url, { responseType: "arraybuffer" });
      const base64 = Buffer.from(response.data, "binary").toString("base64");
      return base64;
    } catch (error) {
      console.error("Error converting URL to base64:", error.message);
      throw error;
    }
  }

  const getCoverImage = (coverNumber: number) => {
    console.log("cOverNumber", coverNumber);
    const imgArray = [];
    for (let i = 1; i <= coverNumber; i++) {
      imgArray.push(Img[`Cover${i}`]);
    }
    console.log("imgeArray", imgArray);
    return imgArray[coverNumber - 1];
  };

  const coverAspectRatio = () => {
    if (CoverNumber === "1") return 1702 / 2610;
    else return 1772 / 2480;
  };

  return (
    <div>
      <></>
      <Layout>
        <Box
          pb="25px"
          sx={{
            p: {
              sm: "0px",
              xs: "10px 20px",
            },
          }}
        >
          <SelectBookCoverHeader
            discription={`${t("BookCover.EditBookCover")}`}
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: "40px", md: "50px", lg: "70px" },
              mt: "20px",
              overflowX: "auto",
            }}
          >
            <Box
              flex={"1"}
              display="flex"
              flexDirection="column"
              gap="24px"
              minWidth={"300px"}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  }}
                >
                  {`${t("BookCoverCard.title")}`}*
                </Typography>
                <TextField
                  variant="outlined"
                  value={title}
                  placeholder={`${t("BookCoverCard.title")}`}
                  name={`${t("BookCoverCard.title")}`}
                  onChange={handleTitleChange}
                  sx={{
                    marginTop: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      backgroundColor: "white",
                    },
                    width: "100%",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  }}
                >
                  {`${t("BookCoverCard.author")}`}*
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder={`${t("BookCoverCard.author")}`}
                  value={subtitle}
                  name={`${t("BookCoverCard.author")}`}
                  onChange={handleSubtitleChange}
                  sx={{
                    marginTop: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      backgroundColor: "white",
                    },
                    width: "100%",
                  }}
                />
              </Box>
              {/* <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  }}
                >
                  {`${t("BookCoverCard.byLine")}`}
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder={`${t("BookCoverCard.byLine")}`}
                  value={byline}
                  name={`${t("BookCoverCard.byLine")}`}
                  onChange={handleBylineChange}
                  sx={{
                    marginTop: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      backgroundColor: "white",
                    },
                    width: "100%",
                  }}
                />
              </Box> */}
              {/* <ColorPickerComponent
                setSelectedColor={setSelectedColor}
                selectedColor={selectedColor}
              /> */}
              <Box
                sx={{
                  bgcolor: "white",
                  width: "100%",
                  padding: "14px 0px",
                  textAlign: "center",
                  fontWeight: "500",
                  p: "6px",
                  border: " 0.355px solid #197065",
                  borderRadius: "7.099px",
                }}
              >
                {droppedImage && (
                  <Cropper
                    ref={cropperRef}
                    src={droppedImage}
                    style={{ height: 300, width: "100%" }}
                    aspectRatio={coverAspectRatio()}
                    guides={false}
                    // onInitialized={(instance) => setCropper(instance)}
                    crop={onCrop}
                    autoCropArea={1}
                    // Add other cropper options as needed
                  />
                )}
                <div {...getRootProps()} style={{ cursor: "pointer" }}>
                  <input {...getInputProps()} />

                  <Box
                    sx={{
                      border: "2px dashed #D3D3D3",
                      borderRadius: "7.099px",
                      p: "10px 0px",
                    }}
                  >
                    <Box>
                      <Image src={croppedImage || FileIcon} alt="" />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                        color: "#D3D3D3",
                      }}
                    >
                      {t("BookCoverCard.dragOrDrop")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                        color: "#D3D3D3",
                      }}
                    >
                      {t("BookCoverCard.or")}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <GlobelBtn
                        btnText={`${t("BookCoverCard.browserFile")}`}
                        bgColor="#fff"
                        borderRadius="23px"
                        color="#197065"
                        fontSize={{ sm: "10.6px", xs: "8.542px" }}
                        border="1px solid #197065"
                        p="5px 20px"
                      />
                    </Box>
                  </Box>
                </div>
              </Box>
            </Box>

            <Box
              sx={{
                flex: "1",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "white",
                  borderRadius: "6.077px",
                  border: "0.304px solid rgb(25, 112, 101)",
                  width: "100%",
                  height: "100%",
                  padding: "53px 20px 0px",
                  // padding: "0px 0px 0px",
                  overflowX: "auto",
                }}
              >
                {CoverNumber &&
                  getCoverImage(
                    parseInt(typeof CoverNumber === "string" && CoverNumber)
                  )({ id: "mysvg", sx: { fontSize: "450px" } })}
              </Box>

              <Box
                display="flex"
                columnGap="30px"
                rowGap="10px"
                mt="30px"
                justifyContent="flex-end"
                flexWrap="wrap"
              >
                <Box>
                  <GlobelBtn
                    btnText={`${t("BookCoverCard.changeCover")}`}
                    bgColor="transparent"
                    borderRadius="23px"
                    color="#197065"
                    fontSize={{ xs: "12px", md: "16px" }}
                    onClick={() => {
                      router.push("/dashboard/BookCover/SelectBookCover");
                    }}
                    width={"180px"}
                  />
                </Box>
                <Box
                  sx={{
                    opacity:
                      (title && subtitle && imageLink) || cropper ? "1" : "0.5",
                  }}
                >
                  <GlobelBtn
                    btnText={
                      buttonLoading
                        ? `${t("BookCoverCard.Saving")}`
                        : coverId
                        ? `${t("BookCoverCard.UpdateCover")}`
                        : `${t("BookCoverCard.saveCover")}`
                    }
                    bgColor="#197065"
                    borderRadius="23px"
                    color="#fff"
                    fontSize={{ xs: "12px", md: "16px" }}
                    onClick={() => {
                      title &&
                        subtitle &&
                        //   byline &&
                        //   selectedColor &&
                        // imageLink &&
                        !buttonLoading &&
                        handleSaveCover();
                    }}
                    width={"max-content"}
                    isLoading={buttonUpDateLoading}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <div ref={containerRef}>
          <Cover1 />

          <button onClick={handleConvertToPNG}>Convert to PNG</button>
        </div> */}
      </Layout>
    </div>
  );
};

export default EditBookCover;
