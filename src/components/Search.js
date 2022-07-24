import React from "react";
import { useGlobalContext } from "../context/Context";

const Search = () => {
  const { searchData, setSearchData, isErrors } = useGlobalContext();
  return (
    <>
      <div className="text-center dark:text-white py-3">
        <h1 className="font-bold tracking-wider text-blue-900 text-xl">Search Your Favourite Movies</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search here.."
            className="border-purple-900 border-b-2 w-80 mt-5 p-2 outline-none"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <p className=" text-red-600 font-bold text-sm py-3">{isErrors.show && isErrors.msg}</p>
        </form>
      </div>
    </>
  );
};

export default Search;
