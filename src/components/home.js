import { Container, Row } from 'react-bootstrap';
import Single from './Single';

const Home = (props) => {
  const html = props.all_videos.map((val) => (
      <Single val={val} />
    )
  );

  return (
    <Container>
      <Row>{html}</Row>
    </Container>
  );
};

export default Home;
