import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header/Header";
import ManageCards from "./ManageCards";
import FlashCards from "./FlashCards";
import LandingPage from "./LandingPage";
import './style/FlashCardsApp.css'

class FlashCardsApp extends Component {
  render() {
    return (
      <div className="FlashCardsApp">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/flashcard" component={FlashCards}></Route>
          <Route exact path="/managecard" component={ManageCards}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default FlashCardsApp;
