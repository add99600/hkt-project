
import { Link } from 'react-router-dom';

const NavBar = () => {
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
          </ul>
        </nav>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
}

export default NavBar;