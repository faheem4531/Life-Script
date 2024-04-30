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

  function goToPage(number) {
    if (number <= numPages) {
      setPageNumber(number);
    }
  }

  return (
    <>
      <Box hidden={false} sx={{ height: "calc(50vh)", position: "relative" }}>
        <Box
          position="absolute"
          top={"100%"}
          left="20px"
          display="flex"
          alignItems="center"
        >
          <Button
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber <= 1}
            color="primary"
            sx={{ opacity: pageNumber <= 1 ? 0.2 : 1 }}
          >
            <Image alt="icon" src={PreviousIcon} />
          </Button>
        </Box>

        <Box
          position="absolute"
          right="20px"
          top={"100%"}
          display="flex"
          alignItems="center"
        >
          <Button
            onClick={() => setPageNumber(pageNumber + 1)}
            color="primary"
            disabled={pageNumber >= numPages}
            sx={{ opacity: pageNumber >= numPages ? 0.2 : 1 }}
          >
            <Image alt="icon" src={NextIcon} />
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            // height: "500px",
            // overflowY: "scroll",
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
              onLoadError={(error) => console.error("PDF loading error:", error)}
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
            m: "20px 0",
          }}
        >
          <Box>
            Page{" "}
            <input
              type="number"
              style={{
                background: "#fff",
                border: "1.5px solid gray",
                outline: "0px",
                color: "black",
                width: "30px",
                textAlign: "center",
                fontSize: "18px",
              }}
              value={pageNumber}
              onChange={(e) => {
                goToPage(Number(e.target.value));
              }}
              className="pdfNumberInput"
            />{" "}
            of {numPages}
          </Box>
        </Box>
      </Box>
    </>
  );
}
