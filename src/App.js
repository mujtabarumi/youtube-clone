import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Liked from "./components/liked";
import PlayVideo from "./components/play_video";
import db from "./db/db.json";

import "./components/style.css";
import SideBar from "./components/leftSideBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route exact path="/">
          <Home {...db} />
        </Route>
        <Route path="/liked">
          <Liked {...db} />
        </Route>
        <Route path="/play/:id">
          <PlayVideo {...db} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
