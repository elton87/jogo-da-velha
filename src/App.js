import React from 'react';
import './App.css';

import Checkbox from './objects/Checkbox';
import About from './objects/About';
import LogoElton from './objects/LogoElton';
import AboutLink from './objects/AboutLink';
import IconClose from './objects/IconClose';
import Header from './components/Header';
import Hashtag from './components/Hashtag';

const App = () => (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />

      <About>
        <LogoElton light />
        <AboutLink className="-light" />
        <IconClose />
      </About>
    </main>
);

export default App;
