import React, { useState } from 'react';

import Edit from './Edit';

function Read({ tasks, deleteTask, updateTask }) {
  const [editingTask, setEditingTask] = useState(null);

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const stopEditing = () => {
    setEditingTask(null);
  };

  // Function to determine style based on status
  const getStatusStyle = (task) => {
    return task.status === 'Completed'
      ? { backgroundColor: 'green', color: 'white' }
      : { backgroundColor: 'red', color: 'white' };
  };

  // Sort tasks so that Completed tasks appear first
  const sortedTasks = tasks.slice().sort((a, b) => {
    if (a.status === 'Completed' && b.status !== 'Completed') {
      return -1;
    } else if (a.status !== 'Completed' && b.status === 'Completed') {
      return 1;
    } else {
      return 0; // If both are the same, don't change the order
    }
  });

  return (
    <div className="row">
      {sortedTasks.map((task) => (
        <div key={task.id} className="col-md-4 mb-3">
          <div className="card" style={{ backgroundColor: '#dfffe5' }}>
            <div className="card-body">
              {editingTask && editingTask.id === task.id ? (
                <Edit task={task} updateTask={updateTask} stopEditing={stopEditing} />
              ) : (
                <>
                  <p>
                    <strong>Name:</strong> {task.name}
                    <br />
                    <strong>Description:</strong> {task.description}
                    <br />
                    <strong>Status:</strong>
                    <select
                      className="form-control mt-1"
                      value={task.status}
                      style={getStatusStyle(task)}
                      disabled // Prevents changing status
                    >
                      <option value="Completed">Completed</option>
                      <option value="Not Completed">Not Completed</option>
                    </select>
                  </p>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button className="btn btn-success w-50" onClick={() => startEditing(task)}>
                      Edit
                    </button>
                    <button className="btn btn-danger w-50" onClick={() => deleteTask(task.id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Read;
