import { Box, Typography } from "@mui/material";
import styles from "../ComponentsStyles.module.css"

export function Content({ heading, subHeading, marginB, subWidth, width, align, subFonts }) {
  return (
    <Box sx={{ margin: { lg: "0 0 25px", sm: "0 0 20px", xs: "0 0 30px" } }} maxWidth={width || "500px"} marginBottom={marginB} textAlign={align}>
      <Typography sx={{ fontSize: { md: "32px", sm: "28px", sx: "24px", xs: "28px" }, fontWeight: 500, marginBottom: { lg: "20px", md: "10px", xs: "10px" }, fontFamily: "Besley !important" }}>
        {heading}
      </Typography>
      <Typography sx={{ maxWidth: { lg: "420px" } }} fontSize={subFonts || "16px"} maxWidth={subWidth}>
        {subHeading}
      </Typography>
    </Box>
  )
}

export default Content;