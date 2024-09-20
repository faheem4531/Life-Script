import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import Pen from "@/__webAssets/svgs/writing-pen.svg";
import Button from "@/__webComponents/button/Button";
import Content from "@/__webComponents/headings/Content";
import styles from "./FeatureSection.module.css";

const FeaturesItems = ({ featuresData }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        marginBottom: { md: "0", sm: "150px", xs: "150px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {featuresData.map((item, index) => (
        <DetailFeature
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
        />
      ))}
    </Box>
  );
};

export default FeaturesItems;

function DetailFeature({
  logo,
  altLogo,
  titleLogo,
  heading,
  details,
  flex,
  gif,
  alt,
  title,
  button,
  bg = false,
}) {
  const { t } = useTranslation();
  const bgWidthLg = bg == true ? "800px" : "700px";
  const bgWidthMd = bg == true ? "750px" : "700px";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: { lg: bgWidthLg, md: bgWidthMd },
        padding: { sm: "70px 0 ", md: "0", xs: "50px 20px" },
      }}
      className={`${bg == true && styles.featureBg} ${
        bg == "half" && styles.halfbg
      }`}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { md: flex, sm: "column", xs: "column" },
          alignItems: { md: "center", sm: "start", sx: "start" },
          columnGap: { lg: "90px", md: "50px" },
          width: "100%",
          maxWidth: "1200px",
          padding: { sm: "0 50px" },
        }}
        flexDirection={flex}
      >
        <Box sx={{ maxWidth: { sm: "355px", xs: "100%" } }}>
          <Image
            src={logo}
            alt={altLogo}
            title={titleLogo}
            className={styles.gifIcon}
            width={100}
            height={90}
          />
          <Content
            subWidth="330px"
            heading={heading}
            subHeading={details}
            bg={bg}
          />
          {button && (
            <Box sx={{ marginTop: "50px" }} className={styles.buttonBox}>
              <Box
                sx={{
                  width: { sm: "200px", xs: "100%" },
                  padding: "0 20px 0 0",
                }}
              >
                <Link href="/purchase">
                  <Button
                    title={t("featurePage.btnText")}
                    width="100%"
                    height="55px"
                    img1={Pen}
                  />
                </Link>
              </Box>
              <Typography
                sx={{
                  fontSize: "11px",
                  lineHeight: "24px",
                  fontWeight: 500,
                  margin: "10px 0 0",
                }}
              >
                {t("featurePage.btnBelowText")}
              </Typography>
            </Box>
          )}
        </Box>
        <Image src={gif} alt={alt} title={title} className={styles.gif} />
      </Box>
    </Box>
  );
}
