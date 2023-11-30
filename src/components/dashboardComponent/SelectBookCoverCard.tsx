import { Box } from "@mui/material";
import React from "react";

const SelectBookCoverCard = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "6.077px",
          border: " 0.304px solid #197065",
          width: "100%",
          height: "100%",
        }}
      >
        <Box>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#197065",
            color: "white",
            fontSize:"9.924px",
            padding: "5px 8px",
            rotate: "90deg",
          }}>
            <Box>MY ADVENTUROUS LIFE | John Doe</Box>
            <Box>MY</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectBookCoverCard;
