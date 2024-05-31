import { Box, Typography } from '@mui/material'
import Content from '@/__webComponents/headings/Content'
import styles from "./FeatureSection.module.css"
import Image from 'next/image'
import Button from '@/__webComponents/button/Button'
import Link from 'next/link'

import Narrative from "@/__webAssets/gif/narrative-fusion-demo-animation.webp"
import AssistedEditing from "@/__webAssets/gif/assisted-editing-demo-animation.webp"
import VoiceToText from "@/__webAssets/gif/voice-to-text-feature-demo-animation.webp"
import AutoPhoto from "@/__webAssets/gif/Auto-photo-improvement-demo-animation.webp"
import FamilyTree from "@/__webAssets/gif/family-tree-feature-demo-animation.webp"
import FormattingFeatures from "@/__webAssets/gif/formatting-features-demo-animation.webp"

import NarrativeLogo from "@/__webAssets/pngs/featuresLogos/narrative-fusion-feature-icon.png"
import AssistedLogo from "@/__webAssets/pngs/featuresLogos/assisted-editing-feature-icon.png"
import AutoPhotoLogo from "@/__webAssets/pngs/featuresLogos/auto-photo-improvement-feature-icon.png"
import FamilyLogo from "@/__webAssets/pngs/featuresLogos/family-tree-feature-icon.png"
import Formatting from "@/__webAssets/pngs/featuresLogos/formatting-features-icon.png"
import VoiceLogo from "@/__webAssets/pngs/featuresLogos/voice-to-text-feature-icon.png"
import Pen from "@/__webAssets/svgs/writing-pen.svg"
import { useTranslation } from "react-i18next";

const FeaturesItems = () => {
  const { t } = useTranslation();
  const Data = [
    {
      logo: NarrativeLogo,
      altLogo: "An icon of a lightbulb over a book that represents narrative fusion feature for assembling answers - LifeScript",
      titleLogo: "Narrative fusion feature icon",
      gif: Narrative,
      alt: "Narrative fusion feature demo animation showing how it works - LifeScript",
      title: "Narrative Fusion demo animation",
      heading: t("featurePage.Section1.heading"),
      details: t("featurePage.Section1.details"),
      flex: "row"
    },
    {
      logo: AssistedLogo,
      altLogo: "An icon of a pen over a book that represents assisted editing feature for automatic corrections - LifeScript",
      titleLogo: "Assisted editing feature icon",
      gif: AssistedEditing,
      alt: "Assisted Editing feature demo animation showing how the spelling and grammar check works - LifeScript",
      title: "Assisted Editing demo animation",
      heading: t("featurePage.Section2.heading"),
      details: t("featurePage.Section2.details"),
      flex: "row-reverse",
      bg: true
    },
    {
      logo: VoiceLogo,
      altLogo: "An icon of a microphone and window of text over it that represents recording memories via speech - LifeScript",
      titleLogo: "Voice-to-text feature icon",
      gif: VoiceToText,
      alt: "Voice-to-text feature demo animation showing how your recorded words translate into written text - LifeScript",
      title: "Voice-to-text demo animation",
      heading: t("featurePage.Section3.heading"),
      details: t("featurePage.Section3.details"),
      flex: "row"
    },
    {
      logo: FamilyLogo,
      altLogo: "An icon of people connected between each other that represents visualizing family ancestry - LifeScript",
      titleLogo: "Family tree feature icon",
      gif: FamilyTree,
      alt: "Family Tree feature demo animation showing how your family members visualize across generations - LifeScript",
      title: "Family tree demo animation",
      heading: t("featurePage.Section4.heading"),
      details: t("featurePage.Section4.details"),
      flex: "row-reverse",
      bg: true
    },

    {
      logo: Formatting,
      altLogo: "An icon of paper with text on it that represents various formatting options - LifeScript",
      titleLogo: "Formatting features icon",
      gif: FormattingFeatures,
      alt: "Formatting Features demo animation showing how you can use bold, italics and other formatting - LifeScript",
      title: "Formatting features demo animation",
      heading: t("featurePage.Section5.heading"),
      details: t("featurePage.Section5.details"),
      flex: "row"

    },
    {
      logo: AutoPhotoLogo,
      altLogo: "An icon of a picture with mountain landscape that represents photo upscaling and autofitting - LifeScript",
      titleLogo: "Auto photo improvement feature icon",
      gif: AutoPhoto,
      alt: "Auto photo improvement demo animation showing how once you upload image we upscale and fit - LifeScript",
      title: "Auto photo improvement feature demo animation",
      heading: t("featurePage.Section6.heading"),
      details: t("featurePage.Section6.details"),
      flex: "row-reverse",
      button: true,
      bg: "half"
    },

  ]

  return (
    <Box sx={{
      marginBottom: { md: "0", sm: "150px", xs: "150px" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative"
    }}>
      {Data.map((item, index) => <DetailFeature
        key={index}
        logo={item.logo}
        altLogo={item.altLogo}
        titleLogo={item.titleLogo}
        gif={item.gif}
        alt={item.alt}
        title={item.title}
        heading={item.heading}
        details={item.details}
        flex={item.flex}
        bg={item.bg}
        button={item.button}
      />)}
    </Box>
  )
};

export default FeaturesItems


function DetailFeature({ logo, altLogo, titleLogo, heading, details, flex, gif, alt, title, button, bg = false }) {
  const { t } = useTranslation();
  const bgWidthLg = bg == true ? "800px" : "700px"
  const bgWidthMd = bg == true ? "750px" : "700px"

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: { lg: bgWidthLg, md: bgWidthMd },
      padding: { sm: "70px 0 ", md: "0", xs: "50px 20px" }
    }}
      className={`${bg == true && styles.featureBg} ${bg == "half" && styles.halfbg}`} >
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { md: flex, sm: "column", xs: "column" },
        alignItems: { md: "center", sm: "start", sx: "start" },
        columnGap: { lg: "90px", md: "50px" },
        width: "100%",
        maxWidth: "1200px",
        padding: { sm: "0 50px" }
      }}
        flexDirection={flex}
      >

        <Box sx={{ maxWidth: { sm: "355px", xs: "100%" } }}>
          <Image src={logo} alt={altLogo} title={titleLogo} className={styles.gifIcon} />
          <Content
            subWidth="330px"
            heading={heading}
            subHeading={details}
            bg={bg}
          />
          {button && <Box sx={{ marginTop: "50px" }} className={styles.buttonBox}>
            <Box sx={{ width: { sm: "200px", xs: "100%" }, padding: "0 20px 0 0" }}>
              <Link href="/stripe-page">
                <Button
                  title={t("featurePage.btnText")}
                  width='100%'
                  height='55px'
                  img1={Pen}
                />
              </Link>
            </Box>
            <Typography
              sx={{ fontSize: '11px', lineHeight: '24px', fontWeight: 500, margin: '10px 0 0' }}
            >{t("featurePage.btnBelowText")}
            </Typography>
          </Box>
          }
        </Box>
        <Image src={gif} alt={alt} title={title} className={styles.gif} />
      </Box>
    </Box >
  )

}
