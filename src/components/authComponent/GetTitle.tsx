import { Box, Button, TextField, Typography } from "@mui/material";
import Arrow from "../../../public/startArrow.png";
import React from "react";
import Image from "next/image";
import BookImage from "../../../public/getTitleBook.svg";
import { useState } from "react";
import styles from "./GetTitle.module.css"

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
          margin: 0,
          padding: 0,
          gap: 0,
          display: "flex",
          justifyContent: "space-around",
          color: "#000"
        }}
      >
        <Box sx={{ marginLeft: "30px" }}>
          <Typography
            sx={{ fontSize: "53px", fontWeight: "400", marginTop: "153px" }}
            className={styles.primaryText}
          >
            Hi{" "}
            <span style={{ fontSize: "60px", fontWeight: "600" }} className={styles.boldText}>Naseer,</span>
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "53px", marginTop: "32px" }}
            className={styles.primaryText}
          >
            What would you like to <br /> call your lifescript?
          </Typography>
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                variant="standard"
                value={text}
                onChange={handleChange}
                sx={{ maxWidth: '540px', minWidth: '120px', marginTop: "30px" }}
                className={styles.primaryText}
                InputProps={{
                  style: { fontSize: '43px' },
                }}
              />
              <Typography sx={{ alignSelf: 'flex-end', fontSize: '30px', color: '#969696' }}>
                {text.length}/{maxLength}
              </Typography>
            </Box>
            <Button sx={{ width: "200px", padding: "14px 0", bgcolor: "#FCE09B", borderRadius: "30px", color: "#186F65", fontWeight: 600, fontSize: "18px" }}>
              Start Writing
            </Button>
          </Box>
        </Box>
        <Box
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
          className={styles.bookDiv}>
          <Image src={BookImage} alt="book image" className={styles.book} />
        </Box>
      </Box>
    </div>
  );
};

export default GetTitle;