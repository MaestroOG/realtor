import React from 'react'
import './Agents.css'
import AgentCard from '../AgentCard/AgentCard'

const Agents = () => {
    return (
        <div className="prop-top">
            <div className="prop-top-details">
                <h2>Our Agents</h2>
                <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            </div>
            <div className="agent-card-container">
                <AgentCard />
                <AgentCard />
                <AgentCard />
            </div>
        </div>
    )
}

export default Agents