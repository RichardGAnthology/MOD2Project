// import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import Nav from "./nav"
import Watchlist from "./watchlist";
import Locations from './locations'
import MountClass from './mountClass'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path ="/" exact component ={Home} />
          <Route path = "/home" component ={Home} />
          <Route path ="/watchlist" component={Watchlist} />
          <Route path ='/locations' component={Locations} />
        </Switch>
      </Router>
      <MountClass />
    </div>
  );
}

export default App;
