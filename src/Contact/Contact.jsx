import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div className='padding split'>
        <div className='contact-text left'>
            <h2 className='move-left'>Contact us</h2>
            <h3 className='move-left'>Address</h3>
            <p className='addy'>1305 East Woodrow Road
Slaton, Texas 79364</p>
            <h3 className='move-left'>Phone</h3>
            <p className='phone'>(806) 828-3866</p>
            <h3 className='move-left'>Email:</h3>
            <p className='email-p'>centuryheights@grassanoproperties.com</p>
        </div>

        <div className='contact-input right'>
            <p>Name:</p>
            <input type="text"></input>
            <p>Email:</p>
            <input type="email"></input>
            <p>Phone:</p>
            <input type="tel"></input>
            <p>Message:</p>
            <input type="text"></input>
        </div>
    </div>
  )
}

export default Contact