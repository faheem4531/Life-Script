import { Box, Button, TextField, Typography } from "@mui/material";
import Arrow from "../../../public/startArrow.png";
import React from "react";
import Image from "next/image";
import BookImage from "../../../public/getTitleBook.svg";
import { useState } from "react";
import styles from "./GetTitle.module.css"
import GreenBlock from "@/_assets/png/getTitle-green-block.png"
import WhiteBlock from "@/_assets/png/getTitle-white-block.png"

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
    <Box
      sx={{
        backgroundImage: { sm: 'url("/GetTitle.svg")' },
        bgcolor: { xs: "#FFF9F0" },
        borderTop: { xs: "55px solid #197065", sm: "none" },
        borderBottom: { xs: "55px solid #197065", sm: "none" },
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        gap: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#000",
        position: "relative"
      }}
    >

      <Box sx={{ marginLeft: { sm: "30px", xs: "0px" }, padding: { xs: "0 22px", sm: "0" } }}>
        <Typography
          sx={{ fontSize: "53px", fontWeight: "400", marginTop: { sm: "120px" } }}
          className={styles.primaryText}
        >
          Hi{" "}
          <span style={{ fontWeight: "600" }} className={styles.boldText}>Naseer,</span>
        </Typography>
        <Typography
          sx={{ fontWeight: "400", fontSize: "53px", marginTop: "32px" }}
          className={styles.primaryText}
        >
          What would you like to <br /> call your lifescript?
        </Typography>
        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }} className={styles.primaryText}>
            <TextField
              variant="standard"
              value={text}
              onChange={handleChange}
              sx={{
                maxWidth: '540px', minWidth: '120px', marginTop: "30px",
              }}
              className={styles.primaryText}
              InputProps={{
                style: { fontSize: '30px' },
              }}
            />
            <Typography sx={{ alignSelf: 'flex-end', color: '#969696', fontSize: { md: "30px", sm: "25px", xs: "20px" } }} >
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
      <Image
        alt="image"
        src={GreenBlock}
        className={styles.greenBlock}
      />
      <Image
        alt="image"
        src={WhiteBlock}
        className={styles.whiteBlock}
      />
    </Box>
  );
};

export default GetTitle;