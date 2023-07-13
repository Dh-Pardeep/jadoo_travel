import React from 'react'
import PlayStore from '../assets/img/svg/GooglePlay.svg'
import AppleStore from '../assets/img/svg/appleStore.svg'
import { Col, Container, Row } from 'react-bootstrap'
const FooterSection = () => {
    return (
        <>
            <section>
                <Container className='py-5'>
                    <Row className='my-5 pb-3 pt-5' >
                        <Col xs={12} lg={4} xl={3} data-aos="fade-right">
                            <h2 className='color_E4B ff_poppins fs_44 fst-normal fw-medium pb-1 c_pointer'>Jadoo.</h2>
                            <p className='para_9 fs_13 color_282 ff_poppins fst-normal pt-2'>Book your trip in minute, get full Control for much longer.</p>
                        </Col>
                        <Col xs={6} sm={4} lg={2} data-aos="zoom-in">
                            <ul className='ps-0'>
                                <li className='ff_poppins fs_21 fst-normal fw-bold color_black mb-4'>Company</li>
                                <li><a className='ff_poppins_fs_18 fst-normal fw-medium color_282 d-inline-block color_hover down_line position-relative' href="Company">About</a></li>
                                <li><a className='ff_poppins_fs_18 fst-normal fw-medium color_282 d-inline-block color_hover a_padding down_line position-relative' href="Careers">Careers</a></li>
                                <li><a className='ff_poppins_fs_18 fst-normal fw-medium color_282 d-inline-block color_hover down_line position-relative' href="Mobile">Mobile</a></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={4} lg={3} xl={2} className='ps-lg-5 ms-lg-4 ps-xl-0 ms-xl-0'>
                            <ul className='ps-0'>
                                <li className='ff_poppins fs_21 fst-normal fw-bold color_black mb-4'>Mobile</li>
                                <li><a className='ff_poppins_fs_18 fst-normal fw-medium color_282 d-inline-block color_hover down_line position-relative' href="Company">Help/FAQ </a></li>
                                <li><a className='ff_poppins_fs_18 fst-normal fw-medium color_282 d-inline-block color_hover down_line position-relative a_padding' href="Careers">Press</a></li>
                                <li><a className='ff_poppins_fs_18 fst-normal fw-medium color_282 d-inline-block color_hover down_line position-relative' href="Mobile">Affilates</a></li>
                            </ul>
                        </Col>
                        <Col sm={4}  lg={2} xl={2} className='' data-aos="zoom-in">
                            <ul className='ps-0'>
                                <li className='ff_poppins fs_21 fst-normal fw-bold color_black mb-4'>More</li>
                                <li><a className='ff_poppins_fs_18 fst-normal fw-medium color_282 d-inline-block color_hover down_line position-relative' href="Company">Airlinefees</a></li>
                                <li><a className='ff_poppins_fs_18 fst-normal fw-medium color_282 d-inline-block color_hover down_line position-relative a_padding' href="Careers">Airline</a></li>
                                <li><a className='ff_poppins_fs_18 fst-normal fw-medium color_282 d-inline-block color_hover down_line position-relative' href="Mobile">Low fare tips</a></li>
                            </ul>
                        </Col>
                        <Col xl={3} className='mt-4' data-aos="fade-left">
                            <a className='d-inline-block svg_filter_hover' href=""><svg className='footer_soicalApp' width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53708 2.24446C5.21702 2.14321 4.84895 2.0757 4.51288 2.0757C4.0968 2.0757 3.20062 2.36259 3.20062 2.91948V4.25266H5.32904V6.49712H3.20062V12.6905H1.05621V6.49712H0V4.25266H1.05621V3.12199C1.05621 1.41755 1.79235 0 3.5687 0C4.17681 0 5.26503 0.0337513 5.85714 0.253134L5.53708 2.24446Z" fill="#080809" />
                            </svg></a>
                            <a className='d-inline-block svg_filter_hover mx-4' href="">
                                <svg className='footer_soicalApp Social_p' width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4031 3.979C18.1311 3.979 17.8651 4.05994 17.6389 4.21157C17.4127 4.36321 17.2365 4.57873 17.1323 4.8309C17.0282 5.08306 17.001 5.36053 17.0541 5.62822C17.1071 5.89592 17.2381 6.14181 17.4305 6.33481C17.6229 6.5278 17.8679 6.65924 18.1348 6.71248C18.4016 6.76573 18.6781 6.7384 18.9295 6.63395C19.1808 6.5295 19.3956 6.35263 19.5467 6.12569C19.6979 5.89875 19.7785 5.63194 19.7785 5.359C19.7785 4.993 19.6336 4.64199 19.3757 4.38319C19.1177 4.12439 18.7679 3.979 18.4031 3.979ZM23.6756 6.762C23.6533 5.80784 23.4752 4.86381 23.1484 3.9675C22.8569 3.2006 22.4033 2.50617 21.8188 1.932C21.2512 1.34254 20.5575 0.890303 19.79 0.6095C18.899 0.271585 17.957 0.0887915 17.0047 0.0689999C15.7897 -6.42613e-08 15.4 0 12.2824 0C9.16468 0 8.77497 -6.42613e-08 7.56 0.0689999C6.60768 0.0887915 5.66571 0.271585 4.77472 0.6095C4.00868 0.893146 3.31552 1.34499 2.74594 1.932C2.15842 2.50145 1.70768 3.19751 1.4278 3.9675C1.091 4.86144 0.908811 5.80653 0.889085 6.762C0.820312 7.981 0.820312 8.372 0.820312 11.5C0.820312 14.628 0.820312 15.019 0.889085 16.238C0.908811 17.1935 1.091 18.1386 1.4278 19.0325C1.70768 19.8025 2.15842 20.4985 2.74594 21.068C3.31552 21.655 4.00868 22.1069 4.77472 22.3905C5.66571 22.7284 6.60768 22.9112 7.56 22.931C8.77497 23 9.16468 23 12.2824 23C15.4 23 15.7897 23 17.0047 22.931C17.957 22.9112 18.899 22.7284 19.79 22.3905C20.5575 22.1097 21.2512 21.6575 21.8188 21.068C22.4059 20.496 22.8599 19.8009 23.1484 19.0325C23.4752 18.1362 23.6533 17.1922 23.6756 16.238C23.6756 15.019 23.7444 14.628 23.7444 11.5C23.7444 8.372 23.7444 7.981 23.6756 6.762ZM21.6125 16.1C21.6041 16.83 21.4723 17.5533 21.2228 18.239C21.0397 18.7395 20.7458 19.1917 20.3631 19.5615C19.9913 19.9416 19.5415 20.2359 19.045 20.424C18.3615 20.6744 17.6406 20.8066 16.913 20.815C15.7668 20.8725 15.3427 20.884 12.3282 20.884C9.31369 20.884 8.88959 20.884 7.74339 20.815C6.98791 20.8292 6.23567 20.7125 5.51975 20.47C5.04497 20.2723 4.6158 19.9787 4.25893 19.6075C3.87849 19.2381 3.58822 18.7855 3.41074 18.285C3.1309 17.5894 2.97569 16.8497 2.95225 16.1C2.95225 14.95 2.88348 14.5245 2.88348 11.5C2.88348 8.4755 2.88348 8.05 2.95225 6.9C2.95739 6.15371 3.09318 5.41414 3.35343 4.715C3.55521 4.2296 3.86494 3.79691 4.25893 3.45C4.60716 3.05459 5.03753 2.74056 5.51975 2.53C6.21842 2.27705 6.9548 2.14484 7.69754 2.139C8.84375 2.139 9.26784 2.07 12.2824 2.07C15.2969 2.07 15.721 2.07 16.8672 2.139C17.5948 2.14737 18.3156 2.27958 18.9991 2.53C19.52 2.72395 19.9875 3.03927 20.3631 3.45C20.7387 3.80326 21.0322 4.23514 21.2228 4.715C21.4775 5.41527 21.6094 6.15455 21.6125 6.9C21.6698 8.05 21.6812 8.4755 21.6812 11.5C21.6812 14.5245 21.6698 14.95 21.6125 16.1ZM12.2824 5.6005C11.1199 5.60277 9.98418 5.9507 9.01872 6.60033C8.05326 7.24996 7.30139 8.17213 6.8581 9.25032C6.41481 10.3285 6.3 11.5143 6.52818 12.658C6.75635 13.8016 7.31727 14.8517 8.14006 15.6756C8.96285 16.4995 10.0106 17.0603 11.1509 17.287C12.2912 17.5137 13.4729 17.3962 14.5467 16.9493C15.6204 16.5025 16.5381 15.7463 17.1837 14.7764C17.8293 13.8065 18.1738 12.6663 18.1739 11.5C18.1754 10.7239 18.0239 9.9551 17.7283 9.2379C17.4326 8.5207 16.9985 7.86923 16.451 7.32096C15.9034 6.77269 15.2533 6.33843 14.5379 6.04317C13.8225 5.74791 13.0559 5.59747 12.2824 5.6005ZM12.2824 15.3295C11.5275 15.3295 10.7895 15.1049 10.1618 14.6841C9.53415 14.2633 9.04493 13.6652 8.75604 12.9655C8.46715 12.2657 8.39156 11.4958 8.53884 10.7529C8.68611 10.0101 9.04963 9.3277 9.58343 8.79213C10.1172 8.25657 10.7973 7.89184 11.5377 7.74408C12.2781 7.59632 13.0456 7.67216 13.743 7.962C14.4404 8.25185 15.0366 8.74269 15.456 9.37244C15.8754 10.0022 16.0992 10.7426 16.0992 11.5C16.0992 12.0029 16.0005 12.5009 15.8087 12.9655C15.6169 13.4301 15.3357 13.8523 14.9813 14.2079C14.6269 14.5635 14.2061 14.8455 13.743 15.038C13.2799 15.2304 12.7836 15.3295 12.2824 15.3295Z" fill="black" />
                                </svg>
                            </a>
                            <a className='d-inline-block svg_filter_hover' href=""> <svg className='footer_soicalApp' width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z" fill="#080809" />
                            </svg>
                            </a>
                            <p className=' fs_20 color_282 ff_poppins fst-medium pt-4'>Discover our app</p>
                            <div>
                                <a className='PlatStore' href="#">
                                    <img src={PlayStore} alt="" />
                                </a>
                                <a className='AppleStore ms-2' href="#">
                                    <img src={AppleStore} alt="" />
                                </a>

                                <a className='BackToTop' href="BackToTop"></a>
                            </div>
                        </Col>
                    </Row>
                    <p className='fs_14 color_282 ff_poppins fst-normal pt-2 text-center'>All rights reserved@jadoo.co</p>
                </Container>
            </section>
        </>
    )
}

export default FooterSection


