import { Link } from 'react-router-dom';
import '../assets/community.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Comm = () => {
  const [posts, setPosts] = useState([]);

  const pageSize = 5; // 한 페이지 게시물 수

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/community/posts'
    }).then(response => {
      console.log(response.data); // 불러온 데이터 확인
      const reversedPosts = response.data.posts.reverse(); // 서버로부터 받아온 게시물을 역순으로 저장
      setPosts(reversedPosts.slice(0, pageSize)); // 마지막에 작성된 5개의 게시물만 보여줌
    }).catch(error => {
      console.error('서버 요청 실패:', error);
      alert('불러오기에 실패했습니다.');
    });
  };

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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="create-post-button">
        <Link to="/Comm_write" style={{ color: '#fff', backgroundColor: 'green', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>글 작성하기</Link>
      </div>
    </div>
  )
};

export default Comm;