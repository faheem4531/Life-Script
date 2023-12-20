import { Box, ButtonBase, Typography } from "@mui/material";
import { useState } from "react";

type Question = {
  id: number;
  text: string;
};

interface QuestionComponentProps {
  questions: Question[];
  handleNextQuestion: () => void;
  Procced: () => void;
}

const QuestionComponent = ({
  questions,
  handleNextQuestion,
  Procced,
}: QuestionComponentProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    handleNextQuestion();
  };

  return (
    <div>
      <Typography sx={{ fontSize: "30px", mb: "20px", fontWeight: 500 }}>
        AI Generated Question
      </Typography>
      <Typography sx={{ fontSize: "22px" }}>
        {questions[currentQuestionIndex].text}
      </Typography>
      <Typography sx={{ fontSize: "14px" }}>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Typography>
      <Box sx={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <ButtonBase
          onClick={Procced}
          sx={{
            width: "234px",
            height: "50px",
            borderRadius: "78px",
            color: "#197065",
            fontSize: "18px",
            bgcolor: "#fff",
            border: "1px solid #197065",
            margin: "40px 0 30px",
            "&:hover": {
              color: "##197065",
              bgcolor: "#fff",
            },
          }}
        >
          Add
        </ButtonBase>
        <Box
          sx={{
            opacity:
              questions.length === currentQuestionIndex + 1 ? "0.6" : "1",
          }}
        >
          <ButtonBase
            onClick={
              questions.length === currentQuestionIndex + 1 ? null : handleNext
            }
            sx={{
              width: "200px",
              height: "50px",
              borderRadius: "78px",
              color: "#fff",
              fontSize: "18px",
              bgcolor: "#197065",
              margin: "40px 0 30px",
              "&:hover": {
                color: "#fff",
                bgcolor: "#197065",
              },
            }}
          >
            Regenarate
          </ButtonBase>
        </Box>
      </Box>
    </div>
  );
};

export default QuestionComponent;
