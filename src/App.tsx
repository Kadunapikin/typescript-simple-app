import React, { FC, createContext } from 'react'
import './App.css';
import { Person, hairColor } from './component/Person';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: 'Abel',
    age: 36,
    country: 'Malagum'
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div>
      <Person name='Isaac' age={32} email='ibakoshi27@gmail.com' hairColor={hairColor.pink} />
    </div>
    </AppContext.Provider>
  )
}

export default App


//Introduction to typescript

// import React from 'react';
// import './App.css';

// function App() {
//   const name: string = 'Isaac';
//   const age: number = 32;
//   const isMarried: boolean = false;

// //Adding a function
// const getName = (name: string) => {
//   if (name === 'Isaac') {
//     return 32;
//   }
// }

//   return (
//     <div className="App">
//       <h1>{name}</h1>
//       <h2>is {age} years old</h2>
//       {isMarried}
//       <button>Click me</button>

//     </div>
//   );
// }

// export default App;
