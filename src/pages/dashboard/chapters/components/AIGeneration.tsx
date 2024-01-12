import GlobelBtn from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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
        Suggested Question
      </Typography>
      <Box>
        <Box sx={{ margin: "auto" }}>
          <Typography sx={{ fontSize: { md: "18px", sm: "16px", xs: "14px" } }}>
            {questions && questions[currentQuestionIndex]?.title}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "14px" }}>
          Remaining Questions:{" "}
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
          <Box flex={1}>
            <GlobelBtn
              btnText={"Add"}
              bgColor="#fff"
              borderRadius="23px"
              color="#197065"
              width="100%"
              border="1px solid #197065"
              onClick={() => Proceed(questions[currentQuestionIndex].id)}
            />
          </Box>
          <Box flex={1}>
            <GlobelBtn
              btnText={
                questions?.length === currentQuestionIndex + 1
                  ? "Close"
                  : "Skip"
              }
              bgColor="#197065"
              borderRadius="23px"
              color="#fff"
              width="100%"
              border="1px solid #197065"
              onClick={
                questions?.length === currentQuestionIndex + 1
                  ? handleEnd
                  : handleNext
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionComponent;
