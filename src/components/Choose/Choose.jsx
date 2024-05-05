import React from 'react'
import './Choose.css'
import ChooseCard from '../ChooseCards/ChooseCard'

const Choose = () => {
    return (
        <>
            <div className="prop-top">
                <small>Why Choose Us</small>
                <div className="prop-top-details">
                    <h2>Our property includes all the little details that makes your life a lot better</h2>
                </div>
            </div>
            <div className="data-wrapper">
                {cardData.map((card, index) => {
                    return <ChooseCard key={index} number={card.num} head={card.head} des={card.des} />
                })}
            </div>
            <div className="btn-container">
                <button className='choose-btn'>Learn More</button>
            </div>
        </>
    )
}

const cardData = [
    {
        num: "01",
        head: "Flexible lease lengths and start dates",
        des: "Get started by choosing from one of our pre-built page templates to showcase your properties. We offer leases as short as 3-months and you can start any day of the month."
    },
    {
        num: "02",
        head: "Flexible lease lengths and start dates",
        des: "Get started by choosing from one of our pre-built page templates to showcase your properties. We offer leases as short as 3-months and you can start any day of the month."
    },
    {
        num: "03",
        head: "Flexible lease lengths and start dates",
        des: "Get started by choosing from one of our pre-built page templates to showcase your properties. We offer leases as short as 3-months and you can start any day of the month."
    },
    {
        num: "04",
        head: "Flexible lease lengths and start dates",
        des: "Get started by choosing from one of our pre-built page templates to showcase your properties. We offer leases as short as 3-months and you can start any day of the month."
    },
];

export default Choose