import { Box, Typography } from "@mui/material";

export function Content({
  heading,
  subHeading,
  marginB,
  subWidth,
  width,
  align,
  subFonts,
  mblcolor,
  bg,
  color,
}) {
  let clr = color || "#3E4F3C";
  if (bg == true || bg == "half") {
    clr = "#F3ECDA";
  }
  return (
    <Box
      sx={{ margin: { lg: "0 0 25px", sm: "0 0 20px", xs: "0 0 30px" } }}
      maxWidth={width || "505px"}
      marginBottom={marginB}
      textAlign={align}
    >
      <Typography
        component="div"
        sx={{
          fontSize: { md: "32px", sm: "28px", sx: "24px", xs: "28px" },
          color: { xs: color || mblcolor, md: clr, sm: color || "#3E4F3C" },
          fontWeight: 500,
          marginBottom: { lg: "10px", md: "10px", xs: "10px" },
          fontFamily: "Besley !important",
          lineHeight: { sm: "50px", xs: "36px" },
        }}
        variant="h3"
      >
        {heading}
      </Typography>
      <Typography
        variant="h4"
        sx={{ maxWidth: { lg: subWidth || "420px" }, fontFamily: "Avenir" }}
        fontSize={subFonts || "16px"}
        color={color}
      >
        {subHeading}
      </Typography>
    </Box>
  );
}

export default Content;
