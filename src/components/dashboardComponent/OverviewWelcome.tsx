import ContineWriting from "@/_assets/svg/continue-writing.svg";
import Radius from "@/_assets/svg/profile-radius.svg";
import DemoProfile from "@/_assets/svg/profile.svg";
import { selectUser } from "@/store/slices/authSlice";
import { quotes } from "@/utils/subscriptionLists";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import GlobelBtn from "../button/Button";
import styles from "./Custom.module.css";

const WelcomeOverview = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [userNameFull, setUserNameFull] = useState("");
  const userData = useSelector(selectUser);
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("username");
    setUserNameFull(name);
    const firstName = name ? name.split(" ")[0] : "";
    setUserName(firstName);
  }, []);

  useEffect(() => {
    if (userData) {
      setUserImage(userData?.profileImage);
    }
  }, [userData]);

  return (
    <Box
      sx={{
        backgroundColor: "#F3ECDA",
        color: "#30422E",
        borderRadius: "4px",
        padding: { xl: "20px 40px", sm: "15px 25px", xs: "12px 20px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        maxHeight: { xl: "280px", lg: "240px", sm: "280px", xs: "250px" },
        position: "relative",
        overflow: "hidden",
      }}
      className={styles.welcomeMain}
    >

      <Box>
        <Typography sx={{ fontSize: "18.75px" }}>
          {t("overView.headerWelcome")}
        </Typography>
        <Typography
          sx={{
            fontSize: { xl: "33px", sm: "28px", xs: "24px" },
            lineHeight: "120%",
            fontWeight: 700,
          }}
        >
          {" "}
          {userName}
        </Typography>
        <QuoteRotator />
        <Box className="step3" sx={{ maxWidth: "225px" }}>
          <GlobelBtn
            image={ContineWriting}
            bgColor="#FFFFFF"
            color="#30422E"
            btnText={`${t("overView.headerBtnText")}`}
            onClick={() => router.push("/dashboard/chapters")}
            width={"225px"}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: { sm: "flex", xs: "none" },
          flexDirection: "column",
          alignItems: "center",
          borderLeft: "1px solid #30422E",
          pl: "50px",
          bgcolor: "",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "150px",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!userImage ? (
            <Image
              alt="profile"
              src={DemoProfile}
              className={styles.profilePic}
            />
          ) : (
            <img alt="profile" src={userImage} className={styles.profilePic} />
          )}
          <Image src={Radius} alt="img" className={styles.profileBox} />
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "25px",
            minWidth: "200px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {userNameFull}
        </Typography>
      </Box>
    </Box>
  );
};

export default WelcomeOverview;

const QuoteRotator = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { t } = useTranslation();
  const allQuotes = quotes(t);

  useEffect(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    setCurrentQuoteIndex(dayOfYear % allQuotes.length);
  }, [allQuotes.length]);

  return (
    <Typography
      sx={{
        fontSize: { xl: "14px", sm: "12px" },
        fontWeight: 300,
        lineHeight: "150%",
        width: "90%",
        marginBottom: "20px",
        color: "#30422E",
        marginTop: "10px",
        transition: "opacity 1s ease-in-out",
        opacity: 1,
      }}
    >
      {allQuotes[currentQuoteIndex]}
    </Typography>
  );
};
