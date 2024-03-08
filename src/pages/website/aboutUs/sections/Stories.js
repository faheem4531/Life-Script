import { Box, Typography } from "@mui/material";
import StoryImg from "@/__webAssets/pngs/about-story.png"
import Image from "next/image";
import styles from "./AboutUs.module.css"

const Story = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "120px", margin: "0 90px 0 145px" }}>
      <Box sx={{ maxWidth: "510px" }}>
        <Typography sx={{ fontSize: "52px", fontWeight: 500, marginBottom: "20px", fontFamily: "Besley !important" }}>Our Story...</Typography>
        <Typography sx={{ fontSize: "16px" }}>A couple of years ago, our founder, Angel, accidentally found a dusty, forgotten book that turned out to be a portal to the past. It was written by his great grandfather who passed away shortly after Angel was born, and chronicled his personal experiences and memories from the harsh 20th century communist regime in his home country - Bulgaria. After reading the book, Angel felt a deep connection to his great grandfather, as if they had known each other well, despite never having met.</Typography>
        <Typography sx={{ fontSize: "16px", margin: "15px 0" }}>This experience sparked a realization that personal stories have the power to inspire us, to heal us, and to bring us together across time and space.</Typography>
        <Typography sx={{ fontSize: "16px" }}>Embracing this insight, Angel took on a journey to make autobiography book creation not just as a service, but as a mission to keep our joys, our struggles and our stories alive. That journey is what we now call Lifescript.</Typography>
      </Box>
      <Image src={StoryImg} alt="img" className={styles.storyImage} />
    </Box>
  )
}

export default Story;