import { Box, Typography } from "@mui/material";
import styles from "./Working.module.css"
import Image from "next/image";

const Points = ({ no = false, icon, title, discription }) => {
  return (
    <Box sx={{
      padding: '20px 30px 40px',
      border: "1px dashed #F3ECDA",
      borderRadius: '4px',
      display: "inline-block",
      maxWidth: "340px",
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
        fontSize: "28px",
        fontWeight: 500,
        minHeight: "125px",
        fontFamily: "Besley !important",
      }}>
        {title}
      </Typography>

      <Typography sx={{
        color: "#F3ECDA",
        fontSize: "16px",
        marginTop: "10px",
        fontFamily: "myfamily"
      }}>
        {discription}
      </Typography>
    </Box>
  )
}

export default Points;