import React from 'react';

export default function SearchBar({ setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by title or tag..."
        onChange={e => setSearch(e.target.value)}
        className="border p-2 w-full"
      />
    </div>
  );
}
