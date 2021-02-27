import React,{} from 'react';
import './App.scss';
import {FormattedMessage} from 'react-intl';

import { Favorites } from  '../components/Favorites/Favorites';
import { Navbar } from '../components/Navbar/Navbar';
import { Content } from '../components/Content/Content';
import { Footer } from '../components/Footer/Footer';
import { Languages } from '../components/Languages/Languages';

function App() {
  return (
    
    <div className="app">
      <header className="header">
        <div className="title">
          <h1><FormattedMessage id = "head.name" defaultMessage="Oleh Prymachenko"/></h1>
          <h2><FormattedMessage id = "head.position" defaultMessage="Front-end Developer"/></h2>
        </div>
          <Navbar />
      </header>
      <main className="main">
        <Favorites/>
        <div className="active-tab">
          <Content/>
        </div>
        <Languages/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
