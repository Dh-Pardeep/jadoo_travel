import React from 'react'
import CalculatedWeather from '../assets/img/svg/CalculatedWeather.svg'
import Customization from '../assets/img/svg/Customization.svg'
import BestFlights from '../assets/img/png/FirstFlight.png'
import SideDots from '../assets/img/svg/SideDots.svg'
import { Col, Container, Row } from 'react-bootstrap'
function SectionOne() {
    return (
        <>
            <section className=' position-relative'>
                <img className=' position-absolute PositionSideDots' src={SideDots} alt="" />
                <Container>
                    <div className='text-center' data-aos="fade-down">
                        <h2 className=' ff_poppins fw-semibold fs_18 fst-normal color_282 pt-5'>CATEGORY</h2>
                        <p className=' ff_volkhov fs_50 fw-bold fst-normal color_83E pb-3 pb-lg-4 pb-xl-5'>We Offer Best Services</p>
                    </div>
                    <div className='d-flex justify-content-center '>
                        <div className='col-10 col-sm-12 '>
                            <Row className=" justify-content-center">
                                <Col sm={6} lg={4} xl={3} data-aos="flip-left"  className='px-3 px-sm-4 px-xl-3'>
                                    <div className='FullCard position-relative c_pointer'>
                                        <div className='smallBox position-absolute opacity-0'></div>
                                        <div className='CardHover'>
                                            <div className=' d-flex justify-content-center'>
                                                <img className='imgHover' src={CalculatedWeather} alt="Calculated Weather" />
                                            </div>
                                            <h2 className='fs_20 ff_open  fw-semibold fst-normal text-center color_D4C mb-0 pt-4'>Calculated Weather </h2>
                                            <p className='mt-3 text-center para_2 mx-auto fs_16 color_282'>Built Wicket longer admire do barton vanity itself do in it.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} lg={4} xl={3} data-aos="flip-left" className='px-3 px-sm-4 mt-5 mt-sm-0 px-xl-3' >
                                    <div className='FullCard position-relative c_pointer'>
                                        <div className='smallBox position-absolute opacity-0'></div>
                                        <div className='CardHover'>
                                            <div className=' d-flex justify-content-center'>
                                                <img className='imgHover BestFlights' src={BestFlights} alt="Calculated Weather" />
                                            </div>
                                            <h2 className='fs_20 ff_open  fw-semibold fst-normal text-center color_D4C mb-0 pt-4'>Best Flights</h2>
                                            <p className='mt-3 text-center para_3 mx-auto fs_16 color_282'>Engrossed listening. Park gate sell they west hard for the.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} lg={4} xl={3} data-aos="flip-left" className='px-3 px-sm-4 mt-5 mt-lg-0 px-xl-3' >
                                    <div className='FullCard position-relative c_pointer'>
                                        <div className='smallBox position-absolute opacity-0'></div>
                                        <div className='CardHover'>
                                            <div className=' d-flex justify-content-center'>
                                                <img className='imgHover' src={CalculatedWeather} alt="Calculated Weather" />
                                            </div>
                                            <h2 className='fs_20 ff_open  fw-semibold fst-normal text-center color_D4C mb-0 pt-4 mt-1'>Local Events</h2>
                                            <p className='mt-3 text-center para_2 mx-auto fs_16 color_282'>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} lg={4} xl={3} data-aos="flip-left" className='px-3 px-sm-4 my-5 mt-xl-0 px-xl-3' >
                                    <div className='FullCard position-relative c_pointer'>
                                        <div className='smallBox position-absolute opacity-0'></div>
                                        <div className='CardHover'>
                                            <div className=' d-flex justify-content-center'>
                                                <img className='imgHover w_92px' src={Customization} alt="Calculated Weather" />
                                            </div>
                                            <h2 className='fs_20 ff_open  fw-semibold fst-normal text-center color_D4C mb-0 pt-4 mt-1 '>Customization</h2>
                                            <p className='mt-3 text-center para_2 mx-auto fs_16 color_282'>We deliver outsourced
                                                aviation services for
                                                military customers</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default SectionOne