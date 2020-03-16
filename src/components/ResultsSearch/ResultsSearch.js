import React from "react";
import { Row, Col } from "react-bootstrap";

const ResultsSearch = props => (
  <>
    <Row className="text-left ">
      <Col className=" box-style" xs xl={5}>
        <ul>
          <li>Title: {props.title}</li>
          <li>Name: {props.name}</li>
          <li>Project: {props.project}</li>
          <li>Skills: {props.skills}</li>
        </ul>
      </Col>
    </Row>
  </>
);

export default ResultsSearch;
