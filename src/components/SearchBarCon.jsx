import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";
import SearchBar from "./SearchBar";

const SearchBarCon = () => {
  const { IsSearchInputTrue } = useContext(AppContext);
  return (
    <div className="search-bar-con pt-3 pb-2">
      <SearchBar />
      {IsSearchInputTrue && (
        <p className="aler-box text-red-600 text-center font-bold">
          Please check the given place name
        </p>
      )}
    </div>
  );
};

export default SearchBarCon;
