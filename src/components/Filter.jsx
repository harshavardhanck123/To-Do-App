import React from 'react';

function Filter({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="form-group mb-4">
      <label htmlFor="statusFilter">Filter by Status:</label>
      <select
        id="statusFilter"
        className="form-control"
        onChange={handleFilterChange}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
}

export default Filter;
