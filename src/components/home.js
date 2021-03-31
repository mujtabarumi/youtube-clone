import { Col, Container, Row } from 'react-bootstrap';

const Home = (props) => {
  const html = props.all_videos.map((val) => {
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
  });

  return (
    <Container>
      <Row>{html}</Row>
    </Container>
  );
};

export default Home;
