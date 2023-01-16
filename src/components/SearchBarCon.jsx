import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";
import SearchBar from "./SearchBar";

const SearchBarCon = () => {
  const { checkInput } = useContext(AppContext);
  return (
    <div className="search-bar-con border-2">
      <SearchBar />
      {checkInput && (
        <p className="aler-box text-red-600 text-center font-bold">
          Please check the given place name
        </p>
      )}
    </div>
  );
};

export default SearchBarCon;
