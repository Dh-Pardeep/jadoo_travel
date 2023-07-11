import React from 'react'
import Rome from '../assets/img/png/Rome,Italty.png'
import London from '../assets/img/png/London,UK.png'
import FullEurope from '../assets/img/png/FullEurope.png'
import SidelineSection3 from '../assets/img/svg/sectionthree_sideline.svg'
const SectionTwo = () => {
    return (
        <>
            <section>
                <div className=" container">
                    <div className='text-center ' data-aos="fade-down">
                        <h2 className=' ff_poppins fw-semibold fs_18 fst-normal color_282 pt-5'>Top Selling</h2>
                        <p className=' ff_volkhov fs_50 fw-bold fst-normal color_83E pb-3 pb-lg-4 pb-xl-5'>Top Destinations</p>
                    </div>
                    <div className="row mb-5 justify-content-center ">
                        <div className="col-10 col-sm-6 col-md-5 col-xl-4 px-sm-4" data-aos="flip-right">
                            <div className='Card_2 position-relative c_pointer'>
                             <div className='overflow-hidden border_redius_trip'>
                             <img className='Rome_card w-100 ' src={Rome} alt="Rome" />
                             </div>
                                <div className=' Card_broder_white position-absolute' >
                                    <div className=' d-flex align-items-center justify-content-between mb-3 pt-4  mx-4' >
                                        <h2 className=' ff_poppins fw-medium fs_18 fst-normal color_282'>Rome, Italty</h2>
                                        <h3 className=' ff_poppins fw-medium fs_18 fst-normal color_282'>$5,42k</h3>
                                    </div>
                                    <div className=' d-flex align-items-center mx-4'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0686 2.76033L11.1936 17.7603C11.136 17.886 11.0385 17.989 10.9162 18.0533C10.7939 18.1177 10.6537 18.1396 10.5176 18.1158C10.3814 18.092 10.2571 18.0237 10.1639 17.9217C10.0706 17.8197 10.0139 17.6896 10.0024 17.5519L9.4212 10.579L2.44826 9.99771C2.31054 9.98627 2.1805 9.92951 2.07847 9.8363C1.97644 9.7431 1.90818 9.61871 1.88436 9.48258C1.86054 9.34646 1.8825 9.20628 1.94682 9.08397C2.01113 8.96166 2.11417 8.86411 2.23982 8.80658L17.2398 1.93158C17.3558 1.87844 17.4852 1.86205 17.6108 1.88461C17.7363 1.90718 17.852 1.96762 17.9421 2.05781C18.0323 2.14801 18.0928 2.26365 18.1154 2.38919C18.1379 2.51474 18.1215 2.64418 18.0684 2.76014L18.0686 2.76033Z" fill="#080809" />
                                        </svg>
                                        <h3 className=' ff_poppins fw-medium fs_16 fst-normal color_282 mb-0 ms-3' >10 Days Trip</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-sm-6 col-md-5 col-xl-4 px-sm-4 my-5 mt-sm-0" data-aos="flip-right">
                            <div className='Card_2 position-relative c_pointer'>
                             <div className='overflow-hidden border_redius_trip'>
                             <img className='Rome_card w-100' src={London} alt="Rome" />
                             </div>
                                <div className=' Card_broder_white position-absolute' >
                                    <div className=' d-flex align-items-center justify-content-between mb-3 pt-4  mx-4' >
                                        <h2 className=' ff_poppins fw-medium fs_18 fst-normal color_282'>London, UK</h2>
                                        <h3 className=' ff_poppins fw-medium fs_18 fst-normal color_282'>$4.2k</h3>
                                    </div>
                                    <div className=' d-flex align-items-center mx-4'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0686 2.76033L11.1936 17.7603C11.136 17.886 11.0385 17.989 10.9162 18.0533C10.7939 18.1177 10.6537 18.1396 10.5176 18.1158C10.3814 18.092 10.2571 18.0237 10.1639 17.9217C10.0706 17.8197 10.0139 17.6896 10.0024 17.5519L9.4212 10.579L2.44826 9.99771C2.31054 9.98627 2.1805 9.92951 2.07847 9.8363C1.97644 9.7431 1.90818 9.61871 1.88436 9.48258C1.86054 9.34646 1.8825 9.20628 1.94682 9.08397C2.01113 8.96166 2.11417 8.86411 2.23982 8.80658L17.2398 1.93158C17.3558 1.87844 17.4852 1.86205 17.6108 1.88461C17.7363 1.90718 17.852 1.96762 17.9421 2.05781C18.0323 2.14801 18.0928 2.26365 18.1154 2.38919C18.1379 2.51474 18.1215 2.64418 18.0684 2.76014L18.0686 2.76033Z" fill="#080809" />
                                        </svg>
                                        <h3 className=' ff_poppins fw-medium fs_16 fst-normal color_282 mb-0 ms-3' >12 Days Trip</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-sm-6 col-md-5 col-xl-4 px-sm-4" data-aos="flip-right">
                            <div className='Card_2  position-relative c_pointer'>
                                <img className=' position-absolute SidelinePosition' src={SidelineSection3} alt="SidelineSection3  " />
                               <div className='overflow-hidden border_redius_trip'>
                               <img className='Rome_card w-100' src={FullEurope} alt="Rome" />
                               </div>
                                <div className=' Card_broder_white position-absolute' >
                                    <div className=' d-flex align-items-center justify-content-between mb-3 pt-4  mx-4' >
                                        <h2 className=' ff_poppins fw-medium fs_18 fst-normal color_282'>Full Europe</h2>
                                        <h3 className=' ff_poppins fw-medium fs_18 fst-normal color_282'>$15k</h3>
                                    </div>
                                    <div className=' d-flex align-items-center mx-4'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0686 2.76033L11.1936 17.7603C11.136 17.886 11.0385 17.989 10.9162 18.0533C10.7939 18.1177 10.6537 18.1396 10.5176 18.1158C10.3814 18.092 10.2571 18.0237 10.1639 17.9217C10.0706 17.8197 10.0139 17.6896 10.0024 17.5519L9.4212 10.579L2.44826 9.99771C2.31054 9.98627 2.1805 9.92951 2.07847 9.8363C1.97644 9.7431 1.90818 9.61871 1.88436 9.48258C1.86054 9.34646 1.8825 9.20628 1.94682 9.08397C2.01113 8.96166 2.11417 8.86411 2.23982 8.80658L17.2398 1.93158C17.3558 1.87844 17.4852 1.86205 17.6108 1.88461C17.7363 1.90718 17.852 1.96762 17.9421 2.05781C18.0323 2.14801 18.0928 2.26365 18.1154 2.38919C18.1379 2.51474 18.1215 2.64418 18.0684 2.76014L18.0686 2.76033Z" fill="#080809" />
                                        </svg>
                                        <h3 className=' ff_poppins fw-medium fs_16 fst-normal color_282 mb-0 ms-3' >28 Days Trip</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionTwo