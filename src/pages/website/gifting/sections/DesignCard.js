import { Box, Typography } from "@mui/material";
import styles from "./gift.module.css"
import PrimaryHeading from "@/pages/website/__webComponents/headings/PrimaryHeading";
import Image from "next/image";
import Button from "@/pages/website/__webComponents/button/Button";

import Design from "@/__webAssets/pngs/design-card.png"
import LeftStyle from "@/__webAssets/pngs/left-style2.png"
import RightStyle from "@/__webAssets/pngs/right-style2.png"
import Gift from "@/__webAssets/svgs/gift.svg"

const DesignCard = () => {
  return (
    <Box sx={{
      alignItems: "center",
      textAlign: "center",
      padding: "150px 170px 40px 160px"
    }}
      className={styles.designCard}
    >
      <PrimaryHeading showStyle={true} heading="Design your gift card" left={LeftStyle} right={RightStyle} />
      <Box sx={{ display: "flex", columnGap: "120px", justifyContent: "center", alignItems: "center", margin: "140px 0 0" }}>


        <Box sx={{ maxWidth: "560px", textAlign: "start", width: "100%" }}>
          <Typography sx={{ fontSize: "32px", fontWeight: 500, margin: "0 0 20px" }}>Customize:</Typography>
          <Input placeholder="Book title |" />
          <Box sx={{ display: "flex", gap: "14px", margin: "26px 0" }}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
          </Box>
          <Input placeholder="Personal message" />
          <Box sx={{ marginTop: "40px" }}>
            <Button
              title="Gift Now!!"
              width='180px'
              height='55px'
              img1={Gift}
            />
          </Box>
        </Box>



        <Image src={Design} alt="img" className={styles.DesignImg} />
      </Box>
    </Box>
  )
}

export default DesignCard;


function Input({ placeholder }) {
  return <input
    placeholder={placeholder}
    className={styles.input}
  />
}