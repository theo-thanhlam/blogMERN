import { useState } from "react";
import Editor from "../Editor";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("content", content);
    data.set("file", files[0]);
    const response = await fetch(`${process.env.REACT_APP_API}/post/create`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="createPost" onSubmit={createNewPost}>
      {/* Title */}
      <input
        type="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Preview Image */}
      <input
        type="file"
        onChange={(event) => setFiles(event.target.files)}
        accept="image/*"
      />
      {/* Blog's Content */}
      <Editor value={content} onChange={setContent} />
      <button>Create Post</button>
    </form>
  );
};

export default CreatePostPage;
