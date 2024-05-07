import React, { useState } from 'react';

function Edit({ task, updateTask, stopEditing }) {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      name,
      description,
      status,
    };
    updateTask(task.id, updatedTask);
    stopEditing();
  };

  return (
    <form onSubmit={handleUpdate}>
      <span>Name</span>
      <input
        type="text"
        placeholder="Todo Name"
        className="form-control mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span>Description</span>
      <input
        type="text"
        placeholder="Todo Description"
        className="form-control mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <span>Status</span>
      <select
        className="form-control mb-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
      <button type="submit" className="btn btn-success w-100">Save Changes</button>
      <button
        type="button"
        className="btn btn-secondary w-100 mt-2"
        onClick={stopEditing}
      >
        Cancel
      </button>
    </form>
  );
}

export default Edit;
