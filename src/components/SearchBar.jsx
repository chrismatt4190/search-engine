import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`http://localhost:8000/search/?query=${value}`)
      .then((response) => response.json())
      .then((json) => {
        const lowerValue = value.toLowerCase();
        const filteredResults = json.results.filter((item) => {
          return (
            item.product_item_name?.toLowerCase().includes(lowerValue) ||
            item.business_name?.toLowerCase().includes(lowerValue) ||
            item.common_product_keyword?.toLowerCase().includes(lowerValue) ||
            item.product_category?.toLowerCase().includes(lowerValue)
          );
        });
        setResults(filteredResults);
      })
      .catch((error) => {
        console.error("Search error:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to Search Your Product... "
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
