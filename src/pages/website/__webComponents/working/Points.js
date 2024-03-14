import { Box, Typography } from "@mui/material";
import styles from "../ComponentsStyles.module.css"
import Image from "next/image";

const Points = ({ no = false, icon, title, discription }) => {
  return (
    <Box sx={{
      padding: { lg: '20px 30px 40px', md: "15px 8px 20px 15px", sm: "20px 30px 40px ", xs: "24px 15px 28px 25px" },
      border: "1px dashed #F3ECDA",
      borderRadius: '4px',
      display: "inline-block",
      maxWidth: { md: "340px", sm: "450px", xs: "100%" },
      minHeight: { lg: "220px", md: "200px", xs: "" },
      height: { lg: icon && "360px", md: icon && "320px" },
      width: "100%"
    }}
    >
      {no && <Typography sx={{
        color: "#E1683B",
        fontSize: "20px",
        fontWeight: 500,
        fontFamily: "Besley !important"
      }}>
        {no}
      </Typography>}
      {icon && <Image src={icon} alt="icon" className={styles.check} />}

      <Typography sx={{
        color: "#F3ECDA",
        fontSize: { lg: "28px", md: "22px", sm: "28px", xs: "30px" },
        fontWeight: 500,
        minHeight: { lg: icon ? "100px" : "120px", md: icon ? "65px" : "90px" },
        fontFamily: "Besley !important",
      }}>
        {title}
      </Typography>

      <Typography sx={{
        color: "#F3ECDA",
        fontSize: "16px",
        marginTop: { md: "0", sm: "20px", xs: "20px" }
      }}>
        {discription}
      </Typography>
    </Box >
  )
}

export default Points;