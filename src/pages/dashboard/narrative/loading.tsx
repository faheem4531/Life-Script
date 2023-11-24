// import styles from "@/styles/Dashboard.module.css";
import { useEffect, useState } from "react";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ReloadingBar } from "@/components/dashboardComponent/LinearProgressBar";
import LoadImage from "@/_assets/png/reloading.png"
import styles from "./Narrative.module.css"
import { useRouter } from "next/router";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Loading = () => {
  const [progress, setProgress] = useState(10);
  const [showCompletion, setShowCompletion] = useState(true);
  const router = useRouter();
  const currentRoute = router.pathname;

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
          return prevProgress + 10;
        }
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <Box sx={{
      height: "100vh",
      bgcolor: "#FFF9F0",
      color: "#197065",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <Typography sx={{ fontSize: "39px", fontWeight: 200 }}>
        {progress < 50 && "READING CONTENT ...."}
        {progress >= 50 && progress != 100 && "ANALYZING TONES ...."}
        {progress === 100 && showCompletion && "All done!"}
        {progress === 100 && !showCompletion && (
          <a style={{ borderBottom: "3px solid #197065" }}
            onClick={() => router.push("/dashboard/narrative")}
          >View chapters <ArrowForwardIcon /></a>
        )}
      </Typography>


      <Image alt="image" src={LoadImage} className={styles.loadImage} />
      <Box sx={{ width: "60%" }}>
        <ReloadingBar value={progress} />
      </Box>
    </Box>
  );
};

export default Loading;


