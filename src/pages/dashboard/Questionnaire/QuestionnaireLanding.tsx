import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import styles from "./Questionnaire.module.css";
import TabOne from "./qaTabOne";
import TabThree from "./qaTabThree";
import TabTwo from "./qaTabTwo";

const Questionnaire = () => {
  const [qaTab, setQaTab] = useState(1);
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
