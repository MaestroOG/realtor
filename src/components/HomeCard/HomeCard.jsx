import React from 'react'
import './HomeCard.css'
import house_img from '../../assets/house_img.webp'
import { FaBed } from "react-icons/fa";
import { MdOutlineBathtub } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";


const HomeCard = () => {
    return (
        <div className="home-card">
            <div className="card-container">
                <div className="card-top">
                    <img src={house_img} alt="" />
                </div>
                <div className="card-middle">
                    <p className="price">$ 9999</p>
                    <h3 className="title">Office</h3>
                    <div className="description">Get started by choosing from one of our pre-built page templates to showcase your properties</div>
                </div>
                <div className="card-bottom">
                    <div className="features">
                        <FaBed />
                        <p>2 Bedrooms</p>
                    </div>
                    <div className="features">
                        <MdOutlineBathtub />
                        <p>2 Bedrooms</p>
                    </div>
                    <div className="features">
                        <FaBuilding />
                        <p>2 Bedrooms</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard