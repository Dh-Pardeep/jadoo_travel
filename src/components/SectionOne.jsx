import React from 'react'
import CalculatedWeather from '../assets/img/svg/CalculatedWeather.svg'
import Customization from '../assets/img/svg/Customization.svg'
import BestFlights from '../assets/img/png/FirstFlight.png'
import SideDots from '../assets/img/svg/SideDots.svg'
function SectionOne() {
    return (
        <>
            <section className=' position-relative' >
                <img className=' position-absolute PositionSideDots' src={SideDots} alt="" />
                <div className="container">
                    <div className='text-center' data-aos="fade-down">
                        <h2 className=' ff_poppins fw-semibold fs_18 fst-normal color_282 pt-5'>CATEGORY</h2>
                        <p className=' ff_volkhov fs_50 fw-bold fst-normal color_83E pb-3 pb-lg-4 pb-xl-5'>We Offer Best Services</p>
                    </div>
                    <div className='d-flex justify-content-center'> 
                        <div className='col-10 col-sm-12 '>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3  px-4 mt-5" data-aos="flip-left">
                                <div className='FullCard position-relative c_pointer'>
                                    <div className='smallBox position-absolute opacity-0'></div>
                                    <div className='CardHover'>
                                        <div className=' d-flex justify-content-center'>
                                            <img className='imgHover' src={CalculatedWeather} alt="Calculated Weather" />
                                        </div>
                                        <h2 className='fs_20 ff_open  fw-semibold fst-normal text-center color_D4C pt-4 mt-1'>Calculated Weather </h2>
                                        <p className='mt-3 text-center para_2 mx-auto fs_16 color_282'>Built Wicket longer admire do barton vanity itself do in it.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3  px-4 mt-5" data-aos="flip-left">
                                <div className='FullCard position-relative c_pointer'>
                                    <div className='smallBox position-absolute opacity-0'></div>
                                    <div className='CardHover'>
                                        <div className=' d-flex justify-content-center'>
                                            <img className='imgHover' src={BestFlights} alt="Calculated Weather" />
                                        </div>
                                        <h2 className='fs_20 ff_open  fw-semibold fst-normal text-center color_D4C pt-4 mt-1'>Best Flights</h2>
                                        <p className='mt-3 text-center para_3 mx-auto fs_16 color_282'>Engrossed listening. Park gate sell they west hard for the.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3  px-4 mt-5" data-aos="flip-left">
                                <div className='FullCard position-relative c_pointer'>
                                    <div className='smallBox position-absolute opacity-0'></div>
                                    <div className='CardHover'>
                                        <div className=' d-flex justify-content-center'>
                                            <img className='imgHover' src={CalculatedWeather} alt="Calculated Weather" />
                                        </div>
                                        <h2 className='fs_20 ff_open  fw-semibold fst-normal text-center color_D4C pt-4 mt-1'>Local Events</h2>
                                        <p className='mt-3 text-center para_2 mx-auto fs_16 color_282'>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3  px-4 mt-5" data-aos="flip-left">
                                <div className='FullCard position-relative c_pointer'>
                                    <div className='smallBox position-absolute opacity-0'></div>
                                    <div className='CardHover'>
                                        <div className=' d-flex justify-content-center'>
                                            <img className='imgHover' src={Customization} alt="Calculated Weather" />
                                        </div>
                                        <h2 className='fs_20 ff_open  fw-semibold fst-normal text-center color_D4C pt-4 mt-1'>Customization</h2>
                                        <p className='mt-3 text-center para_2 mx-auto fs_16 color_282'>We deliver outsourced
                                            aviation services for
                                            military customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
                </div>
            </section>
        </>
    )
}

export default SectionOne