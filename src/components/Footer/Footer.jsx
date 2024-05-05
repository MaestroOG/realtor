import React from 'react'
import './Footer.css'
import { FaFacebook, FaLink } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="flex flex-one">
                    <h1>Logo</h1>
                    <p>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum</p>
                    <div className="footer-social">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>
                <div className="flex flex-two">
                    <h2>Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
                <div className="flex flex-two">
                    <h2>Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
                <div className="flex flex-two">
                    <h2>Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
                <div className="flex flex-two">
                    <h2>Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
            <div className='love'>Made with ❤ by NexSync Labs.</div>
        </>
    )
}

export default Footer