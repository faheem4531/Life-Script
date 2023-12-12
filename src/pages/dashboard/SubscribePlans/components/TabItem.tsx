import { Box } from "@mui/material";
import React from "react";

const TabItem = () => {
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            gap: "14px",
          }}
        >
          <Box
            sx={{
              width: "18px",
              height: "18px",
              border: "2px solid #737373",
              borderRadius: "50%",
              flexShrink: "0",
            }}
          ></Box>
          <Box textAlign={"left"}>
            <Box
              sx={{
                fontSize: "14px",
                lineHeight: "21.998px",
                textTransform: "capitalize",
                color: "black",
              }}
            >
              Basic
            </Box>
            <Box
              sx={{
                fontSize: "10.999px",
                lineHeight: "18.332px",
                textTransform: "capitalize",
                color: "black",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Box>
          </Box>
        </Box>

        <Box sx={{
            display: "flex",
            gap: "11px",
        }}>
            <Box sx={{
                fontSize: "12.832px",
                letterSpacing: "0.458px",
                color: "black",
                textDecorationLine: "line-through",
                fontWeight: "500"
            }}>
                $1,250
            </Box>
            <Box>

            </Box>
        </Box>
      </Box>
  );
};

export default TabItem;
