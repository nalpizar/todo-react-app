import React from "react";

export const SearchTask = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="SearchTask">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="todo-input search-bar"
      />
    </div>
  );
};