import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Tv = () => {
  // const APIKEY = "facf4cd1a869697ee4194de6e94a4ef04";
  const [data, setState] = useState([]);
  const fetchdata = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=facf4cd1a869697ee4194de6e94a4ef4`
      )
      .then((response) => setState(response.data.results)); // access the results property here
  };
  console.log(data);
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <nav className="nav_list">
        <img
          className="nav_img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <div className="div_list">
          <li>
            <Link className="nav_list1" to="/Home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav_list1" to="/Movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className="nav_list1" to="/Tv">
              TvShows
            </Link>
          </li>
          <Link
            style={{ marginTop: "10px" }}
            className="nav_list1"
            to="/mylist"
          >
            MyList
          </Link>
          <li className="search">
            <input className="input" type="search" placeholder="Search here" />
            <button className="button" type="submit" value="Search">
              search
            </button>
          </li>
        </div>
      </nav>
      <div
        style={{ backgroundColor: "black", display: "flex", flexWrap: "wrap" }}
      >
        {data.map((list) => {
          return (
            <span
              style={{
                width: "200px",
                heigth: "170px",
                margin: "10px",
                marginLeft: "80px",
              }}
            >
              <Link to="/DetailTv" state={{ list: list }}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/original${list.poster_path}`}
                    // onClick={() => navigate("/Moviedetails")}
                  />
                </Card>
                {/* <center className="movie_title">{list.name}</center> */}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Tv;
