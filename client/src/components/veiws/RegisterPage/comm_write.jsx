import React, { useState } from 'react';
import '../assets/comm_write.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

const CommWrite = () => {
  const [images, setImages] = useState([]); // 이미지들을 저장할 상태 배열

  const previewImages = (event) => {
    const files = event.target.files;
    const imagePreviews = [];

    // 선택한 각 이미지에 대해 미리보기 URL 생성하여 배열에 저장
    for (let i = 0; i < files.length; i++) {
      imagePreviews.push(URL.createObjectURL(files[i]));
    }

    setImages(imagePreviews); // 이미지 배열 상태 업데이트
  };

  const handleSend = () => {
    // 이미지와 제목, 내용을 사용하여 후기를 전송하는 로직 추가
  };

  return (
    <div className="container marketing" style={{ paddingTop: '50px' }}>
      <div className="row featurette" style={{ height: '1000px' }}>
        <section id="main">
          <article id="article1">
            <div className="board_wrap">
              <div className="board_title">
                <p>사진을 등록해 후기를 남겨주세요.</p>
              </div>
              <div className="board_write_wrap">
                <div className="board_write">
                  <div className="title">
                    <dl>
                      <dt>제목</dt>
                      <dd>
                        <input type="text" placeholder="제목 입력" id="title" rows={8} style={{ fontSize: '1.4rem', width: '100%' }} />
                      </dd>
                    </dl>
                  </div>
                  <div className="info">
                    <dl>
                      <dt>사진 선택</dt>
                      <dd>
                        <input
                          className="form-control"
                          style={{ fontSize: '1.4rem' }}
                          type="file"
                          id="image"
                          multiple // 다중 파일 선택 가능하도록 설정
                          onChange={previewImages}
                        />
                      </dd>
                      <br />
                      {/* 가로로 이미지를 나열할 컨테이너 */}
                      <div className="imageContainer">
                        {images.map((imagePreview, index) => (
                          <img
                            key={index}
                            src={imagePreview}
                            alt={`Preview ${index}`}
                          />
                        ))}
                      </div>
                    </dl>
                  </div>
                  <div className="cont">
                    {/* Increase the rows attribute to change the size of the textarea */}
                    <textarea placeholder="내용 입력" id="content" rows={8} style={{ fontSize: '1.4rem', width: '100%' }}></textarea>
                  </div>
                </div>
                <div className="bt_wrap">
                <Button variant="primary" style={{ width: '100px', height: '40px', margin: '5px', fontSize: '1.2rem' }} onClick={handleSend}>
                  작성
                </Button>
                <Button variant="danger" style={{ width: '100px', height: '40px', margin: '5px', fontSize: '1.2rem' }}>
                  취소
                </Button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default CommWrite;