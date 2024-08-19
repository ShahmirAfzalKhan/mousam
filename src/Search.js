import React, { useState } from 'react';

function Search({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-l-md w-1/2"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-gray-800 text-white p-2 rounded-r-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
