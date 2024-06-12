import { Box, Typography } from "@mui/material";

export default function TooltipTab({
  title,
  text,
  position,
  top,
  bottom,
  left,
  right,
  transform = "translate(-35%)",
}) {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: "2px solid #E1683B",
        borderRadius: "4px",
        width: "360px",
        height: "auto",
        position: position,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
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
          paddingBottom:"25px"
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
