import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./components/home/home";
import { NavBar } from "./components/nav/navbar";
import { Footer } from "./components/footer/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Reviews } from "./components/reviews/reviews";
import { FormReview } from "./components/formReview/sendreview";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/react-burger-review">
          <Home />
        </Route>
        <Route exact path="/react-burger-review/watch">
          <Reviews />
        </Route>
        <Route exact path="/react-burger-review/send">
          <FormReview />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
