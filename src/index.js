import React from "react";
import ReactDOM from "react-dom";
import Comment from "./components/Comment";
import faker from "faker";

const MAX_COMMENTS = 10;

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

  generateComment(MAX_COMMENTS);

  return (
    <div className="ui container comments">
      <Comment
        avatar="https://en.gravatar.com/userimage/153747069/41e965a07cb3510c435949f510f29907.jpg"
        firstName="Chase"
        date="Monday"
        time="3:00 PM"
        commentText="React is cool!"
      />

      {comments}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
