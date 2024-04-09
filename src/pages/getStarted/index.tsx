import { useEffect } from "react";
import { getBookTitle } from "@/store/slices/chatSlice";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import i18n from "../../../i18n";
import styles from "./GetTitle.module.css";
import Image from "next/image";

import Line from "@/_assets/svg/line-orange.svg";
import Arrow from "@/_assets/svg/getStarted-aero.svg";
import DotsLeft from "@/_assets/svg/dots-left.svg";
import DotsRight from "@/_assets/svg/dots-Right.svg";
import House from "@/_assets/png/bg-hunt.png";

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
          // setTimeout(() => {
          router.push(`/getStarted/getTitle?userName=${userName}`);
          // }, 3000);
        }
      })
      .catch(() =>
        setTimeout(() => {
          console.log("fail");
          router.push(`/dashboard/Questionnaire`);
        }, 3000)
      );
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: 'url("/bgGetStarted.png")',
        backgroundSize: "cover",
        backgroundPosition: { sm: "center center", xs: "left " },
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        bgcolor: "#30422E"
      }}
      className={styles.getStarted}
    >
      <Box
        sx={{
          marginLeft: {
            lg: "120px",
            md: "80px",
            sm: "80px",
            xs: "40px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "55px", sm: "40px", xs: "35px" },
            margin: {
              lg: "-30% 0 120px",
              md: "-100px 0 80px",
              sm: "-100px 0 80px",
              xs: "-80px 0 40px",
            },
          }}
        >
          {t("getTitle.hi")} {userName}{"!"}
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              md: "55px",
              sm: "40px",
              xs: "35px",
            },
          }}
        >
          {t("getTitle.LetGetStarted")}
        </Typography>
      </Box>

      <Image src={Arrow} alt="arrow" className={styles.aero} />
      <Image src={DotsRight} alt="arrow" className={styles.topDots} />
      <Image src={DotsLeft} alt="arrow" className={styles.bottomDots} />
      <Image src={House} alt="arrow" className={styles.house} />
    </Box>
  );
};

export default getStarted;
