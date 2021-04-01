import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Single({ val }) {
  return (
    <Col xs="4">
      <Link to={"/play/" + val.id}>
        <Row>
          <img alt="youtube" src={val.image} />
        </Row>
        <Row>{val.title}</Row>
      </Link>
    </Col>
  );
}
