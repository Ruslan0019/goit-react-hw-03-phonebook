import React from 'react';

const Filter = ({ filter, onChange }) => (
  <label>
    Filter by name:
    <input type="text" name="filter" value={filter} onChange={onChange} />
  </label>
);

export default Filter;
