import React from 'react';
import Idea from './Idea';

const IdeaList = ({ ideas, upvote, downvote }) => {
  return (
    <div className="idea-list">
      {ideas.map(idea => (
        <Idea key={idea.id} idea={idea} upvote={upvote} downvote={downvote} />
      ))}
    </div>
  );
};

export default IdeaList;
