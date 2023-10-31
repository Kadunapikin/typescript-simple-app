import React from 'react';
import './App.css';

function App() {
  const name: string = 'Isaac';
  const age: number = 32;
  const isMarried: boolean = false;



  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>is {age} years old</h2>
      {isMarried}

    </div>
  );
}

export default App;
