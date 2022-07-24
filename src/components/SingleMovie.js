import React, { useEffect, useState } from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import { useNavigate, useParams } from "react-router-dom";

let API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState("");

  const naviagte = useNavigate();

  const BtnHandler = () => {
    naviagte("/");
  };
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data, "gg");
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const TimeOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 1000);
    return () => clearTimeout(TimeOut);
  }, [id]);

  if (isLoading) {
    return (
      <>
        <div className=" flex justify-center items-center text-white bg-slate-700 h-screen">
          Loading....
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-slate-700">
        <div className="bg-white rounded lg:w-2/6 w-58">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <img
                src={movies.Poster}
                alt="img"
                className="w-full h-80 object-cover rounded-l"
              />
            </div>
            <div className="lg:py-7 py-3 lg:px-0 px-7  lg:space-y-3 space-y-1">
              <h1 className="text-xl ">{movies.Title}</h1>
              <p>{movies.Released}</p>
              <p>{movies.Ratings[0].Value}</p>
              <p>{movies.Writer}</p>
              <p>{movies.imdbVotes}</p>
              <button
                onClick={BtnHandler}
                className="px-4 py-2 flex gap-3 border-slate-700 border duration-300 hover:bg-slate-700 hover:text-white tracking-wider rounded"
              >
                <ArrowNarrowLeftIcon className="h-6 w-6" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
