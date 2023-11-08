"use client";
import { EditorState, convertToRaw } from "draft-js";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { Editor } from "react-draft-wysiwyg";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then((mod) => mod.Editor);
  },
  { ssr: false }
);

const customStyles = {
  editor: {
    height: "100px",
    border: "2px solid black",
  },
};

export default function RichTextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const updateTextDescription = async (state: any) => {
    await setEditorState(state);

    const data = convertToRaw(editorState.getCurrentContent());
  };

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={updateTextDescription}
        toolbar={{
          controls: ["inline", "list", "textAlign", "link", "history", "image"],
        }}
      />
    </>
  );
}
