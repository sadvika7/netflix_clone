import React from "react";
import { useLocation } from "react-router-dom";
import "./Movei.css";
function Moviedetails() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div className="bgc">
        <center>{location.state.list.original_title}</center>
        <div className="di">
          <div>
            <img
              className="im"
              src={`https://image.tmdb.org/t/p/original${location.state.list.poster_path}`}
              alt="movie_poster"
            />
          </div>
          <div className="div1">
            <div className="bg">
              <span>original_title</span> :{location.state.list.original_title}
            </div>
            <div className="bg">
              <span>original_language</span> :{" "}
              {location.state.list.original_language}
            </div>
            <div className="bg">
              <span>Rating</span> : {location.state.list.vote_average}/10
            </div>
            <div className="bg">
              <span>release_date</span> : {location.state.list.release_date}
            </div>
            <div className="bg">
              <span>Overview</span> : {location.state.list.overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Moviedetails;
