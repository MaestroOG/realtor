import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <main className="hero">
            <div className="container">
                <div className="wrapper">
                    <div className="hero-text-container">
                        <h1 className='heading'>Browse the Top <span className="diff-color">Modern Modular </span>Homes</h1>
                        <p>Homofy is a modular home marketplace that helps you
                            find, compare, and purchase a prefab modular home.</p>
                        <button className='hero-btn'>Browse Home Now</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero