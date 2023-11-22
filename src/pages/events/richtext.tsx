import CustomizationDialog from "@/components/modal/CustomizationDialog";
import { gptChat } from "@/store/slices/chatSlice";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";

import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import RichTextViewer from "./response";
import PIcon from "@/_assets/svg/edit-text-title-icon.svg"
import Image from "next/image";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const RichText = ({ questionText }) => {
  const dispatch: any = useDispatch();
  console.log("questionText333", questionText);
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [gptResponse, setGptResponse] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  console.log("gptresp", gptResponse);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [toneValue, setToneValue] = useState("Neutral");

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

  useEffect(() => {
    const htmlString =
      '<ul>\
<li style="text-align:center;"><strong>Sameer</strong><em> is a good backend developer</em></li>\
<li style="text-align:center;">his logic is good</li>\
</ul>';
    const contentBlocks = convertFromHTML(htmlString);
    const contentState = ContentState.createFromBlockArray(
      contentBlocks.contentBlocks,
      contentBlocks.entityMap
    );

    setEditorState(EditorState.createWithContent(contentState));

    console.log("1111", convertToRaw(contentState));
  }, []);

  useEffect(() => {
    console.log(
      "html",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  }, [editorState]);

  const callchatgpt = () => {
    dispatch(
      gptChat({
        prompt: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        responseTone: toneValue,
        question: questionText,
      })
    ).then((res) => {
      setGptResponse(res.payload);
      setOpenModal(true);
    });
  };

  return (
    <Box className="rich-editor">
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image alt="icon" src={PIcon} />
          <Typography sx={{ fontSize: "26px", fontWeight: "600", marginLeft: "20px" }}>
            {questionText}
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
            // onClick={}
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
            // onClick={}
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

      <Box sx={{ marginTop: "50px" }}>
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
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              previewImage: true,
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
              uploadCallback: (file) => {
                return new Promise((resolve, reject) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = () => {
                    const dataURL = reader.result;
                    const truncatedDataURL = dataURL; // set the maximum length of the truncated string
                    resolve({
                      data: { link: dataURL },
                      link: { url: truncatedDataURL },
                    });
                  };
                  reader.onerror = (error) => {
                    reject(error);
                  };
                });
              },
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
