import { Box, Button, FormControlLabel, RadioGroup, Typography } from "@mui/material";
import Image from "next/image";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import backButton from "../../../../src/_assets/svg/back.svg";
import nextButton from "../../../../src/_assets/svg/next.svg";

export default function TabOne({ onClick }) {
  const [selectedValue, setSelectedValue] = useState("MySelf");
  console.log("333344",selectedValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
          For Whom?
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            color: "rgba(78, 81, 109, 0.70)",
          }}
        >
          Who will use lifescript?
        </Typography>
      </Box>
      <Box sx={{ mt: 6 }}>
        <Typography
          sx={{
            fontSize: "33.75px",
            fontWeight: 700,
          }}
        >
          Who will use lifescript?
        </Typography>
        <Box sx={{ mt:3, display: "flex", flexDirection: "column", gap: 2 }}>
          <RadioGroup value={selectedValue} onChange={handleChange}>
            <FormControlLabel
              value="MySelf"
              control={<Radio   sx={{
                '&.Mui-checked .MuiSvgIcon-root': {
                  fill: 'rgba(25, 112, 101, 1)',
                },
              }} />}
              label={
                <Typography sx={{ ml: 2, fontSize: "24px", fontWeight: 400, color: "rgba(0, 0, 0, 0.6)" }}>
                  I am writing my biography
                </Typography>
              }
            />
            <FormControlLabel
              value="BelovedOne"
              control={<Radio    sx={{
                '&.Mui-checked .MuiSvgIcon-root': {
                  fill: 'rgba(25, 112, 101, 1)',
                },
              }} />}
              label={
                <Typography sx={{ ml: 2, fontSize: "24px", fontWeight: 400, color: "rgba(0, 0, 0, 0.6)" }}>
                  I am gifting life story to a loved one
                </Typography>
              }
            />
            <FormControlLabel
              value="SomeOne"
              control={<Radio   sx={{
                '&.Mui-checked .MuiSvgIcon-root': {
                  fill: 'rgba(25, 112, 101, 1)',
                },
              }} />}
              label={
                <Typography sx={{ ml: 2, fontSize: "24px", fontWeight: 400, color: "rgba(0, 0, 0, 0.6)" }}>
                  I am using life story for someone
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
