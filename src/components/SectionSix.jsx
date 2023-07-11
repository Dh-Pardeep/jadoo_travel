import React from 'react'
import SendArrow from '../assets/img/svg/sendArroe.svg'
import Circel1 from '../assets/img/png/circel1.png'
import Circel2 from '../assets/img/png/circel2.png'
import EamilBackPicDoct from '../assets/img/png/emailbackpic.png'
const SectionSix = () => {
  return (
    <>
      <section >
         <div className="container py-5" data-aos="zoom-in">
          <div className='email_full_box my-5 position-relative'>
          <img src={EamilBackPicDoct} className='EamilBackPicDoct' alt="EamilBackPicDoct" />
            <img className='position-absolute Circel1 ' src={Circel1} alt="" />
            <img className='position-absolute Circel2' src={Circel2} alt="" />
            <img className='SendArrow position-absolute' src={SendArrow} alt="SendArrow" />
            <p className='ff_poppins fs_33  fw-semibold fst-normal text-center para_8 mx-auto color_282 pb-5 mb-0' >Subscribe to get information, latest news and other
              interesting offers about Jadoo</p>
            <div className='d-flex align-items-center flex-column flex-lg-row  justify-content-center '>
              <div className='d-flex align-items-center box_email '>
                <svg className='mx-4 c_pointer' width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6" stroke="#39425D" stroke-linecap="round" />
                  <rect x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D" />
                </svg>
                <input type='email' placeholder='Your email' className='email fs_14 fw-normal ff_montserrat fst-normal' />
              </div>
              <a className='d-inline-block fs_18 ff_open Subscribe color_white fw-medium mt-4 mt-lg-0 ms-lg-4' href="Subscribe">Subscribe</a>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default SectionSix
