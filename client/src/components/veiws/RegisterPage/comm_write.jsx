import { useState } from 'react';
import axios from 'axios';
import '../assets/comm_write.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const CommWrite = () => {

  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const navigate = useNavigate();

  const onTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onContentHandler = (event) => {
    setContent(event.target.value);
  };

  const onImageChangeHandler = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (selectedImages.length === 0) {
      alert('사진을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('title', Title);
    formData.append('content', Content);

    selectedImages.forEach((image) => {
      formData.append('profile', image);
    });

    axios.post('../api/community/posts', formData, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          console.log('글 등록 성공!');
          navigate('/comm');
        } else {
          alert('글 등록에 실패했습니다.');
        }
      })
      .catch((error) => {
        console.error('서버 요청 실패:', error);
      });
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
              <form className="board_write_wrap" onSubmit={onSubmitHandler}>
                <div className="board_write">
                  <div className="title">
                    <dl>
                      <dt> 제목</dt>
                      <dd>
                        <input 
                          value={Title}
                          onChange={onTitleHandler}
                          type="title" 
                          placeholder="제목 입력" 
                          id="title" 
                          rows={8} style={{ fontSize: '1.4rem', width: '100%' }} />
                      </dd>
                    </dl>
                  </div>
                  <div className="info">
                    <dl>
                      <dt></dt>
                      <dd>
                        <label htmlFor="image" className="image-label">
                          사진을 선택해 주세요
                        </label>
                        <input
                          name="profile"
                          className="form-control"
                          style={{ fontSize: '1.4rem' }}
                          type="file"
                          id="image"
                          onChange={onImageChangeHandler}
                        />
                      </dd>
                      <br />
                      {/* 가로로 이미지를 나열할 컨테이너 
                      <div className="imageContainer">
                        {images.map((imagePreview, index) => (
                          <img
                            key={index}
                            src={imagePreview}
                            alt={`Preview ${index}`}
                          />
                        ))}
                      </div>
                      */}
                    </dl>
                  </div>
                  <div className="cont">
                    <textarea 
                      value={Content}
                      onChange={onContentHandler}
                      placeholder="내용 입력" 
                      id="content" 
                      rows={8} style={{ fontSize: '1.4rem', width: '100%' }}>
                    </textarea>
                  </div>
                </div>
                <div className="bt_wrap">
                <Button type="submit" variant="primary" style={{ width: '100px', height: '40px', margin: '5px', fontSize: '1.2rem' }}>
                  작성
                </Button>
                <Link to="/Comm">
                <Button variant="danger" style={{ width: '100px', height: '40px', margin: '5px', fontSize: '1.2rem' }}>
                  취소
                </Button>
                </Link>
                </div>
              </form>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default CommWrite;