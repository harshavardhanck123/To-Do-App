import React, { useState } from 'react';
import Update from './Edit';
import Edit from './Edit';

function Read({ tasks, deleteTask, updateTask }) {
  const [editingTask, setEditingTask] = useState(null);

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const stopEditing = () => {
    setEditingTask(null);
  };

  return (
    <div className="row">
      {tasks.map((task) => (
        <div key={task.id} className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              {editingTask && editingTask.id === task.id ? (
                <Edit task={task} updateTask={updateTask} stopEditing={stopEditing} />
              ) : (
                <>
                  <Update task={task} updateTask={updateTask} />
                  <button className="btn btn-primary mt-2 w-100" onClick={() => startEditing(task)}>
                    Edit
                  </button>
                </>
              )}
              <button className="btn btn-danger mt-2 w-100" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Read;
