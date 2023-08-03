import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const NavBar = () => {

  const token = Cookies.get('x_auth');

  const onClickhandler = () => {
    axios.get('../api/users/logout', { withCredentials: true })
      .then(response => {
        if (response.data.success) {
          console.log('로그아웃 성공!');
          Cookies.remove('x_auth'); // 쿠키에서 토큰 삭제
          window.location.reload(); // 로그인 성공 시 페이지 새로고침
          alert('로그아웃');
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
          <h1>모발인</h1>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Comm">커뮤니티</Link></li>
            {token ? (
              <li onClick={onClickhandler} className="logout-link">
                <a className="navbar a" style={{color: "#fff"}}>로그아웃</a>
              </li>
            ) : (
              <>
                <li><Link to="/Signup">회원가입</Link></li>
                <li><Link to="/login">로그인</Link></li>
              </>
            )}
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default NavBar;