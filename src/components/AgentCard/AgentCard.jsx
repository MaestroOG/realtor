import React from 'react'
import agent from '../../assets/agent.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './AgentCard.css'

const AgentCard = () => {
    return (
        <div className='agent-card'>
            <img src={agent} alt="" />
            <h2>James Bond</h2>
            <p>Real Estate Agent</p>
            <div className="icons">
                <FaFacebookF className='icon' />
                <FaInstagram className='icon' />
                <FaLinkedin className='icon' />
            </div>
        </div>
    )
}

export default AgentCard