import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function AddChapter({ chapterData, data, btnText = "Submit" }) {
  const [chapter, setChapter] = useState("");
  useEffect(() => {
    data && setChapter(data);
  }, [data]);

  const handleSubmit = () => {
    chapterData(chapter);
  };
  return (
    <Box sx={{ margin: "10px" }}>
      <Box>
        <TextField
          variant="outlined"
          placeholder="Add Chapter"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          sx={{
            marginTop: "10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              backgroundColor: "white",
            },
            width: "400px",
          }}
        />
      </Box>
      <Box sx={{ justifyContent: "center", textAlign: "center" }}>
        <Button
          variant="contained"
          disabled={!chapter}
          onClick={(event: any) => handleSubmit()}
          type="submit"
          sx={{
            borderRadius: "48px",
            backgroundColor: "#186F65",
            color: "white",
            width: "200px",
            marginTop: "50px",
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
