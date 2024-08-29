"use client";

import SaveIcon from "@/_assets/svg/save-response-white-icon.svg";
import { default as GlobelBtn } from "@/components/button/Button";
import {
  Box
} from "@mui/material";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PDFViewerProps {
  pdfUrl: string;

}
const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
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

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", m: "40px 0 50px" }}
      >
        <Box sx={{ width: "100%", maxWidth: "800px", height: "650px" }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfUrl}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </Box>
      </Box>
    </Box>
  );
};

export default PDFViewer;
