import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import NextIcon from "@/__webAssets/svgs/next.svg";
import Button from "@/__webComponents/button/Button";
import styles from "./AboutUs.module.css";

const Values = ({ valuesData }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        padding: {
          lg: "180px 160px 150px 145px",
          md: "100px 80px 100px 100px",
          sm: "100px 50px 150px",
          xs: "100px 20px 150px",
        },
        display: "flex",
        justifyContent: "center",
      }}
      className={styles.valuesBox}
    >
      <Box sx={{ maxWidth: "1200px" }}>
        <Typography
          component="div"
          sx={{
            fontSize: { md: "52px", sm: "44px", xs: "32px" },
            fontWeight: 500,
            paddingBottom: "20px",
            borderBottom: "1px solid #E1683B",
            fontFamily: "Besley !important",
          }}
        >
          <h2 className={styles.pureHeadings}>
            {t("aboutSection.ourValues.title")}
          </h2>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            maxWidth: "1100px",
          }}
        >
          {valuesData.map((item, index) => (
            <Value
              key={index}
              title={item.title}
              detail={item.detail}
              icon={item.icon}
            />
          ))}
        </Box>
        <Box
          sx={{
            margin: "30px 0 0 40px",
            display: { md: "block", sm: "none", xs: "none" },
          }}
        >
          <Link href="/stripe-page">
            <Button
              title={t("aboutSection.ourValues.btnText")}
              width="210px"
              height="55px"
              img2={NextIcon}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Values;

function Value({ title, icon, detail }) {
  return (
    <Box
      sx={{
        maxWidth: { lg: "440px", md: "380px", sm: "80%", xs: "100%" },
        display: "flex",
        columnGap: "15px",
        margin: "50px 0 0",
      }}
    >
      <Image src={icon} alt="icon" />
      <Box>
        <Typography
          component="div"
          sx={{
            fontSize: "20px",
            fontFamily: "Avenir8 !important",
            paddingBottom: "20px",
          }}
        >
          <h3 className={styles.pureHeadings}> {title}</h3>
        </Typography>
        <Typography component="div">
          <h4 className={styles.pureHeadings}>{detail}</h4>
        </Typography>
      </Box>
    </Box>
  );
}
