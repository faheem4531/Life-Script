import NextIcon from "@/_assets/svg/next-iconX.svg";
import PreviousIcon from "@/_assets/svg/previous-icon.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { default as GlobelBtn } from "@/components/button/Button";
import SaveIcon from "@/_assets/svg/save-response-white-icon.svg";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(450);
  const [pageHeight, setPageHeight] = useState(550);
  const [goToPageNumber, setGoToPageNumber] = useState("1");

  useEffect(() => {
    if (numPages === 0) {
      setPageNumber(1); // Reset page number when a new document is loaded
    }
  }, [numPages]);

  const onPageLoadSuccess = (page) => {
    // Calculate the scale based on desired dimensions
    const originalPageWidth = page.originalWidth;
    const originalPageHeight = page.originalHeight;

    const scaleX = 450 / originalPageWidth;
    const scaleY = 550 / originalPageHeight;

    const scale = Math.min(scaleX, scaleY);

    setPageWidth(originalPageWidth * scale);
    setPageHeight(originalPageHeight * scale);
    setLoading(false);
  };

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  };

  const goToPage = (number: number) => {
    if (number <= numPages) {
      setPageNumber(number);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { sm: "10px", xs: "5px" },
          mt: "2px",
          mb: "20px",
          justifyContent: { sm: "flex-end", xs: "flex-start" },
          flexWrap: "wrap",
        }}
      >
        <GlobelBtn
          bgColor="#E1683B"
          btnText={`PDF Download`}
          color="#fff"
          image={SaveIcon}
          onClick={() => window.open(pdfUrl, "_blank")}
          fontSize="14px"
          p="8px 15px"
        />
      </Box>

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
          sx={{}}
        >
          <Box
            sx={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) =>
                console.error("PDF loading error:", error)
              }
              options={options}
              renderMode="canvas"
            >
              <Page
                pageNumber={pageNumber}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                onLoadSuccess={onPageLoadSuccess}
                width={pageWidth}
                height={pageHeight}
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
};

export default PDFViewer;
