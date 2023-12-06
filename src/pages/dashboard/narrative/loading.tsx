// import styles from "@/styles/Dashboard.module.css";
import BgLoadImage from "@/_assets/svg/bckgrnd-Loading.svg";
import LoadImage from "@/_assets/svg/loading.svg";
import { ReloadingBar } from "@/components/dashboardComponent/LinearProgressBar";
import { isChapterLoaded } from "@/store/slices/chatSlice";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Narrative.module.css";

const Loading = () => {
  const [progress, setProgress] = useState(10);
  const [showCompletion, setShowCompletion] = useState(true);
  const router = useRouter();
  const isLoaded = useSelector(isChapterLoaded);
  const { chapterId, openai } = router.query;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setShowCompletion(false);
          setTimeout(() => {
            setShowCompletion(false);
          }, 10000);
          return 100;
        } else {
          if (prevProgress === 99) {
            console.log("3333", isLoaded);
            return isLoaded === "loaded" ? prevProgress + 1 : prevProgress + 0;
          } else {
            return prevProgress + 1;
          }
        }
      });
    }, 140);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#FFF9F0",
        color: "#197065",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "39px", fontWeight: 200 }}>
        {progress < 50 && "READING CONTENT ...."}
        {progress >= 50 && progress != 100 && "ANALYZING TONES ...."}
        {progress === 100 && showCompletion && "All done!"}
        {progress === 100 && !showCompletion && isLoaded === "loaded" && (
          <a
            style={{ borderBottom: "3px solid #197065" }}
            onClick={() =>
              router.push(
                `/dashboard/narrative?chapterId=${chapterId}&openai=${openai}`
              )
            }
          >
            View chapters <ArrowForwardIcon />
          </a>
        )}
      </Typography>
      <Box className={styles.loadImageMain}>
        <Image
          src={BgLoadImage}
          alt="BgLoadImage"
          className={styles.BgloadImage}
        />
        <Image alt="image" src={LoadImage} className={styles.loadImage} />
      </Box>
      <Box sx={{ width: { xs: "90%", sm: "80%", lg: "60%" } }}>
        <ReloadingBar value={progress} />
      </Box>
    </Box>
  );
};

export default Loading;
