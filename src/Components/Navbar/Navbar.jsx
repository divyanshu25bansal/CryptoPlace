import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { coinContext } from '../../context'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const {setCurrency} = useContext(coinContext)

return (
    <div className="navbar">
        <Link to={"/"} className="navbar-left">
            <img src={logo} alt="" />
        </Link>
        <div className="navbar-center">
            <Link to={'/'}>Home</Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </div>
        <div className="navbar-right">
            <select onChange={(e)=>setCurrency(e.target.value)}  name="" id="">
                <option  value="inr">INR</option>
                <option value="usd">USD</option>
            </select>
            <button>Sign-up
                <img src={arrow_icon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Navbar