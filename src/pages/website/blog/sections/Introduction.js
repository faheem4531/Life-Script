import NavBar from "@/pages/website/__webComponents/navBar/NavBar";
import { Box, Typography } from "@mui/material";
import styles from "./BlogSection.module.css"

import Logo from "@/__webAssets/svgs/logo-footer.svg"
import Line from "@/__webAssets/pngs/under-line-long.png"
import Image from "next/image";

const IntroductionBlog = () => {
  return (
    <Box className={styles.introBlog}>
      <NavBar color="#F3ECDA" logo={Logo} />
      <Box sx={{ margin: "250px 200px 170px", paddingBottom: "35px", borderBottom: "1px solid #E1683B", maxWidth: "1050px" }}>
        <Box sx={{ fontSize: "52px", fontWeight: 500, marginBottom: "30px", fontFamily: "Besley !important" }}>Exploring Life Stories: Biography, Autobiography, Memoir {" "}
          <span className={styles.lineBox}>
            Insights
            <Image src={Line} alt="img" className={styles.line} />
          </span>
        </Box>
        <Typography x={{ fontSize: "16px" }}>Unlock the Art of Biography Writing: A Comprehensive Guide to Crafting Compelling Life Stories</Typography>
      </Box>
    </Box>
  )
}

export default IntroductionBlog;