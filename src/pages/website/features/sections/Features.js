import { Box, Typography } from '@mui/material'
import Content from '@/pages/website/__webComponents/headings/Content'
import styles from "./FeatureSection.module.css"
import Image from 'next/image'

import AssistedEditing from "@/__webAssets/gif/assisted-editing.gif"
import AutoPhoto from "@/__webAssets/gif/auto-photo.gif"
import FamilyTree from "@/__webAssets/gif/family-tree.gif"
import FormattingFeatures from "@/__webAssets/gif/formatting-features.gif"
import Narrative from "@/__webAssets/gif/narrative.gif"
import VoiceToText from "@/__webAssets/gif/voice-to-text.gif"

import NarrativeLogo from "@/__webAssets/pngs/narative-icon.png"
import AssistedLogo from "@/__webAssets/pngs/assisted-icon.png"
import AutoPhopoLogo from "@/__webAssets/pngs/auto-photo.png"
import FamilyLogo from "@/__webAssets/pngs/family-icon.png"
import Formatting from "@/__webAssets/pngs/formatting-icon.png"
import VoiceLogo from "@/__webAssets/pngs/voice-icon.png"
import Pen from "@/__webAssets/svgs/writing-pen.svg"
import Button from '@/pages/website/__webComponents/button/Button'

const FeaturesItems = () => {
  const Data = [
    {
      logo: NarrativeLogo,
      gif: Narrative,
      heading: "Narrative Fusion",
      details: "Eliminates the need to write complex texts. Simply answer as many questions as you like and fuse these answers into a cohesive, captivating and chronologically-organized chapter with a single click.",
      flex: "row"
    },
    {
      logo: AssistedLogo,
      gif: AssistedEditing,
      heading: "Assisted Editing",
      details: "Automatically edits and proofreads your text with real-time suggestions. From grammatical errors to sentence structure, it ensures a polished and professional narrative, saving you time and effort in the editing process.",
      flex: "row-reverse"

    },
    {
      logo: VoiceLogo,
      gif: VoiceToText,
      heading: "Voice-to-Text",
      details: "Captures your spoken words, transforming them into written text. Ideal for the storyteller on the move, those who prefer speaking to typing, or anyone who loves to tell their tales out loud. Just press to start, speak your heart, and click to finish. It's that simple.",
      flex: "row"

    },
    {
      logo: FamilyLogo,
      gif: FamilyTree,
      heading: "Family Tree",
      details: "Visually represents your ancestry at the end of your book. You simply add picture, name and age for the family members you wish to include. With family tree, you provide a rich personal and historical context to your story.",
      flex: "row-reverse"
    },

    {
      logo: Formatting,
      gif: FormattingFeatures,
      heading: "Formatting Features",
      details: "Allows you to customise your text and its font, style, size, color, layout and more. This empowers you to create a book as unique and beautiful as your own story.",
      flex: "row"

    },
    {
      logo: AutoPhopoLogo,
      gif: AutoPhoto,
      heading: "Auto Photo Improvement",
      details: "Automatically adjusts your photos for high-quality printing by managing size, resolution, and aspect ratio. This eliminates manual editing, saving you time and effort in meeting printing requirements.",
      flex: "row-reverse",
      button: true,
    },

  ]

  return (
    <Box sx={{ maxWidth: "1200px", margin: { lg: "200px auto 0", md: "150px auto 0", sm: "120px auto 100px", xs: "100px 20px 150px" } }}>

      <Typography sx={{
        fontSize: { md: "52px", sm: "44px", xs: "32px" },
        fontWeight: 500,
        marginBottom: "20px",
        fontFamily: "Besley !important",
        padding: { lg: "0 10%", md: "0 5%", sm: "50px 50px 0" },
        textAlign: { sm: "center" }
      }}>
        Features That Shape Your Storytelling <br /> Experience Fun and Easy
      </Typography>
      <Typography sx={{ fontSize: "16px", padding: { md: "0 20%", sm: "0 7%" }, textAlign: { sm: "center" } }}>
        Lifescript features make crafting your autobiography easy and engaging. Capture your life&apos;s journey, design with style, and visually represent your family heritage. Create a lasting legacy with a high-quality, printed book to share.
      </Typography>

      <Box sx={{
        marginTop: { lg: "200px", md: "150px", sm: "100px", xs: "80px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
      }}>
        {Data.map((item, index) => <DetailFeature
          key={index}
          logo={item.logo}
          gif={item.gif}
          heading={item.heading}
          details={item.details}
          flex={item.flex}
          button={item.button}
        />)}
      </Box>
    </Box>

  )
};

export default FeaturesItems


function DetailFeature({ logo, heading, details, flex, gif, button }) {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      flexDirection: { md: "row", sm: "column", xs: "column" },
      alignItems: { md: "center", sm: "start", sx: "start" },
      columnGap: "20px",
      marginBottom: { lg: "250px", md: "200px", sm: "100px", xs: "50px" },
      width: "100%",
      padding: { sm: "0 50px" }
    }}
      flexDirection={flex}
    >
      <Box sx={{ maxWidth: { sm: "355px", xs: "100%" } }}>
        <Image src={logo} alt="icon" className={styles.gifIcon} />
        <Content
          subWidth="330px"
          heading={heading}
          subHeading={details} />
        {button && <Box sx={{ marginTop: "50px" }} className={styles.buttonBox}>
          <Box sx={{ width: { sm: "200px", xs: "100%" } }}>
            <Button
              title='Get Started'
              width='100%'
              height='50px'
              img1={Pen}
            />
          </Box>
          <Typography
            sx={{ fontSize: '11px', lineHeight: '24px', fontWeight: 500, margin: '10px 0 0' }}
          >Start Free Trial (no credit card required)
          </Typography>
        </Box>
        }
      </Box>
      <Image src={gif} alt="gif" className={styles.gif} />
    </Box >
  )

}
