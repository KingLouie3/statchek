import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import Players from './components/Players';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is This?'
  },
  {
    title: 'Why go to college',
    content: 'It is a scam my nigga'
  },
  {
    title: 'How do you use'
  }
]


function App() {
  return (
    <>
      <Searchbar />
      <Accordion items={items}/>
    </>
  );
}

export default App;
