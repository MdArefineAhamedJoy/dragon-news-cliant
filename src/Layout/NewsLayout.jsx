import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNav/RightNav";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col md={9}>
            <Outlet></Outlet>
          </Col>
          <Col md={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
