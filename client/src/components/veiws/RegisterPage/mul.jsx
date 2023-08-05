import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';


const Mul = () => {
  const imageStyle = {
    height: '500px',
    objectFit: 'cover',
    pointerEvents: 'none',
  };

  const [imageFile, setImageFile] = useState(null);

  const [state, setState] = useState(null);
  const [previousImageUrl, setPreviousImageUrl] = useState(null);
  const [showResults, setShowResults] = useState(false); // 결과창 숨김



  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviousImageUrl(imageUrl); // 이전 사진 URL 저장
    }
  };

  const handleExecute = () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);
  
      fetch("https://hairgan-tensor.fly.dev/predict", {
        method: 'POST',
        headers: {
          //'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        },
        body: formData,
      })
        .then((response) => response.blob())
        .then((data) => {
          console.log(data);
          const imageUrl = URL.createObjectURL(data);
          setState(imageUrl);
          setShowResults(true); 
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('사진을 입력해주세요');
    }
  };

  ///// 결과물 코드
  let afterImageUrl = state

  const handleDownload = async () => {
    const canvas = await html2canvas(document.getElementById('capture_area'));
    if (canvas) {
      var el = document.createElement('a');
      el.href = canvas.toDataURL('image/jpg');
      el.download = '결과이미지.jpg'; //PNG
      el.click();
    } else {
      alert("캡처에 실패했습니다");
    }
  };

 ///// 결과물 코드


 return (
  <section id="main" style={{ backgroundColor: '#008374', paddingTop: '150px', paddingBottom: '750px' }}>
    <div className="board_wrap">
      <div className="board_title">
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>모발 이식 시뮬레이션</h2>
        <p style={{ color: '#fff', fontSize: '1.2rem' }}>본인의 사진을 넣어주세요.</p>
      </div>
      <div className="board_write_wrap">
        <div>
          <div>
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
                </dl>
              </form>
            </dl>
          </div>
        </div>
        <div>
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

      {/* 시뮬레이션 결과 창 */}
      {showResults && (
        <div className="container">
          <section className="text-center">
            <h4 className="mb-5"><strong style={{ color: '#fff', fontSize: '2rem' }}>시뮬레이션 결과</strong></h4>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="bg-image" data-mdb-ripple-color="light">
                    <img
                      src={previousImageUrl}
                      className="img-fluid"
                      style={imageStyle}
                      alt="이전 사진"
                    />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">이전 사진</h5>
                    <p className="card-text">
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div id="capture_area" className="card">
                  <div id="thumbnail" className="bg-image" data-mdb-ripple-color="light">
                    <img
                      src={afterImageUrl}
                      className="img-fluid"
                      style={imageStyle}
                      alt="이후 사진"
                    />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">이후 사진</h5>
                    <p className="card-text">
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handleDownload}>저장</button>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  </section>
);
}
export default Mul;