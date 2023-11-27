import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./search.css";
function Search() {
  const { title } = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    getSearchMovie();
  }, []);

  const getSearchMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?&query=${title}&api_key=facf4cd1a869697ee4194de6e94a4ef4`
      )
      .then((response) => setSearchedMovies(response.data.results));
  };

  return (
    <section className="movie_poster">
      <h2>Search results for "{title}"</h2>
      <div
        className="movie_flex"
        style={{ display: "flex", overflow: "hidden" }}
      >
        {searchedMovies?.length > 0 &&
          searchedMovies.map((movie) => {
            return (
              <div
                key={movie.id}
                movie={movie}
                style={{
                  width: "200px",
                  heigth: "170px",
                  margin: "10px",
                  marginLeft: "80px",
                }}
              >
                <div>
                  <img
                    className="posters"
                    variant="top"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="movie_poster"
                  />
                  <p>{movie.title}</p>
                </div>
              </div>
            );
          })}
        {/* :<h2>your results are not found...</h2> */}
      </div>
    </section>
  );
}

export default Search;
