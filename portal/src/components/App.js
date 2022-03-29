import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainFooter from "./shared/MainFooter";
import MainHeader from "./shared/MainHeader";
import Home from "./home";
import GamesSubHeader from "./games/GamesSubHeader";
import GamesSearch from "./games/GamesSearch";
import GamesList from "./games/GamesList";
import GamesSearchNav from "./games/GamesSearchNav";
import OpponentsSubHeader from "./opponents/OpponentsSubHeader";
import OpponentSearch from "./opponents/OpponentSearch";
import OpponentData from "./opponents/OpponentData";
import GamesCompetitionsSubHeader from "./competitions/GamesCompetitionsSubHeader";
import GamesCompetitions from "./competitions/GamesCompetitions";
import CoachSubNav from "./coach/CoachSubNav";
import CoachDetails from "./coach/CoachDetails";

import "../styles/mainHeader.css";
import "../styles/mainFooter.css";
import "../styles/mainBody.css";
import CoachStats from "./coach/CoachStats";

const App = () => {
  return (
    <Router basename={"/coachjk"}>
      <div className="main-app">
        <MainHeader />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />

            <Route path="*" exact={true} element={<Home />} />

            <Route
              path="/games"
              element={
                <>
                  <GamesSubHeader />
                  <GamesSearchNav />
                  <GamesSearch />
                  <GamesList />
                </>
              }
            />

            <Route
              path="/opponents"
              element={
                <>
                  <OpponentsSubHeader />
                  <GamesSearchNav />
                  <OpponentSearch />
                  <OpponentData />
                </>
              }
            />

            <Route
              path="/competitions"
              element={
                <>
                  <GamesCompetitionsSubHeader />
                  <GamesSearchNav />
                  <GamesCompetitions />
                </>
              }
            />

            <Route
              path="/coach-john-kottis"
              element={
                <>
                <CoachSubNav />
                <CoachDetails />
                <CoachStats />
                </>
              }
            />
          </Routes>
        </div>
      </div>

      <MainFooter />
    </Router>
  );
};

export default App;
