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

  console.log(hoursCount, "dataaaaaaaa");


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
      .then((res) => console.log(res, "ressssss"));
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
              <Tooltip title={data?.words < 500 ? "Bronze badge will be opened after writing 500 words" : "Bronze"}>
                <Image
                  alt="tag"
                  src={data?.words < 499 ? Grey : Word8}
                  className={styles.profileAchivements}
                />
              </Tooltip>
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <Tooltip title={data?.chapters < 5 ? "Silver badge will be opened after completing 5 chapters" : "Silver"}>
                <Image
                  alt="tag"
                  src={data?.chapters < 5 ? Grey : Chapter8}
                  className={styles.profileAchivements}
                />
              </Tooltip>

            </Box>
          </Box>

          <Box>
            <Box sx={{ cursor: "pointer" }}>
              <Tooltip title={data?.questions < 100 ? "Gold badge will be opened after adding 100 questions" : "Gold"}>
                <Image
                  alt="tag"
                  src={data?.questions < 100 ? Grey : Query8}
                  className={styles.profileAchivements}
                />
              </Tooltip>
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <Tooltip title={data?.words < 5000 ? "Platinum badge will be opened after writing 5000 words" : "Platinum"}>
                <Image
                  alt="tag"
                  src={hoursCount ? Grey : Time8}
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
