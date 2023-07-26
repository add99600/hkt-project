import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const NavBar = () => {

  const onClickhandler = () => {
    axios.get('http://localhost:5000/api/users/logout', {
      headers: {
        Authorization: 'Bearer ' + Cookies.get('x_auth'), // 저장된 토큰을 헤더에 추가
      },
    })
    .then(response => {
      if (response.data.success) {
        console.log('로그아웃 성공!');
        Cookies.remove('x_auth'); // 쿠키에서 토큰 삭제
        // 로그아웃 후 리다이렉트 등의 작업을 수행하면 됨
      } else {
        alert('로그아웃에 실패했습니다.');
      }
    })
    .catch(error => {
      console.error('서버 요청 실패:', error);
    });
  }

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <h1>베트남사스케</h1>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Comm">커뮤니티</Link></li>
            <li><Link to="/Signup">회원가입</Link></li>
            <li><Link to="/login">로그인</Link></li>
            <button onClick={onClickhandler}>로그아웃</button>
          </ul>
        </nav>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
}

export default NavBar;