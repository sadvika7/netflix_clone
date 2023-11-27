import React from "react";
import "./Mainpage.css";
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="maindiv">
        <nav>
          <ul>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
                alt="logo"
                style={{ width: "150px" }}
              />
            </li>
            <li className="list">
              <select
                style={{
                  width: "110px",
                  backgroundColor: "black",
                  color: "white",
                  height: "35px",
                  borderRadius: "4px",
                }}
              >
                <option>English</option>
                <option>Hindhi</option>
              </select>
            </li>
            <li className="list1">
              <button
                style={{
                  width: "90px",
                  backgroundColor: "orangered",
                  height: "35px",
                  borderRadius: "4px",
                }}
                onClick={() => {
                  navigate("/Signup");
                }}
              >
                Sign In
              </button>
            </li>
          </ul>
        </nav>
        <section className="para">
          <center>
            <h5>Welcome back!</h5>
          </center>{" "}
          <br />
          <h1>
            <b>Unlimited movies, TV shows and more</b>
          </h1>
          <br />
          <center>
            <h5>Watch anywhere. Cancel anytime.</h5>
          </center>
          <br />
          <div>
            <input
              type="email"
              className="form_email"
              placeholder="Enter your email address "
            />
            <button
              className="form_submit"
              type="submit"
              onClick={() => {
                navigate("/App");
              }}
            >
              Get Started
            </button>
          </div>
        </section>
      </div>
      <p
        style={{
          height: "12px",
          backgroundColor: "#333333",
          border: "2px solid",
          marginBottom: "0",
        }}
      ></p>
      <div className="article">
        <article className="p1" style={{ paddingTop: "100px" }}>
          <h1>Enjoy on your TV</h1>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, <br />
          Apple TV, Blu-ray players and more.
        </article>
        <div>
          <img
            src="https://us.123rf.com/450wm/vantageds/vantageds2003/vantageds200300233/143053407-uk-march-2020-tv-television-netflix-selection-page-better-call-saul-original-series.jpg"
            alt="tv"
            style={{ borderRadius: "4px" }}
          />
        </div>
      </div>
      <p
        style={{
          height: "12px",
          backgroundColor: "#333333",
          border: "2px solid",
          marginBottom: "0",
        }}
      ></p>
      <div className="article">
        <img
          src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          alt="tv"
          style={{ borderRadius: "4px" }}
        />
        <article className="p1" style={{ paddingTop: "100px" }}>
          <h1>Create profiles for kids</h1>
          Send children on adventures with their favourite <br />
          characters in a space made just for them—free with <br />
          your membership.
        </article>
        <div></div>
      </div>
      <p
        style={{
          height: "12px",
          backgroundColor: "#333333",
          border: "2px solid",
          marginBottom: "0",
        }}
      ></p>
      <div className="article">
        <article className="p1" style={{ paddingTop: "190px" }}>
          <h1>
            Download your shows
            <br /> to watch offline
          </h1>
          Save your favourites easily and always have <br />
          something to watch.
        </article>
        <div>
          <img
            src="https://netflixhomepage-clone-demo.netlify.app/images/mobile.jpg"
            alt="tv"
            style={{ borderRadius: "4px" }}
          />
        </div>
      </div>
      <p
        style={{
          height: "12px",
          backgroundColor: "#333333",
          border: "2px solid",
          marginBottom: "0",
        }}
      ></p>
      <footer>
        <div className="footer">
          {" "}
          <ol>
            <p style={{ color: "white" }}> Questions? Call 000-800-919-1694</p>
            <li>FEQ</li>
            <li>Investor relation</li>
            <li>Privacy</li>
            <li>Speed Test</li>
            <br /> <p style={{ color: "white" }}>Netflix India</p>
          </ol>
          <ol>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies reference</li>
            <li>Legal notice</li>
          </ol>
          <ol>
            <li>Account</li>
            <li>Way to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ol>
          <ol>
            <li>Media Center</li>
            <li>Terms of use</li>
            <li>Contact Us</li>
          </ol>
        </div>
      </footer>
    </div>
  );
};

export default Mainpage;
