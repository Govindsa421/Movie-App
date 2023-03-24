import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="movies__loader">Loading....</div>;
  }
  return (
    <div className="mx-auto max-w-6xl">
      <div className="lg:px-16 px-6 py-6">
        <div className="movies__container">
          {movies.map((currMovie) => {
            const { Title, Poster, imdbID } = currMovie;

            const movieTitle = Title.substring(0, 15);
            return (
              <NavLink to={`movies/${imdbID}`} key={imdbID}>
                <div className=" navlink__wrapper">
                  <div className="navlink__container">
                    {movieTitle.length >= 15 ? `${movieTitle}...` : movieTitle}
                    <img src={Poster} alt={imdbID} className="navlink__img" />
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
