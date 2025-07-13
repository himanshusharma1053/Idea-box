import React, { useState } from 'react';
import './App.css';
import IdeaList from './components/IdeaList';
import IdeaForm from './components/IdeaForm';

function App() {
  const [ideas, setIdeas] = useState([]);

  const addIdea = idea => {
    setIdeas([...ideas, idea]);
  };

  const upvote = id => {
    setIdeas(
      ideas.map(idea =>
        idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea
      )
    );
  };

  const downvote = id => {
    setIdeas(
      ideas.map(idea =>
        idea.id === id ? { ...idea, votes: idea.votes - 1 } : idea
      )
    );
  };

  return (
    <div className="App">
      <h1>Idea Board</h1>
      <IdeaForm addIdea={addIdea} />
      <IdeaList ideas={ideas} upvote={upvote} downvote={downvote} />
    </div>
  );
}

export default App;
