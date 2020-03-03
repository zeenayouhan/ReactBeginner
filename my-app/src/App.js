import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Click from './Click';



function App(props) {
  return (
    <div className="App">
      <p>hi {props.name}</p>
      
      
      < Clock />
      < Click />
    </div>
    
  );
}

export default App;
