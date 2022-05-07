import React, { useState } from 'react';
import './App.css';
import Person from './Person';

function App() {


  // hooks for each data type - num/str/arrays/objects
  const [num, setNum] = useState(0)
  const [people, setPeople] = useState(["Alice", "Bob", "Carol", "David", "Evan"])

  const changeNumHandler = () => {setNum(num + 1)}


  return (
    <div>
      <h1>React Review</h1>
      <p>Value of num: {num}</p>    
      <button onClick={changeNumHandler}>Change Num</button>
      <ul>
        {
          people.map((person, index) => (
             <Person 
                    index={index}
                    num={num}
                    person={person}
                    setNum={setNum}
            />
          ))
        }
      </ul>
    </div>
    )

  }

export default App;
