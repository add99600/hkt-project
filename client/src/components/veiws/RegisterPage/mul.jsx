import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import loading from '../RegisterPage/loading';

const Mul = () => {
  <Routes>
    <Route path="/loading" element={<loading/>}/>
  </Routes>
  const previewImage = (event) => {
    const reader = new FileReader();
    reader.onload = function () {
      const output = document.getElementById('preview');
      if (output) {
        output.src = reader.result;
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (

    <section id="main" style={{ backgroundColor: '#008374' }}>
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
                      <img
                        style={{ maxWidth: '600px', maxHeight: '600px' }}
                        id="preview"
                      />
                    </dl>
                  </form>
                </dl>
              </div>
            </div>
            <div>
              <Button variant="primary" size="lg" style={{ marginRight: '10px' }}>
              <Link to="/loading" style={{ color: 'inherit', textDecoration: 'none' }}>실행하기</Link>
              </Button>
              <Button variant="primary" size="lg">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>취소</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Mul;
