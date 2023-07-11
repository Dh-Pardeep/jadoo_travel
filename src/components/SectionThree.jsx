import React from 'react'
import ChooseDestination from '../assets/img/svg/ChooseDestination.svg'
import MakePayment from '../assets/img/svg/MakePayment.svg'
import ReachAirport from '../assets/img/svg/ReachAirport.svg'
import TripToGreece from '../assets/img/png/TripToGreece.png'
import Triptorome from '../assets/img/svg/Triptorome.svg'
import BGBlue from '../assets/img/png/blue_blur.png'
const SectionThree = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center pb-5">
            <div className="col-12 col-lg-6 " data-aos="fade-right">
              <h2 className=' ff_poppins fw-semibold fs_18 fst-normal color_282 pt-5'>Easy and Fast</h2>
              <p className=' ff_volkhov fs_50 fw-bold fst-normal color_83E  mt-3 para_4 mb-4'>Book your next trip
                in 3 easy steps</p>
              <div className='mt-2'>
                <div className=' d-flex  align-items-start' data-aos="fade-left">
                  <img className=' c_pointer imgHover' src={ChooseDestination} alt="Choose Destination" />
                  <div className='d-flex flex-column ms-4'>
                    <h2 className='mb-0 ff_poppins fs_16 fw-bold fst-normal color_282 c_pointer'>Choose Destination</h2>
                    <p className='ff_poppins fs_16 fw-normal fst-normal color_282 para_5 mt-1'>Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Urna, tortor tempus. </p>
                  </div>
                </div>
                <div className=' d-flex  align-items-start mt-5' data-aos="fade-left">
                  <img className=' c_pointer imgHover' src={MakePayment} alt="Choose Destination" />
                  <div className='d-flex flex-column ms-4'>
                    <h2 className='mb-0 ff_poppins fs_16 fw-bold fst-normal color_282 c_pointer'>Make Payment</h2>
                    <p className='ff_poppins fs_16 fw-normal fst-normal color_282 para_5 mt-1'>Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Urna, tortor tempus. </p>
                  </div>
                </div>
                <div className=' d-flex  align-items-start mt-5' data-aos="fade-left">
                  <img className=' c_pointer imgHover' src={ReachAirport} alt="Choose Destination" />
                  <div className='d-flex flex-column ms-4'>
                    <h2 className='mb-0 ff_poppins fs_16 fw-bold fst-normal color_282 c_pointer'>Reach Airport on Selected Date</h2>
                    <p className='ff_poppins fs_16 fw-normal fst-normal color_282 para_5 mt-1'>Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Urna, tortor tempus. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4 mt-5" data-aos="fade-left">
            <div className='position-relative'>
            <img className=' position-absolute z-z3 w-40 BGBlue' src={BGBlue} alt="BGBlue" />
              <div className=" card_3 p-4 position-relative c_pointer">
                <div className="SmallCard position-absolute c_pointer">
                  <div className='d-flex align-items-start'>
                    <img className='Triptorome' src={Triptorome} alt="Trip to rome" />
                    <div className='ms-3'>
                      <h4 className=' ff_poppins fs_14 fst-normal fw-medium color_29A'>Ongoing</h4>
                      <h2 className='ff_poppins fs_18 fst-normal fw-medium color_809 mt-1  mb-0'>Trip To rome</h2>
                      <h5 className='mb-1 mt-3'><span className='span_1'>40%</span> completed</h5>
                      <svg width="156" height="5" viewBox="0 0 156 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="156" height="5" rx="2.5" fill="#F5F5F5" />
                        <rect width="73" height="5" rx="2.5" fill="#8A79DF" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=' overflow-hidden border_redius_trip'> <img className='w-100 TripToGreece ' src={TripToGreece} alt="Trip To Greece" /></div>
                <h2 className='ff_poppins fs_18 fst-normal fw-medium color_809 pt-4 pb-3 mb-0'>Trip To Greece</h2>
                <div className='d-flex align-items-center'>
                  <h3 className=' ff_poppins fs_18 fst-normal fw-medium color_29A Border_right position-relative '>14-29 June</h3>
                  <h4 className=' ff_poppins fs_18 fst-normal fw-medium color_29A ms-3'>by Robbin joseph</h4>
                </div>
                <div className='pt-3'>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#F5F5F5" />
                    <g clip-path="url(#clip0_1722_793)">
                      <path d="M24.6547 12.1508C24.2859 12.0429 15.2628 11.1445 12.094 15.4257C10.6905 17.3222 10.6695 19.9221 12.0236 23.1525C11.6801 23.8655 11.3794 24.6166 11.1343 25.4091C11.0598 25.6499 11.1946 25.9052 11.4351 25.9795C11.48 25.9934 11.5254 26 11.5702 26C11.7647 26 11.9453 25.8744 12.0055 25.6787C14.4207 17.8703 22.2697 14.0927 24.6766 13.1383C24.9108 13.0454 25.2239 12.3174 24.6547 12.1508Z" fill="#84829A" />
                      <path d="M13.4717 24.1296C14.7781 24.6777 16.0843 24.9586 17.299 24.9586C18.3908 24.9586 19.409 24.7341 20.2864 24.2789C22.0522 23.3629 23.1313 21.6107 23.4068 19.2112C23.6876 16.7658 24.0371 15.234 24.3286 14.297C21.7333 15.4942 16.1685 18.5973 13.4717 24.1296Z" fill="#84829A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1722_793">
                        <rect width="14" height="14" fill="white" transform="translate(11 12)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg className='mx-3' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#F5F5F5" />
                    <g clip-path="url(#clip0_1722_807)">
                      <path d="M23.501 11C23.4233 11 23.3467 11.018 23.2773 11.0527L19.4883 12.9477L15.2039 11.0432C15.1969 11.0403 15.1889 11.0397 15.1814 11.0367C15.1621 11.0295 15.1424 11.0235 15.1224 11.0187C15.1025 11.0134 15.0823 11.0092 15.0619 11.0062C15.0213 11.0029 14.9805 11.0029 14.9399 11.0062C14.9195 11.0092 14.8993 11.0134 14.8794 11.0187C14.8594 11.0235 14.8397 11.0295 14.8204 11.0367C14.8129 11.0397 14.8049 11.0402 14.7979 11.0432L10.298 13.0432C10.1173 13.1234 10.0009 13.3026 10.001 13.5002V24.5C10.0011 24.6692 10.0866 24.8268 10.2285 24.919C10.3703 25.0114 10.5492 25.0257 10.7039 24.957L15.0009 23.047L19.2978 24.957C19.3053 24.96 19.3133 24.957 19.3208 24.9615C19.4419 25.0157 19.5808 25.0126 19.6993 24.953C19.7073 24.9496 19.7163 24.953 19.7243 24.9475L23.7242 22.9476C23.8937 22.8629 24.0008 22.6896 24.0007 22.5V11.5002C24.0009 11.2241 23.7771 11.0001 23.501 11ZM14.5009 22.1751L11.001 23.7305V13.8252L14.5009 12.2697V22.1751ZM19.0008 23.7305L15.5009 22.1751V12.2697L19.0008 13.8252V23.7305ZM23.0008 22.1911L20.0008 23.691V13.8092L23.0008 12.3092V22.1911V22.1911Z" fill="#84829A" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1722_807">
                        <rect width="14" height="14" fill="white" transform="translate(10 11)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#F5F5F5" />
                    <path d="M23.3429 13.2425L17.0254 19.5833C16.953 19.5414 16.8768 19.5062 16.7979 19.4783L12.6271 18.0667C12.5009 18.0351 12.389 17.9622 12.309 17.8597C12.229 17.7572 12.1855 17.6309 12.1855 17.5008C12.1855 17.3708 12.229 17.2445 12.309 17.142C12.389 17.0395 12.5009 16.9666 12.6271 16.935L22.9754 13.2542C23.043 13.2312 23.114 13.2194 23.1854 13.2192C23.2388 13.2183 23.292 13.2262 23.3429 13.2425Z" fill="#84829A" />
                    <path d="M23.7461 14.0241L20.0653 24.3841C20.0247 24.5049 19.9457 24.609 19.8404 24.6806C19.735 24.7522 19.6091 24.7874 19.4819 24.7808C19.3533 24.7867 19.2263 24.7498 19.1207 24.6759C19.0152 24.6021 18.9371 24.4954 18.8986 24.3725L17.5103 20.2016C17.4824 20.1227 17.4472 20.0465 17.4053 19.9741L23.7578 13.6566C23.7936 13.7772 23.7895 13.9061 23.7461 14.0241Z" fill="#84829A" />
                  </svg>
                </div>
                <div className='d-flex align-items-center mt-3 pt-3 mb-4 pb-1'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.266666 15.4667H1.86667V6.66667C1.86667 6.5194 1.98607 6.4 2.13333 6.4H5.86667V0.266667C5.86667 0.1194 5.98607 0 6.13333 0H13.0667C13.2139 0 13.3333 0.1194 13.3333 0.266667V15.4667H15.7333C15.8806 15.4667 16 15.5861 16 15.7333C16 15.8806 15.8806 16 15.7333 16H0.266666C0.119399 16 -8.34465e-07 15.8806 -8.34465e-07 15.7333C-8.34465e-07 15.5861 0.119399 15.4667 0.266666 15.4667ZM10.4 15.4667H11.4667V13.0667C11.4667 12.9194 11.3473 12.8 11.2 12.8H10.6667C10.5194 12.8 10.4 12.9194 10.4 13.0667V15.4667ZM9.33333 6.66667V15.4667H9.86667V13.0667C9.86667 12.6248 10.2248 12.2667 10.6667 12.2667H11.2C11.6418 12.2667 12 12.6248 12 13.0667V15.4667H12.8V0.533333H6.4V6.4H9.06667C9.21393 6.4 9.33333 6.5194 9.33333 6.66667ZM2.4 15.4667H8.8V6.93333H2.4V15.4667Z" fill="#84829A" />
                    <path d="M7.46634 3.7334H9.06634C9.21361 3.7334 9.33301 3.8528 9.33301 4.00007V5.60007C9.33301 5.74733 9.21361 5.86673 9.06634 5.86673H7.46634C7.31907 5.86673 7.19967 5.74733 7.19967 5.60007V4.00007C7.19967 3.8528 7.31907 3.7334 7.46634 3.7334ZM7.73301 5.3334H8.79967V4.26673H7.73301V5.3334Z" fill="#84829A" />
                    <path d="M7.46634 1.06665H9.06634C9.21361 1.06665 9.33301 1.18605 9.33301 1.33332V2.93332C9.33301 3.08058 9.21361 3.19998 9.06634 3.19998H7.46634C7.31907 3.19998 7.19967 3.08058 7.19967 2.93332V1.33332C7.19967 1.18605 7.31907 1.06665 7.46634 1.06665ZM7.73301 2.66665H8.79967V1.59998H7.73301V2.66665Z" fill="#84829A" />
                    <path d="M10.1333 3.7334H11.7333C11.8806 3.7334 12 3.8528 12 4.00007V5.60007C12 5.74733 11.8806 5.86673 11.7333 5.86673H10.1333C9.98607 5.86673 9.86667 5.74733 9.86667 5.60007V4.00007C9.86667 3.8528 9.98607 3.7334 10.1333 3.7334ZM10.4 5.3334H11.4667V4.26673H10.4V5.3334Z" fill="#84829A" />
                    <path d="M10.1333 1.06665H11.7333C11.8806 1.06665 12 1.18605 12 1.33332V2.93332C12 3.08058 11.8806 3.19998 11.7333 3.19998H10.1333C9.98607 3.19998 9.86667 3.08058 9.86667 2.93332V1.33332C9.86667 1.18605 9.98607 1.06665 10.1333 1.06665ZM10.4 2.66665H11.4667V1.59998H10.4V2.66665Z" fill="#84829A" />
                    <path d="M10.1333 6.3999H11.7333C11.8806 6.3999 12 6.5193 12 6.66657V8.26657C12 8.41384 11.8806 8.53324 11.7333 8.53324H10.1333C9.98607 8.53324 9.86667 8.41384 9.86667 8.26657V6.66657C9.86667 6.5193 9.98607 6.3999 10.1333 6.3999ZM10.4 7.9999H11.4667V6.93324H10.4V7.9999Z" fill="#84829A" />
                    <path d="M10.1333 9.06665H11.7333C11.8806 9.06665 12 9.18605 12 9.33332V10.9333C12 11.0806 11.8806 11.2 11.7333 11.2H10.1333C9.98607 11.2 9.86667 11.0806 9.86667 10.9333V9.33332C9.86667 9.18605 9.98607 9.06665 10.1333 9.06665ZM10.4 10.6667H11.4667V9.59998H10.4V10.6667Z" fill="#84829A" />
                    <path d="M5.06634 12.2666H3.46634C3.31907 12.2666 3.19967 12.1472 3.19967 12V10.4C3.19967 10.2527 3.31907 10.1333 3.46634 10.1333H5.06634C5.21361 10.1333 5.33301 10.2527 5.33301 10.4V12C5.33301 12.1472 5.21361 12.2666 5.06634 12.2666ZM4.79967 10.6666H3.73301V11.7333H4.79967V10.6666Z" fill="#84829A" />
                    <path d="M5.06634 9.59989H3.46634C3.31907 9.59989 3.19967 9.48049 3.19967 9.33322V7.73322C3.19967 7.58595 3.31907 7.46655 3.46634 7.46655H5.06634C5.21361 7.46655 5.33301 7.58595 5.33301 7.73322V9.33322C5.33301 9.48049 5.21361 9.59989 5.06634 9.59989ZM4.79967 7.99989H3.73301V9.06655H4.79967V7.99989Z" fill="#84829A" />
                    <path d="M5.06634 14.9334H3.46634C3.31907 14.9334 3.19967 14.814 3.19967 14.6667V13.0667C3.19967 12.9194 3.31907 12.8 3.46634 12.8H5.06634C5.21361 12.8 5.33301 12.9194 5.33301 13.0667V14.6667C5.33301 14.814 5.21361 14.9334 5.06634 14.9334ZM4.79967 13.3334H3.73301V14.4H4.79967V13.3334Z" fill="#84829A" />
                    <path d="M7.73333 12.2666H6.13333C5.98607 12.2666 5.86667 12.1472 5.86667 12V10.4C5.86667 10.2527 5.98607 10.1333 6.13333 10.1333H7.73333C7.8806 10.1333 8 10.2527 8 10.4V12C8 12.1472 7.8806 12.2666 7.73333 12.2666ZM7.46667 10.6666H6.4V11.7333H7.46667V10.6666Z" fill="#84829A" />
                    <path d="M7.73333 9.59989H6.13333C5.98607 9.59989 5.86667 9.48049 5.86667 9.33322V7.73322C5.86667 7.58595 5.98607 7.46655 6.13333 7.46655H7.73333C7.8806 7.46655 8 7.58595 8 7.73322V9.33322C8 9.48049 7.8806 9.59989 7.73333 9.59989ZM7.46667 7.99989H6.4V9.06655H7.46667V7.99989Z" fill="#84829A" />
                    <path d="M7.73333 14.9334H6.13333C5.98607 14.9334 5.86667 14.814 5.86667 14.6667V13.0667C5.86667 12.9194 5.98607 12.8 6.13333 12.8H7.73333C7.8806 12.8 8 12.9194 8 13.0667V14.6667C8 14.814 7.8806 14.9334 7.73333 14.9334ZM7.46667 13.3334H6.4V14.4H7.46667V13.3334Z" fill="#84829A" />
                  </svg>
                  <h2 className='fs_16 fw-medium ff_poppins fst-normal color_29A mb-0 ms-3'>24 people going</h2>
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

export default SectionThree