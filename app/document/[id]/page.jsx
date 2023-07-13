"use client";

import dynamic from "next/dynamic";
// import Quill from "react-quill";
// import Quill from "quill";
import "node_modules/react-quill/dist/quill.snow.css";
import "./styles.css";
// import "quill/dist/quill.snow.css";
// import { useCallback } from "react";

// const QuillNoSSRWrapper = dynamic(import("react-quill"), {
//   ssr: false,
//   //   loading: () => <p>Loading ...</p>,
// });

const QuillWrapper = dynamic(() => import("react-quill"), { ssr: false });
// const Quill = dynamic(() => import("quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    ["clean"],
  ],
  //   clipboard: {
  //     // toggle to add extra line breaks when pasting HTML:
  //     matchVisual: false,
  //   },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
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
];

export default function Page() {
  //   const wrapperRef = useCallback((wrapper) => {
  //     if (wrapper == null) return;

  //     wrapper.innerHTML = "";

  //     const editor = document.createElement("div");
  //     wrapper.append(editor);
  //     new Quill(editor, { theme: "snow" });
  //   }, []);

  return (
    <div id='container'>
      <QuillWrapper
        modules={modules}
        formats={formats}
        theme='snow'
        onChange={(content) => {
          // var htmlToRtf = require('html-to-rtf');
          console.log("CONTETN: ", content);
        }}>
        <div className='text-editor'></div>
      </QuillWrapper>
    </div>
  );
}

// import dynamic from "next/dynamic"

// const QuillNoSSRWrapper = dynamic(
// async () => {
// const { default: RQ } = await import("react-quill")
// // eslint-disable-next-line react/display-name
// return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />
// },
// {
// ssr: false,
// }
// )
