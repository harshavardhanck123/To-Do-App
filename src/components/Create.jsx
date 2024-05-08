import React, { useState } from 'react';

function Create({ addTask }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addTask(name, description);
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
    <input
      type="text"
      placeholder="Todo Name"
      className="form-control"
      style={{ flex: 1 }}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="text"
      placeholder="Todo Description"
      className="form-control"
      style={{ flex: 1 }}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <button type="submit" className="btn btn-success">Add Todo</button>
  </form>
  

  );
}

export default Create;
