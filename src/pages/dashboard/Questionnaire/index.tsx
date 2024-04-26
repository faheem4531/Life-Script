import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Profile from "../../../_assets/svg/profile.svg";
import styles from "./Questionnaire.module.css";
import Arrow from "@/_assets/svg/getStarted-aero.svg";

const QuestionnaireLanding = () => {
  const router = useRouter();
  const { userName } = router.query;
  const name = localStorage.getItem("username");

  return (
    <Box className={styles.QuestionnaireLandingMain} onClick={() => {
      router.push(
        `/dashboard/Questionnaire/QuestionnaireLanding`
      );
    }}>
      <Box
        sx={{
          width: { sm: "70%", xs: "90%" },
          margin: "auto",
          textAlign: "center",
        }}
      >

        <Box>
          <Typography
            sx={{
              fontSize: { md: "24px", sm: "18px", xs: "14px" },
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.60)",
              mt: "20px",
            }}
          >
            Hi {name ? name : userName}, Thank you for embarking on this journey!
          </Typography>

          <Typography
            sx={{
              fontSize: { md: "24px", sm: "18px", xs: "14px" },
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.60)",
              mt: "20px",
            }}
          >
            We are going to need your help answering a quick questionnaire that
            would personalize your experience. Thank you for
            answering!
          </Typography>
        </Box>

      </Box>
      <Image src={Arrow} alt='next' className={styles.nextAero} />
    </Box>
  );
};

export default QuestionnaireLanding;
