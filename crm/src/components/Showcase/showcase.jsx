


import React, { Component } from "react";
import Slider from "react-slick";
import "./showcase.scss"



const Showcase = () => {



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="showcase">
            <Slider { ...settings }>
                <div className="item">
                    <div className="case">
                        <img src={ require( "../../images/back/show1.png" ) } className="showback" />
                        <div className="info">
                            <h2>Shop <span>Computer & experience</span></h2>
                            <p>You cannot inspect quality into the product; it is already there.
                                <br />
                                I am not a product of my circumstances. I am a product of my decisions.</p>
                            <button>View More</button>
                        </div>
                        <div className="sale">
                            <span>40% <br />
                                off</span>
                        </div>

                    </div>
                </div>
                <div className="item">
                    <div className="case">
                        <img src={ require( "../../images/back/show1.png" ) } className="showback" />
                        <div className="info">
                            <h2>Shop <span>Computer & experience</span></h2>
                            <p>You cannot inspect quality into the product; it is already there.
                                <br />
                                I am not a product of my circumstances. I am a product of my decisions.</p>
                            <button>View More</button>
                        </div>
                        <div className="sale">
                            <span>40% <br />
                                off</span>
                        </div>

                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Showcase
