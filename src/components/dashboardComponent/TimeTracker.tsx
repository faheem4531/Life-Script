import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ClockImage from "@/_assets/svg/clockMain.svg";
import Calander from "@/_assets/svg/calanderMain.svg";
import styles from "./Custom.module.css";
import {
  getAnswers,
  getChapters,
  getHours,
  selectAllChapters,
  selectAnswers,
} from "@/store/slices/chatSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const TimeTracker = ({ onChange }) => {
  const dispatch: any = useDispatch();
  const allChapters = useSelector(selectAllChapters);
  const allAnswers = useSelector(selectAnswers);
  const [wordsCount, setWordsCount] = useState(0);
  const [hoursCount, setHoursCount] = useState("");
  const [chapterCount, setChapterCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const { t } = useTranslation();

  const countQuestions = () => {
    let totalQuestions = 0;

    allChapters.forEach((chapter) => {
      totalQuestions += chapter.questions.length;
    });
    setQuestionCount(totalQuestions);
  };

  const countWords = (array) => {
    let totalWords = 0;

    array.forEach((obj) => {
      const answerHTML = obj.userText;

      const textContent = answerHTML.replace(/<[^>]*>/g, "");

      const decodedText = decodeURIComponent(
        textContent.replace(/&nbsp;|&#160;/g, " ")
      );
      const words = decodedText.split(/\s+/);

      const nonEmptyWords = words.filter((word) => word.length > 0);

      const wordCount = nonEmptyWords.length;

      totalWords += wordCount;
      setWordsCount(totalWords);
    });
  };

  function formatTime(seconds) {
    if (isNaN(seconds)) {
      return "Invalid input";
    }

    if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} m`;
    } else {
      const hours = Math.floor(seconds / 3600);
      return `${hours} h`;
    }
  }

  useEffect(() => {
    dispatch(getChapters());
    dispatch(getAnswers());
    dispatch(getHours())
      .unwrap()
      .then((res) => setHoursCount(formatTime(Number(res))));
  }, []);

  useEffect(() => {
    let completedChapters = 0;
    if (allChapters?.length > 0) {
      const inProgressChapters = allChapters.filter(
        (chapter) => chapter.status === true
      );

      inProgressChapters.forEach((chapter) => {
        completedChapters++;
      });
    }
    onChange({
      words: wordsCount,
      chapters: completedChapters,
      questions: questionCount,
    });
  }, [wordsCount, chapterCount, questionCount]);

  useEffect(() => {
    if (allChapters.length > 0) {
      setChapterCount(allChapters.length);
      countQuestions();
    }
  }, [allChapters]);

  useEffect(() => {
    if (allAnswers.length > 0) {
      const modifeiedAnswers = allAnswers.map((answer) => {
        return { userText: answer.userText };
      });
      countWords(modifeiedAnswers);
    }
  }, [allAnswers]);

  return (
    <Box
      sx={{
        color: "#7F886B;",
        bgcolor: "#f4f4f4 !important",
        marginTop: "15px",
        borderRadius: "14px",
        background: "#FFF",
        height: "auto",
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: { md: "space-between", xs: "center" },
        alignItems: { md: "end", sm: "center", xs: "center" },
        pr: "20px",
        gap: "20px",
        flexDirection: { md: "row", sm: "column", xs: "column" },
      }}
      className={styles.trackerbg}
    >
      <Box
        sx={{
          position: "relative",
          width: { lg: "284.458px", md: "300px", sm: "320px", xs: "100%" },
          height: { lg: "240px", md: "215px", xs: "190px" },
          display: "flex",
          justifyContent: "space-around",
          p: "15px 0px",
          ml: "12px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #30422E",
            borderRadius: "50%",
            width: { lg: "135px", sm: "110px", xs: "100px" },
            height: { lg: "135px", sm: "110px", xs: "100px" },
            padding: "4px",
            alignSelf: "start",
            mb: "15px",
            mr: { lg: "-10px", sm: "-40px", xs: "-90px" },
            flexShrink: "0",
          }}
        >
          <Box
            sx={{
              border: "1px dashed #30422E",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "36px", md: "28px", sm: "26px", xs: "22px" },
                fontWeight: 500,
                marginBottom: "-7px",
              }}
            >
              {wordsCount}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "25px", md: "10px", sm: "8px", xs: "7px" },
                fontWeight: 300,
                color: "#7F886B",
              }}
            >
              {t("overView.word")}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid #30422E",
            borderRadius: "50%",
            width: { lg: "99px", sm: "80px", xs: "70px" },
            height: { lg: "99px", sm: "80px", xs: "70px" },
            padding: "3px",
            alignSelf: "end",
            flexShrink: "0",
          }}
        >
          <Box
            sx={{
              border: "1px dashed #30422E",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "26px", md: "20px", sm: "18px", xs: "15px" },
                fontWeight: 500,
                marginBottom: "-7px",
              }}
            >
              {questionCount}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "15px", md: "10px", sm: "8px", xs: "7px" },
                fontWeight: 300,
                color: "#7F886B",
              }}
            >
              {t("overView.question")}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid #30422E",
            borderRadius: "50%",
            width: { lg: "99px", sm: "80px", xs: "70px" },
            height: { lg: "99px", sm: "80px", xs: "70px" },
            padding: "3px",
            alignSelf: "center",
            ml: { lg: "0px", sm: "-40px", xs: "-70px" },
            flexShrink: "0",
          }}
        >
          <Box
            sx={{
              border: "1px dashed #30422E",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "24px", md: "20px", sm: "18px", xs: "15px" },
                fontWeight: 500,
                marginBottom: "-7px",
              }}
            >
              {chapterCount}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "14px", md: "10px", sm: "8px", xs: "7px" },
                fontWeight: 300,
                color: "#7F886B",
              }}
            >
              {t("overView.chapter")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          ml: "0px",
          width: "340px",
        }}
        className={styles.clockContainer}
      >
        <Image
          src={ClockImage}
          alt="ClockImage"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: { xs: "13px" },
            bottom: "25px",
            width: "68px",
            textAlign: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image src={Calander} alt="img" />
            <Box
              sx={{
                position: "absolute",
                top: "20px",
                left: "10px",
                fontSize: { sm: "16px", xs: "12px" },
                fontWeight: 700,
                color: "white",
              }}
            >
              {hoursCount}
              <Typography sx={{ fontSize: "10px" }}>{t("overView.minutes")}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TimeTracker;
