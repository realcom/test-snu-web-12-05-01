import React from 'react';
import './App.css';

function App() {
  const fruits = ['banana', 'tomato', 'kiwi'];

  return (
    <div className="App">
      <ul>
        {
          fruits.map( fruit => {
            return <li className={fruit === 'banana' ? 'hungry' : 'full'}> {fruit} </li>;
          })
        }
      </ul>
    </div>
  );
}

export default App;
