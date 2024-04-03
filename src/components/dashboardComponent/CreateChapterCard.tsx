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
import { useTranslation } from "react-i18next";
import TransitionsDialog from "../modal/TransitionDialog";

interface ChapterProps {
  addChapterClick?: () => void;
  chapters?: any;
  isPremium?: boolean;
}
export const StartNewChapter = ({
  addChapterClick,
  chapters,
  isPremium,
}: ChapterProps) => {
  const router = useRouter();
  const [buyPremium, setBuyPremium] = useState(false);
  const [newChapter, setNewChapter] = useState(true);
  const [hoverStartNewChapter, setHoverStartNewChapter] = useState(false);
  const [hoverUseTemplate, setHoverUseTemplate] = useState(false);
  const { t } = useTranslation();

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
    if (!isPremium && chapters?.length > 4) {
      setBuyPremium(true);
    } else {
      setBuyPremium(false);
      router.push("/dashboard/templates");
    }
  };

  console.log("chapters", chapters);

  return (
    <Box
      bgcolor={"white"}
      borderRadius={"8px"}
      boxShadow={"4.715px 4.042px 11.519px 0px rgba(0, 0, 0, 0.14)"}
    >
      <Card
        className="container-fontfamily"
        sx={{
          borderRadius: "6.5px",
          height: { sm: "250px", xs: "129px" },
          boxShadow: "none",
        }}
      >
        {newChapter && (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: { sm: "column" },
              alignItems: "center",
              gap: "17px",
              justifyContent: "center",
              border: "1.6px dashed #CDCDCD",
              borderRadius: "4px"
            }}
            onClick={() => setNewChapter(false)}
          >
            <Box
              sx={{
                width: { md: "68.25px", sm: "61.3px", xs: "47.868px" },
                height: { md: "68.25px", sm: "61.3px", xs: "47.868px" },
                cursor: "pointer"
              }}
            >
              <Image
                alt="image"
                src={AddChapterImage}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography
              sx={{
                color: "#3E4F3C",
                fontWeight: 600,
                fontSize: { md: "14px", sm: "13.4px", xs: " 10.34px" },
              }}
            >
              {/* Start new chapter */}
              {t("StartNewChapter.StartNewChapter")}
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
              <Box
                sx={{
                  width: { md: "68.25px", sm: "61.3px", xs: "47.868px" },
                  height: { md: "68.25px", sm: "61.3px", xs: "47.868px" },
                }}
              >
                <Image
                  alt="image"
                  src={
                    hoverStartNewChapter ? AddChapterImage : AddChapterWhite
                  }
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                sx={{
                  color: hoverStartNewChapter ? "#197065" : "#CDCDCD",
                  fontWeight: 600,
                  fontSize: { md: "14px", sm: "13.4", xs: " 10.34px" },
                }}
              >
                Start from Scratch
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
              <Box
                sx={{
                  width: { md: "68.25px", sm: "61.3px", xs: "47.868px" },
                  height: { md: "68.25px", sm: "61.3px", xs: "47.868px" },
                }}
              >
                <Image
                  alt="image"
                  src={hoverUseTemplate ? Template : TemplateWhite}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                sx={{
                  color: hoverUseTemplate ? "#197065" : "#CDCDCD",
                  fontWeight: 600,
                  fontSize: { md: "14px", sm: "13.4", xs: " 10.34px" },
                }}
              >
                {t("StartNewChapter.useTem")}
              </Typography>
            </Box>
          </Box>
        )}
      </Card>
      <TransitionsDialog
        open={buyPremium}
        heading="Buy Premium"
        description="Only 5 chapters can be added in free trial. Buy premium to add more"
        cancel={() => {
          setBuyPremium(false);
        }}
        closeModal={() => {
          setBuyPremium(false);
        }}
        proceed={() => router.push("/dashboard/SubscribePlans")}
      />
    </Box>
  );
};
