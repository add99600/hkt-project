import html2canvas from 'html2canvas';

const Result = () => {
  const imageStyle = {
    height: '500px',
    objectFit: 'cover',
    pointerEvents: 'none',
  };

  const previousImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeEwXpfP7zaZOqvMbcj0BI86MpJqAqZBW-nV3qZ-_5A-YKJ_mMblmKoBOGqMbMy3bvxs&usqp=CAU';

  let afterImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeEwXpfP7zaZOqvMbcj0BI86MpJqAqZBW-nV3qZ-_5A-YKJ_mMblmKoBOGqMbMy3bvxs&usqp=CAU';

  const handleDownload = async () => {
    const canvas = await html2canvas(document.getElementById('capture_area'));
    var el = document.createElement('a');
    el.href = canvas.toDataURL('image/jpg');
    el.download = '결과이미지.jpg'; //PNG
    el.click();
  };

  return (
    <main className="my-5">
      <div className="container">
        <section className="text-center">
          <h4 className="mb-5"><strong>시뮬레이션 결과</strong></h4>
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
                    이전 사진에 대한 설명을 입력하세요.
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
                    이후 사진에 대한 설명을 입력하세요.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center"> {/* 이 div를 추가합니다. */}
              <button className="btn btn-primary" onClick={handleDownload}>저장</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Result;
 