import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function QuillRTE() {
  const [content, setContent] = useState<string>(""); // State to manage the content of the editor

  const handleChange = (value: string) => {
    setContent(value);
    console.log("content", value);
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image", "emoji"],
      [{ align: "right" }, { align: "center" }, { align: "left" }],
    ],
  };

  //   useEffect(() => {
  //     // Add a custom image icon
  //     const imageButton = document.querySelector(".ql-image");
  //     if (imageButton) {
  //       const customIcon = document.createElement("span");
  //       customIcon.className = "ql-custom-image-icon";
  //       customIcon.innerHTML =
  //         '<img src="../../_assets/svg/imagepicker.svg" alt="Custom Icon" />';
  //       imageButton.appendChild(customIcon);
  //     }
  //   }, []);

  return (
    <Box>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Write something amazing..."
        style={{ minHeight: "70vh" }}
      />
    </Box>
  );
}
