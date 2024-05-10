// import styles from "@/styles/Dashboard.module.css";
import BgLoadImage from "@/_assets/svg/bckgrnd-Loading.svg";
import LoadImage from "@/_assets/svg/loading.svg";
import { ReloadingBar } from "@/components/dashboardComponent/LinearProgressBar";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../narrative/Narrative.module.css";
import AnimationLogo from "../../../../_assets/svg/animationLogo.svg"
import Logo from "@/_assets/svg/Frame.svg";

const Loading = ({ progressCompleted, completed }) => {
  const [progress, setProgress] = useState(10);
  const [showCompletion, setShowCompletion] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setShowCompletion(false);
          setTimeout(() => {
            setShowCompletion(false);
          }, 1000);
          return 100;
        } else {
          return prevProgress + 1;
        }
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && progressCompleted) {
      completed();
    }
  }, [progress, progressCompleted]);

  return (
    <Box
      sx={{
        height: "80vh",
        bgcolor: "#FFF9F0",
        color: "#197065",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "34px", fontWeight: 200, mb: '50px', color: "#7f886b" }}>
        {progress < 50 && "Reading Content...."}
        {progress <= 90 && progress >= 50 && "Analyzing Tones..."}
        {progress > 90 && "Finalizing"}
      </Typography>
      <Box className={styles.loadImageTemp}>
        <Image
          // src={BgLoadImage}
          src={AnimationLogo}
          alt="AnimationLogo"
          className={styles.BgloadImage}
          width={322.512}
        />
        <Image alt="image" src={Logo} className={styles.logoImage} />

      </Box>
      <Box sx={{ width: { xs: "90%", sm: "80%", lg: "60%" } }}>
        <ReloadingBar value={progress} />
      </Box>
    </Box>
  );
};

export default Loading;
