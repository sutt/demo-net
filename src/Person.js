import React from 'react'

function Person({index, num, person, setNum}) {
    console.log(index)
    return (
        <li 
          key={index} 
          className={index === num ? "selected" : ""}
          
          onClick={() => {setNum(index)}}
          >
          {person}
        </li>
    )
}

export default Person