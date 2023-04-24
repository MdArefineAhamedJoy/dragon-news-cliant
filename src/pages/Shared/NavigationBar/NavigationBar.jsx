import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
const NavigationBar = () => {
    const {user} = useContext(AuthContext)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"gray"}} variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {" "}
                <FaUserCircle className="fs-2" />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user ? (
                  <Button variant="secondary">LogOut</Button>
                ) : (
                  <Button variant="secondary">LogIn</Button>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
