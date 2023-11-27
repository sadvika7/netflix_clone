import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./mylist.css";
function Row3() {
  const [movies, setmovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=facf4cd1a869697ee4194de6e94a4ef4"
        );
        setmovie(response.data.results); // Corrected state update
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function
  }, []);
  return (
    <div>
      <h2 className="titile">Now Playing</h2>
      <div
        className="row_posters"
        style={{ display: "flex", overflow: "hidden" }}
      >
        {movies.map((list) => {
          return (
            <span
              key={list.id}
              style={{
                width: "200px",
                heigth: "400px",
                margin: "10px",
                marginLeft: "20px",
              }}
            >
              <Link to="/Moviedetails" state={{ list: list }}>
                <div className="card">
                  <img
                    variant="top"
                    className="row_poster"
                    src={`https://image.tmdb.org/t/p/original${list.poster_path}`}
                    alt={list.title}
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
export default Row3;
