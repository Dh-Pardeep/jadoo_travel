import React from "react";
import Slider from "react-slick";
import Axon from '../assets/img/png/Axon.png'
import Jetstar from '../assets/img/png/Jetstar.png'
import Expida from '../assets/img/png/Expida.png'
import Qantas from '../assets/img/png/qantas.png'
import Alitali from '../assets/img/png/alitali.png'
import { Container } from "react-bootstrap";
export default function SimpleSlider() {
    var settings = {
        dots: false,
        arrow: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        pauseOnHover: true,
        autoplaySpeed: 0,
        autoplay: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
           <Container className="py-5"  data-aos="fade-down">
           <Slider {...settings} className="d-flex align-items-center">
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Axon} alt="Axon" />
                </div>
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Jetstar} alt="Jetstar" />
                </div>
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Expida} alt="Expida" />
                </div>
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Qantas} alt="Qantas" />
                </div>
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Alitali} alt="Alitali" />
                </div>
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Axon} alt="Axon" />
                </div>
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Jetstar} alt="Jetstar" />
                </div>
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Expida} alt="Expida" />
                </div>
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Qantas} alt="Qantas" />
                </div>
                <div className="c_pointer  ">
                    <img className="imgHover_1 " src={Alitali} alt="Alitali" />
                </div>
            </Slider>
           </Container>
    );
}