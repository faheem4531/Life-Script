import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import BookImage from "../../../public/getTitleBook.svg";
const getTitle = () => {
  const router = useRouter();
  const { userName } = router.query;
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
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat", // Adjust as needed
          width: "100%",
          height: "100vh", // Adjust the height as needed
          overflow: "hidden",
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
            <span style={{ fontSize: "60px", fontWeight: "600" }}>
              {userName},
            </span>
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "53px", marginTop: "32px" }}
          >
            What would you like to <br /> call your lifescript?
          </Typography>
          <Box sx={{ marginTop: "00px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                variant="standard"
                value={text}
                onChange={handleChange}
                sx={{ width: "540px" }}
                InputProps={{
                  style: { fontSize: "43px" },
                }}
              />
              <Typography
                sx={{
                  alignSelf: "flex-end",
                  fontSize: "30px",
                  color: "#969696",
                }}
              >
                {text.length}/{maxLength}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            disabled={!text}
            onClick={() => router.push("/dashboard/chapters")}
            sx={{
              backgroundColor: "#FCE09B",
              borderColor: "#FCE09B",
              borderRadius: "31.5px",
              width: "291px",
              height: "63px",
              color: "#186F65",
            }}
          >
            Start Writing
          </Button>
        </Box>
        {/* <Box sx={{ marginTop: "150px",marginRight:'23px' }}>
          <Image src={BookImage} alt="book image" width={608} height={729} />
        </Box> */}

        <Box
          sx={{
            height: "auto",
            display: { sm: "block", xs: "none" },
            marginTop: "100px",
            marginRight: "100px",
          }}
        >
          <Image
            src={BookImage}
            alt="login Image"
            style={{
              height: "100%",
              maxHeight: "70vh",
              minHeight: "52vh",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default getTitle;
