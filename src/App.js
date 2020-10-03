import React, {useState} from 'react';
import './App.css';

import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';
import WrapperHashtagHistory from './objects/WrapperHashtagHistory';
import HeaderGame from './components/HeaderGame';
import HashtagGame from './components/HashtagGame';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';
import HistoryGame from './components/HistoryGame';

const App = () => {
  const [activeAbout, setActiveAbout] = useState("")
  const [history, setHistory] = useState(["Start"]);
  const [active, setActive] = useState(false);

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  const addHistory = (player) => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`])};

  const showHideHistory = () => setActive(old => !!!old);

  const changeHistory = key => {
    setHistory(old => old.slice(0, key+1));
  };
  
  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd}/>

      <WrapperHashtagHistory active={active}>
        <HashtagGame callback={addHistory}/>
        <InputCheckbox onClick={showHideHistory} id="show" value="show" type="checkbox" content="Mostrar eventos" />
        <HistoryGame history={history} onClick={changeHistory}/>
      </WrapperHashtagHistory>

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove}/>
        <ProfileUser />
      </LayerDark>
    
    </main>
  )
};

export default App;
