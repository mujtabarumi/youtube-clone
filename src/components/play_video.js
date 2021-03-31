import React from "react";
import { useRouteMatch } from "react-router";
import ReactPlayer from "react-player";
import { Container, Row } from "react-bootstrap";

const PlayVideo = (props) => {
  let match = useRouteMatch();
  const id = match?.params?.id;
  const [data] = props.all_videos.filter((val) => val.id == id);
  return (
    <Container>
      <Row>
        <ReactPlayer url={data.link} />
      </Row>
    </Container>
  );
};

export default PlayVideo;
