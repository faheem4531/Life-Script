import NextIcon from "@/_assets/svg/next-iconX.svg";
import PreviousIcon from "@/_assets/svg/previous-icon.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer(pdfUrl) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const [goToPageNumber, setGoToPageNumber] = useState("1");

  function onPageLoadSuccess() {
    setPageWidth(900);
    setLoading(false);
  }
  useEffect(() => {
    onPageLoadSuccess();
    if (numPages === 0) {
      setPageNumber(1); // Reset page number when a new document is loaded
    }

    return () => {
      // Clean up any necessary resources
    };
  }, [numPages]);

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  function goToPage() {
    const newPageNumber = parseInt(goToPageNumber);
    if (
      !Number.isNaN(newPageNumber) &&
      newPageNumber > 0 &&
      newPageNumber <= numPages
    ) {
      setPageNumber(newPageNumber);
      setGoToPageNumber(""); // Clear input field
    } else {
      // Handle invalid page number input (e.g., display an error message)
    }
  }

  return (
    <>
      <Box hidden={false} sx={{ height: "calc(100vh)", position: "relative" }}>
        <Box
          position="absolute"
          top={"30%"}
          left="20px"
          display="flex"
          alignItems="center"
        >
          <Button
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            color="primary"
          >
            <Image alt="icon" src={PreviousIcon} onClick={goToPreviousPage} />
          </Button>
        </Box>

        <Box
          position="absolute"
          right="20px"
          top={"30%"}
          display="flex"
          alignItems="center"
        >
          <Button
            onClick={goToNextPage}
            color="primary"
            disabled={pageNumber >= numPages}
          >
            <Image alt="icon" src={NextIcon} onClick={goToNextPage} />
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "500px",
            overflowY: "scroll",
          }}
        >
          <Box
            sx={{
              boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Document
              file={{
                url: pdfUrl?.pdfUrl,
                size: 300,
              }}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
              renderMode="canvas"
            >
              <Page
                pageNumber={pageNumber}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                onLoadSuccess={onPageLoadSuccess}
                width={Math.max(pageWidth * 0.8, 390)}
              />
            </Document>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "20px",
          }}
        >
          <Box>
            Page{" "}
            <input
              type="number"
              style={{
                background: "transparent",
                border: "1.5px solid gray",
                outline: "0px",
                color: "black",
                width: "30px",
                textAlign: "center",
                fontSize: "18px",
              }}
              value={goToPageNumber}
              onChange={(e) => {
                goToPage();
                setGoToPageNumber(e.target.value);
              }}
              className="pdfNumberInput"
            />{" "}
            of 40
            {/* <GlobelBtn
              btnText="Go"
              color="white"
              bgColor="#17645A"
              p="10px 20px"
              onClick={goToPage}
            /> */}
          </Box>
        </Box>
      </Box>
    </>
  );
}
