import React from 'react';
import { useRouteMatch } from "react-router";

const PlayVideo = (props) => {
  let match = useRouteMatch();
  const id = match?.params?.id;
  return (
    <div>
      <h2>Play video {id}</h2>

    </div>
  );
};

export default PlayVideo;
