import React from "react";
import SearchBar from "./SearchBar";

const SearchBarCon = ({
  handleGeoCodeClick,
  handleSearchInputChange,
  searchInput,
}) => {
  return (
    <div className="search-bar-con border-2">
      <SearchBar
        handleGeoCodeClick={handleGeoCodeClick}
        handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}
      />
      {checkInput && (
        <p className="aler-box text-red-600 text-center font-bold">
          Please check the given place name
        </p>
      )}
    </div>
  );
};

export default SearchBarCon;
