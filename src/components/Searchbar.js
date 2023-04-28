import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ searchItem, setSearchItem }) => {
  const [inputValue, setInputValue] = useState(searchItem);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSearchItem(value);
  };

  return (
    <div className="searchbar">
      <FaSearch />
      <input
        type="text"
        placeholder="Search for TV show ..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Searchbar;
