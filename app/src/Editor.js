import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const toolbarOption = [
  [{ header: [1, 2, 3, 4, false] }],
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["link", "image"],
  ["clean"], // remove formatting button
];

const formatsOption = [
  "header",
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
];

export default function Editor({ value, onChange }) {
  const module = {
    toolbar: toolbarOption,
  };
  return (
    <ReactQuill
      value={value}
      modules={module}
      formats={formatsOption}
      onChange={onChange}
    />
  );
}
