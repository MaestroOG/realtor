import React from 'react'
import './Newsletter.css'
import newsletter_img from '../../assets/newletter_img.webp'

const Newsletter = () => {
    return (
        <div className='newletter'>
            <div className="newletter-left">
                <img src={newsletter_img} alt="" />
            </div>
            <div className="newletter-right">
                <div className="text-container">
                    <h2>Subscribe Newsletter</h2>
                    <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                    <form>
                        <input type="email" placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter