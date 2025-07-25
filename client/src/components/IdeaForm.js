import React, { useState } from 'react';

const IdeaForm = ({ addIdea }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !description) return;
    addIdea({
      id: Math.random(),
      title,
      description,
      votes: 0,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Add Idea</button>
    </form>
  );
};

export default IdeaForm;
