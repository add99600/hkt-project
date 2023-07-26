import '../assets/comm_view.css';
import '../assets/comm_board.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommView = () => {

  const { id } = useParams(); // URL 파라미터에서 _id 값을 추출
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:5000/api/community/posts/${id}`,
      withCredentials: true
    })
      .then(response => {
        console.log(response.data); // 불러온 데이터 확인
        setPost(response.data.post);
      })
      .catch(error => {
        console.error('서버 요청 실패:', error);
        alert('불러오기에 실패했습니다.');
        setLoading(false);
      });
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>; // 데이터 로딩 중이면 로딩 메시지를 표시
  }



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
                        <dt>번호</dt>
                        <dd>5dd</dd>
                      </dl>
                      <dl>
                        <dt>글쓴이</dt>
                        <dd>dd</dd>
                      </dl>
                      <dl>
                        <dt>작성일</dt>
                        <dd>dd</dd>
                      </dl>
                      <dl>
                        <dt>조회</dt>
                        <dd>67</dd>
                      </dl>
                    </div>
                    <img
                      className="detail-pic"
                      style={imageStyle}
                    />
                    <div className="content" style={{ fontSize: '1.6rem', lineHeight: '140%', padding: '10px' }}>{post.content}</div>
                  </div>
                  <div>
                    <div className="card mb-2" style={{ marginTop: '20px', height: '500px' }}>
                      <div className="card-header bg-light">
                        <h3 className="fa fa-comment fa" style={{ fontSize: '1.4rem' }}>댓글</h3>
                      </div>
                      <div className="card-body-1" style={{ overflowY: 'scroll', overflowX: 'hidden', height: '450px' }}>
                        <div className="user_reply" style={{ display: 'flex', alignItems: 'center', width: '100%', height: '30px', padding: '10px', borderTop: '1px solid gray' }}>
                          {/* Add your content here */}
                        </div>
                      </div>
                      <div className="card-body-2">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <div className="form-inline mb-2" style={{ display: 'flex' }}>
                              {/* Add your content here */}
                            </div>
                            <div style={{ display: 'flex' }}>
                              <textarea className="form-control" id="com" rows="3" style={{ height: '50px' }}></textarea>
                              <button id="send" type="button" className="btn btn-outline-success" style={{ marginLeft: '5px', width: 'auto', fontSize: '1.4rem' }}>댓글</button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bt_wrap">
                    <button onClick={() => { /* add your logic here */ }} type="button" className="btn btn-dark" style={{ width: '60px', height: '40px', margin: '5px', fontSize: '1.4rem' }}>목록</button>
                    <button onClick={() => { /* add your logic here */ }} type="button" className="btn btn-primary" id="ed" style={{ width: '60px', height: '40px', margin: '5px', fontSize: '1.4rem' }}>수정</button>
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
