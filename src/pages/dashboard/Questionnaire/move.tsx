import { Box, Typography } from "@mui/material";
import styles from "./Questionnaire.module.css";

const Questionnaire = () => {
  return (
    <Box className={styles.QuestionnaireMain}>
      <Box className={styles.QuestionnaireSideBar}></Box>
      <Box className={styles.QuestionnaireTabsMain}>
        <Box
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "44px",
              fontWeight: 700,
            }}
          >
            For Whom?
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "rgba(78, 81, 109, 0.70)",
            }}
          >
            Who will use lifescript?
          </Typography>
        </Box>

        <Box></Box>
      </Box>
    </Box>
  );
};

export default Questionnaire;
