import BgRounded from "@/_assets/png/overview-welcome-bg.png";
import Welcome from "@/_assets/png/overview-welcome-card.png";
import ContineWriting from "@/_assets/svg/continue-writing.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import styles from "./Custom.module.css";
import GlobelBtn from '../button/Button';

const WelcomeOverview = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("username");
    const firstName = name ? name.split(' ')[0] : ''; // Get the part before the first space
    setUserName(firstName);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#F3ECDA",
        color: "#30422E",
        borderRadius: "4px",
        padding: { xl: "20px 30px", lg: "15px 25px", xs: "12px 20px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxHeight: "230px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "18.75px" }}>
          {t("overView.headerWelcome")}
        </Typography>
        <Typography
          sx={{
            fontSize: { xl: "33px", sm: "28px" },
            lineHeight: "120%",
            fontWeight: 700,
          }}
        >
          {" "}
          {userName}
        </Typography>
        <Typography
          sx={{
            fontSize: { xl: "14px", sm: "12px" },
            fontWeight: 300,
            lineHeight: "150%",
            marginBottom: "20px",
            color: "#30422E",
            marginTop: "10px",
          }}
        >
          {t("overView.headerdescription")}
        </Typography>
        {/* <Button
          onClick={() => router.push("/dashboard/chapters")}
          image={ContineWriting}
          btnText={`${t("overView.headerBtnText")}`}
          // btnText="| Continue Writing"
          bgColor="#fff"
          borderRadius="23px"
          color="#186F65"
          fontSize={{ xs: "12px" }}
          border="0px"
        /> */}
        <GlobelBtn
          image={ContineWriting}
          bgColor="#FFFFFF"
          color="#30422E"
          btnText={`${t("overView.headerBtnText")}`}
          onClick={() => router.push("/dashboard/chapters")}
          width={"220px"} />
      </Box>
      <Box
        sx={{
          display: { sm: "block", xs: "none" },
        }}
      >
        <Image alt="Welcome" src={Welcome} className={styles.welcomeImage} />
        <Image alt="Welcome" src={BgRounded} className={styles.bgRounded} />
      </Box>
    </Box>
  );
};

export default WelcomeOverview;
