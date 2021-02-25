import React from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import { Translation } from 'react-i18next';

import { counters} from './counterContext'
import { countAboutContext} from './counterContext'
import { Favorites } from  '../components/Favorites/Favorites';
import { Navbar } from '../components/Navbar/Navbar';
import { Content } from '../components/Content/Content';
import { Footer } from '../components/Footer/Footer';
import { Languages } from '../components/Languages/Languages';

function App() {
  const things = 'Oleh'
  const { t, i18n } = useTranslation();
  return (
    <div className="app">
      <h1>{t('Welcome to React')}</h1>
      <header className="header">
        <div className="title">
          <h1>Oleh Prymachenko</h1>
          <h2>Front-end Developer</h2>
        </div>
        <Navbar />
      </header>
      <main className="main">
      {/* <countAboutContext.Provider value={counters.countAbout}> */}
        <Favorites/>
      {/* </countAboutContext.Provider>  */}
        <div className="active-tab">
        {/* <ThingsProvider value={things}> */}
          <Content/>
        {/* </ThingsProvider> */}
        </div>
        <Languages/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
