import NavBar from "@/__webComponents/navBar/NavBar";
import { Box, Typography } from "@mui/material";
import styles from "./BlogSection.module.css"

import Logo from "@/__webAssets/svgs/logo-footer.svg"
import Line from "@/__webAssets/pngs/under-line-long.png"
import Image from "next/image";

const IntroductionBlog = () => {
  return (
    <Box className={styles.introBlog}>
      <NavBar color="#F3ECDA" logo={Logo} />
      <Box sx={{
        margin: {
          lg: "250px auto 170px", md: "200px 90px 150px ", sm: "120px 50px 120px", xs: "80px 20px 50px"
        },
        paddingBottom: "35px",
        borderBottom: "1px solid #E1683B",
        maxWidth: "1050px"
      }}>
        <Box sx={{
          fontSize: { md: "52px", sm: "44px", xs: "32px" },
          fontWeight: 500, marginBottom: "30px", fontFamily: "Besley !important"
        }}>
          <h2>
            Exploring the World of Storytelling: Insights, Inspiration, and Practical {" "}
            <span className={styles.lineBox}>
              Tips
              <Image src={Line} alt="img" className={styles.line} />
            </span>
          </h2>
        </Box>
        <Typography x={{ fontSize: "16px" }}>Your Guide to Capturing Life&apos;s Moments: Unlocking the Secrets of Personal Narratives and Legacy Building</Typography>
      </Box>
    </Box>
  )
}

export default IntroductionBlog;