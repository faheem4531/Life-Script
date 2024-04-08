import GlobelBtn from "@/components/button/Button";
import { Box, Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import QaTabBars from "./qaTabBars";
import { getTemplates, selectTemplates } from "@/store/slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TabFour({ onClickBack, onClickNext, data, setQaTab }) {
  // const [personalQuestion, setPersonalQuestion] =
  //   useState("ChronologicalOrder");
  // const [questionFrequency, setQuestionFrequency] = useState("ONEDAY");

  // useEffect(() => {
  //   if (data?.personalizedQuestion) {
  //     setPersonalQuestion(data.personalizedQuestion);
  //     setQuestionFrequency(data.questionAskType);
  //   }
  // }, [data]);

  // const handlePersonalInfo = (event) => {
  //   setPersonalQuestion(event.target.value);
  // };
  // const handleQuestionFrequency = (event) => {
  //   setQuestionFrequency(event.target.value);
  // };
  const dispatch: any = useDispatch();
  const templates = useSelector(selectTemplates);
  const [checkedIds, setCheckedIds] = useState([]);
  const [checkedIdsAll, setCheckedIdsAll] = useState([]);
  const [markAllChecked, setMarkAllChecked] = useState(false);

  const handleCheckboxChange = (id, isChecked) => {
    if (isChecked && id !== 'mark_all') {
      setCheckedIds([...checkedIds, id]);
    } else {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    }

    if (id === 'mark_all') {
      setMarkAllChecked(isChecked);

      if (markAllChecked) {
        setCheckedIdsAll(markAllChecked ? templates.map((template) => template._id) : []);
      }
      else {
        setCheckedIdsAll([])
      }
      console.log(checkedIdsAll, "markAllChecked");
    }
  };


  console.log(checkedIds, "checkedIds");

  useEffect(() => {
    dispatch(getTemplates());
  }, []);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90%",
      }}>
      <Box
        sx={{
          color: "#30422E",
          alignItems: "center",
          gap: "8px",
          mt: "20px"
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "44px", sm: "36px", xs: "26px" },
            fontWeight: 700,
          }}
        >
          Step 4 of 4
        </Typography>
      </Box>
      <QaTabBars tabProp={4} />
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontSize: { md: "33px", sm: "25px", xs: "20px" },
            fontWeight: 700,
            color: "#30422E",
          }}
        >
          What are some of the chapters you&apos;d like to have in your book?
        </Typography>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2, height: "45vh", overflowY: "scroll" }}>
          {templates.map((item, index) => <Chapters
            key={index + 1}
            title={item.title}
            id={item._id}
            markAllChecked={markAllChecked}
            handleCheckboxChange={handleCheckboxChange}
          />)}

        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ margin: "auto 0 -30px" }}>
          <Chapters
            title='Mark All'
            id="mark_all"
            handleCheckboxChange={handleCheckboxChange}
            markAllChecked={markAllChecked} />
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
            gap: 2,
          }}
        >
          <GlobelBtn
            bgColor="#ffffff"
            border='1px solid #E1683B'
            borderRadius="4px"
            color="#E1683B"
            btnText="Back"
            onClick={onClickBack}
            image={backArrow}
          />

          <GlobelBtn
            borderRadius="4px"
            bgColor="#E1683B"
            color="white"
            btnText="Take me in"
            // onClick={() =>
            // onClickNext({
            //   personal: personalQuestion,
            //   frequency: questionFrequency,
            // })
            // }
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

function Chapters({ title, id, handleCheckboxChange, markAllChecked }: ChaptersProps) {
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
    <Box sx={{ display: "flex", alignItems: "center" }}>

      {title === "Mark All" ? (
        <Checkbox
          defaultChecked={false}
          checked={markAllChecked}
          style={{ color: "#30422E", marginRight: "7px" }}
          onChange={handleMarkAllChange}
        />
      ) : (
        <Checkbox
          defaultChecked={false}
          style={{ color: "#30422E", marginRight: "7px" }}
          checked={isChecked || markAllChecked}
          onChange={handleChange}
        />
      )}
      <Typography sx={{ color: "#30422E", fontSize: "24px", lineHeight: "24px" }}>
        {title}
      </Typography>
    </Box>
  )
}
