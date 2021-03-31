import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Liked from "./components/liked";
import PlayVideo from "./components/play_video";
import db from "./db/db.json";

import "./components/style.css";
import SideBar from "./components/leftSideBar";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(1);
  const config = {...db, user, setUser};
  return (
    <Router>
      <SideBar {...config} />
      <Switch>
        <Route exact path="/">
          <Home {...config} />
        </Route>
        <Route path="/liked">
          <Liked {...config} />
        </Route>
        <Route path="/play/:id">
          <PlayVideo {...config} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
