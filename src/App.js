import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Components/Home/Home/Home";
import Services from "./Components/Home/Services/Services";
import TourGuides from "./Components/Home/TourGuides/TourGuides";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/tourguides">
            <TourGuides></TourGuides>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
