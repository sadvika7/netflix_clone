import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "axios";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=facf4cd1a869697ee4194de6e94a4ef4"
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "center-center",
      }}
    >
      {/* header */}
      <div className="banner_content">
        {/* Banner contant */}
        <h1 className="banner_title">{movie?.title}</h1>
        {/*banner descri */}
        <h1 className="banner_descrip">{movie?.overview}</h1>
      </div>
    </header>
  );
}
export default Banner;
