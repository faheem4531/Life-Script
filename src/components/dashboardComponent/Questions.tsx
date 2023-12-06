"use client";
import Option from "@/_assets/png/X-menu.png";
import ModalImage from "@/_assets/png/view-template-modal.png";
import Completed from "@/_assets/svg/completed-icon.svg";
import EditGreen from "@/_assets/svg/edit-icon-green.svg";
import AddQuestion from "@/pages/events/addQuestion";
import { deleteQuestion, updateQuestion } from "@/store/slices/chatSlice";
import { Box, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CustomizationDialog from "../modal/CustomizationDialog";
import TransitionsDialog from "../modal/TransitionDialog";

const options = ["Delete", "Edit"];
const ITEM_HEIGHT = 48;

interface QuestionsProps {
  question?: any;
  number?: number;
  answerClick?: (chapterName: string) => void; // Define the callback type here
  questionChanged?: () => void;
  title?: string;
}

export default function Questions({
  question,
  number,
  title,
  questionChanged,
  answerClick,
}: QuestionsProps) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteQuestionModal, setDeleteQuestionModal] = useState(false);
  const [questionId, setQuestionId] = useState("");
  const [updateQuestionModal, setUpdateQuestionModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOption = (option) => {
    if (option === "Delete") {
      setDeleteQuestionModal(true);
      setAnchorEl(null);
    } else if (option === "Edit") {
      setUpdateQuestionModal(true);
      setAnchorEl(null);
    } else {
      setAnchorEl(null);
    }
  };
  const handleDeleteQuestion = () => {
    dispatch(deleteQuestion({ id: questionId }))
      .unwrap()
      .then(() => {
        toast.success("Question deleted successfully");
        // dispatch(getChapters());
        questionChanged();
      });
    setDeleteQuestionModal(false);
  };

  const handleUpdateQuestion = (text) => {
    dispatch(
      updateQuestion({
        text: text,
        id: question?._id,
        chapter: question?.chapter,
        status: "Progress",
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Question updated successfully");
        // dispatch(getChapters());
        questionChanged();
      })
      .catch(() => toast.error("Failed to update question"));
  };

  const handleSeeMoreClick = (event) => {
    event.preventDefault(); // Prevent default behavior (navigation)
    event.stopPropagation();
    // Expand the text
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          mt: { sm: "15px", xs: "8px" },
        }}
      >
        <Box
          onClick={() => answerClick(question?._id)}
          sx={{
            cursor: "pointer",
            bgcolor: "#F9F9F9",
            borderRadius: "8px",
            borderLeft: "11px solid #186F65",
            height: expanded ? "auto" : { sm: "60px", xs: "60px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            overflowX: "hidden",
            // whiteSpace: expanded ? "normal" : "nowrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                marginLeft: { sm: "20px", xs: "10px" },
                color: "rgba(22, 22, 22, 0.90)",
                fontSize: { sm: "22px", xs: "16px" },
                fontWeight: 400,
                width: "58vw",
                textOverflow: expanded ? "clip" : "ellipsis",
                overflow: "hidden",
                whiteSpace: expanded ? "wrap" : "nowrap",
                padding: expanded && "10px 0px",
              }}
            >
              {number}
              {". "}
              {question?.text}
            </Typography>
            <Button
              onClick={handleSeeMoreClick}
              sx={{
                fontSize: "8px",
                color: "#197065",
              }}
            >
              {question?.text.length < 86 ? "" : expanded ? "Less" : "See All"}
            </Button>
          </Box>

          {title != "templateView" && (
            <Box sx={{ textAlign: "center", width: "max-content" }}>
              <Button
                // variant="contained"
                // disabled={question?.status === "Completed"}
                type="submit"
                sx={{
                  borderRadius: " 0px 8px 8px 0px",
                  backgroundColor: "#white",
                  color: "rgba(255, 255, 255, 0.90)",
                  height: { sm: "60px", xs: "60px" },
                  p: "0px",
                  "&:hover": {
                    backgroundColor: "#white",
                  },
                  width: "90px",
                }}
              >
                {question.status === "Completed" && (
                  <Box
                    sx={{
                      flexDirection: "column",
                      rowGap: "5px",
                      color: "#197065",
                      height: "100%",
                      fontSize: "10px",
                      px: "16px",
                      py: "7px",
                    }}
                  >
                    <Box>
                      <Image alt="icon" src={Completed} />
                    </Box>
                    <Box>{"Completed"}</Box>
                  </Box>
                )}
                {question.status !== "Completed" && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "5px",
                      color: "#197065",
                      fontSize: "10px",
                      px: "16px",
                      py: "7px",
                    }}
                  >
                    <Image alt="icon" src={EditGreen} /> {"Edit"}
                  </Box>
                )}
              </Button>
            </Box>
          )}
        </Box>

        {/* More option :start */}
        {title != "templateView" && (
          <Box>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Image alt="options" src={Option} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "10ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={() => {
                    setQuestionId(question?._id);
                    handleClickOption(option);
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Box>

      <CustomizationDialog
        open={updateQuestionModal}
        title=""
        handleClose={() => {
          setUpdateQuestionModal(false);
        }}
        customStyles={{ backgroundColor: "auto", textAlign: "center" }}
      >
        <Box>
          <Image src={ModalImage} width={91} height={60} alt="logo" />
        </Box>
        <Typography sx={{ fontSize: "30px" }}>Update Question</Typography>
        <AddQuestion
          questionData={(question: string) => {
            handleUpdateQuestion(question);
            setUpdateQuestionModal(false);
          }}
          questionText={question?.text}
          btnText={"Update Question"}
        />
      </CustomizationDialog>
      <TransitionsDialog
        open={deleteQuestionModal}
        heading="Delete"
        description="Are you sure you want to delete this question"
        cancel={() => setDeleteQuestionModal(false)}
        proceed={handleDeleteQuestion}
        closeModal={() => setDeleteQuestionModal(false)}
      />
    </Box>
  );
}
