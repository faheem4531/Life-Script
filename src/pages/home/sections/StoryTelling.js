import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./HomeSections.module.css"
import Content from "@/__webComponents/headings/Content";
import Link from "next/link";

import StoryImage1 from "@/__webAssets/webp/storytelling/happy-grandma-holding-her-granddaughter.webp"
import StoryImage2 from "@/__webAssets/webp/storytelling/grandpa-writing-by-hand-his-memoir.webp"
import StoryImage3 from "@/__webAssets/webp/storytelling/grandma-recording-her-memories-over-the-phone.webp"
import StoryImage4 from "@/__webAssets/webp/storytelling/three-generations-family-smiling-at-the-camera.webp"
import Button from "@/__webComponents/button/Button";
import NextIcon from '@/__webAssets/svgs/next.svg'
import Line from "@/__webAssets/svgs/line-orange.svg"
import Bg from "@/__webAssets/pngs/bg-story-telling.png"
import { useTranslation } from "react-i18next";
const StoryTelling = () => {
  const { t } = useTranslation();
  const stories = [
    {
      heading: t("landingPage.storyTelling.story1.heading"),
      content: t("landingPage.storyTelling.story1.content"),
      image: StoryImage1,
      alt: t("landingPage.storyTelling.story1.alt"),
      title: t("landingPage.storyTelling.story1.title"),
      direction: t("landingPage.storyTelling.story1.direction"),
    },
    {
      heading: t("landingPage.storyTelling.story2.heading"),
      content: t("landingPage.storyTelling.story2.content"),
      image: StoryImage2,
      alt: t("landingPage.storyTelling.story2.alt"),
      title: t("landingPage.storyTelling.story2.title"),
      direction: t("landingPage.storyTelling.story2.direction"),
    },
    {
      heading: t("landingPage.storyTelling.story3.heading"),
      content: t("landingPage.storyTelling.story3.content"),
      image: StoryImage3,
      alt: t("landingPage.storyTelling.story3.alt"),
      title: t("landingPage.storyTelling.story3.title"),
      direction: t("landingPage.storyTelling.story3.direction"),
    },
    {
      heading: t("landingPage.storyTelling.story4.heading"),
      content: t("landingPage.storyTelling.story4.content"),
      image: StoryImage4,
      alt: t("landingPage.storyTelling.story4.alt"),
      title: t("landingPage.storyTelling.story4.title"),
      direction: t("landingPage.storyTelling.story4.direction"),
    },
   
  ]

  return (
    <Box sx={{ padding: { md: "150px 0 0", sm: "100px 0 0 ", xs: "60px 20px 100px " }, position: "relative" }} >

      <Box sx={{
        fontSize: { md: "54px", sm: "44px", xs: "32px" },
        fontWeight: 500,
        marginBottom: { md: "30px", sx: "20px", xs: "30px" },
        fontFamily: "Besley !important",
        textAlign: { sm: "center", xs: "left" }
      }}>
       { t("landingPage.storyTelling.heading")}{" "}
        <span className={styles.marked}>
        { t("landingPage.storyTelling.subHeading")}
          <Image src={Line} alt="mark" className={styles.line} loading="lazy"/>
        </span>
      </Box>

      <Box sx={{
        padding: { lg: "0px 0px 180px", md: "50px 40px 150px", sm: "50px 50px 150px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

        {stories.map((item, index) => <StoryWraper
          key={index}
          cardNo={index + 1}
          heading={item.heading}
          content={item.content}
          button={item.button}
          image={item.image}
          alt={item.alt}
          title={item.title}
          direction={item.direction}
        />)}
      </Box>
      <Image src={Bg} alt="bg" className={styles.storyBg} />
    </Box>
  )
}


export default StoryTelling;


function StoryWraper({ direction, heading, content, image, alt, button = false, cardNo, title }) {
  return (
    <Box sx={{
      display: "flex",
      paddingTop: { sm: "120px", xs: "30px" },
      columnGap: { lg: "170px", md: "70px" },
      justifyContent: "space-between",
      alignItems: { md: "center" },
      flexDirection: { md: direction, sm: "column-reverse", xs: "column-reverse" },
    }}
    >
      <Box sx={{ margin: { md: "0", sm: "30px 0 0", xs: "20px 0 0" } }}>
        <Box sx={{ maxWidth: { lg: "475px", md: "400px" }, position: "relative", zIndex: "100" }}>
          <Content width="100%" subWidth="100%" heading={heading} subHeading={content} />
        </Box>

        {button && <Box sx={{ marginTop: "40px", width: { sm: "240px", xs: "100%" }, position: "relative", zIndex: "100" }}>
          <Link href="/stripe-page">
            <Button
              title='Get Started'
              width="100%"
              font="24px"
              height='55px'
              img2={NextIcon}
            />
          </Link>
        </Box>}
      </Box>

      <Image loading="lazy" src={image} alt={alt} title={title} className={`${styles.stroyImages} ${cardNo == '1' && styles.index}`} />
    </Box>
  )
}