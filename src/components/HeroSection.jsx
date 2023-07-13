import React from 'react'
import Traveller from '../assets/img/png/Traveller_heroSection.png'
import Plane from '../assets/img/svg/plane_1.svg'
import { Container, Row, Col } from 'react-bootstrap'
function HeroSection() {
    return (
        <>
            <section>
                <Container>
                    <Row className='align-items-center py-5 pt-lg-0 mb-5'>
                        <Col lg={6} >
                            <h2 className=' color_dangar ff_poppins fs_20 fw-bold fst-normal pt-md-4 pt-md-5'>Best Destinations around the world</h2>
                            <h1 className=' ff_volkhov fs_84 fw-bold fst-normal color_E4B pt-4'>Travel, <span className='down_line_enjoy position-relative z-n1'>enjoy</span> and live a new and full life</h1>
                            <p className=' color_282 ff_poppins fs_16 fw-medium py-4 my-2 para_1'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                            <div className=' d-flex flex-column flex-sm-row'>
                                <div>
                                    <a className='d-inline-block fs_18 ff_google FindOutMore color_white fw-medium' href="FindOutMore">Find out more</a>
                                </div>
                                <div className=' d-flex align-items-center mt-4 pt-2 mt-sm-0 pt-sm-0 ms-sm-4 ms-md-5'>
                                    <div class="play-button-outer ">
                                        <div class="play-button"></div>
                                    </div>
                                    <div className='ps-4'>
                                        <a className=' ff_poppins fw-medium fs_17 fst-normal color_D77 down_line position-relative' href="PlayDemo">Play Demo</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div className=' position-relative py-4 py-md-5 py-lg-0'>
                                <img className=' position-absolute plane_1' src={Plane} alt="Plane_image" />
                                <img className=' position-absolute plane_2' src={Plane} alt="Plane_image" />
                            </div>
                            <img className='traveller_image w-100' src={Traveller} alt="Traveller " />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HeroSection