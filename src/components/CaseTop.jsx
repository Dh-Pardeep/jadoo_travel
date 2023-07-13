import React from 'react'
import logo from '../assets/img/svg/Logo.svg'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const CaseTop = () => {
  return (
    <>
      <section>
        <Container>
          <Navbar expand="lg">
            <Container className='py-3 px-0 py-md-4' >
              <Navbar.Brand href="#home"><img className='z-3 c_pointer' src={logo} alt="Jadoo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex align-items-center">
                  <a className=' ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative mt-5 mt-lg-0' href="#Desitnations">Desitnations</a>
                  <a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative' href="#Hotels">Hotels</a>
                  <a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative' href="#Flights">Flights</a>
                  <a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative' href="#Bookings">Bookings</a>
                  <a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover down_line position-relative' href="#Login">Login</a>
                  <a className='ml_lg_45 ml_xl_70 mt-4 mt-lg-0 ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover  sign_up_btn' href="#Signup">Sign up</a>
                  <div class="dropdown ml_lg_45 ml_xl_70 mt-4 mt-lg-0 down_line position-relative svg_hover">
                    <a class="me-2  ff_google fw-normal fst-normal color_832 fs_17 d-inline-block color_hover " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      EN
                    </a>
                    <svg className='c_pointer' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832" />
                    </svg>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </section>
    </>
  )
}

export default CaseTop