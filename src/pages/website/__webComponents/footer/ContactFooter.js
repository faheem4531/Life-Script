import { Box, Typography } from "@mui/material"
import Image from "next/image"
import styles from "../ComponentsStyles.module.css"
import Smily from "@/__webAssets/svgs/smily.svg"
import Button from "../button/Button"
import Input from "../input/Input"

const ContactFooter = ({ title, subTitle, input1, input2, input3, button, shape }) => {
  return (
    <Box
      sx={{ padding: "70px 0 50px", display: "flex", flexDirection: "column", alignItems: "center", color: "#F3ECDA" }}
      className={styles.contactFooterBox}
    >
      <Typography sx={{ fontSize: "54px", fontWeight: 500, fontFamily: "Besley !important" }}>{title}</Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: 500, marginTop: "30px" }}>{subTitle}</Typography>

      <Box sx={{ display: "flex", columnGap: "8px", margin: "55px 0 40px", width: "100%", justifyContent: "center" }}>
        <Input
          placeHolder={input1}
        />
        <Input
          placeHolder={input2}
        />
        <Input
          placeHolder={input3}
          img={shape}
        />
      </Box>

      <Button
        title={button}
        width='200px'
        height='50px'
        backgroundColor="#30422E"
        img2={Smily}
      />
    </Box>
  )
}

export default ContactFooter