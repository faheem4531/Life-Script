import { Box } from "@mui/material";
import { EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const MyEditor = () => {
  const isMounted = useRef(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  //htmlValue={draftToHtml(convertToRaw(editorState.getCurrentContent()))} //use for api call
  useEffect(() => {
    console.log(
      "html",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  }, [editorState]);

  return (
    <Box sx={{ marginTop: 1 }}>
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
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
            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
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
        editorStyle={{
          borderRadius: "10px",
          height: "70vh",
          backgroundColor: "white",
          overflowY: "auto",
          padding: "20px",
        }}
        toolbarStyle={{ height: "50px", borderRadius: "10px" }}
      />
    </Box>
  );
};

export default MyEditor;
