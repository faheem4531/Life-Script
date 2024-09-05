import FlowerLine from "@/__webAssets/pngs/full-style.png";
import ListPoints from "@/__webAssets/svgs/curved-list.svg";
import Heroimage from "@/__webAssets/webp/family-collage-life-story-books.webp";
import Content from "@/__webComponents/headings/Content";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "../ComponentsStyles.module.css";

const Suggestion = ({ bgGreen = true, heading, content }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        padding: {
          lg: "150px 0",
          sm: "150px 0",
          xs: " 150px 0 150px",
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
        <Image
          src={FlowerLine}
          alt="logo"
          className={bgGreen ? styles.fullStyle : styles.fullStyleS}
          loading="lazy"
        />
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
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          },
          justifyContent: "center",
          alignItems: "center",
          columnGap: { lg: "100px", md: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center ",
            marginTop: { sm: "50px", md: "0", xs: "60px" },
          }}
        >
          <Image
            src={ListPoints}
            alt="points"
            className={styles.pointsLine}
            loading="lazy"
          />
          <Box sx={{ marginLeft: { md: "30px" } }}>
            {content.map((item, index) => (
              <Content
                key={index}
                heading={item.title}
                subHeading={item.subTitle}
                color={bgGreen ? "#F3ECDA" : "#3E4F3C"}
              />
            ))}
          </Box>
        </Box>
        <Image
          loading="lazy"
          src={Heroimage}
          alt="A collage of a dad with kids and a grandpa sitting on top of life story books packaged as a gift - LifeScript"
          title="Family collage photo"
          className={styles.suggestionImg}
        />
      </Box>
    </Box>
  );
};

export default Suggestion;
