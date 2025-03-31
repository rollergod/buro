import React from "react";
import Slider from "react-slick";
import '../styles/Contacts.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
    const {style, onClick} = props;
    return (
        <div onClick={onClick}
             style={{
                 ...style,
                 display: "flex",
                 justifyContent: 'center',
                 alignItems: 'center',
                 width: '60px',
                 height: '60px',
                 borderRadius: '50%',
                 border: '2px solid #000',
                 position: 'absolute',
                 top: '40%',
                 left: '35%',
                 zIndex: '1', cursor: 'pointer'
             }}>
            <img src={require('../images/left.png')} alt='#'/>
        </div>
    );
}

function SampleNextArrow(props) {
    const {style, onClick} = props;
    return (
        <div onClick={onClick}
             style={{
                 ...style,
                 display: "flex",
                 justifyContent: 'center',
                 alignItems: 'center',
                 width: '60px',
                 height: '60px',
                 borderRadius: '50%',
                 border: '2px solid #000',
                 position: 'absolute',
                 top: '40%', right: '35%', cursor: 'pointer'
             }}>
            <img src={require('../images/right.png')} alt='#'/>
        </div>
    );
}

export const Carousel: React.FC<{ images: string[] }> = ({images}) => {
    const settings = {
        variableWidth: true,
        className: "center",
        adaptiveHeight: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    return (
        <div>
            <Slider style={{marginTop: '100px'}} {...settings}>
                {
                    images.map((image, i) => (
                        <div key={i}>
                            <img style={{height: '500px'}} src={image} alt='#'/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}