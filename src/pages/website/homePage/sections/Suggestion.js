import { Box, Typography } from "@mui/material";
import FlowerLine from "@/__webAssets/pngs/full-style.png"
import Image from "next/image";
import styles from "./HomeSections.module.css"
import Content from "@/__webComponents/headings/Content";
import Heroimage from "@/__webAssets/pngs/suggestion-hero.png"
import ListPoints from "@/__webAssets/pngs/curved-list.png"

const Suggestion = () => {

  const content = [
    {
      title: "Give a truly meaningful gift",
      subTitle: "It is a heartfelt gesture to show that you care for the receiving part and a chance to learn about them. The result is not only a book but an unparalleled experience to be cherished for years to come."
    },
    {
      title: "Share your Story and Wisdom",
      subTitle: "From your earliest memories to the lessons of adulthood, every story you share matters. Let your triumphs and trials inspire and guide the generations after you."
    },
    {
      title: "Connect with your Family",
      subTitle: "Uncover the stories of those who hold a special place in your heart, revealing hidden treasures about your family and forging deeper connections through stories that bring you closer together."
    },
    {
      title: "Reflect on your journey",
      subTitle: "Documenting personal challenges, triumphs, and growth serves as a therapeutic journey, encouraging self-reflection and possibly igniting resilience and appreciation within you and your family."
    },
  ]

  return (
    <Box sx={{ margin: "100px 0 220px" }}>
      {/* heading  */}
      <Box sx={{
        textAlign: "center",
        width: "100%",
        position: "relative",
      }}
      >
        <Typography sx={{ fontSize: "52px", fontWeight: 500, fontFamily: "Besley !important" }}>
          Perfect for when you want to
        </Typography>
        <Image src={FlowerLine} alt="logo" className={styles.fullStyle} />
      </Box >
      <Box sx={{ margin: "160px 85px 0 105px", display: "flex", justifyContent: "center", alignItems: "center", columnGap: "100px" }}>
        {/* left Section  */}
        <Box sx={{ bgcolor: "", display: "flex", alignItems: "center " }}>
          <Image src={ListPoints} alt="points" />
          <Box sx={{ marginLeft: "30px" }}>
            {
              content.map((item, index) => <Content
                key={index}
                heading={item.title}
                subHeading={item.subTitle}
                marginB="25px"
                subWidth="80%"
              />)
            }
          </Box>
        </Box>
        <Image src={Heroimage} alt="image" />
      </Box>
    </Box>
  )
}


export default Suggestion;