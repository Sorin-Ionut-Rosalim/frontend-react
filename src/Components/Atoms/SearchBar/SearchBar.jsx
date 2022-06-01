import React, { useContext } from "react";
import "./SearchBar.css";
import { AppProviderContext } from "../../../Context/AppProvider";

const SearchBar = () => {
  const { state, actions } = useContext(AppProviderContext);

  const handleChange = (e) => {
    e.preventDefault();
    actions.setFilter({ ...state.filter, text: e.currentTarget.value });
  };

  return (
    <div className="searchbar-container">
      <input
        className="search-input"
        type="text"
        title="SEARCH"
        placeholder="SEARCH"
        onChange={(e) => handleChange(e)}
        value={state.filter.text}
      />
    </div>
  );
};

export default SearchBar;
