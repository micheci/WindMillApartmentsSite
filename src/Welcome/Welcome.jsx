import React from 'react'
import windmills from "../pics/windmills.webp"
import "./welcome.css"

function Welcome() {

  return (
    <div className='welcome-container'>
        <div className='background'>
          <h2 className='header2'>WELCOME TO</h2>
          <h1 className='header1'> WindMill Apartments</h1>
        </div>
       { /*<img  src={windmills} alt="windmills"/>*/}
        
        
        
    </div>
  )
}

export default Welcome