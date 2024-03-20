import FlowerLine from "@/__webAssets/pngs/full-style.png"
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./HomeSections.module.css"
import Content from "@/__webComponents/headings/Content";
import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading";
import StoryImage1 from "@/__webAssets/pngs/story-1.png"
import StoryImage2 from "@/__webAssets/pngs/story-2.png"
import StoryImage3 from "@/__webAssets/pngs/story-3.png"
import StoryImage4 from "@/__webAssets/pngs/story-4.png"
import Button from "@/__webComponents/button/Button";
import NextIcon from '@/__webAssets/svgs/next.svg'
import Line from "@/__webAssets/pngs/under-line-long.png"
import Link from "next/link";

const StoryTelling = () => {
  const stories = [
    {
      heading: "Easy and Time-saving",
      content: "Tell your story by simply answering thought-provoking questions and have fun while you reflect along the way. Save valuable time and avoid the hassle of years of writing, extensive interviews, and proofreading for typos.",
      image: StoryImage1,
      direction: "row"
    },
    {
      heading: "Supported",
      content: "Enjoy a stress-free experience with our support through live chat, video tutorials, FAQs, and more. Our dedicated team is here to guide you at every step of your storytelling journey, ensuring you have the resources and assistance needed to effortlessly bring your story to life.",
      image: StoryImage2,
      direction: "row-reverse"
    },
    {
      heading: "Flexible",
      content: " Your story is unique, and so is the way you tell it. If you don't feel like writing, feel free to speak your mind! Choose your own pace down memory lane on any device, anytime, anywhere.",
      image: StoryImage3,
      direction: "row"
    },
    {
      heading: "Connected",
      content: "Safeguard your legacy with our Family Tree feature, capturing your lineage from parents and great-grandparents to distant ancestors by visualizing them at the end of your book.",
      image: StoryImage4,
      direction: "row-reverse",
      button: true
    },
  ]

  return (
    <Box sx={{ padding: { md: "180px 0 0", sm: "100px 0 0 ", xs: "60px 20px 100px " } }} >

      <Box sx={{
        fontSize: { md: "54px", sm: "44px", xs: "32px" },
        fontWeight: 500,
        marginBottom: { md: "30px", sx: "20px", xs: "30px" },
        fontFamily: "Besley !important",
        textAlign: { sm: "center", xs: "left" }
      }}>
        Your storytelling journey is{" "}
        <span className={styles.marked}>
          now:
          <Image src={Line} alt="mark" className={styles.line} />
        </span>
      </Box>

      <Box sx={{
        padding: { lg: "100px 0px 250px", md: "50px 40px 150px", sm: "50px 50px 150px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
        className={styles.bgStorytelling}>

        {stories.map((item, index) => <StoryWraper
          key={index}
          heading={item.heading}
          content={item.content}
          button={item.button}
          image={item.image}
          direction={item.direction}
        />)}

      </Box>
    </Box>
  )
}


export default StoryTelling;


function StoryWraper({ direction, heading, content, image, button = false }) {
  return (
    <Box sx={{
      display: "flex",
      paddingTop: { sm: "100px", xs: "30px" },
      columnGap: { lg: "170px", md: "70px" },
      justifyContent: "space-between",
      alignItems: { md: "center" },
      flexDirection: { md: direction, sm: "column-reverse", xs: "column-reverse" }
    }}
    >
      <Box sx={{ margin: { md: "0", sm: "30px 0 0", xs: "20px 0 0" } }}>
        <Box sx={{ maxWidth: { lg: "475px", md: "400px" } }}>
          <Content width="100%" subWidth="100%" heading={heading} subHeading={content} />
        </Box>
        {button && <Box sx={{ marginTop: "40px", width: { sm: "240px", xs: "100%" } }}>
          <Link href="/_auth/Auth">
            <Button
              title='Get Started'
              width="100%"
              height='55px'
              img2={NextIcon}
            />
          </Link>
        </Box>}
      </Box>

      <Image src={image} alt="image" className={styles.stroyImages} />
    </Box>
  )
}