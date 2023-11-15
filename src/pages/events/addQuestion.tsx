import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function AddQuestion({ questionData }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    questionData(question);
  };
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
            "&:hover": {
              backgroundColor: "#186F65",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
