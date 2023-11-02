import React from "react";
import Image from "next/image";
import Arrow from "../../../public/startArrow.png";
import { Box, Typography } from "@mui/material";

const getStarted = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'url("/letsStarted.svg")',
          backgroundSize: "cover", // Adjust as needed
          backgroundPosition: "center center", // Adjust as needed
          backgroundRepeat: "no-repeat", // Adjust as needed
          width: "100%",
          height: "100vh", // Adjust the height as needed
          overflow: "hidden",
          margin: 0,
          padding: 0,
          gap: 0,
        }}
      >
        <Box sx={{ marginTop: "200px", marginLeft: "150px" }}>
          <Typography sx={{ fontSize: "60px", color: "white" }}>
            Hi Naseer 👋
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "245px", marginTop: "230px" }}>
          <Image src={Arrow} alt="arrow" />
        </Box>
        <Box sx={{ marginLeft: "235px" }}>
          <Typography sx={{ fontSize: "150px", color: "white" }}>
            Let Us Help <span style={{ color: "#197065" }}>You...</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default getStarted;
