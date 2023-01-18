import React, { useContext, useEffect, useRef, useState } from "react";

import { AppContext } from "../context/AppContext";
import Image from "next/image";
import localizeIcon from "../../public/localize-50.png";
import searchIcon from "../../public/search-30.png";

const SearchBar = () => {
    const searchField = useRef(null);
    const { handleGeoCodeClick, handleSearchInputChange, searchInput } =
        useContext(AppContext);

    useEffect(() => {
        searchField.current.focus();
    }, []);

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
                        onClick={() => handleGeoCodeClick()}
                    />
                    <input
                        ref={searchField}
                        className="pl-1"
                        type="search"
                        value={searchInput.city}
                        onChange={handleSearchInputChange}
                        placeholder="Search for Places"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleGeoCodeClick()
                            }
                        }}
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
};

export default SearchBar;
