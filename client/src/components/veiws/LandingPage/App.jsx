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
import Result from '../RegisterPage/result.jsx';
import Infor from '../RegisterPage/infor.jsx';
import LandingPage from './LandingPage.jsx';
import CommView from '../RegisterPage/comm_view.jsx';



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
        <Route path="/Result" element={<Result />} />
        <Route path="/Infor" element={<Infor />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/CommView/:id" element={<CommView />} />
      </Routes>
    </BrowserRouter>

  );
}

const Home = () => {
  //const cookies = new Cookies();
  //const isLoggedIn = !!cookies.get('x_auth');

  //useEffect(() => {
  //  document.title = isLoggedIn ? '로그아웃' : '로그인';
  //}, [isLoggedIn]);

  return (
    <section id="hero" className="hero" style={{ paddingTop: '200px' }}>
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>환영합니다<span></span></h2>
            <p style={{ fontSize: '1.2em' }}>모발이식 후 사진이 보고싶다면 아래 버튼을 눌러주세요</p>
            <span style={{ fontSize: '24px' }}>👇👇👇👇👇👇👇👇</span>
            <div className="d-flex justify-content-center justify-content-lg-start">
            <Link to="/mul" className="btn-get-started" style={{ color: 'white', textDecoration: 'none' }}>시뮬레이션 하러 가기</Link>
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
                <div className="icon"><i className="bi bi-person-circle"></i></div>
                <h4 className="title"><Link to="/Signup">회원가입</Link></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-person-fill-check"></i></div>
                <h4 className="title"><Link to="/login">로그인</Link></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-chat-right-dots-fill"></i></div>
                <h4 className="title"><Link to="/Comm">커뮤니티</Link></h4>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-question-circle"></i></div>
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