import React from 'react';
import faker from 'faker';

export default function Comment() {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">{faker.name.firstName()}</a>
        <div className="metadata">
          <span className="date">{faker.date.weekday()} at {faker.date.recent().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className="text">
          {faker.hacker.phrase()}
        </div>
      </div>
    </div>
  )
}
