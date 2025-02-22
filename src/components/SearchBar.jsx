import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css"; // Import the new CSS file

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
