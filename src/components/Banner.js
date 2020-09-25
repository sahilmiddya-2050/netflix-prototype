import React, { useEffect, useState } from "react";
import request from "../request";
import instance from "../utils/axios";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const responseData = await instance.get(request.fetchNetflixOriginals);
      const randomMovie =
        responseData.data.results[
          Math.floor(Math.random() * (responseData.data.results.length - 1))
        ];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);
  console.log(movie);

  //   function truncate(str, n){
  //       return str?.
  //   }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        {/* description */}
        <h1 className="banner__description">{movie.overview}</h1>
      </div>
    </header>
  );
};

export default Banner;
