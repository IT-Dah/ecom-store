import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={handleChange}
      style={{ padding: "10px", width: "100%", maxWidth: "400px", margin: "10px auto", display: "block" }}
    />
  );
};

export default SearchBar;
