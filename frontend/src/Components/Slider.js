import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import './Slider.css';
import { useState } from "react";
import { sliderItems } from "../data/slideData"

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div className='slider_container'>
            <div className='slider_arrow slider_arrowLeft' onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </div>
            <div className='slider_wrapper'>
                {sliderItems.map((item) => (
                    <div key={item.id} style={{ backgroundColor: item.bg, transform: `translateX(${slideIndex * -100}vw)` }} className='slider_content'>
                        <div className='slider_imageContainer'>
                            <img src={item.img} alt='Its a fashion pic' />
                        </div>
                        <div className='slider_infoContainer'>
                            <h1 className='slider_contentTitle'>{item.title}</h1>
                            <p className='slider_contentDescription'>{item.desc}</p>
                            <button className='slider_contentButton'>SHOW NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='slider_arrow slider_arrowRight' direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </div>
        </div >
    )
}

export default Slider