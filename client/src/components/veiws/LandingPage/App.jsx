import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Mul from '../RegisterPage/mul.jsx';
import LoginPage from '../LoginPage/LoginPage.jsx';
import Signup from '../LoginPage/Signup.jsx'
import Comm from '../RegisterPage/community.jsx';
import CommWrite from '../RegisterPage/comm_write.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
import Load from '../RegisterPage/load.jsx';
import Infor from '../RegisterPage/infor.jsx';
import MainLayout from './MainLayout.jsx';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/mul" element={<Mul />} />
        <Route path="/Comm" element={<Comm />} />
        <Route path="/Comm_write" element={<CommWrite />} />
        <Route path="/Load" element={<Load />} />
        <Route path="/Infor" element={<Infor />} />
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <section id="hero" className="hero" style={{ paddingTop: '200px' }}>
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>환영한다 <span></span>탈모친구들</h2>
            <p>탈모친구들 머리 자라난 모습 보고싶나?</p>
            <div className="d-flex justify-content-center justify-content-lg-start">
            <Link to="/mul" className="btn-get-started" style={{ color: 'white', textDecoration: 'none' }}>끝없는 탈모 레츠고</Link>
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

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-geo-alt"></i></div>
                <h4 className="title"><Link to="/login">로긴</Link></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem"></i></div>
                <h4 className="title"><Link to="/Comm">커뮤니티</Link></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-command"></i></div>
                <h4 className="title"><Link to="/Infor">개발자 정보</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>

  );
};

export default App
