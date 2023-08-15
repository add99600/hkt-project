import '../assets/comm_view.css';
import '../assets/comm_board.css';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CommView = () => {

  const { id } = useParams(); // URL에서 id 값을 추출
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/community/posts/${id}`,
      withCredentials: true,
    })
      .then(response => {
        console.log(response.data);
        setPost(response.data.post);
        setLoading(false);
      })
      .catch(error => {
        console.error('서버 요청 실패:', error);
        alert('불러오기에 실패했습니다.');
        window.location.href = "/login"
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // 데이터 로딩 중
  }

  const handleDelete = () => {
    axios.delete(`/api/community/posts/${id}`, { withCredentials: true })
      .then(response => {
        console.log(response.data);

      })
      .catch(error => {
        console.error('서버 요청 실패:', error);
        alert('작성자만 삭제 가능합니다.');
      });
  };

  const createdAtDate = new Date(post.createdAt);

  
  const formattedDate = createdAtDate.toISOString().split('T')[0];


  const imageStyle = {
    objectFit: 'cover',
    pointerEvents: 'none',
    padding: '20px',
    borderRadius: '12px',
    height: '20vw',
    width: '20vw',
  };

  return (
    <div>
      <style>
        {`
        html {
            font-size: 10px;
            font-family: 돋움, arial;
            }`
        }
      </style>
      <div style={{ zIndex: 2, background: '#818182' }}></div>
      <div className="container marketing" style={{ paddingTop: '50px' }}>
        <div className="row featurette" style={{ height: 'auto' }}>
          <section id="main">
            <article id="article1">
              <div className="board_wrap">
                <div className="board_title">
                  <strong>커뮤니티</strong>
                  <p></p>
                </div>
                <div className="board_view_wrap">
                  <div className="board_view">
                    <div className="title">{post.title}</div>
                    <div className="info">
                      <dl>
                        <dt>글쓴이</dt>
                        <dd>{post.name}</dd>
                      </dl>
                      <dl>
                        <dt>작성일</dt>
                        <dd>{formattedDate}</dd>
                      </dl>
                    </div>
                    {post.images && post.images.length > 0 ? (
                      <img
                        className="detail-pic"
                        style={imageStyle}
                        src={'http://talmo.sadbald.kro.kr/'+post.images[0]}
                        alt="Post Image"
                      />
                    ) : (
                      <div>이미지가 없습니다</div>
                    )}
                    <div className="content" style={{ fontSize: '1.6rem', lineHeight: '140%', padding: '10px' }}>{post.content}</div>
                  </div>

                  <div className="bt_wrap">
                  <Link to="/Comm">
                    <button 
                      type="button" 
                      className="btn btn-dark" 
                      style={{ width: '60px', height: '40px', margin: '5px', fontSize: '1.4rem' }}
                    >
                      목록
                    </button>
                  </Link>

                  <Link to="/Comm">
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    id="ed" 
                    style={{ width: '60px', height: '40px', margin: '5px', fontSize: '1.4rem' }} 
                    onClick={handleDelete}
                  >
                    삭제
                  </button>
                  </Link>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommView;
