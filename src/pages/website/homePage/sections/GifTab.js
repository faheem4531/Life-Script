'use client'

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./HomeSections.module.css"
import Button from "@/pages/website/__webComponents/button/Button";
import Hurt from "@/__webAssets/pngs/bg-gift-tag.png"
import Link from "next/link";

const GifTab = ({ heading, subHeading, icon, button }) => {


  return (
    <Box sx={{
      width: "1200px",
      height: "255px",
      margin: "0 auto 0",
      display: "flex",
      justifyContent: "space-between",
      padding: "100px 60px 40px 100px",
      position: "relative"
    }}
      className={styles.gifTabBox}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "100%", position: "relative", zIndex: "1" }}>
        <Box sx={{ width: "100%" }}>

          <Typography sx={{
            fontSize: "32px", fontWeight: 500, fontFamily: "Besley !important"
          }}>{heading}
          </Typography>
          {subHeading && <Typography sx={{
            fontSize: "16px", opacity: "0.8", marginTop: "5px"
          }}>{subHeading}
          </Typography>}

        </Box>
        <Link href="/gifting">
          <Button
            title={button}
            width='180px'
            height='55px'
            img1={icon}
          />
        </Link>

      </Box>
      <Image src={Hurt} alt="img" className={styles.bgHurt} />
    </Box >
  )
}


export default GifTab;