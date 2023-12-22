import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Questionnaire.module.css";
import TabOne from "./qaTabOne";
import TabThree from "./qaTabThree";
import TabTwo from "./qaTabTwo";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "@/store/slices/authSlice";

const Questionnaire = () => {
  const dispatch: any = useDispatch();
  const [qaTab, setQaTab] = useState(1);
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    questionAskType: "",
    bookUseFor: "",
    personalizedQuestion: "",
    gender: "",
    martialStatus: "",
    dateOfBirth: "",
  });
  const handleTabOneClick = (val) => {
    setUserData({
      ...userData,
      bookUseFor: val,
    });
    setQaTab(2);
  };
  const handleTabTwoClick = (val) => {
    setUserData({
      ...userData,
      name: val.name,
      gender: val.gender,
      martialStatus: val.maritalStatus,
      dateOfBirth: val.dob,
    });
    setQaTab(3);
  };
  const handleTabThreeClick = (val) => {
    setUserData({
      ...userData,
      questionAskType: val.frequency,
      personalizedQuestion: val.personal,
    });

    dispatch(
      updateUserProfile({
        name: userData?.name,
        questionAskType: val.frequency,
        bookUseFor: userData?.bookUseFor,
        personalizedQuestion: val.personal,
        gender: userData?.gender,
        martialStatus: userData?.martialStatus,
        dateOfBirth: userData?.dateOfBirth.toString().substring(0, 15),
      })
    )
      .unwrap()
      .then(() => {
        const username = localStorage.getItem("username");
        router.push(`/getStarted/getTitle?userName=${username}`);
      });
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className={styles.QuestionnaireMain}>
        <Box className={styles.QuestionnaireSideBar}></Box>
        <Box className={styles.QuestionnaireTabsMain}>
          {qaTab === 1 ? (
            <TabOne onClick={handleTabOneClick} data={userData?.bookUseFor} />
          ) : qaTab === 2 ? (
            <TabTwo
              onClickBack={() => setQaTab(1)}
              onClickNext={handleTabTwoClick}
              data={userData}
            />
          ) : (
            <TabThree
              onClickBack={() => setQaTab(2)}
              onClickNext={handleTabThreeClick}
              data={userData}
            />
          )}
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default Questionnaire;
