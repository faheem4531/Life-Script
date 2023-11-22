import Option from "@/_assets/png/X-menu.png";
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

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        sx={{
          bgcolor: "#F9F9F9",
          width: "100%",
          borderRadius: "8px",
          borderLeft: "11px solid #186F65",
          height: { sm: "70px", xs: "60px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: { sm: "15px", xs: "8px" },
        }}
      >
        <Typography
          sx={{
            marginLeft: { sm: "20px", xs: "10px" },
            color: "rgba(22, 22, 22, 0.90)",
            fontSize: { sm: "22px", xs: "16px" },
            fontWeight: 400,
          }}
        >
          {number}
          {". "}
          {question?.text}
        </Typography>
        {title != "templateView" && (
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => answerClick(question?._id)}
              disabled={question?.status === "Completed"}
              type="submit"
              sx={{
                cursor: "pointer",
                borderRadius: " 0px 8px 8px 0px",
                backgroundColor: "#186F65",
                p: "0px 50px",
                color: "rgba(255, 255, 255, 0.90)",
                width: "105px",
                height: { sm: "70px", xs: "60px" },
                "&:hover": {
                  backgroundColor: "#186F65",
                },
              }}
            >
              {question?.status === "Completed" ? "Completed" : "Edit"}
            </Button>
          </Box>
        )}
      </Box>

      {/* More option :start */}
      {title != "templateView" && (
        <Box
          sx={{
            position: "absolute",
            right: { sm: "-30", xs: "-25px" },
            top: { sm: "18px", xs: "10px" },
          }}
        >
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
      <CustomizationDialog
        open={updateQuestionModal}
        title="Update question"
        handleClose={() => {
          setUpdateQuestionModal(false);
        }}
        customStyles={{ backgroundColor: "auto" }}
      >
        <AddQuestion
          questionData={(question: string) => {
            handleUpdateQuestion(question);
            setUpdateQuestionModal(false);
          }}
          questionText={question?.text}
        />
      </CustomizationDialog>
      <TransitionsDialog
        open={deleteQuestionModal}
        heading="Delete Question"
        description="Are you sure you want to delete this Question"
        cancel={() => setDeleteQuestionModal(false)}
        proceed={handleDeleteQuestion}
      />
    </Box>
  );
}
