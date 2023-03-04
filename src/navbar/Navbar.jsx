import React from 'react';
import Circles from '../Circles';
import logo1 from "../pics/logo1.png"
import Pay from "../pics/Pay.png"
import Portal from "../pics/Portal.png"
import Availability from "../pics/Availability.png"
import "./navbar.css"
import hamburgericon from "../pics/hamburger-icon.png"

function Navbar() {
  return (
    <div className='Navbar-container'>
        <div className='Navbar-logo'>
            <img src={logo1} alt="logo"/>
        </div>
        <div className='pay-portal-avalibility'>
            <Circles text="PAY RENT ONLINE" pic={Pay}/>
            <Circles text="RESIDENT PORTAL" pic={Portal}/>
            <Circles text="AVAILABILITY" pic={Availability}/>
        </div>
        <div className='Navbar-settings'>
            <img src={hamburgericon}/>
        </div>
    </div>
  )
}

export default Navbar