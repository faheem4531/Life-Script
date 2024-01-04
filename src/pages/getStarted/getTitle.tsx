import GreenBlock from "@/_assets/png/getTitle-green-block.png";
import WhiteBlock from "@/_assets/png/getTitle-white-block.png";
import GlobelBtn from "@/components/button/Button";
import { bookTitle } from "@/store/slices/chatSlice";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import BookImage from "../../../public/getTitleBook.svg";
import styles from "./GetTitle.module.css";

const getTitle = () => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { userName } = router.query;
  const [text, setText] = useState("");
  const maxLength = 30; // Set the maximum character count to 20

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  const handleTitle = () => {
    dispatch(bookTitle({ title: text }))
      .unwrap()
      .then(() => {
        toast.success("Book title saved successfully");
        router.push("/dashboard/chapters");
      })
      .catch(() => {
        toast.error("Failed to save book title");
      });
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
        position: "relative",
      }}
    >
      <Box
        sx={{
          marginLeft: { sm: "30px", xs: "0px" },
          padding: { xs: "0 22px", sm: "0" },
        }}
      >
        <Typography
          sx={{
            fontSize: "53px",
            fontWeight: "400",
            marginTop: { sm: "120px" },
          }}
          className={styles.primaryText}
        >
          Hi{" "}
          <span style={{ fontWeight: "600" }} className={styles.boldText}>
            {userName},
          </span>
        </Typography>
        <Typography
          sx={{ fontWeight: "400", fontSize: "53px", marginTop: "32px" }}
          className={styles.primaryText}
        >
          What would you like to <br /> call your lifescript?
        </Typography>
        <Box>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            className={styles.primaryText}
          >
            <TextField
              variant="standard"
              value={text}
              onChange={handleChange}
              sx={{
                maxWidth: "540px",
                minWidth: "120px",
                marginTop: "30px",
              }}
              className={styles.primaryText}
              InputProps={{
                style: { fontSize: "30px" },
              }}
            />
            <Typography
              sx={{
                alignSelf: "flex-start",
                color: "#969696",
                fontSize: {
                  xl: "25px",
                  lg: "22px",
                  md: "20px",
                  sm: "18px",
                  xs: "16px",
                },
                ml: "15px",
              }}
            >
              You can change it at any time before printing.
            </Typography>
          </Box>
          <Box mt="50px">
            <GlobelBtn disabled={!text} onClick={() => handleTitle()} btnText="Start Writing" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ height: "100%", display: "flex", alignItems: "center" }}
        className={styles.bookDiv}
      >
        <Image src={BookImage} alt="book image" className={styles.book} />
      </Box>
      <Image alt="image" src={GreenBlock} className={styles.greenBlock} />
      <Image alt="image" src={WhiteBlock} className={styles.whiteBlock} />
    </Box>
  );
};

export default getTitle;
