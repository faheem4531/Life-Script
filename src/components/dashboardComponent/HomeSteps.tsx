import Step1 from "@/_assets/svg/step1.svg";
import Step2 from "@/_assets/svg/step2.svg";
import Step3 from "@/_assets/svg/step3.svg";
import Step4 from "@/_assets/svg/step4.svg";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./HomeSteps.module.css";

const HomeSteps = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#197065",
        color: "#fff",
        borderRadius: { sm: "24px", xs: "5px" },
        padding: { sm: "20px 45px", xs: "20px 40px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          padding: "35px 0",
        }}
        className={styles.stepContainer}
      >
        <Typography
          sx={{
            fontSize: "14px",
            position: "absolute",
            top: "0px",
            left: { sm: "-30", xs: "-20px" },
            width: "200px",
          }}
          className={styles.typo}
        >
          1. Begin chapter
        </Typography>
        <Image alt="icon" src={Step1} className={styles.logo} />
      </Box>
      <Divider
        sx={{
          height: "1px",
          width: "23%",
          bgcolor: "#fff",
          margin: "0 -10px",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          padding: "35px 0",
        }}
        className={styles.stepContainer}
      >
        <Typography
          sx={{
            fontSize: "14px",
            position: "absolute",
            bottom: "0px",
            left: "-30px",
            width: "200px",
          }}
          className={styles.typo}
        >
          2. Answer questions
        </Typography>
        <Image alt="icon" src={Step2} className={styles.logo} />
      </Box>
      <Divider
        sx={{
          height: "1px",
          width: "23%",
          bgcolor: "#fff",
          margin: "0 -10px",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          padding: "35px 0",
        }}
        className={styles.stepContainer}
      >
        <Typography
          sx={{
            fontSize: "14px",
            position: "absolute",
            top: "0px",
            left: { sm: "-80", xs: "-45px" },
            width: "250px",
          }}
          className={styles.typo}
        >
          3. Select stories tone and fuse
        </Typography>
        <Image alt="icon" src={Step3} className={styles.logo} />
      </Box>
      <Divider
        sx={{
          height: "1px",
          width: "23%",
          bgcolor: "#fff",
          margin: "0 -10px",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          padding: "35px 0",
        }}
        className={styles.stepContainer}
      >
        <Typography
          sx={{
            fontSize: "14px",
            position: "absolute",
            bottom: "0px",
            left: "-40px",
            width: "200px",
          }}
          className={styles.typo}
        >
          4. Preview and Finish
        </Typography>
        <Image alt="icon" src={Step4} className={styles.logo} />
      </Box>
    </Box>
  );
};

export default HomeSteps;
