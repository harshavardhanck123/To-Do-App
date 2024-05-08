import React, { useState } from 'react';
import Create from './components/Create';
import Read from './components/Read';
import Filter from './components/Filter';
import './App.css' 

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (name, description) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      description,
      status: 'Not Completed',
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    const newTasks = tasks.map((task) => (task.id === id ? updatedTask : task));
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === 'All' ? true : task.status === filter
  );

  return (
    <div className="container my-4">
      <h5 className="text-center">My Todo </h5>
      <Create addTask={addTask} />
      <Filter setFilter={setFilter} />
      <Read tasks={filteredTasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
