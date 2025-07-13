import React from 'react';

const Idea = ({ idea, upvote, downvote }) => {
  return (
    <div className="idea">
      <h3>{idea.title}</h3>
      <p>{idea.description}</p>
      <div className="votes">
        <button onClick={() => upvote(idea.id)}>&#x25B2;</button>
        <span>{idea.votes}</span>
        <button onClick={() => downvote(idea.id)}>&#x25BC;</button>
      </div>
    </div>
  );
};

export default Idea;
