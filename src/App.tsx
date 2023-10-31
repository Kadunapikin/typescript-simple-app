import React from 'react';
import './App.css';

function App() {
  const name: string = 'Isaac';
  const age: number = 32;
  const isMarried: boolean = false;

//Adding a function
const getName = (name: string) => {
  if (name === 'Isaac') {
    return 32;
  }
}

  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>is {age} years old</h2>
      {isMarried}
      <button>Click me</button>

    </div>
  );
}

export default App;
