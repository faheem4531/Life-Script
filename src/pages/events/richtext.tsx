import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Rte = dynamic(() => import("@mantine/rte"), {
  ssr: false,
});

const RichTextEditor = () => {
  const [editorValue, setEditorValue] = useState("");
  console.log("valllll", editorValue);

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  useEffect(() => {
    // Function to set image height and width to 200px and center it
    const setImageSizeAndCenter = () => {
      const image = document.querySelector("img");
      if (image) {
        image.style.width = "200px";
        image.style.height = "200px";
        image.style.display = "block";
        image.style.margin = "0 auto";
      }
    };

    // Parse and set editorValue
    const container = document.createElement("div");
    container.innerHTML = editorValue;

    // Append the container to the DOM
    document.body.appendChild(container);

    // Clean up by removing the container from the DOM
    return () => {
      document.body.removeChild(container);
    };
    // Call the function to set image size and center it
    setImageSizeAndCenter();
  }, [editorValue]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Rte
        value={editorValue}
        onChange={handleEditorChange}
        // placeholder="Write something..."
        controls={[
          ["bold", "italic", "underline", "image"],
          ["orderedList", "unorderedList"],
          ["h1", "h2", "h3", "h4"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
        sx={{
          // border: "none",
          //   height: "20px",
          padding: "10px",
          marginTop: "10px",
        }}
      />
    </Box>
  );
};

export default RichTextEditor;
