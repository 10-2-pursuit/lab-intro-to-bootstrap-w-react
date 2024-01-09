import React from "react";
import images from "../images/index.js";

const Post = ({ post }) => {
  const { title, content, location } = post;

  const addDash = location.toLowerCase().split(" ").join("-");

  return (
    <div className="card">
      <img src={images[addDash]} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6>{location}</h6>
        <p className="card-text text-truncate">{content}</p>
        <a href="#" className="btn btn-warning">
          Go to post
        </a>
      </div>
    </div>
  );
};

export default Post;
