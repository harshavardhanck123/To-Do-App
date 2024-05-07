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
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Todo Name"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Todo Description"
          className="form-control mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100">Add Todo</button>
      </div>
    </form>
  );
}

export default Create;
