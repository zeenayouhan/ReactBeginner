import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Click from './Click';
import ColoredBlock from './ColoredBlock';



function App(props) {
  return (
    <div className="App">
      <p>hi {props.name}</p>
      
      
      < Clock />
      < ColoredBlock/>
      < Click />
    </div>
    
  );
}

export default App;
