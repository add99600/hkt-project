import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import ProgressBar from 'react-bootstrap/ProgressBar'; 


const Mul = () => {
  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
    pointerEvents: 'none',
  };

  const [imageFile, setImageFile] = useState(null);
  const [state, setState] = useState(null);
  const [previousImageUrl, setPreviousImageUrl] = useState(null);
  const [showResults, setShowResults] = useState(false); // 결과창 숨김

  // progressbar 상태
  const [progress, setProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);


  const inputRef = useRef(null);

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
  
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
  
          // Define the dimensions you want the image to fit into
          const targetWidth = 256;
          const targetHeight = 256;
  
          // Calculate the aspect ratio of the original image
          const aspectRatio = img.width / img.height;
  
          // Calculate the new width and height to fit within the target dimensions while preserving the aspect ratio
          let width = targetWidth;
          let height = targetWidth / aspectRatio;
  
          if (height < targetHeight) {
            height = targetHeight;
            width = targetHeight * aspectRatio;
          }
  
          canvas.width = targetWidth;
          canvas.height = targetHeight;
  
          // Draw the resized image on the canvas with centered alignment
          context.drawImage(img, (targetWidth - width) / 2, (targetHeight - height) / 2, width, height);
  
          // Convert the canvas content to a Blob and save it as a File
          canvas.toBlob((blob) => {
            const resizedFile = new File([blob], file.name, {
              type: 'image/jpg',
              lastModified: Date.now(),
            });
            setImageFile(resizedFile);
            const imageUrl = URL.createObjectURL(resizedFile);
            setPreviousImageUrl(imageUrl); // Store the previous image URL
  
            // Capture the canvas as an image using html2canvas
            html2canvas(canvas).then((canvas) => {
              const dataUrl = canvas.toDataURL('image/jpg');
              const resizedImage = new Image();
              resizedImage.src = dataUrl;
              resizedImage.onload = () => {
                // Update the state with the final resized and cropped image
                setState(dataUrl);
                setShowResults(true);
              };
            });
          }, 'image/jpg', 1);
        };
      };
  
      reader.readAsDataURL(file);
    }
  };
  

  const handleExecute = () => {

    setShowProgressBar(true);

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
      }, 
      setTimeout(() => setProgress(30), 1000),
      setTimeout(() => setProgress(40), 2000),
      setTimeout(() => setProgress(50), 3000),
      setTimeout(() => setProgress(60), 4000),
      setTimeout(() => setProgress(70), 5000),
      setTimeout(() => setProgress(90), 6000),
      )

        .then((response) => response.blob())
        .then((data) => {

          setProgress(100);
          setTimeout(() => setShowProgressBar(false), 1000);
  
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

 let examplebeforeimage = 'https://cdn.discordapp.com/attachments/1123513828571889676/1137313649879437413/1.jpg'

 return (
  <section id="main" style={{ backgroundColor: '#008374', paddingTop: '80px', paddingBottom: '1700px' }}>
    <div className="board_wrap">
      <div className="board_title">
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>모발 이식 시뮬레이션</h2>
        <p style={{ color: '#fff', fontSize: '1.5rem' }}>주의사항</p>
        <p style={{ color: '#fff', fontSize: '1.2rem' }}>1. 해상도를 width 256 height 256로 설정해주세요. 👇👇👇👇 해상도 바꾸는주소</p>
        <a href="https://www.resizepixel.com/ko/download" style={{ color: '#fff', fontSize: '2rem'}}>https://www.resizepixel.com/ko/download</a>
        <p style={{ color: '#fff', fontSize: '1.2rem' }}>2. 아래 사진처럼 얼굴 정면을 촬영해 주세요</p>
        <p style={{ color: '#fff', fontSize: '1.2rem' }}>3. 시뮬레이션을 돌릴 사진을 선택하고 실행하기 버튼을 눌러주세요.</p>
        <p style={{ color: '#fff', fontSize: '1.2rem' }}>4. 시뮬레이션을 돌리는 시간이 있으니 잠시만 기다려주세요</p>
        <p style={{ color: '#fff', fontSize: '1.2rem' }}>5. 결과가 나오고 결과사진 아래 저장버튼을 클릭하면 사진을 저장할 수 있습니다.</p>
        <div className="row">
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card">
      <div className="bg-image" data-mdb-ripple-color="light">
        <img
          src={examplebeforeimage}
          className="img-fluid"
          style={{ width: '100%', maxHeight: '400px', pointerEvents: 'none'}}
          alt="이전 사진"
        />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="board_write_wrap">
        <div>
          <div>
            <dl>
              <form>
                <dt style={{ color: '#fff', fontSize: '1.4rem' }}>사진 선택</dt>
                <dd>
                  <input
                    ref={inputRef}
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

        {/* ProgressBar 표시 */}
        {showProgressBar && <ProgressBar animated now={progress} />}

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