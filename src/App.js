import React from 'react';
import ClassComp from './ClassComp';
import Hooks from './Hooks'
import './App.css';
import Hooks2 from './Hooks2';
import Counter from './Counter';
import Faq from './Faq';
import Schalter from './Schalter';
import Mood from './Mood';
import RandomMood from './RandomMood';
import SuperBank from './Super_bank/SuperBank';


// Spread Operators, Array Destruction, hook useState

function App() {
  return (
    <div className="App">
      {/* <ClassComp /> */}
      <Hooks />
      <Hooks2 />
      <Counter />
      <Faq />
      <Schalter />
      <Mood />
      <RandomMood />
      <SuperBank />
    </div>
  );
}

export default App;
