import React, { useState } from 'react';

function Edit({ task, updateTask, stopEditing }) {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status  || 'Completed');

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

  const getStatusStyle = () => {
    return status === 'Completed'
      ? { backgroundColor: 'green',color:'white' }
      : { backgroundColor: 'red',color:'white' };
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
        style={getStatusStyle()}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
      
    
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button type="submit" className="btn btn-success w-50">Save Changes</button>
        <button
          type="button"
          className="btn btn-secondary w-50"
          onClick={stopEditing}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Edit;
