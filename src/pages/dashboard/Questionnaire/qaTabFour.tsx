import GlobelBtn from "@/components/button/Button";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import QaTabBars from "./qaTabBars";
import {
  getTemplatesMain,
  selectTemplates,
  selectedChapters,
} from "@/store/slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { TooltipMsg } from "@/components/dashboardComponent/Tooltip";
import { useTranslation } from "react-i18next";

export default function TabFour({ onClickBack, onClickNext, data, setQaTab }) {
  const dispatch: any = useDispatch();
  const templates = useSelector(selectTemplates);
  const [checkedIds, setCheckedIds] = useState([]);
  const [checkedIdsAll, setCheckedIdsAll] = useState([]);
  const [markAllChecked, setMarkAllChecked] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const { t } = useTranslation();

  const router = useRouter();

  const handleCheckboxChange = (id, isChecked) => {
    if (id === "mark_all") {
      setMarkAllChecked(isChecked);
    } else {
      if (isChecked && id !== "mark_all") {
        setCheckedIds([...checkedIds, id]);
      } else {
        setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
      }
    }
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      const jwt = require("jsonwebtoken");
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwt.decode(token);
        console.log("decodedToke", decodedToken);
        const accessRole = decodedToken?.accessRole;

        if (accessRole !== "FreePlan") {
          setIsPremium(true);
        }
      }
    }
  }, []);

  function handleNext() {
    if (markAllChecked) {
      dispatch(
        selectedChapters(
          markAllChecked ? templates.map((template) => template._id) : []
        )
      );
    } else {
      dispatch(selectedChapters(checkedIds));
    }
    setQaTab(3);
  }

  useEffect(() => {
    if (data?.LanguagePreferences) {
      dispatch(getTemplatesMain(data));
    }
  }, [data.LanguagePreferences]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90%",
      }}
    >
      <Box
        sx={{
          color: "#30422E",
          alignItems: "center",
          gap: "8px",
          mt: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "44px", sm: "36px", xs: "26px" },
            fontWeight: 700,
          }}
        >
          {t("onboarding.step2.step")}
        </Typography>
      </Box>
      <QaTabBars tabProp={2} />
      <Box sx={{ mt: { sm: 10, xs: 5 } }}>
        <Typography
          sx={{
            fontSize: { md: "33px", sm: "25px", xs: "20px" },
            fontWeight: 700,
            color: "#30422E",
          }}
        >
          {t("onboarding.step2.question")}
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: { sm: 2, xs: 0 },
            height: "45vh",
            overflowY: "scroll",
            overflowX: "hidden",
            direction: "rtl", // This flips the scrollbar to the left
            '& > *': {
              direction: "ltr", // This ensures the content is still left-to-right
            },
            '&::-webkit-scrollbar': {
              display: 'block !important',
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#888',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#555',
            },
          }}
        >
          {templates.map((item, index) => (
            <Chapters
              key={index + 1}
              title={item.title}
              id={item._id}
              markAllChecked={markAllChecked}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: { xs: "end", sm: "space-between" },
        }}
        flex={1}
      >
        <Box sx={{ margin: { sm: "auto 0 -30px", xs: "0 0 10px" } }}>
          {/* <Chapters
            title="Mark All"
            id="mark_all"
            handleCheckboxChange={handleCheckboxChange}
            markAllChecked={markAllChecked}
          /> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
            gap: 2,
            position: "relative",
          }}
        >
          {(markAllChecked || checkedIds.length > 3) && (
            <TooltipMsg
              width="240px"
              bottom="80px"
              left=""
              right="40px"
              top=""
              title="you cannot select more than 3 chapters"
            />
          )}
          <GlobelBtn
            bgColor="#ffffff"
            border="1px solid #E1683B"
            borderRadius="4px"
            color="#E1683B"
            btnText={t("onboarding.step2.buttonText.back")}
            onClick={onClickBack}
            image={backArrow}
          />

          <GlobelBtn
            disabled={markAllChecked || checkedIds.length > 3}
            borderRadius="4px"
            bgColor="#E1683B"
            color="white"
            btnText={t("onboarding.step2.buttonText.next")}
            onClick={handleNext}
            image2={NextArrow}
          />
        </Box>
      </Box>
    </Box>
  );
}

interface ChaptersProps {
  title: string;
  id: string;
  markAllChecked: boolean;
  handleCheckboxChange: (id: string, isChecked: boolean) => void;
}

function Chapters({
  title,
  id,
  handleCheckboxChange,
  markAllChecked,
}: ChaptersProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    handleCheckboxChange(id, !isChecked); // Pass the id and checked state to the parent component
  };

  const handleMarkAllChange = () => {
    setIsChecked(!markAllChecked); // Invert the checked state
    handleCheckboxChange(id, !markAllChecked); // Pass the id and checked state to the parent component
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", ml: "20px" }}>
      {title === "Mark All" ? (
        <FormControlLabel
          control={
            <Checkbox
              checked={markAllChecked}
              onChange={handleMarkAllChange}
              style={{ color: "#30422E", marginRight: "7px" }}
            />
          }
          label={
            <Typography
              sx={{
                color: "#30422E",
                fontSize: { sm: "24px", xs: "16px" },
                lineHeight: "24px",
              }}
            >
              {title}
            </Typography>
          }
        />
      ) : (
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={false}
              style={{ color: "#30422E", marginRight: "7px" }}
              checked={isChecked || markAllChecked}
              onChange={handleChange}
            />
          }
          label={
            <Typography
              sx={{
                color: "#30422E",
                fontSize: { sm: "24px", xs: "16px" },
                lineHeight: "24px",
              }}
            >
              {title}
            </Typography>
          }
        />
      )}
    </Box>
  );
}
