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
    return <div className="singleMovie__loader">Loading....</div>;
  }
  return (
    <>
      <div className="singleMovie__wrapper">
        <div className="singleMovie__div">
          <div className="singleMovie__container">
            <div>
              <img src={movies.Poster} alt="img" className="singleMovie__img" />
            </div>
            <div className="singleMovie__header">
              <h1 className="">{movies.Title}</h1>
              <p>{movies.Released}</p>
              <p>{movies.Ratings[0].Value}</p>
              <p>{movies.Writer}</p>
              <p>{movies.imdbVotes}</p>
              <button onClick={BtnHandler} className="singleMovie__btn">
                <ArrowNarrowLeftIcon className="singleMovie__icon" />
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
