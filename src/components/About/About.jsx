import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.webp'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-img">
                    <img src={about_img} alt="" />
                </div>
            </div>
            <div className="about-right">
                <div className="about-text-container">
                    <small>About Us</small>
                    <h3>From more than 25 years we have provided real estate services with honesty trust and transparency</h3>
                    <p>Duis cursus, mi quis viverra ornare, eros pain, sometimes none at all, freedom of the living creature was as the profit and financial security. Jasmine neck adapter and just running it lorem makeup hairstyle. Now sad smile of the television set.</p>
                    <p>Duis cursus, mi quis viverra ornare, eros pain, sometimes none at all, freedom of the living creature was as the profit and financial security. Jasmine neck adapter and just running it lorem makeup hairstyle. Now sad smile of the television set.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About