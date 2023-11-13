import { Box, Typography } from "@mui/material";
import Image from "next/image";
import noData from "../../../public/noData.svg";

export default function NoChapters() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
        }}
      >
        <Typography
          sx={{ textAlign: "center", color: "#B2B2B2", fontSize: "32px" }}
        >
          Start New Chapter
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={noData}
            alt="No Data"
            height={120}
            // width={300}
          />
        </Box>
        <Typography
          sx={{ textAlign: "center", color: "#B2B2B2", fontSize: "26px" }}
        >
          {" "}
          No Data found
        </Typography>
      </Box>
    </Box>
  );
}
