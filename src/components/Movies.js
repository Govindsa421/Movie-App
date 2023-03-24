import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="text-center py-20">Loading....</div>;
  }
  return (
    <div className="mx-auto max-w-6xl">
      <div className="lg:px-16 px-6 py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {movies.map((currMovie) => {
            const { Title, Poster, imdbID } = currMovie;

            const movieTitle = Title.substring(0, 15);
            return (
              <NavLink to={`movies/${imdbID}`} key={imdbID}>
                <div className=" h-72 text-center hover:bg-slate-700 focus:outline-none rounded duration-200 hover:text-white border-purple-900 border py-3 space-y-2 overflow-hidden">
                  <div className="transform transition hover:scale-105 duration-500 ">
                    <h1 className="px-4">
                      {movieTitle.length >= 15
                        ? `${movieTitle}...`
                        : movieTitle}
                    </h1>
                    <img
                      src={Poster}
                      alt={imdbID}
                      className="w-40 h-56 p-3 mx-auto rounded-2xl"
                    />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
