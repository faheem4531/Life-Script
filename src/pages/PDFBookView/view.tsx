import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer(pdfUrl) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const [goToPageNumber, setGoToPageNumber] = useState("0");

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
      <Box
        hidden={false}
        // sx={{ height: "calc(100vh)", bgcolor: "skyblue", overflow: "hidden" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box
            position="absolute"
            top={"50px"}
            left="0"
            display="flex"
            alignItems="center"
          >
            <Button
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              color="primary"
            >
              <ChevronLeftIcon />
              Previous
            </Button>
          </Box>

          <Box
            position="absolute"
            right="0"
            top={"50px"}
            display="flex"
            alignItems="center"
          >
            <Button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              color="primary"
            >
              Next
              <ChevronRightIcon />
            </Button>
          </Box>

          <Document
            file={{
              url: pdfUrl?.pdfUrl,
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            label="Go to page"
            type="number"
            value={goToPageNumber}
            onChange={(e) => setGoToPageNumber(e.target.value)}
          />
          <Button variant="contained" onClick={goToPage}>
            Go
          </Button>
        </Box>
      </Box>
    </>
  );
}
