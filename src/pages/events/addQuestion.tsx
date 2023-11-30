import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface AddQuestionProps {
  questionData?: (question: string) => void; // Assuming the return type is void, modify as needed
  questionText?: string;
  btnText: string
}
export default function AddQuestion({
  questionData,
  questionText,
  btnText,
}: AddQuestionProps) {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    questionData(question);
  };

  useEffect(() => {
    setQuestion(questionText);
  }, [questionText]);
  return (
    <Box sx={{ margin: "10px" }}>
      <Box>
        <TextField
          variant="outlined"
          placeholder="Add Question"
          name="email"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{
            marginTop: "10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              backgroundColor: "white",
            },
            width: { sm: "400px", xs: "250px" },
          }}
        />
      </Box>
      <Box sx={{ justifyContent: "center", textAlign: "center" }}>
        <Button
          variant="contained"
          disabled={!question}
          onClick={(event: any) => handleSubmit()}
          type="submit"
          sx={{
            borderRadius: "48px",
            backgroundColor: "#186F65",
            color: "white",
            width: "200px",
            marginTop: { sm: "50px", xs: "20px" },
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#186F65",
            },
          }}
        >
          {btnText}
        </Button>
      </Box>
    </Box>
  );
}
