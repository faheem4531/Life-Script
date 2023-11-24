"use client";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
import { gptChat, uploadImage } from "@/store/slices/chatSlice";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import {
  //ContentState,
  EditorState,
  //convertFromHTML,
  convertToRaw,
} from "draft-js";

import PIcon from "@/_assets/svg/edit-text-title-icon.svg";
import {
  getQuestionbyId,
  saveAnswer,
  updateQuestion,
} from "@/store/slices/chatSlice";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import RichTextViewer from "./response";

import WProofreaderSDK from "@webspellchecker/wproofreader-sdk-js";
// const { WProofreaderSDK } = require("@webspellchecker/wproofreader-sdk-js");

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const RichText = ({ questionId }) => {
  console.log("quest", questionId);

  const router = useRouter();
  const dispatch: any = useDispatch();
  const [gptResponse, setGptResponse] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [toneValue, setToneValue] = useState("Neutral");
  const [questionData, setQuestionData] = useState<any>({});

  const gptTones = [
    "Narrative",
    "Nostalgic",
    "Humorous",
    "Emotional",
    "Inspirational",
    "Neutral",
  ];

  const handleSelectChange = (event) => {
    setToneValue(event.target.value);
  };

  // useEffect(() => {
  //     const htmlString =
  //       '<ul>\
  // <li style="text-align:center;"><strong>Sameer</strong><em> is a good backend developer</em></li>\
  // <li style="text-align:center;">his logic is good</li>\
  // </ul>';
  //     const contentBlocks = convertFromHTML(htmlString);
  //     const contentState = ContentState.createFromBlockArray(
  //       contentBlocks.contentBlocks,
  //       contentBlocks.entityMap
  //     );

  //     setEditorState(EditorState.createWithContent(contentState));

  //     console.log("1111", convertToRaw(contentState));
  //   }, []);

  useEffect(() => {
    console.log(
      "html",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  }, [editorState]);

  useEffect(() => {
    if (questionId) {
      dispatch(getQuestionbyId({ id: questionId }))
        .unwrap()
        .then((res) => setQuestionData(res));
    }
  }, [questionId]);

  useEffect(() => {
    // Configuration
    WProofreaderSDK.configure({
      autoSearch: true,
      lang: "auto",
      serviceId: "Ab3LN4j1whCuJFw",
    });

    // Initialization
    WProofreaderSDK.init({
      container: document.getElementById("draftjs-rich-text-editor"),
    });
  }, []);

  const callchatgpt = () => {
    dispatch(
      gptChat({
        prompt: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        responseTone: toneValue,
        question: questionId,
      })
    ).then((res) => {
      setGptResponse(res.payload);
      setOpenModal(true);
    });
  };

  const saveUserAnswer = () => {
    dispatch(
      saveAnswer({
        questionId: questionData?._id,
        chapterId: questionData?.chapter?._id,
        userTone: toneValue,
        userText: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      })
    ).then(() => toast.success("Answer saved successfully"));
  };

  const handleCompleteAnswer = () => {
    saveUserAnswer();
    dispatch(
      updateQuestion({
        text: questionData?.text,
        id: questionData?._id,
        chapter: questionData?.chapter?._id,
        status: "Completed",
      })
    )
      .unwrap()
      .then(() => {
        router.push(
          `/dashboard/chapters/chapterName?chapterId=${questionData?.chapter?._id}`
        );
      })
      .catch(() => toast.error("Failed to mark as complete"));
  };

  const uploadCallback = (file, callback) => {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();
      reader.onloadend = async () => {
        const form_data = new FormData();
        form_data.append("image", file);
        const res = await dispatch(uploadImage(form_data));

        resolve({ data: { link: res.payload } });
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Box className="rich-editor">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image alt="icon" src={PIcon} />
          <Typography
            sx={{ fontSize: "26px", fontWeight: "600", marginLeft: "20px" }}
          >
            {questionData?.text}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
          <Select
            value={toneValue}
            onChange={handleSelectChange}
            displayEmpty
            sx={{
              width: "170px",
              height: "35px",
              borderRadius: "27px",
              border: "1px solid #197065",
              color: "#197065",
            }}
          >
            {gptTones?.map((tone) => (
              <MenuItem value={tone}>{tone}</MenuItem>
            ))}
          </Select>
          <Button
            onClick={handleCompleteAnswer}
            sx={{
              width: "200px",
              height: "35px",
              borderRadius: "27px",
              border: "1px solid #197065",
              color: "#197065",
              bgcolor: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
          >
            Mark As Complete
          </Button>
          <Button
            onClick={saveUserAnswer}
            sx={{
              width: "85px",
              height: "35px",
              borderRadius: "27px",
              color: "#FFF",
              bgcolor: "#197065",
              "&:hover": {
                backgroundColor: "#197065",
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>

      <Box id="draftjs-rich-text-editor" sx={{ marginTop: "50px" }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          editorStyle={{
            borderRadius: "10px",
            minHeight: "65vh",
            maxHeight: "68vh",
            backgroundColor: "white",
            overflowY: "auto",
            padding: "20px",
          }}
          toolbarStyle={{
            minHeight: "50px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center", // Center-align toolbar items horizontally
            alignItems: "center",
          }}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "link",
              "embedded",
              "colorPicker",
              "emoji",
              "image",
              "history",
            ],
            inline: {
              options: ["bold", "italic", "underline"],
            },
            blockType: {
              options: [
                "Normal",
                "H1",
                "H2",
                "H3",
                "H4",
                "H5",
                "H6",
                "Blockquote",
                "Code",
              ],
            },
            fontSize: {
              options: [
                8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96,
              ],
            },
            fontFamily: {
              options: [
                "Garamond",
                "Georgia",
                "Arial",
                "Times New Roman",
                "Verdana",
                "Merriweather",
              ],
            },
            list: {
              options: ["unordered", "ordered"],
            },
            textAlign: {
              options: ["left", "center", "right"],
            },
            link: {
              showOpenOptionOnHover: true,
              defaultTargetOption: "_self",
              options: ["link"],
            },
            embedded: {
              defaultSize: {
                height: "auto",
                width: "auto",
              },
            },
            image: {
              // urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              previewImage: true,
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
              uploadCallback: uploadCallback,
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: "auto",
                width: "400px",
              },
            },
            history: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ["undo", "redo"],
            },
          }}
        />
      </Box>

      <CustomizationDialog
        open={openModal}
        title="GPT Response"
        handleClose={() => {
          setOpenModal(false);
        }}
        customStyles={{
          backgroundColor: "auto",
          padding: "5px",
          maxWidth: "40vw",
        }}
      >
        <RichTextViewer htmlContent={gptResponse} />
      </CustomizationDialog>
    </Box>
  );
};

export default RichText;
