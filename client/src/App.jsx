import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Mul from './mul';

function App() {

  return (
    <BrowserRouter>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a className="logo d-flex align-items-center">
            <h1>모발인<span></span></h1>
          </a>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/mul" element={<Mul />} />
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>환영한다 <span></span>탈모게이들아</h2>
            <p>탈모게이들 머리 자라난 모습 보고싶노?</p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link to="/mul" className="btn-get-started" style={{ color: 'inherit', textDecoration: 'none' }}>끝없는 탈모 레츠고</Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <img src="https://imgnn.seoul.co.kr/img/upload/2018/07/26/SSI_20180726143453_V.jpg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
          </div>
        </div>
      </div>

      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-easel"></i></div>
                <h4 className="title"><Link to="/Signup">회원가입</Link></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem"></i></div>
                <h4 className="title"><a href="blog.html" className="stretched-link">커뮤니티</a></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-geo-alt"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Magni Dolores</a></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-command"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Nemo Enim</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>Impact</span>
              </a>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
              <div className="social-links d-flex mt-4">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright <strong><span>Impact</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </section>

  );
};

export default App
