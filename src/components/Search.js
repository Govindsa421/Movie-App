import React from "react";
import { useGlobalContext } from "../context/Context";

const Search = () => {
  const { searchData, setSearchData, isErrors } = useGlobalContext();
  return (
    <>
      <div className="search__container">
        <h1 className="font-bold text-xl tracking-wider text-blue-900 ">
          Search Your Favourite Movies
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search here.."
            className="border-purple-900 border-b-2 w-80 mt-5 p-2 outline-none"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <p className="search__error__msg">{isErrors.show && isErrors.msg}</p>
        </form>
      </div>
    </>
  );
};

export default Search;
