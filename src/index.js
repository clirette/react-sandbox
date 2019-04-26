import React from "react";
import ReactDOM from "react-dom";
import Comment from "./components/Comment";
import faker from "faker";

const App = () => {
  const comments = [];

  function generateComment(iterations) {
    for (let i = 0; i < iterations; i++) {
      comments.push(
        <Comment
          avatar={faker.image.avatar()}
          firstName={faker.name.firstName()}
          date={faker.date.weekday()}
          time={faker.date
            .recent()
            .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          commentText={faker.hacker.phrase()}
        />
      );
    }
  }

  generateComment(5);

  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img
            src="https://en.gravatar.com/userimage/153747069/41e965a07cb3510c435949f510f29907.jpg"
            alt="avatar"
          />
        </a>
        <div className="content">
          <a href="/" className="author">
            Chase
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>

      {comments}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
