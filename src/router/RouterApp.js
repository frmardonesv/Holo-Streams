import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home";
import { Live } from "../pages/Live";
import Talents from "../pages/Talents";
import Vtuber from "../pages/Vtuber";

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/vtuber/:id">
          <Vtuber />
        </Route>
        <Route path="/talents">
          <Talents />
        </Route>
        <Route path="/lives">
          <Live />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterApp;
