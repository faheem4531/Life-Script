import BgLoadImage from "@/_assets/svg/bckgrnd-Loading.svg";
import animationLogo from "@/_assets/svg/animationLogo.png";
import Logo from "@/_assets/svg/Frame.svg";
import { ReloadingBar } from "@/components/dashboardComponent/LinearProgressBar";
import { isChapterLoaded } from "@/store/slices/chatSlice";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Loader.module.css";

const Loading = ({ complete }) => {
  const [progress, setProgress] = useState(10);
  const [showCompletion, setShowCompletion] = useState(true);
  const router = useRouter();
  const isLoaded = useSelector(isChapterLoaded);
  const { t } = useTranslation();

  const { chapterId, openai } = router.query;

  useEffect(() => {
    if (complete) {
      setProgress(100);
      setShowCompletion(false);
      return;
    }
    
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setShowCompletion(false);
          setTimeout(() => {
            setShowCompletion(false);
          }, 1000);
          return 99;
        } else {
          if (prevProgress === 99) {
            if (isLoaded !== "loaded") {
              toast.error("PDF generation has failed!please try again");
            }
            return isLoaded === "loaded" ? prevProgress + 0 : prevProgress + 0;
          } else {
            return prevProgress + 5;
          }
        }
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [isLoaded, complete]);

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#FFF9F0",
        color: "#30422E",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToastContainer />
      <Typography sx={{ fontSize: "30px", fontWeight: 300 }}>
        {progress <= 50 && `Reading Content `}
        {progress > 50 && progress !== 100 && "Preparing PDF"}
      </Typography>

      <Box className={styles.loadImageMain} sx={{ bgcolor: "re" }}>
        <Image
          src={BgLoadImage}
          alt="BgLoadImage"
          className={styles.BgloadImage}
        />
        <Image alt="image" src={animationLogo} className={styles.loadImage} />
        <Image alt="image" src={Logo} className={styles.logoImage} />
      </Box>
      <Box sx={{ width: { xs: "90%", sm: "80%", lg: "60%" } }}>
        <ReloadingBar value={progress} />
      </Box>
      {progress === 100 && !showCompletion && isLoaded === "loaded" &&
        <Button
          onClick={() =>
            router.push(
              `/dashboard/narrative?chapterId=${chapterId}&openai=${openai}`
            )}
          sx={{
            width: "300px",
            color: "#fff",
            height: "50px",
            margin: { sm: "60px 0 50px", xs: "30px 0 20px" },
            bgcolor: "#e1693b",
            "&:hover": {
              backgroundColor: "#b5522d",
            },
          }}>
          {t("narrativeLoading.viewCh")}
        </Button>
      }
    </Box>
  );
};

export default Loading;
