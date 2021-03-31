import React from "react";
import { Container, Row } from "react-bootstrap";
import Single from "./Single";
const Liked = (props) => {
  const html = props.liked_videos.map((val, i) => {
    if (parseInt(val.user_id) !== parseInt(props.user)) return null;
    const vid = props.all_videos.find(element => parseInt( element.id) === parseInt(val.video_id));
    console.log('vid', vid);
    return <Single key={i} val={vid} />;
  });

  return (
    <Container>
      <Row>{html}</Row>
    </Container>
  );
};

export default Liked;
