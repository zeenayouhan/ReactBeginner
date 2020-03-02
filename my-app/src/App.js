import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';



function App(props) {
  return (
    <div className="App">
      <p>hi {props.name}</p>
      
      
      < Clock />
    </div>
    
  );
}

export default App;
