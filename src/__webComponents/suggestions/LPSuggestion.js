import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import FlowerLine from "@/__webAssets/pngs/full-style.png";
import ListPointsG from "@/__webAssets/svgs/curved-list-for-greenbg.svg";
import ListPoints from "@/__webAssets/svgs/curved-list.svg";
import Button from "@/__webComponents/button/Button";
import styles from "../ComponentsStyles.module.css";

const LPSuggestion = ({
  bgGreen = true,
  bigImage = false,
  heading,
  data,
  btnTxt,
  btnImg,
}) => {
  const { t } = useTranslation();
  const { imageData, content } = data;
  return (
    <Box
      sx={{
        padding: {
          lg: "150px 0",
          sm: bgGreen ? "150px 0" : "80px 0",
          xs: bgGreen ? "150px 0" : "40px 0",
        },
      }}
      className={bgGreen && styles.workingBox}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          position: "relative",
          padding: "0 20px",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: { md: "52px", sm: "44px", xs: "32px" },
            margin: "0 auto",
            maxWidth: { sm: "100%", xs: "380px" },
            fontWeight: 500,
            fontFamily: "Besley !important",
            color: bgGreen ? "#F3ECDA" : "#3E4F3C",
          }}
        >
          <h2 className={styles.pureHeadings}>{heading}</h2>
        </Typography>
        {!bgGreen && (
          <Image
            src={FlowerLine}
            alt="logo"
            className={styles.fullStyleS}
            loading="lazy"
          />
        )}
      </Box>
      <Box
        sx={{
          margin: {
            lg: bgGreen ? "80px 0 0" : "160px 60px 0 105px",
            md: bgGreen ? "50px 30px 0 " : "150px 40px 0 75px",
            sm: bgGreen ? "50px auto 0" : "100px auto 0",
            xs: "50px 16px 0",
          },
          display: "flex",
          flexDirection: {
            lg: "row",
            md: bigImage ? "column-reverse" : "row",
            sm: "column-reverse",
            xs: "column-reverse",
          },
          justifyContent: "center",
          alignItems: { lg: "start", sm: "center", xs: "center" },
          columnGap: { md: "30px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start ",
            marginTop: { md: "50px", lg: "0", xs: "50px" },
            width: "100%",
            maxWidth: { md: "640px", sm: "600px", xs: "100%" },
          }}
        >
          <Image
            src={bgGreen ? ListPointsG : ListPoints}
            alt="points"
            className={styles.pointsLine}
            loading="lazy"
            style={{ marginTop: bgGreen ? "60px" : "30px" }}
          />
          <Box sx={{ marginLeft: { md: "30px" }, width: "100%" }}>
            {content.map((item, index) => (
              <Content
                key={index}
                heading={item.title}
                subHeading={item.subTitle}
              />
            ))}
            {btnTxt && (
              <Box marginTop={7}>
                <Link href={"./purchase"}>
                  <Button
                    title={btnTxt}
                    width="190px"
                    height="56px"
                    img1={btnImg}
                  />
                </Link>
              </Box>
            )}
          </Box>
        </Box>
        <Image
          loading="lazy"
          src={imageData.src}
          alt={imageData.alt}
          title={imageData.title}
          className={bigImage ? styles.suggestionImg1 : styles.suggestionImg}
          width={700}
          height={680}
        />
      </Box>
    </Box>
  );
};

export default LPSuggestion;

function Content({ heading, subHeading }) {
  return (
    <Box
      sx={{
        mb: { md: "10px", sm: "20px", xs: "20px" },
      }}
    >
      <Typography
        component="div"
        variant="h3"
        sx={{
          fontSize: { md: "30px", sm: "26px", xs: "28px" },
          color: "#F3ECDA",
          fontWeight: 500,
          marginBottom: "8px",
          fontFamily: "Besley !important",
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Avenir3 !important",
          color: "#F3ECDA",
          fontSize: "16px",
        }}
      >
        {subHeading}
      </Typography>
    </Box>
  );
}
