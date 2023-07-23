

const Result = () => {
    const imageStyle = {
      height: '500px',
      objectFit: 'cover',
      pointerEvents: 'none',
    };
  
    const previousImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeEwXpfP7zaZOqvMbcj0BI86MpJqAqZBW-nV3qZ-_5A-YKJ_mMblmKoBOGqMbMy3bvxs&usqp=CAU'
  
    const afterImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeEwXpfP7zaZOqvMbcj0BI86MpJqAqZBW-nV3qZ-_5A-YKJ_mMblmKoBOGqMbMy3bvxs&usqp=CAU'
  
  
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
                    <button className="btn btn-primary">저장</button>
                  </div>
                </div>
              </div>
  
              <div className="col-lg-6 mb-4">
                <div className="card">
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
                    <button className="btn btn-primary">저장</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  };
  
  export default Result;