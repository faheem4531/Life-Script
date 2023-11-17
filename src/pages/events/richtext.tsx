import CustomizationDialog from "@/components/modal/CustomizationDialog";
import { gptChat } from "@/store/slices/chatSlice";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import { EditorState, convertToRaw } from "draft-js";

import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import RichTextViewer from "./response";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const RichText = ({ chapterName }) => {
  const dispatch: any = useDispatch();
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [gptResponse, setGptResponse] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  console.log("gptresp", gptResponse);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [toneValue, setToneValue] = useState("Neutral");

  const gptTones = ["Funny", "Angry", "Sad", "Happy", "Neutral"];

  const handleSelectChange = (event) => {
    setToneValue(event.target.value);
  };

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
      })
    ).then((res) => {
      setGptResponse(res.payload);
      setOpenModal(true);
    });
  };

  return (
    <Box className="rich-editor">
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Box
            sx={{
              borderRadius: "10px",
              width: "100%",
              backgroundColor: "white",
              maxHeight: "70px",
              overflowY: "auto",
              p: 1,
              display: "flex",
              justifyContent: "center",
              height: "70px",
            }}
          >
            <Typography sx={{ fontSize: "38px", fontWeight: "500" }}>
              {chapterName}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Select
              value={toneValue}
              onChange={handleSelectChange}
              displayEmpty
              sx={{
                width: "100%",
                height: "70px",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            >
              {gptTones?.map((tone) => (
                <MenuItem value={tone}>{tone}</MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Button
              variant="contained"
              onClick={callchatgpt}
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#197065",
                minWidth: "100%",
                borderRadius: "10px",
                height: "70px",
              }}
            >
              call gpt
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 1 }}>
        <Editor
          defaultEditorState={editorState}
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
              "emoji",
              "image",
              "colorPicker",
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
