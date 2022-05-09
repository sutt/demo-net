import React, { useState } from 'react';
import './App.css';
import Person from './Person';

function App() {


  // hooks for each data type - num/str/arrays/objects
  const [num, setNum] = useState(0)
  const [people, setPeople] = useState(["Alice", "Bob", "Carol", "David", "Evan"])
  
  const [subForm, setSubForm] = useState(
    {
      winner: {name:"Alice", points:10},
      loser: {name:"Bob", points:6},
    }
  )

  const formHandler = (winStatus, points) => {
    setSubForm(
      {...subForm, 
        [winStatus]: {
          ...subForm[winStatus],
           points: points
          }
      }
    )
  }
  const [gifs, setGifs] = useState(
    [{
      "name": "Beyonce Lemonade Gif",
      "url": "https://media.giphy.com/media/3o6ozBUuLfzTCngAFi/giphy.gif",
      "tags": ["Beyonce", "Bey"]
  }, {
      "name": "Kim Kardashian Emoji Gif",
      "url": "https://media.giphy.com/media/jyllN0iwpqydi/giphy.gif",
      "tags": ["phone", "emoji", "kim kardashian"]
  }, {
      "name": "Help Me Cat",
      "url": "https://media.giphy.com/media/phJ6eMRFYI6CQ/giphy.gif",
      "tags": ["cat", "kitten", "help", "rescue", "help me"]
  }, {
      "name": "Mean Girls Gif",
      "url": "https://media.giphy.com/media/iDcDa0KQD8Gpq/giphy.gif",
      "tags": ["mean girls", "wednesdays", "karen", "pink"]
  }]
  )
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
      {gifs.map(item => <img src={item.url} />)}

    </div>
    )

  }

export default App;
