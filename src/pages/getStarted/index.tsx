import Dots from "@/_assets/png/getStarted-dots.png";
import { getBookTitle } from "@/store/slices/chatSlice";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Arrow from "../../../public/startArrow.png";
import styles from "./GetTitle.module.css";
import i18n from "../../../i18n";

const getStarted = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  const { userName } = router.query;
  const { t } = useTranslation();

  useEffect(() => {
    const languageStored = localStorage.getItem("language");
    const language = languageStored === "Spanish" ? "sp" : "en";
    i18n.changeLanguage(language);
    dispatch(getBookTitle())
      .unwrap()
      .then((res) => {
        if (res?.length > 0 && res[0].title !== "") {
          setTimeout(() => {
            router.push("/dashboard/chapters");
          }, 3000);
        } else {
          setTimeout(() => {
            router.push(`/dashboard/Questionnaire?userName=${userName}`);
          }, 3000);
        }
      })
      .catch(() =>
        setTimeout(() => {
          console.log("fail");
          router.push(`/dashboard/Questionnaire?userName=${userName}`);
        }, 3000)
      );
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: 'url("/letsStarted.png")',
        backgroundSize: "cover",
        backgroundPosition: { sm: "center center", xs: "left " },
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginLeft: {
            xl: "200px",
            lg: "150px",
            md: "100px",
            sm: "100px",
            xs: "50px",
          },
        }}
      >
        <Typography
          sx={{ fontSize: { lg: "60px", md: "50px", sm: "40px", xs: "30px" } }}
        >
          {t("getTitle.hi")} {userName} 👋
        </Typography>
        <Image src={Arrow} alt="arrow" className={styles.aero} />
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              xl: "85px",
              lg: "65px",
              md: "55px",
              sm: "40px",
              xs: "35px",
            },
          }}
        >
          {t("getTitle.LetUsHelpYou")}
        </Typography>
      </Box>

      <Image src={Dots} alt="arrow" className={styles.topDots} />
      <Image src={Dots} alt="arrow" className={styles.bottomDots} />
    </Box>
  );
};

export default getStarted;
