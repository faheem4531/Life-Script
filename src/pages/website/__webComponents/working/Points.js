import { Box, Typography } from "@mui/material";
import styles from "../ComponentsStyles.module.css"
import Image from "next/image";

const Points = ({ no = false, icon, title, discription }) => {
  return (
    <Box sx={{
      padding: { lg: '20px 30px 40px', md: "15px 0 20px 10px", sm: "20px 30px 40px ", xs: "24px 15px 28px 25px" },
      border: "1px dashed #F3ECDA",
      borderRadius: '4px',
      display: "inline-block",
      maxWidth: { md: "340px", sm: "450px", xs: "100%" },
      minHeight: { xs: "220px" },
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
        minHeight: { lg: "125px", sm: "90px", xs: "88px" },
        fontFamily: "Besley !important",
      }}>
        {title}
      </Typography>

      <Typography sx={{
        color: "#F3ECDA",
        fontSize: "16px",
        marginTop: { lg: "10px", md: "0", sm: "20px", xs: "15px" },
        fontFamily: "myfamily"
      }}>
        {discription}
      </Typography>
    </Box>
  )
}

export default Points;