import { Box, TextField, Typography } from "@mui/material";
import Arrow from "../../../public/startArrow.png";
import React from "react";
import Image from "next/image";
import BookImage from "../../../public/getTitleBook.svg";
import { useState } from "react";
const GetTitle = () => {
  const [text, setText] = useState("");
  const maxLength = 20; // Set the maximum character count to 20

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };
  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'url("/GetTitle.svg")',
          backgroundSize: "cover", // Adjust as needed
          backgroundPosition: "center center", // Adjust as needed
          backgroundRepeat: "no-repeat", // Adjust as needed
          width: "100%",
          height: "100vh", // Adjust the height as needed
          // overflow: "hidden",
          margin: 0,
          padding: 0,
          gap: 0,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "53px", fontWeight: "400", marginTop: "153px" }}
          >
            Hi{" "}
            <span style={{ fontSize: "60px", fontWeight: "600" }}>Naseer,</span>
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "53px", marginTop: "32px" }}
          >
            What would you like to <br /> call your lifescript?
          </Typography>
          <Box sx={{ marginTop: "150px" }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <TextField
    variant="standard"
    value={text}
    onChange={handleChange}
    sx={{ maxWidth: '540px' }}
    InputProps={{
      style: { fontSize: '43px' },
    }}
  />
  <Typography sx={{ alignSelf: 'flex-end', fontSize:'30px',color:'#969696' }}>
    {text.length}/{maxLength}
  </Typography>
</Box>

          </Box>
        </Box>
        <Box sx={{ marginTop: "150px",marginRight:'23px' }}>
          <Image src={BookImage} alt="book image" width={608} height={729} />
        </Box>
      </Box>
    </div>
  );
};

export default GetTitle;