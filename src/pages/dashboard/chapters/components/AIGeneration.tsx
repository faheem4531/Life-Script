import { Box, ButtonBase, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type Question = {
  id: number;
  title: string;
};

interface QuestionComponentProps {
  questions: Question[];
  handleNextQuestion: any;
  Proceed: any;
  endQuestion:any;
}

const QuestionComponent = ({
  questions,
  handleNextQuestion,
  Proceed,
  endQuestion,
}: QuestionComponentProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  console.log('88888',currentQuestionIndex, '777',questions?.length);
  const [remainingQuestions, setRemainingQuestions] = useState(0);

  useEffect(() =>{
    questions?.length > 0 && setRemainingQuestions(questions?.length - 1);
  },[questions])

  const handleNext = () => {
    setRemainingQuestions(remainingQuestions - 1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    handleNextQuestion(questions[currentQuestionIndex].id);
  };

  const handleEnd = () => {
    endQuestion(questions[currentQuestionIndex].id)
  }

  return (
    <div>
      <Typography sx={{ fontSize: "30px", mb: "20px", fontWeight: 500 }}>
        AI Generated Question
      </Typography>
      <Box>
      <Box sx={{width: "550px", margin: 'auto'}}>
      <Typography sx={{ fontSize: "22px" }}>
        {questions[currentQuestionIndex]?.title}
      </Typography>
      </Box>
      <Typography sx={{ fontSize: "14px" }}>
        Remaining AI Questions: <span style={{fontWeight: 'bold'}}>{remainingQuestions}</span>
      </Typography>
      <Box sx={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <ButtonBase
          onClick={()=>Proceed(questions[currentQuestionIndex].id)}
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
        <Box>
          <ButtonBase
            onClick={
              questions.length === currentQuestionIndex + 1 ? handleEnd : handleNext
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
            {questions.length === currentQuestionIndex + 1 ? "Close" : "Regenarate"}
          </ButtonBase>
        </Box>
      </Box>
      </Box>
    </div>
  );
};

export default QuestionComponent;
