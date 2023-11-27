import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const Navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [error, seterror] = useState({
    email: "",
    password: "",
  });
  // const handleValidate = () => {
  //   if (confirm === "") {
  //     alert("Please fill out the form correctly.");
  //     setSubmitDisabled(true);
  //   } else {
  //     setSubmitDisabled(false);
  //   }
  // };
  const emailpattren = /^[a-z0-9A-Z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  function submitHandler(e) {
    e.preventDefault();
    if (email.trim() === "") {
      seterror((error) => ({ ...error, email: "Enter Email address" }));
      setSubmitDisabled(true);
    } else if (!emailpattren.test(email)) {
      seterror((error) => ({ ...error, email: "Enter Valid address" }));
      setSubmitDisabled(true);
    } else {
      seterror(() => ({ ...error, email: " " }));
      setSubmitDisabled(false);
    }
    if (password.trim() === "") {
      seterror((error) => ({ ...error, password: "Enter Password" }));
      setSubmitDisabled(true);
    } else if (password.trim().length < 8) {
      setSubmitDisabled(true);
      seterror((error) => ({
        ...error,
        password: "Password is minimum 8characterstics",
      }));
    } else {
      seterror((error) => ({ ...error, password: " " }));
      setSubmitDisabled(false);
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "780px",
        width: "100%",
      }}
    >
      <img
        style={{ width: "150px", padding: "10px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
        alt="netflixLogo"
      />
      <div
        style={{
          border: "2px solid none",
          backgroundColor: "black",
          position: "relative",
          width: "455px",
          top: "100px",
          left: "500px",
          color: "white",
          opacity: "0.7",
        }}
      >
        <div
          style={{
            borderRadius: "6px",
            height: "480px",
            paddingTop: "20px",
            paddingLeft: "10px",
          }}
        >
          <h1>Sign In</h1>
          <Form
            style={{
              position: "relative",
              left: "28px",
              top: "10px",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <br />
              <input
                style={{
                  width: "370px",
                  backgroundColor: "#454545",
                  height: "50px",
                  border: "2px solid grey",
                }}
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder="Enter email"
              />
              <br />
              {error.email && <span>{error.email}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <br />
              <input
                type="password"
                placeholder="Password"
                style={{
                  border: "2px solid grey",
                  backgroundColor: "#454545",
                  height: "50px",
                  width: "370px",
                }}
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <p>{error.password && <span>{error.password}</span>}</p>
            </Form.Group>
            <Button
              variant="danger"
              type="submit"
              style={{ width: "150px", height: "50px", marginLeft: "30px" }}
              onClick={submitHandler}
              // onBlur={handleValidate}
            >
              Confirm
            </Button>
            <Button
              variant="danger"
              type="submit"
              style={{ width: "150px", height: "50px", marginLeft: "20px" }}
              onClick={() => {
                Navigate("/app");
              }}
              disabled={submitDisabled}
            >
              Submit
            </Button>
            <br />
            <br />
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "black",
              }}
            />
            {"  "}
            <span>Remember</span>
            <span style={{ marginLeft: "195px" }}>
              {" "}
              <a href="https://help.netflix.com/en" style={{ color: "red" }}>
                need help?
              </a>{" "}
            </span>
            <br />
            <br />
            <p style={{ position: "relative", left: "0" }}>
              This page is protected by google reCAPTCHA to <br />
              ensure you are not a bot{" "}
              <a href="https://help.netflix.com/en/node/412">learn more</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
