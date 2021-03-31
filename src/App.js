import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Liked from './components/liked';
import PlayVideo from './components/play_video';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/liked">
          <Liked />
        </Route>
        <Route path="/play">
          <PlayVideo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
