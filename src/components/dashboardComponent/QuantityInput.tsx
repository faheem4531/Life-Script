import { Box, Typography } from "@mui/material";
import React from "react";

interface CounterProps {
  min: number;
  setCount: any;
  count: number;
}

const Counter: React.FC<CounterProps> = ({ min, setCount, count }) => {
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <button
        style={{
          background: "#e1683b",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          border: "0px",
          fontSize: "18px",
          lineHeight: "20px",
          cursor: "pointer",
        }}
        onClick={handleDecrement}
      >
        –
      </button>
      <Typography
        component="span"
        sx={{
          width: "137px",
          height: "25px",
          bgcolor: "white",
          border: "1.5px solid #7F886B",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          p: "3px 0", color: "#30422E",
          alignItems: "center",
          fontSize: { md: "18.752px", sm: "16px", xs: "14px" },
        }}
      >
        {count}
      </Typography>
      <button
        style={{
          background: "#e1683b",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          border: "0px",
          fontSize: "18px",
          lineHeight: "20px",
          cursor: "pointer",
        }}
        onClick={handleIncrement}
      >
        +
      </button>
    </Box>
  );
};

export default Counter;
