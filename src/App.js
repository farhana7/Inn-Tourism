import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Components/Home/Home/Home";
import Services from "./Components/Home/Services/Services";
import TourGuides from "./Components/Home/TourGuides/TourGuides";
import AddNewService from "./Components/AddNewService/AddNewService";
import ManageAllTrips from "./Components/ManageAllTrips/ManageAllTrips";
import MyOrders from "./Components/MyOrders/MyOrders";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
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
          <Route path="/addNewService">
            <AddNewService></AddNewService>
          </Route>
          <Route path="/manageAllTrips">
            <ManageAllTrips></ManageAllTrips>
          </Route>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/tourguides">
            <TourGuides></TourGuides>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
