import React from "react";

export default function Comment({
  avatar,
  firstName,
  date,
  time,
  commentText
}) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {firstName}
        </a>
        <div className="metadata">
          <span className="date">
            {date} at {time}
          </span>
        </div>
        <div className="text">{commentText}</div>
      </div>
    </div>
  );
}
