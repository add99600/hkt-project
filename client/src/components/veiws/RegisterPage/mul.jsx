import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

var now;

const Loading = () => {
  now = 100; 
  return <ProgressBar now={now} label={`${now}%`} />;
};

const Mul = () => {
  const [imageFile, setImageFile] = useState(null);
  const [showLoad, setShowLoad] = useState(false);
  const navigate = useNavigate();

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleExecute = () => {
    if (imageFile) {
      setShowLoad(true);
      setTimeout(() => {
        setShowLoad(false);
        if (now === 100) { //now가 100이 되면 페이지 이동
          navigate('/load');
        }
      }, 1000); // 이동 딜레이
    } else {
      alert('사진을 입력해주세요');
    }
  };

  return (
    <section id="main" style={{ backgroundColor: '#008374', paddingTop: '200px' }}>
      <article id="article1">
        <div className="board_wrap">
          <div className="board_title">
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>모발 이식 시뮬레이션</h2>
            <p style={{ color: '#fff', fontSize: '1.2rem' }}>본인의 사진을 넣어주세요.</p>
          </div>
          <div className="board_write_wrap">
            <div className="board_write">
              <div className="info">
                <dl>
                  <form>
                    <dt style={{ color: '#fff', fontSize: '1.4rem' }}>사진 선택</dt>
                    <dd>
                      <input
                        className="form-control"
                        style={{ fontSize: '1.4rem' }}
                        type="file"
                        id="image"
                        onChange={previewImage}
                      />
                    </dd>
                    <br />
                    <dl style={{ paddingTop: '10px', marginBottom: 0 }}>
                      {imageFile ? (
                        <img
                          style={{ maxWidth: '600px', maxHeight: '600px' }}
                          id="preview"
                        />
                      ) : (
                        <p style={{ color: '#fff' }}>사진을 입력해주세요</p>
                      )}
                    </dl>
                  </form>
                </dl>
              </div>
            </div>
            <div>
              {showLoad && (
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <Loading />
                </div>
              )}
              <Button variant="primary" size="lg" style={{ marginRight: '10px' }} onClick={handleExecute}>
                실행하기
              </Button>
              <Button variant="primary" size="lg">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                  취소
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Mul;