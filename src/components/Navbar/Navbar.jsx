import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [navBg, setNavBg] = useState(false);

    const changeNavBg = () => {
        window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])

    return (
        <header className={navBg ? 'scrolled' : null}>
            <nav>
                <h1 className='logo'>Logo</h1>
                <div className="nav-links">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Properties</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li><CiSearch className='icon' /></li>
                    </ul>
                    <button>Call Us: +123 456 789</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar