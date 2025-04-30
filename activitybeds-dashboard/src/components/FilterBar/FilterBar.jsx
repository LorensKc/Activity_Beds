import React from 'react';
import './FilterBar.scss';
// import { FaFilter } from 'react-icons/fa';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <select defaultValue="">
        <option value="" disabled>Agent...</option>
      </select>
      <select defaultValue="">
        <option value="" disabled>Supplier...</option>
      </select>
       <select defaultValue="">
        <option value="" disabled>Booking ID...</option>
      </select>
       <select defaultValue="">
        <option value="" disabled>Lead Pax Name...</option>
      </select>
       <select defaultValue="">
        <option value="" disabled>Booking Status</option>
      </select>

      <button className="apply-button">Apply</button>
      <button className="filters-button">
        {/* <FaFilter /> */}
        <span className="filter-icon">📊</span> 
        Filters
      </button>
    </div>
  );
};

export default FilterBar;