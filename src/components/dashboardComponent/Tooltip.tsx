import { Box, Typography } from "@mui/material";

export default function Tooltip({
  title,
  text,
  position = "fixed",
  top = "0px",
  left = "33%",
  transform = "translate(-35%)",
}) {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: "2px solid #30422E",
        borderRadius: "4px",
        width: "360px",
        height: "160px",
        position: position,
        bottom: "30px",
        left: left,
        transform: transform,
        boxShadow: "7px 10px 50px rgba(0, 0, 0, 0.25)",
        zIndex: "3",
        padding: "30px 10px 0 30px",
      }}
    >
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 500,
          color: "#30422E",
          marginBottom: "15px",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 300,
          color: "#30422E",
          lineHeight: "150%",
          whiteSpace: "wrap",
          width: "90%",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
