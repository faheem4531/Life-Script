import { getChapterbyId, updateChapter } from "@/store/slices/chatSlice";
import { Box, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BookImage from "../../../public/chapterName.svg";
import Check from "../../../public/checkIcon.png";

const AddChapterName = ({ chapterId }: { chapterId: any }) => {
  const [chapterName, setChapterName] = useState("");
  console.log("chapternnn", chapterName);
  const dispatch: any = useDispatch();

  const saveChapterName = () => {
    dispatch(updateChapter({ title: chapterName, id: chapterId }));
  };

  useEffect(() => {
    dispatch(getChapterbyId({ id: chapterId }))
      .unwrap()
      .then((res: any) => {
        if (res) {
          setChapterName(res.title);
        }
      })
      .catch(() => {});
  }, [chapterId]);
  return (
    <Box
      sx={{
        backgroundColor: "#197065",
        color: "#fff",
        borderRadius: "24px",
        padding: "10px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "24px" }}>Enter</Typography>
        <Typography sx={{ fontSize: "44px" }}>Chapter Name</Typography>
        <Box>
          <TextField
            variant="outlined"
            value={chapterName}
            onChange={(e: any) => setChapterName(e.target.value)}
            placeholder="My Adventurous Life"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box sx={{ cursor: "pointer" }}>
                    <Image
                      onClick={saveChapterName}
                      src={Check}
                      alt="check-icon"
                    />
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{
              marginTop: "10px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                backgroundColor: "white",
              },
              width: "390px",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Image height={200} src={BookImage} alt="book image" />
      </Box>
    </Box>
  );
};

export default AddChapterName;
