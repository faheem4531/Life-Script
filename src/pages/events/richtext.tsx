import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";

const Rte = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

const RichTextEditor = () => {
  const [editorValue, setEditorValue] = useState("");
  console.log("vall", editorValue);

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  return (
    <Box sx={{ minWidth: "50vh" }}>
      <Rte
        value={editorValue}
        onChange={handleEditorChange}
        // placeholder="Write something..."
        controls={[
          ["bold", "italic", "underline"],
          ["orderedList", "unorderedList"],
          ["h1", "h2", "h3", "h4", "h5", "h6"],
          ["alignLeft", "alignCenter", "alignRight"],
          ["image"],
        ]}
        style={{
          paddingTop: "5px",
          marginTop: "30px",
          minHeight: "80vh",
          minWidth: "100vh",
          overflowY: "auto",
        }}
      />
    </Box>
  );
};

export default RichTextEditor;
