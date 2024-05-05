import React from 'react'
import './Properties.css'
import HomeCard from '../HomeCard/HomeCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Properties = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 860,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };
    return (
        <div className="properties">
            <div className="prop-top">
                <small>Properties</small>
                <div className="prop-top-details">
                    <h2>Display Latest & Featured Properties</h2>
                    <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                </div>
            </div>
            <div className="prop-bottom">
                <Slider {...settings}>
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                </Slider>
            </div>
        </div>
    )
}

export default Properties