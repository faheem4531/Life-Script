import NavBar from "@/__webComponents/navBar/NavBar";
import { Box, Typography } from "@mui/material";
import styles from "./BlogSection.module.css"

import Logo from "@/__webAssets/svgs/lifescript-life-story-book-logo.svg"
import BgImage from "@/__webAssets/pngs/bg-blog.png"
import Line from "@/__webAssets/svgs/line-orange.svg"
import Image from "next/image";
import { useTranslation } from "react-i18next";

const IntroductionBlog = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ position: "relative" }} >

      <NavBar color="#F3ECDA" logo={Logo} />
      <Image src={BgImage} alt='img' className={styles.bgImage} />

      <Box sx={{
        margin: {
          lg: "180px auto 120px", md: "200px 90px 150px ", sm: "120px 50px 120px", xs: "80px 20px 50px"
        },
        paddingBottom: "35px",
        borderBottom: "1px solid #E1683B",
        maxWidth: "1050px"
      }}>
        <Box sx={{
          fontSize: { md: "52px", sm: "44px", xs: "32px" },
          fontWeight: 500, marginBottom: "30px", fontFamily: "Besley !important"
        }}>
          <h2 className={styles.pureHeadings}>
            {t("blogSection.title")}
            {" "}
            <span className={styles.lineBox}>
            {t("blogSection.subTitle")}
              <Image src={Line} alt="img" className={styles.line} />
            </span>
          </h2>
        </Box>
        <Typography x={{ fontSize: "16px" }}>{t("blogSection.description")}</Typography>
      </Box>
    </Box>
  )
}

export default IntroductionBlog;