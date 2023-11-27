import React, { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import { Form } from "react-bootstrap";
function App() {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
  };
 
  return (
    <div className="home_list">
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
            <Form onSubmit={search}>
              <input
                className="input"
                type="text"
                placeholder="Search here"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <button className="button" type="submit" value="Search">
                search
              </button>
            </Form>
          </li>
        </div>
      </nav>
      <Banner />
      <div className="div_color">
        <Row1 />
        <Row2 />
        <Row4 />
        <Row3 />
      </div>
    </div>
  );
}

export default App;
