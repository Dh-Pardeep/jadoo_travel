import React from "react";
import Slider from "react-slick";
import Miketaylor from '../assets/img/svg/Miketaylor.svg'
import { Container } from "react-bootstrap";
export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        infinite: true,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        autoplay: true,


    };
    return (
        <Container>
            <Slider {...settings} className="mb-xl-5">
                <div className="c_pointer" data-aos="fade-down">
                    <div className="row py-5 my-5 align-items-center">
                        <div className="col-12 col-md-6 col-xxl-5" data-aos="fade-right">
                            <h2 className=' ff_poppins fw-semibold fs_18 fst-normal color_282 mb-2'>Testimonials</h2>
                            <p className=' ff_volkhov fs_50 fw-bold fst-normal color_83E para_7'>What people say
                                about Us.</p>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="card_slider position-relative">
                                <img className=' position-absolute imgHover Miketaylor c_pointer' src={Miketaylor} alt="Mike taylor" />
                                <p className=' ff_poppins fs_16 fw-medium fst-normal color_282'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                <h2 className=' ff_poppins fs_18 fw-semibold fst-normal color_282 c_pointer'>Mike taylor</h2>
                                <h3 className=' ff_poppins fs_14  fw-medium fst-normal color_282 c_pointer'>Lahore, Pakistan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c_pointer" data-aos="fade-down">
                    <div className="row py-5 my-5 align-items-center">
                        <div className="col-12 col-md-6 col-xxl-5">
                            <h2 className=' ff_poppins fw-semibold fs_18 fst-normal color_282 mb-2'>Testimonials</h2>
                            <p className=' ff_volkhov fs_50 fw-bold fst-normal color_83E para_7'>What people say
                                about Us.</p>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="card_slider position-relative">
                                <img className=' position-absolute imgHover Miketaylor c_pointer' src={Miketaylor} alt="Mike taylor" />
                                <p className=' ff_poppins fs_16 fw-medium fst-normal color_282'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                <h2 className=' ff_poppins fs_18 fw-semibold fst-normal color_282 c_pointer'>Mike taylor</h2>
                                <h3 className=' ff_poppins fs_14  fw-medium fst-normal color_282 c_pointer'>Lahore, Pakistan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c_pointer" data-aos="fade-down">
                    <div className="row py-5 my-5 align-items-center">
                        <div className="col-12 col-md-6 col-xxl-5">
                            <h2 className=' ff_poppins fw-semibold fs_18 fst-normal color_282 mb-2'>Testimonials</h2>
                            <p className=' ff_volkhov fs_50 fw-bold fst-normal color_83E para_7'>What people say
                                about Us.</p>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="card_slider position-relative">
                                <img className=' position-absolute imgHover Miketaylor c_pointer' src={Miketaylor} alt="Mike taylor" />
                                <p className=' ff_poppins fs_16 fw-medium fst-normal color_282'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                <h2 className=' ff_poppins fs_18 fw-semibold fst-normal color_282 c_pointer'>Mike taylor</h2>
                                <h3 className=' ff_poppins fs_14  fw-medium fst-normal color_282 c_pointer'>Lahore, Pakistan</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </Container>
    );
}