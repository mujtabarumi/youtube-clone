import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Single({val}) {
  return (
    <Col xs="4">
      <a href={val.link}>
        <Row>
          <img src={val.image} />
        </Row>
        <Row>{val.title}</Row>
      </a>
    </Col>
  );
}
