import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

let API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchData, setSearchData] = useState("titanic");
  const [isErrors, setIsErrors] = useState({ show: "false", msg: "" });

  const FetchData = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data, "data");

      if (data.Response === "True") {
        setIsErrors({ show: false, msg: "" });
        setIsLoading(false);
        setMovies(data.Search);
      } else {
        setIsErrors({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let TimeHandler = setTimeout(() => {
      FetchData(`${API_URL}&s=${searchData}`);
    }, 500);
    return () => clearTimeout(TimeHandler);
  }, [searchData]);

  return (
    <AppContext.Provider
      value={{ isLoading, movies, isErrors, searchData, setSearchData }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
