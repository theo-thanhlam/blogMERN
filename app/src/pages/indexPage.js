import { useEffect, useState } from "react";
import Post from "../components/post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async function () {
      const response = await fetch(`${process.env.REACT_APP_API}/post`).then(
        (res) => res.json()
      );
      setPosts(response); // Update the state with fetched posts
    };

    fetchPosts();
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post {...post} key={post._id} />)}
    </>
  );
};

export default IndexPage;
