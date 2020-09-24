import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./header/Header";
import ManageCards from './ManageCards';
import FlashCards from './FlashCards';
import LandingPage from './LandingPage';


class FlashCardsApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/flashcard" component={FlashCards}></Route>
        <Route exact path="/managecard" component={ManageCards}></Route>
      </BrowserRouter>
    );
  }
}

export default FlashCardsApp;
