import { Box, Typography } from "@mui/material"
import Image from "next/image"
import styles from "../ComponentsStyles.module.css"
import Smily from "@/__webAssets/svgs/smily.svg"
import Button from "../button/Button"
import Input from "../input/Input"

const ContactFooter = ({ title, subTitle, input1, input2, input3, button, shape }) => {
  return (
    <Box
      sx={{
        padding: { md: "70px 40px 50px", sm: "70px 30px 50px", xs: "40px 20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#F3ECDA"
      }}
      className={styles.contactFooterBox}
    >
      <Typography sx={{ fontSize: { md: "54px", sm: "44px", xs: "32px" }, textAlign: "center", fontWeight: 500, fontFamily: "Besley !important" }}>{title}</Typography>
      <Typography sx={{ fontSize: "16px", textAlign: "center", fontWeight: 500, marginTop: "30px", fontFamily: "Avenir" }}>{subTitle}</Typography>

      <Box sx={{
        display: "flex",
        columnGap: "8px",
        rowGap: "20px",
        flexDirection: { sm: "row", xs: "column" },
        margin: { sm: "55px 0 40px", xs: "35px 0 20px" },
        width: "100%",
        justifyContent: "center"
      }}>

        <Box sx={{ width: { sm: "375px", xs: "100%" } }}>
          <Input
            placeHolder={input1}
          />
        </Box>
        <Box sx={{ width: { sm: "375px", xs: "100%" } }}>
          <Input
            placeHolder={input2}
          />
        </Box>
        <Box sx={{ width: { sm: "375px", xs: "100%" } }}>
          <Input
            placeHolder={input3}
            img={shape}
          />
        </Box>
      </Box>

      <Box sx={{ width: { sm: "200px", xs: "100%" } }}>
        <Button
          title={button}
          width='100%'
          height='50px'
          backgroundColor="#30422E"
          img2={Smily}
          bgHover="#1D291C"
        />
      </Box>
    </Box>
  )
}

export default ContactFooter