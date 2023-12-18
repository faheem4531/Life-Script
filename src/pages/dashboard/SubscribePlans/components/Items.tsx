import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import SmallTick from "@/_assets/svg/smallTick.svg";

const Items = ({ subList, title, description }) => {
  return (
    <Box
      sx={{
        bgcolor: "#F8F6F9",
        p: "30px 38px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          mb: "22px",
        }}
      >
        <Typography
          sx={{
            fontSize: "16.498px",
            fontWeight: 700,
            letterSpacing: "0.458px",
            mb: "14px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "12.498px",
            fontWeight: 600,
            letterSpacing: "0.458px",
            color: "#081131",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box sx={{ mb: "50px" }}>
        {subList?.map((items, index) => {
          return (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "12.832px",
                  color: "#081131",
                  mb: "18px",
                }}
              >
                <Box>
                  <Image src={SmallTick} alt="SmallTick" />
                </Box>
                <Box>{items.label}</Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Button
        sx={{
          height: { sx: "25px", md: "30px", lg: "45px" },
          borderRadius: "26.267px",
          border: " 0.71px solid #197065",
          p: { xs: "8px 20px", lg: "10.358px 26.989px" },
          fontSize: { xs: "12px" },
          color: "white",
          textTransform: "capitalize",
          width: "100%",
          bgcolor: "#197065",
          "&:hover": {
            bgcolor: "#197065",
          },
        }}
        onClick={() => {
          // router.push(`/dashboard/BookCover/ViewBookCover?BookCoverCheck=${BookCoverCheck}`)
        }}
      >
        Choose Plan
      </Button>
    </Box>
  );
};

export default Items;
