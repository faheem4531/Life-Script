import { Box, Typography } from "@mui/material";

export function Content({ heading, subHeading, marginB, subWidth, width, align, subFonts }) {
  return (
    <Box maxWidth={width || "500px"} marginBottom={marginB} textAlign={align} >
      <Typography sx={{ fontSize: "32px", fontWeight: 500, marginBottom: "20px", fontFamily: "Besley !important" }}>
        {heading}
      </Typography>
      <Typography sx={{ fontFamily: "myfamily" }} fontSize={subFonts || "16px"} maxWidth={subWidth}>
        {subHeading}
      </Typography>
    </Box>
  )
}

export default Content;