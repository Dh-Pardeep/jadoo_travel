import './App.css';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CaseTop from './components/CaseTop';
import HeroSection from './components/HeroSection';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Bgimage from './assets/img/png/TopBgImage.png'
import SectionFour from './components/SectionFour';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import FooterSection from './components/FooterSection';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    
    <div className=' overflow-hidden'>
      <div className=' position-relative '>
        <img className=' position-absolute bgImage z-n1' src={Bgimage} />
      </div>

     
      {/* nav bar  */}
      <CaseTop />

      {/* Travel, enjoy and live a new and full life */}
      <HeroSection />

      {/* We Offer Best Services */}
      <SectionOne />

      {/* Top Destinations */}
      <SectionTwo />

      {/* Book your next trip in 3 easy steps */}
      <SectionThree />

      {/* What people say about Us.   ========slider 1 */}
      <SectionFour />

      {/* slider 2 */}
      <SectionFive />

      {/* Subscribe to get information, latest news and other interesting offers about Jadoo */}
      <SectionSix />

      {/* footer section */}
      <FooterSection />
    </div>

  );
}

export default App;
