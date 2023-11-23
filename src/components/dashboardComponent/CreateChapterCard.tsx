"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AddChapterImage from "@/_assets/svg/add-chapter-green.svg"
import AddChapterWhite from "@/_assets/svg/add-chapter-white.svg"
import TemplateWhite from "@/_assets/svg/template-white.svg"
import { useState } from "react";

export const StartNewChapter = () => {

  const [newChapter, setNewChapter] = useState(true)
  return (
    <Card
      className="container-fontfamily"
      sx={{
        borderRadius: "6.5px",
        height: "280px",
        padding: "11px"
      }}
    >
      {newChapter && <Box sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "17px",
        justifyContent: "center",
        border: " 1.6px dashed #CDCDCD",
        borderRadius: "4px"
      }}
        onClick={() => setNewChapter(false)}>

        <Image alt="image" src={AddChapterImage} />
        <Typography sx={{ color: "#197065", fontWeight: 600, fontSize: "14px" }}>
          Start new chapter
        </Typography>
      </Box>}
      {!newChapter && <Box sx={{ height: "100%" }}>
        <Box sx={{
          height: "49%",
          display: "flex",
          alignItems: "center",
          columnGap: "17px",
          justifyContent: "center",
          border: " 1.6px dashed #CDCDCD",
          borderRadius: "4px",
          marginBottom: "2%"
        }}
          onClick={() => { }}>

          <Image alt="image" src={AddChapterWhite} />
          <Typography sx={{ color: "#CDCDCD", fontWeight: 600, fontSize: "14px" }}>
            Start new chapter
          </Typography>
        </Box>
        <Box sx={{
          height: "49%",
          display: "flex",
          alignItems: "center",
          columnGap: "17px",
          justifyContent: "center",
          border: " 1.6px dashed #CDCDCD",
          borderRadius: "4px"
        }}
          onClick={() => { }}>

          <Image alt="image" src={TemplateWhite} />
          <Typography sx={{ color: "#CDCDCD", fontWeight: 600, fontSize: "14px" }}>
            Use template
          </Typography>
        </Box>

      </Box>}
    </Card>
  );
}


