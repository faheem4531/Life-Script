// import { EditorState } from "draft-js";
// import dynamic from "next/dynamic";
// import { useState } from "react";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// const Editor = dynamic(
//   () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
//   { ssr: false }
// );

// const MyEditor = () => {
//   const [editorState, setEditorState] = useState(
//     EditorState.createEmpty() // Set initial editor state
//   );
//   console.log("edittttt", editorState);

//   const onEditorStateChange = (newEditorState) => {
//     console.log("editorState", newEditorState);
//     setEditorState(newEditorState);
//   };

//   return (
//     <div>
//       <Editor
//         editorState={editorState}
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//         onEditorStateChange={onEditorStateChange}
//         toolbar={{
//           inline: { inDropdown: true },
//         }}
//       />
//     </div>
//   );
// };

// export default MyEditor;

import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const MyEditor = () => {
  const [editorState, setEditorState] = useState(
    null // Set initial editor state
  );
  const onEditorStateChange = (newEditorState) => {
    const contentState = newEditorState.getCurrentContent();
    const plainText = contentState.getPlainText();

    console.log("Plain Text Content:", plainText);

    // Update the state
    setEditorState(newEditorState);
  };

  const convertContentToHTML = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const resp = draftToHtml(rawContentState); // You need to implement draftToHtml function
    console.log("resp", resp);
    return resp;
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />

      <button onClick={() => console.log(convertContentToHTML())}>
        Convert to HTML
      </button>
    </div>
  );
};

export default MyEditor;
