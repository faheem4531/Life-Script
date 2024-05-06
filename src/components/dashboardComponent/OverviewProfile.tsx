import { Box, Tooltip, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./Custom.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getChapters, getHours, selectAllChapters } from "@/store/slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, selectUser } from "@/store/slices/authSlice";

import Grey from "@/_assets/svg/Silver Token.svg";
import Word8 from "@/_assets/png/achievements/word-8.png"
import Word7 from "@/_assets/png/achievements/word-7.png"
import Word6 from "@/_assets/png/achievements/word-6.png"
import Word5 from "@/_assets/png/achievements/word-5.png"
import Word4 from "@/_assets/png/achievements/word-4.png"
import Word3 from "@/_assets/png/achievements/word-3.png"
import Word2 from "@/_assets/png/achievements/word-2.png"
import Word1 from "@/_assets/png/achievements/word-1.png"
import Chapter8 from "@/_assets/png/achievements/chapter-8.png"
import Chapter7 from "@/_assets/png/achievements/chapter-7.png"
import Chapter6 from "@/_assets/png/achievements/chapter-6.png"
import Chapter5 from "@/_assets/png/achievements/chapter-5.png"
import Chapter4 from "@/_assets/png/achievements/chapter-4.png"
import Chapter3 from "@/_assets/png/achievements/chapter-3.png"
import Chapter2 from "@/_assets/png/achievements/chapter-2.png"
import Chapter1 from "@/_assets/png/achievements/chapter-1.png"
import Query8 from "@/_assets/png/achievements/query-8.png"
import Query7 from "@/_assets/png/achievements/query-7.png"
import Query6 from "@/_assets/png/achievements/query-6.png"
import Query5 from "@/_assets/png/achievements/query-5.png"
import Query4 from "@/_assets/png/achievements/query-4.png"
import Query3 from "@/_assets/png/achievements/query-3.png"
import Query2 from "@/_assets/png/achievements/query-2.png"
import Query1 from "@/_assets/png/achievements/query-1.png"
import Time8 from "@/_assets/png/achievements/time-8.png"
import Time7 from "@/_assets/png/achievements/time-7.png"
import Time6 from "@/_assets/png/achievements/time-6.png"
import Time5 from "@/_assets/png/achievements/time-5.png"
import Time4 from "@/_assets/png/achievements/time-4.png"
import Time3 from "@/_assets/png/achievements/time-3.png"
import Time2 from "@/_assets/png/achievements/time-2.png"
import Time1 from "@/_assets/png/achievements/time-1.png"




const Profile = ({ data }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch: any = useDispatch();
  const allChapters = useSelector(selectAllChapters);
  const userData = useSelector(selectUser);
  const [userImage, setUserImage] = useState("");
  const [progressChapters, setProgressChapters] = useState([]);
  const [userName, setUserName] = useState("");
  const [hoursCount, setHoursCount] = useState("");


  function calculateCompletionPercentage(array) {
    if (array?.length === 0) {
      return 0;
    }

    const completedCount = array?.filter(
      (item) => item.status === "Completed"
    ).length;
    // Calculate the percentage
    const percentage = (completedCount / array?.length) * 100;

    return percentage;
  }

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
    const name = localStorage.getItem("username");
    const firstName = name ? name.split(' ')[0] : ''; // Get the part before the first space
    setUserName(firstName);
    dispatch(getChapters());
    dispatch(getUserProfile());
    dispatch(getHours())
      .unwrap()
      .then((res) => setHoursCount(formatTime(Number(res))));
  }, []);

  useEffect(() => {
    if (allChapters.length > 0) {
      const inProgressChapters = allChapters.filter(
        (chapter) =>
          chapter.status !== true && chapter.compilingStatus === false
      );
      setProgressChapters(inProgressChapters);
    }
  }, [allChapters]);

  useEffect(() => {
    if (userData) {
      setUserImage(userData?.profileImage);
    }
  }, [userData]);



  const wordCount = data?.words;
  const questionsCount = data?.questions
  const chaptersCount = data?.chapters
  const timeCount = hoursCount


  const getWordsBadgeAndTooltip = (wordCount) => {
    let WordbadgeImage, WordtooltipText;

    if (wordCount < 1000) {
      WordbadgeImage = Grey;
      WordtooltipText = 'Word Wizard will be opened after writing at least 1000 words';
    } else if (wordCount >= 1000 && wordCount < 3000) {
      WordbadgeImage = Word1;
      WordtooltipText = '  1000 words written';
    } else if (wordCount >= 3000 && wordCount < 5000) {
      WordbadgeImage = Word2;
      WordtooltipText = '  3000 words written';
    } else if (wordCount >= 5000 && wordCount < 10000) {
      WordbadgeImage = Word3;
      WordtooltipText = '  5000 words written';
    } else if (wordCount >= 10000 && wordCount < 20000) {
      WordbadgeImage = Word4;
      WordtooltipText = '  10000 words written';
    } else if (wordCount >= 20000 && wordCount < 30000) {
      WordbadgeImage = Word5;
      WordtooltipText = '  20000 words written';
    } else if (wordCount >= 30000 && wordCount < 40000) {
      WordbadgeImage = Word6;
      WordtooltipText = '  30000 words written';
    } else if (wordCount >= 40000 && wordCount < 50000) {
      WordbadgeImage = Word7;
      WordtooltipText = '  40000 words written';
    } else if (wordCount >= 50000) {
      WordbadgeImage = Word8;
      WordtooltipText = 'Congratulations!   50000 words written';
    }

    return { WordbadgeImage, WordtooltipText };
  };

  const getQsBadgeAndTooltip = (questionsCount) => {
    let QsbadgeImage, QstooltipText;

    if (questionsCount < 5) {
      QsbadgeImage = Grey;
      QstooltipText = 'Query Master will be opened after writing at least 5 Questions';
    } else if (questionsCount >= 5 && questionsCount < 10) {
      QsbadgeImage = Query1;
      QstooltipText = '  5 questions answered';
    } else if (questionsCount >= 10 && questionsCount < 15) {
      QsbadgeImage = Query2;
      QstooltipText = '  10 questions answered';
    } else if (questionsCount >= 15 && questionsCount < 20) {
      QsbadgeImage = Query3;
      QstooltipText = '  15 questions answered';
    } else if (questionsCount >= 20 && questionsCount < 30) {
      QsbadgeImage = Query4;
      QstooltipText = '  20 questions answered';
    } else if (questionsCount >= 30 && questionsCount < 50) {
      QsbadgeImage = Query5;
      QstooltipText = '  30 questions answered';
    } else if (questionsCount >= 50 && questionsCount < 70) {
      QsbadgeImage = Query6;
      QstooltipText = '  50 questions answered';
    } else if (questionsCount >= 70 && questionsCount < 100) {
      QsbadgeImage = Query7;
      QstooltipText = '  70 questions answered';
    } else if (questionsCount >= 100) {
      QsbadgeImage = Query8;
      QstooltipText = ' 100 questions answered';
    }

    return { QsbadgeImage, QstooltipText };
  };

  const getChaptersBadgeAndTooltip = (chaptersCount) => {
    let ChapterbadgeImage, ChaptertooltipText;

    if (chaptersCount == 0) {
      ChapterbadgeImage = Grey;
      ChaptertooltipText = 'Chapter Champ will be opened after completing at least 1 chapter';
    } else if (chaptersCount >= 1 && chaptersCount < 3) {
      ChapterbadgeImage = Chapter1;
      ChaptertooltipText = '  1 chapter completed';
    } else if (chaptersCount >= 3 && chaptersCount < 5) {
      ChapterbadgeImage = Chapter2;
      ChaptertooltipText = '  3 chapters completed';
    } else if (chaptersCount >= 5 && chaptersCount < 7) {
      ChapterbadgeImage = Chapter3;
      ChaptertooltipText = '  5 chapters completed';
    } else if (chaptersCount >= 7 && chaptersCount < 10) {
      ChapterbadgeImage = Chapter4;
      ChaptertooltipText = '  7 chapters completed';
    } else if (chaptersCount >= 10 && chaptersCount < 15) {
      ChapterbadgeImage = Chapter5;
      ChaptertooltipText = '  10 chapters completed';
    } else if (chaptersCount >= 15 && chaptersCount < 20) {
      ChapterbadgeImage = Chapter6;
      ChaptertooltipText = '  15 chapters completed';
    } else if (chaptersCount >= 20 && chaptersCount < 25) {
      ChapterbadgeImage = Chapter7;
      ChaptertooltipText = '  20 chapters completed';
    } else if (chaptersCount >= 25) {
      ChapterbadgeImage = Chapter8;
      ChaptertooltipText = ' 25 chapters completed';
    }

    return { ChapterbadgeImage, ChaptertooltipText };
  };

  const getTimeBadgeAndTooltip = (timeCount) => {
    let timebadgeImage, timetooltipText;

    if (timeCount.includes('m')) {
      timebadgeImage = Grey;
      timetooltipText = 'Time Tracker will be opened after writing for at least 1 hour';
    } else if (timeCount.includes('h')) {
      const hours = parseInt(timeCount);
      if (hours >= 1 && hours <= 4) {
        timebadgeImage = Time1;
        timetooltipText = '1 hour of writing';
      } else if (hours >= 5 && hours <= 9) {
        timebadgeImage = Time2;
        timetooltipText = '5 hours of writing';
      } else if (hours >= 10 && hours <= 19) {
        timebadgeImage = Time3;
        timetooltipText = '10 hours of writing';
      } else if (hours >= 20 && hours <= 29) {
        timebadgeImage = Time4;
        timetooltipText = '20 hours of writing';
      } else if (hours >= 30 && hours <= 49) {
        timebadgeImage = Time5;
        timetooltipText = '30 hours of writing';
      } else if (hours >= 50 && hours <= 69) {
        timebadgeImage = Time6;
        timetooltipText = '50 hours of writing';
      } else if (hours >= 70 && hours <= 99) {
        timebadgeImage = Time7;
        timetooltipText = '70 hours of writing';
      } else if (hours >= 100) {
        timebadgeImage = Time8;
        timetooltipText = '100 hours of writing';
      }
    }

    return { timebadgeImage, timetooltipText };
  };

  const { WordbadgeImage, WordtooltipText } = getWordsBadgeAndTooltip(wordCount);
  const { QsbadgeImage, QstooltipText } = getQsBadgeAndTooltip(questionsCount);
  const { ChapterbadgeImage, ChaptertooltipText } = getChaptersBadgeAndTooltip(chaptersCount);
  const { timebadgeImage, timetooltipText } = getTimeBadgeAndTooltip(timeCount);

  return (
    <Box
      sx={{
        bgcolor: "#F3ECDA",
        maxWidth: { xl: "335px", lg: "300px", xs: "100%" },
        width: "100%",
        borderRadius: "4px",
        padding: { xs: "32px 28px 44px" },
      }}
    >
      <Box
        sx={{
          maxWidth: {
            lg: "326.25px",
            sm: "70%",
            xs: "100%",
          },
          margin: "auto",
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
          {t("overView.achivement")}
        </Typography>


        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "30px 0 40px",
            columnGap: { xl: "20px", lg: "15px" },
            rowGap: "15px"
          }}
        >
          <Box>
            <Box sx={{ cursor: "pointer" }}>
              <Tooltip title={WordtooltipText}>
                <Image
                  alt="tag"
                  src={WordbadgeImage}
                  className={styles.profileAchivements}
                />
              </Tooltip>
            </Box>
            <Box sx={{ cursor: "pointer", mt: "20px" }}>
              <Tooltip title={QstooltipText}>
                <Image
                  alt="tag"
                  src={QsbadgeImage}
                  className={styles.profileAchivements}
                />
              </Tooltip>
            </Box>
          </Box>

          <Box>
            <Box sx={{ cursor: "pointer" }}>
              <Tooltip title={ChaptertooltipText}>
                <Image
                  alt="tag"
                  src={ChapterbadgeImage}
                  className={styles.profileAchivements}
                />
              </Tooltip>


            </Box>
            <Box sx={{ cursor: "pointer", mt: "20px" }}>
              <Tooltip title={timetooltipText}>
                <Image
                  alt="tag"
                  src={timebadgeImage}
                  className={styles.profileAchivements}
                />
              </Tooltip>
            </Box>
          </Box>
        </Box>



        <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
          {t("overView.RecentCh")}
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          {progressChapters?.slice(0, 5).map((chapter) => (
            <RecentChapters
              key={chapter?._id}
              title={chapter?.title}
              id={chapter?._id}
              percentage={calculateCompletionPercentage(chapter?.questions)}
            />
          ))}
        </Box>
        <Box onClick={() => router.push("/dashboard/chapters")}>
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: "12px",
              color: "#30422E",
              marginTop: "22px",
              textAlign: "center",
            }}
          >
            {progressChapters?.length > 3 ? t("overView.viewMore") : "Add More"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

export const RecentChapters = ({ title, percentage, id }) => {
  const router = useRouter();
  return (
    <Box
      onClick={() =>
        router.push(`/dashboard/chapters/chapterName?chapterId=${id}`)
      }
      sx={{
        cursor: "pointer",
        bgcolor: "#F4F4F4",
        borderRadius: "4px",
        height: "40px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 11px 8px 25px",
        marginBlock: "11px",
      }}
    >
      <Typography sx={{ fontSize: "10px" }}>{title}</Typography>
      <CircularWithValueLabel percentage={percentage} />
    </Box>
  );
};

{
  /* // Progress Bar code */
}
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", width: "24px" }}>
      <CircularProgress sx={{ color: "#E1683B" }} variant="determinate" {...props} />
      <Box
        sx={{
          top: 2,
          left: -15,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="#E1683B"
          sx={{ fontSize: "6px" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function CircularWithValueLabel({ percentage }) {
  return <CircularProgressWithLabel value={percentage} />;
}
