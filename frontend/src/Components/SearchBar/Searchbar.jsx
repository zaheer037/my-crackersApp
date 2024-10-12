// src/Components/SearchBar.js
import React, { useState } from 'react';
import './searchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          <i className="fa fa-search"></i> {/* FontAwesome icon for search */}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
