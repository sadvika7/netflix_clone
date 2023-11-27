import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Row.css";

function Row1() {
  const [movies, setmovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=facf4cd1a869697ee4194de6e94a4ef4"
        );
        setmovie(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="titile">Trending movies</h2>
      <div
        className="row_posters"
        style={{ display: "flex", overflow: "hidden" }}
      >
        {movies.map((list, id) => {
          return (
            <span
              key={id}
              style={{
                width: "250px",
                heigth: "270px",
                margin: "10px",
                marginLeft: "10px",
                borderRadius: "0",
              }}
            >
              <Link to="/Moviedetails" state={{ list: list }}>
                <div className="card">
                  <img
                    variant="top"
                    className="row_poster"
                    src={`https://image.tmdb.org/t/p/original${list.poster_path}`}
                    alt="movie_poster"
                  />
                </div>
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default Row1;
