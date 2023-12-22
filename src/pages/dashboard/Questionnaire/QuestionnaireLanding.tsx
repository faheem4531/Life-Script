import { Box, Typography } from "@mui/material";
import styles from "./Questionnaire.module.css";
import TabOne from "./qaTabOne";
import TabTwo from "./qaTabTwo";
import TabThree from "./qaTabThree";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

const Questionnaire = () => {
  const [qaTab, setQaTab] = useState(2);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className={styles.QuestionnaireMain}>
        <Box className={styles.QuestionnaireSideBar}></Box>
        <Box className={styles.QuestionnaireTabsMain}>
          {qaTab === 1 ? (
            <TabOne onClick={() => {}} />
          ) : qaTab === 2 ? (
            <TabTwo onClick={(val) => {}} />
          ) : (
            <TabThree onClick={(val) => {}} />
          )}
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default Questionnaire;
