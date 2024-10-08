import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Question = {
  id: number;
  title: string;
};

interface QuestionComponentProps {
  questions: Question[];
  handleNextQuestion: any;
  Proceed: any;
  endQuestion: any;
}

const QuestionComponent = ({
  questions,
  handleNextQuestion,
  Proceed,
  endQuestion,
}: QuestionComponentProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [remainingQuestions, setRemainingQuestions] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    questions?.length > 0 && setRemainingQuestions(questions?.length - 1);
  }, [questions]);

  const handleNext = () => {
    if (remainingQuestions > 0) {
      setRemainingQuestions(remainingQuestions - 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      handleNextQuestion(questions[currentQuestionIndex].id);
    }
  };

  const handleEnd = () => {
    endQuestion(questions[currentQuestionIndex].id);
  };

  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: { md: "24px", sm: "22px", xs: "18px" },
          mb: "20px",
          fontWeight: 500,
        }}
      >
        {t("ChName.SugQues")}
      </Typography>
      <Box>
        <Box sx={{ margin: "auto" }}>
          <Typography sx={{ fontSize: { md: "18px", sm: "16px", xs: "14px" }, maxWidth: "700px" }}>
            {questions && questions[currentQuestionIndex]?.title}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "14px" }} >
          {t("ChName.SugQuesRemain")}
          <span style={{ fontWeight: "bold" }}>{remainingQuestions}</span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            mt: "20px",
            flexWrap: "wrap",
          }}
        >
          <Box flex={1} sx={{ maxWidth: "350px" }} >
            <GlobelBtn
              btnText={
                questions?.length === currentQuestionIndex + 1
                  ? `${t("ChName.SugQuesCloseBtn")}`
                  : `${t("ChName.SugQuesSkipBtn")}`
              }
              bgColor="#fff"
              color="#30422e"
              borderRadius="23px"
              width="100%"
              onClick={
                questions?.length === currentQuestionIndex + 1
                  ? handleEnd
                  : handleNext
              }
            />
          </Box>
          <Box flex={1} sx={{ maxWidth: "350px" }}>
            <GlobelBtn
              btnText={`${t("ChName.SugQuesAddBtn")}`}
              bgColor="#e1693b"
              color="#fff"
              borderRadius="23px"
              width="100%"
              onClick={() => Proceed(questions[currentQuestionIndex].id)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionComponent;
