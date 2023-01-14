import React, { useEffect, useRef, useState } from 'react'

import Image from "next/image";
import localizeIcon from "../../public/localize-50.png";
import searchIcon from "../../public/search-30.png";

const Searchbar = ({ handleSeachInputChange, searchInput }) => {
  const searchField = useRef(null);

  useEffect(() => {
    searchField.current.focus();
  }, [])
  return (
    <>
      <div className="today-con-search flex justify-center  pt-1 border-1">
        <div className="search-con w-fit h-fit flex justify-center items-center align-middle pl-1 pr-1 border border-dashed border-gray-200 rounded-md">
          <Image
            className="inline-block"
            src={searchIcon}
            alt="logo"
            width="15"
            height="15"
          />
          <input
            ref={searchField}
            className="pl-1"
            type="search"
            value={searchInput}
            onChange={(e) => handleSeachInputChange(e)}
            placeholder="Search for Places"
          />
          <Image
            className="inline-block"
            src={localizeIcon}
            alt="logo"
            width="15"
            height="15"
          />
        </div>
      </div>
    </>
  );
}

export default Searchbar