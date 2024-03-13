import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/singlePost.css";
import TimeAgo from "react-timeago";
import { format } from "date-fns";
import { UserContext } from "../UserContext";

const SinglePostPage = () => {
  const { id } = useParams();
  const [postInfo, setpostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    async function fetchPostById() {
      const postDoc = await fetch(
        `${process.env.REACT_APP_API}/post/${id}`
      ).then((response) => response.json());
      setpostInfo(postDoc);
    }
    fetchPostById();
  }, [id]);
  return (
    <>
      {postInfo && (
        <div className="post-page">
          <div className="image">
            <img src={`${postInfo.cover}`} alt="Post Cover" />
          </div>

          <div className="postInfo">
            <div className="post-title">
              <h1> {postInfo.title}</h1>
            </div>

            <div className="title-author-edit">
              <div className="author">
                <a href="/"> {postInfo.author.name}</a>
              </div>

              <div className="time">
                <time>
                  {format(new Date(postInfo.createdAt), "MMM d, yyyy")}
                </time>
                (<TimeAgo date={postInfo.createdAt} />)
              </div>

              <div className="edit-post">
                {userInfo && userInfo.id === postInfo.author._id && (
                  <div>
                    <Link to={`/post/edit/${postInfo._id}`}>Edit Post</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: postInfo.content }}
          />
        </div>
      )}
    </>
  );
};

export default SinglePostPage;
