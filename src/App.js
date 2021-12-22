import React from 'react';
import './App.css';
import { ORIGINALS, ACTION, COMEDY, HORROR, ROMANCE, DOCUMENTARIES } from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={ORIGINALS} title='Netflix Originals' />
      <RowPost url={ACTION} title='Action' isSmall />
      <RowPost url={COMEDY} title='Comedy' isSmall />
      <RowPost url={HORROR} title='Horror' isSmall />
      <RowPost url={ROMANCE} title='Romance' isSmall />
      <RowPost url={DOCUMENTARIES} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
