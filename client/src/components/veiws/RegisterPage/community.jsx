import { Link } from 'react-router-dom';
import '../assets/community.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Comm = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/community/posts'
    }).then(response => {
      console.log(response.data); // 불러온 데이터 확인
      setPosts(response.data.posts);
    }).catch(error => {
      console.error('서버 요청 실패:', error);
      alert('불러오기에 실패했습니다.');
    });
  }, []);


  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row">
          <div className="col-12">
            <div className="list list-row block">
              {posts.map(post => (
                <div key={post._id} className="list-item" data-id={post._id}>
                    {post.images && post.images.length > 0 && (
                    <div>
                      <img src={'http://localhost:3000/'+post.images[0]} className="w-48 avatar gd-warning" />
                    </div>
                    )}
                  <div className="flex">
                    <Link to={`/CommView/${post._id}`} className="item-author text-color" data-abc="true">{post.title}</Link>
                    <div className="item-except text-muted text-sm h-1x">
                      {post.content}
                    </div>
                  </div>
                  <div className="no-wrap">
                    <div className="item-date text-muted text-sm d-none d-md-block">{new Date(post.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="create-post-button">
        <Link to="/Comm_write">글 작성하기</Link>
      </div>
    </div>
  )
};

export default Comm;