// import React from "react";

// import { Editor } from "@tinymce/tinymce-react";

// import { ITextAreaProps } from "./interface";

// const TextArea: React.FC<ITextAreaProps> = ({
//   label,
//   handleEditorChange,
//   className,
//   placeHolder = "Rich text editor",
//   ...rest
// }) => {
//   return (
//     <label className={"transition border rounded gap-1 flex flex-col"}>
//       <Editor
//         apiKey={"zr99oob16mzc47d0gbb2v049rmevvk57l28er6ewc9kn3w4m"}
//         init={{
//           skin: "snow",
//           icons: "bold",
//           placeholder: placeHolder,
//           height: 400,
//           menubar: true,
//           plugins: [
//             "advlist autolink lists link image charmap print preview anchor",
//             "searchreplace visualblocks code fullscreen textcolor ",
//             "insertdatetime media table paste code help wordcount"
//           ],
//           textcolor_rows: "6",
//           toolbar:
//             "undo redo | styleselect | fontsizeselect | code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent "
//         }}
// onEditorChange={(event: any, editor: any) => handleEditorChange(event.getContent())}
//       />
//     </label>
//   );
// };

// export default TextArea;
import React from "react";

import { Editor } from "@tinymce/tinymce-react";

import { ITextAreaProps } from "./interface";

const TextArea: React.FC<ITextAreaProps> = ({
  label,
  handleEditorChange,
  className,
  placeHolder = "Rich text editor",
  ...rest
}) => {
  return (
    <label className={"transition border rounded gap-1 flex flex-col"}>
      <Editor
        apiKey={"zr99oob16mzc47d0gbb2v049rmevvk57l28er6ewc9kn3w4m"}
        init={{
          skin: "snow",
          icons: "bold",
          placeholder: placeHolder,
          height: 400,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen textcolor ",
            "insertdatetime media table paste code help wordcount"
          ],
          textcolor_rows: "6",
          toolbar:
            "undo redo | styleselect | fontsizeselect | code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent "
        }}
        onEditorChange={(event: any, editor: any) => {
          if (handleEditorChange) {
            // handleEditorChange(event.getContent());
          }
        }}
      />
    </label>
  );
};

export default TextArea;