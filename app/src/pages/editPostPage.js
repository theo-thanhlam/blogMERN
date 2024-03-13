import { useState, useEffect } from "react";

import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";

const EditPost = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/post/${id}`).then((response) =>
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
      })
    );
  }, [id]);

  async function editPost(event) {
    event.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("content", content);
    data.set("id", id); //Send author id
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch(`${process.env.REACT_APP_API}/post`, {
      method: "PUT",
      body: data,
      credentials: "include",
    });

    if (response.ok) setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }

  return (
    <form className="ed" onSubmit={editPost}>
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
      <Editor onChange={setContent} value={content} />
      <button>Edit Post</button>
    </form>
  );
};

export default EditPost;
