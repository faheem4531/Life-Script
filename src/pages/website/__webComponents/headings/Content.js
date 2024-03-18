import { Box, Typography } from "@mui/material";
import styles from "../ComponentsStyles.module.css"

export function Content({ heading, subHeading, marginB, subWidth, width, align, subFonts, mblcolor }) {
  return (
    <Box sx={{ margin: { lg: "0 0 25px", sm: "0 0 20px", xs: "0 0 30px" } }} maxWidth={width || "505px"} marginBottom={marginB} textAlign={align}>
      <Typography sx={{
        fontSize: { md: "32px", sm: "28px", sx: "24px", xs: "28px" },
        color: { xs: mblcolor, sm: "#3E4F3C" },
        fontWeight: 500,
        marginBottom: { lg: "20px", md: "10px", xs: "10px" },
        fontFamily: "Besley !important",
        lineHeight: { sm: "50px", xs: "36px" }
      }}>
        <h3>{heading}</h3>
      </Typography>
      <Typography sx={{ maxWidth: { lg: subWidth || "420px", }, fontFamily: "Avenir" }} fontSize={subFonts || "16px"} >
        <h4> {subHeading} </h4>
      </Typography>
    </Box>
  )
}

export default Content;