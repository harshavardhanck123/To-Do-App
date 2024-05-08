import React from 'react';

function Filter({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>

      <strong>My Todos</strong>


      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Arial, sans-serif' }}>
      <label htmlFor="statusFilter" style={{ fontWeight: 'bold', color: '#333' }}>Status Filter:</label>
      <select
        id="statusFilter"
        className="form-control"
        style={{ width: '150px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        onChange={handleFilterChange}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
    </div>




  );
}

export default Filter;
