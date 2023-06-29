import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbars = () => {
  let auth = localStorage.getItem("userAuth");
  // console.log(auth);
  const navigater = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigater("/sign");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <div className="link-style">
            {auth ? (
              <>
                <Link to="/todo-data">TodoData</Link>
                <Link to="/login" className="sign_up" onClick={logOut}>
                  Logout {JSON.parse(auth)}
                </Link>
              </>
            ) : (
              <>
                <Link to="/">Register</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
