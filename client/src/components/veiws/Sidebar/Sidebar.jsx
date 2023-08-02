import '../assets/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header>목록</header>
      <ul>
      <Link to="/mul"><li><a><i></i>  모발 이식 시뮬레이션</a></li></Link>
      <Link to="/"><li><a><i></i>  탈모 확률 검사</a></li></Link>
      <Link to="/Comm_write"><li><a><i></i>  후기 작성</a></li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;