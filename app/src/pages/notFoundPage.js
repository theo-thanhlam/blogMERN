import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Nothing Here
      <Link to={"/"}>Back to Homepage</Link>
    </div>
  );
};

export default NotFoundPage;
