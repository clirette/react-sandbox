import React from "react";
import ReactDOM from "react-dom";
import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";
import faker from "faker";

const MAX_COMMENTS = 10;

const App = () => {
  const comments = [];

  function generateComment(iterations) {
    for (let i = 0; i < iterations; i++) {
      comments.push(
        <ApprovalCard>
          <Comment
            avatar={faker.image.avatar()}
            firstName={faker.name.firstName()}
            date={faker.date.weekday()}
            time={faker.date
              .recent()
              .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              commentText={faker.hacker.phrase()}
          />
        </ApprovalCard>
      );
    }
  }

  generateComment(MAX_COMMENTS);

  return (
    <div className="container">
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <ApprovalCard>
          <Comment
            avatar="https://en.gravatar.com/userimage/153747069/41e965a07cb3510c435949f510f29907.jpg"
            firstName="Chase"
            date="Monday"
            time="3:00 PM"
            commentText="React is cool!"
          />
        </ApprovalCard>
        {comments}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
