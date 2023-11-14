import { gptChat } from "@/store/slices/chatSlice";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Rte = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

const RichTextEditor = () => {
  const [editorValue, setEditorValue] = useState("");
  const dispatch: any = useDispatch();
  console.log("vall", editorValue);

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const callgpt = () => {
    dispatch(gptChat({ prompt: editorValue }));
  };
  return (
    <Box>
      <Rte
        value={editorValue}
        onChange={handleEditorChange}
        className="mantine-RichTextEditor-toolbarInner"
        // placeholder="Write something..."

        styles={{
          toolbarInner: { justifyContent: "" },
        }}
        controls={[
          ["bold", "italic", "underline", "blockquote"],
          ["orderedList", "unorderedList"],
          ["h1", "h2", "h3", "h4", "h5", "h6"],
          ["alignLeft", "alignCenter", "alignRight"],
          ["image"],
        ]}
        style={{
          paddingTop: "0px",
          marginTop: "30px",
          minHeight: "70vh",
          maxHeight: "70vh",
          minWidth: "auto",
          overflowY: "auto",
        }}
      />

      {/* <Box>
        <Button variant="contained" onClick={callgpt}>
          click
        </Button>
      </Box> */}
    </Box>
  );
};

export default RichTextEditor;
