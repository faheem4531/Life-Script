import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import FlowerLine from "@/__webAssets/pngs/full-style.png";
import ListPointsG from "@/__webAssets/svgs/curved-list-for-greenbg.svg";
import ListPoints from "@/__webAssets/svgs/curved-list.svg";
import Button from "@/__webComponents/button/Button";
import Content from "@/__webComponents/headings/Content";
import styles from "../ComponentsStyles.module.css";

const Suggestion = ({
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
          columnGap: { lg: "100px", md: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start ",
            marginTop: { sm: "50px", md: "0", xs: "60px" },
          }}
        >
          <Image
            src={bgGreen ? ListPointsG : ListPoints}
            alt="points"
            className={styles.pointsLine}
            loading="lazy"
            style={{ marginTop: bgGreen ? "60px" : "30px" }}
          />
          <Box sx={{ marginLeft: { md: "30px" } }}>
            {content.map((item, index) => (
              <Content
                key={index}
                heading={item.title}
                subHeading={item.subTitle}
                color={bgGreen ? "#F3ECDA" : "#3E4F3C"}
                subFonts={bgGreen && "15px"}
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

export default Suggestion;
