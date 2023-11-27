"use client";

import AddChapterImage from "@/_assets/svg/add-chapter-green.svg";
import AddChapterWhite from "@/_assets/svg/add-chapter-white.svg";
import TemplateWhite from "@/_assets/svg/template-white.svg";
import Template from "@/_assets/svg/template.svg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface ChapterProps {
  addChapterClick?: () => void;
}
export const StartNewChapter = ({ addChapterClick }: ChapterProps) => {
  const router = useRouter();
  const [newChapter, setNewChapter] = useState(true);
  const [hoverStartNewChapter, setHoverStartNewChapter] = useState(false);
  const [hoverUseTemplate, setHoverUseTemplate] = useState(false);

  const handleHoverStartNewChapter = () => {
    setHoverStartNewChapter(true);
  };

  const handleLeaveStartNewChapter = () => {
    setHoverStartNewChapter(false);
  };

  const handleHoverUseTemplate = () => {
    setHoverUseTemplate(true);
  };

  const handleLeaveUseTemplate = () => {
    setHoverUseTemplate(false);
  };

  const handleTemplateClick = () => {
    router.push("//dashboard/templates");
  };
  return (
    <Card
    className="container-fontfamily"
    sx={{
      borderRadius: "6.5px",
      height: "280px",
      padding: "11px",
    }}
  >
    {newChapter && (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "17px",
          justifyContent: "center",
          border: "1.6px dashed #CDCDCD",
          borderRadius: "4px",
        }}
        onClick={() => setNewChapter(false)}
      >
        <Image alt="image" src={AddChapterImage} />
        <Typography
          sx={{ color: "#197065", fontWeight: 600, fontSize: "14px" }}
        >
          Start new chapter
        </Typography>
      </Box>
    )}
    {!newChapter && (
      <Box sx={{ height: "100%" }}>
        <Box
          sx={{
            height: "49%",
            display: "flex",
            alignItems: "center",
            columnGap: "17px",
            justifyContent: "center",
            border: "1.6px dashed #CDCDCD",
            borderRadius: "4px",
            marginBottom: "2%",
            cursor: "pointer",
            "&:hover": {
              borderColor: "#197065",
              borderStyle: "dashed",
              color: "#197065",
            },
          }}
          onMouseEnter={handleHoverStartNewChapter}
          onMouseLeave={handleLeaveStartNewChapter}
          onClick={addChapterClick}
        >
          <Image
            alt="image"
            src={hoverStartNewChapter ? AddChapterImage : AddChapterWhite}
          />
          <Typography
            sx={{
              color: hoverStartNewChapter ? "#197065" : "#CDCDCD",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            Start new chapter
          </Typography>
        </Box>

        <Box
          sx={{
            height: "49%",
            display: "flex",
            alignItems: "center",
            columnGap: "17px",
            justifyContent: "center",
            border: "1.6px dashed #CDCDCD",
            borderRadius: "4px",
            cursor: "pointer",
            "&:hover": {
              borderColor: "#197065",
              borderStyle: "dashed",
              color: "#197065",
            },
          }}
          onMouseEnter={handleHoverUseTemplate}
          onMouseLeave={handleLeaveUseTemplate}
          onClick={handleTemplateClick}
        >
          <Image
            alt="image"
            src={hoverUseTemplate ? Template : TemplateWhite}
          />
          <Typography
            sx={{
              color: hoverUseTemplate ? "#197065" : "#CDCDCD",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            Use template
          </Typography>
        </Box>
      </Box>
    )}
  </Card>
  );
};
