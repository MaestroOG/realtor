import React from 'react'
import './ChooseCard.css'

const ChooseCard = ({ number, head, des }) => {
    return (
        <div className='choose-container'>
            <div className="data-container">
                <div className="number">{number}</div>
                <h4>{head}</h4>
                <p>{des}</p>
            </div>
        </div>
    )
}



export default ChooseCard