import React from "react";
import "./App.scss";
import { FormattedMessage } from "react-intl";

import { Favorites } from "../components/Favorites/Favorites";
import { Navbar } from "../components/Navbar/Navbar";
import { Content } from "../components/Content/Content";
import { Footer } from "../components/Footer/Footer";
import { Languages } from "../components/Languages/Languages";

function App() {
  const F = FormattedMessage;
  return (
    <div className="app">
      <header className="header">
        <div className="bio">
          <div className="fullname">
            <h2>
              <F id="head.position" />
            </h2>
            <h1>
              <F id="head.name" />
            </h1>
          </div>
          <div className="photo"></div>
        </div>
        <Navbar />
      </header>
      <main className="main">
        <div className="main-left">
          <Favorites />
        </div>
        <div className="main-right">
          <Content />
          <Languages />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
