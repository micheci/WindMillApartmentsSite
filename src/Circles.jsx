import React from 'react'
import "./circle.css"

function Circles({text,pic}) {
  return (
    <div className='circle_container'>
        <img src={pic}></img>
        <p>{text}</p>
    </div>
  )
}

export default Circles