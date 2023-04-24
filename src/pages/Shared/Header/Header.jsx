import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Button, Container } from "react-bootstrap";
import NavigationBar from "../NavigationBar/NavigationBar";




const Header = () => {
  
  return (
    <Container className="mb-5">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D , YYYY")}</p>
      </div>
      <div className="d-flex gap-5">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} className="text-danger">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et
            enim quas optio reiciendis libero deleniti, unde quam accusamus
            autem porro qui officiis, corrupti, adipisci nemo laudantium ut eum
            blanditiis.
          </span>
        </Marquee>
      </div>
      {/* nav section  */}
   
    </Container>
  );
};

export default Header;
