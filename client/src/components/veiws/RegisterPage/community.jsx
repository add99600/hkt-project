import { Link } from 'react-router-dom';
import '../assets/community.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
{/* import Sidebar from '../Sidebar/Sidebar'; */}

const Comm = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDataItems, setTotalDataItems] = useState(0); // 총 데이터 개수

  const pageSize = 5; // 한 페이지 게시물 수

  useEffect(() => {
    fetchPosts();
  }, [currentPage]); // currentPage가 변경될 때마다 새로운 페이지의 게시물을 불러옴

  const fetchPosts = () => {
    axios({
      method: 'GET',
      url: '../api/community/posts'
    }).then(response => {
      console.log(response.data);
      const reversedPosts = response.data.posts.reverse();
      setTotalDataItems(reversedPosts.length); // Update the total number of data items
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      setPosts(reversedPosts.slice(startIndex, endIndex));
    }).catch(error => {
      console.error('서버 요청 실패:', error);
      alert('불러오기에 실패했습니다.');
    });
  };

  const fetchNextPage = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const fetchPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage => currentPage - 1);
    }
  };

  const totalPages = Math.ceil(totalDataItems / pageSize);

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row">
          {/* 사이드 바 <Sidebar/> */}
          <div className="col-12">
            <div className="list list-row block" >
              {posts.map(post => (
                <div key={post._id} className="list-item larger-item" data-id={post._id}>
                  {post.images && post.images.length > 0 && (
                    <div>
                      <img src={'http://localhost:5000/'+post.images[0]} className="avatar" />
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
            <div className="d-flex justify-content-end">
              <Link to="/Comm_write" className="btn btn-success">후기 작성</Link>
            </div>
            <div className="d-flex justify-content-center">
              {/* 숫자로 표시되는 페이지 버튼 */}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
                <Button
                  key={pageNumber}
                  variant={pageNumber === currentPage ? 'success' : 'outline-success'}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Button>
              ))}
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: '10px' }}>
              <Button variant="outline-success" onClick={fetchPrevPage}>이전 페이지</Button>
              <Button variant="outline-success" onClick={fetchNextPage}>다음 페이지</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default Comm;