import { Box, Button, FormControlLabel, RadioGroup, Typography } from "@mui/material";
import Image from "next/image";
import backButton from "../../../../src/_assets/svg/back.svg";
import Radio from "@mui/material/Radio";
import nextButton from "../../../../src/_assets/svg/next.svg"
import { useState } from "react";

export default function TabThree({onClick}) {
    const [personalQuestion, setPersonalQuestion] = useState("ChronologicalOrder");
    const [questionFrequency, setQuestionFrequency] = useState("ONEDAY");
    console.log("4444441",personalQuestion, "444442",questionFrequency);
  
    const handlePersonalInfo = (event) => {
      setPersonalQuestion(event.target.value);
    };
    const handleQuestionFrequency = (event) => {
        setQuestionFrequency(event.target.value);
      };
  return (
    <>
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
          Details
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            color: "rgba(78, 81, 109, 0.70)",
          }}
        >
          Details for personalized questions
        </Typography>
      </Box>
      <Box sx={{ mt: 6 }}>
        <Typography
          sx={{
            fontSize: "33.75px",
            fontWeight: 700,
          }}
        >
          Details for personalized questions
        </Typography>
        <Box sx={{ mt:3, display: "flex", flexDirection: "column", gap: 2 }}>
          <RadioGroup value={personalQuestion} onChange={handlePersonalInfo}>
            <FormControlLabel
              value="ChronologicalOrder"
              control={<Radio   sx={{
                '&.Mui-checked .MuiSvgIcon-root': {
                  fill: 'rgba(25, 112, 101, 1)',
                },
              }} />}
              label={
                <Typography sx={{ ml: 2, fontSize: "24px", fontWeight: 400, color: "rgba(0, 0, 0, 0.6)" }}>
                  Chronological order (starting from early childhood till current age)
                </Typography>
              }
            />
            <FormControlLabel
              value="RandomOrder"
              control={<Radio    sx={{
                '&.Mui-checked .MuiSvgIcon-root': {
                  fill: 'rgba(25, 112, 101, 1)',
                },
              }} />}
              label={
                <Typography sx={{ ml: 2, fontSize: "24px", fontWeight: 400, color: "rgba(0, 0, 0, 0.6)" }}>
                  Random order
                </Typography>
              }
            />
          </RadioGroup>
        </Box>
      </Box>
      <Box sx={{ mt: 6 }}>
        <Typography
          sx={{
            fontSize: "33.75px",
            fontWeight: 700,
          }}
        >
          What should be the frequency of the questions?
        </Typography>
        <Box sx={{ mt:3, display: "flex", flexDirection: "column", gap: 2 }}>
          <RadioGroup value={questionFrequency} onChange={handleQuestionFrequency}>
            <FormControlLabel
              value="ONEDAY"
              control={<Radio   sx={{
                '&.Mui-checked .MuiSvgIcon-root': {
                  fill: 'rgba(25, 112, 101, 1)',
                },
              }} />}
              label={
                <Typography sx={{ ml: 2, fontSize: "24px", fontWeight: 400, color: "rgba(0, 0, 0, 0.6)" }}>
                  Once in a day
                </Typography>
              }
            />
            <FormControlLabel
              value="TWODAYS"
              control={<Radio    sx={{
                '&.Mui-checked .MuiSvgIcon-root': {
                  fill: 'rgba(25, 112, 101, 1)',
                },
              }} />}
              label={
                <Typography sx={{ ml: 2, fontSize: "24px", fontWeight: 400, color: "rgba(0, 0, 0, 0.6)" }}>
                  Once in 2 days
                </Typography>
              }
            />
            <FormControlLabel
              value="FIVEDAYS"
              control={<Radio    sx={{
                '&.Mui-checked .MuiSvgIcon-root': {
                  fill: 'rgba(25, 112, 101, 1)',
                },
              }} />}
              label={
                <Typography sx={{ ml: 2, fontSize: "24px", fontWeight: 400, color: "rgba(0, 0, 0, 0.6)" }}>
                  Once in 5 days
                </Typography>
              }
            />
            <FormControlLabel
              value="SEVENDAYS"
              control={<Radio    sx={{
                '&.Mui-checked .MuiSvgIcon-root': {
                  fill: 'rgba(25, 112, 101, 1)',
                },
              }} />}
              label={
                <Typography sx={{ ml: 2, fontSize: "24px", fontWeight: 400, color: "rgba(0, 0, 0, 0.6)" }}>
                  Once in a week
                </Typography>
              }
            />
          </RadioGroup>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "80px",
          right: "120px",
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Button onClick={onClick}>
        <Image src={backButton} alt="Next" />
        </Button>
        <Button><Image src={nextButton} alt="Next" /></Button>
      </Box>
    </>
  );
}
