'use client '
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import styles from "../ComponentsStyles.module.css"
import Smily from "@/__webAssets/svgs/smily.svg"
import Button from "../button/Button"
import Input from "../input/Input"
import Line from "@/__webAssets/svgs/line-white.svg"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Shape from "@/__webAssets/svgs/input-shape.svg"
import { useState } from "react"

const ContactFooter = ({ title, date = false, subTitle, input1, input2, input3, button, shape, marked, lineWidth }) => {
  return (
    <Box
      sx={{
        padding: { md: "70px 40px 50px", sm: "70px 30px 50px", xs: "40px 20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#F3ECDA",
        position: "relative",
        zIndex: "10"
      }}
      className={styles.contactFooterBox}
      id="ContactUs"
    >
      <Box sx={{
        fontSize: { md: "54px", sm: "44px", xs: "32px" },
        textAlign: "center",
        fontWeight: 500,
        fontFamily: "Besley !important",
      }}
      >
        {title} {" "}
        <Box sx={{ display: "inline", position: "relative" }}>
          {marked}
          <Box sx={{ maxWidth: "180px", position: "absolute", right: { sm: "-10px", xs: "-10px" }, bottom: { sm: "-30px", xs: "-20px" } }}>
            <Image src={Line} alt="line" className={styles.footerLine} width={lineWidth} />
          </Box>
        </Box>


      </Box>

      <Typography sx={{ fontSize: "16px", textAlign: "center", fontWeight: 500, marginTop: "30px", fontFamily: "Avenir" }}>
        {subTitle}
      </Typography>

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
          {date ?
            <GetDate />
            :
            <Input
              placeHolder={input3}
            />
          }
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




function GetDate() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCalander() {
    setIsOpen((pre) => !pre)
  }

  return (
    <Box sx={{ position: "relative" }} onCli>
      <Box sx={{
        bgcolor: "#f5f5f5",
        position: "absolute",
        right: "10px",
        zIndex: "100",
        top: "15px",
        cursor: "pointer",
      }}
        onClick={handleCalander}
      >
        <CustomCalendarIcon />
      </Box>

      <DatePicker sx={{
        bgcolor: "#f5f5f5",
        borderRadius: "2px",
        width: "100%",
        color: "#7e7e7e"
      }}
        open={isOpen}
        label="When it's happening?"

      />
    </Box>
  );
}


const CustomCalendarIcon = () => (
  <Image src={Shape} alt="Calendar" width={26} height={24} />
);