import { Box, Typography } from "@mui/material";

export default function Tooltip({
  title,
  text,
  position = "fixed",
  top = "0px",
  left = "35%",
  transform = "translate(-35%)",
}) {
  return (
    <Box
      sx={{
        backgroundImage: { sm: 'url("/pointer-msg.png")' },
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        width: "360px",
        height: "160px",
        position: position,
        bottom: "30px",
        left: left,
        transform: transform,
        zIndex: "3",
        padding: "30px 10px 0 45px",
      }}
    >
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 500,
          marginBottom: "15px",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 300,
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
