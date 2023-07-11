import React from 'react'
import logo from '../assets/img/svg/Logo.svg'
const CaseTop = () => {
  return (
    <>
      <section className='position-sticky'>
        <div className='container'>
          <nav className='py-4'>
            <div className='d-flex justify-content-between'>
              <img className='z-3' src={logo} alt="Jadoo" />
              <input type="checkbox" id="iconBox" hidden />
              <label for="iconBox" class="nav_line_box">
                <span class="one"></span>
                <span class="two"></span>
                <span class="three"></span>
              </label>
              <ul className='d-flex align-items-center mb-0 lg_screen '>
                <li><a className=' ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative' href="#Desitnations">Desitnations</a></li>
                <li><a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative' href="#Hotels">Hotels</a></li>
                <li><a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative' href="#Flights">Flights</a></li>
                <li><a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative' href="#Bookings">Bookings</a></li>
                <li><a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative' href="#Login">Login</a></li>
                <li><a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover  sign_up_btn' href="#Signup">Sign up</a></li>
                <div class="dropdown ml_lg_45 ml_xl_70 mt-4 mt-lg-0 down_line position-relative svg_hover">
                  {/* <a class="me-2  ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    EN
                  </a>
                  <svg className='c_pointer' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832" />
                  </svg>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul> */}
                  
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default CaseTop