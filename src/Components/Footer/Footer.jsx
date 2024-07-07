import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import facebook_icon from '../../assets/facebook_icon.png'
import play_store from '../../assets/play_store.png'
import twitter_icon from '../../assets/twitter_icon.png'
import app_store from '../../assets/app_store.png'


const Footer = () => {
  return (
    <div className="footer">
        <div className="download">
            <h2>Download our Official App</h2>
            <div className="download-img">
            <img src={play_store}alt="" />
            <img src={app_store} alt="" />
            </div>
        </div>
        <hr />
        {/* <div className="footer-center">
            <h3>Follow us</h3>
           <div className="footer-center-img">
           <img src={facebook_icon} alt="" />
           <img src={twitter_icon} alt="" />
           </div>
        </div> */}
        <div className="footer-bottom">
            <p>Copyright @ 2024, Cryptoplace - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer