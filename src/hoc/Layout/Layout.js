import React from "react";
import { Container } from "react-bootstrap";

const Layout = props => {
  return (
    <>
      <Container className="text-center">{props.children}</Container>
    </>
  );
};

export default Layout;
