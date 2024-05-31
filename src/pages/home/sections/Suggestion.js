import { Box, Typography } from "@mui/material";
import FlowerLine from "@/__webAssets/pngs/full-style.png"
import Image from "next/image";
import styles from "./HomeSections.module.css"
import Content from "@/__webComponents/headings/Content";
import Heroimage from "@/__webAssets/webp/family-collage-life-story-books.webp"
import ListPoints from "@/__webAssets/svgs/curved-list.svg"
import { useTranslation } from "react-i18next";

const Suggestion = () => {
  const { t } = useTranslation();
  const content = [
    {
      title: t("landingPage.perfectSection.content1.title"),
      subTitle: t("landingPage.perfectSection.content1.subTitle")
    },
    {
      title: t("landingPage.perfectSection.content2.title"),
      subTitle: t("landingPage.perfectSection.content2.subTitle")
    },
    {
      title: t("landingPage.perfectSection.content3.title"),
      subTitle: t("landingPage.perfectSection.content3.subTitle")
    },
    {
      title: t("landingPage.perfectSection.content4.title"),
      subTitle: t("landingPage.perfectSection.content4.subTitle")
    },
  ]

  return (
    <Box sx={{ margin: { md: "100px 0", xs: " 20px 0 80px" } }}>
      {/* heading  */}
      <Box sx={{
        textAlign: "center",
        width: "100%",
        position: "relative",
        padding: "0 20px"
      }}
      >
        <Typography sx={{
          fontSize: { md: "52px", sm: "44px", xs: "32px" },
          margin: "0 auto",
          maxWidth: { sm: "100%", xs: "380px" },
          fontWeight: 500,
          fontFamily: "Besley !important"
        }}>
          <h2>
           
           {t("landingPage.perfectSection.title")}
          </h2>
        </Typography>
        <Image src={FlowerLine} alt="logo" className={styles.fullStyle} />
      </Box >
      <Box sx={{
        margin: {
          lg: "160px 60px 0 105px",
          md: "150px 40px 0 75px",
          sm: "100px auto 0",
          xs: "50px 16px 0"
        },
        display: "flex",
        flexDirection: { md: "row", sm: "column-reverse", xs: "column-reverse" },
        justifyContent: "center",
        alignItems: "center",
        columnGap: { lg: "100px", md: "50px" }
      }}>
        {/* left Section  */}
        <Box sx={{ display: "flex", alignItems: "center ", marginTop: { sm: "50px", md: "0", xs: "60px" } }}>
          <Image src={ListPoints} alt="points" className={styles.pointsLine} />
          <Box sx={{ marginLeft: { md: "30px", }, }}>
            {
              content.map((item, index) => <Content
                key={index}
                heading={item.title}
                subHeading={item.subTitle}
              />)
            }
          </Box>
        </Box>
        <Image
          src={Heroimage}
          alt="A collage of a dad with kids and a grandpa sitting on top of life story books packaged as a gift - LifeScript"
          title="Family collage photo"
          className={styles.suggestionImg}
        />
      </Box>
    </Box>
  )
}


export default Suggestion;