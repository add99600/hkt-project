import { useState} from 'react';
import axios from 'axios';
import '../assets/comm_write.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

const CommWrite = () => {

  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

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

    const formData = new FormData();
    formData.append('title', Title);
    formData.append('content', Content);

    selectedImages.forEach((image) => {
      formData.append('profile', image);
    });

    axios.post('http://localhost:5000/api/community/posts', formData, {withCredentials: true})
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          console.log('글 등록 성공!');
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
                      <dt>제목</dt>
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
                      <dt>컨트롤키와 마우스를 동시에 클릭하여 사진을 여러개 선택할 수 있습니다.</dt>
                      <dd>
                        <input
                          name="profile"
                          className="form-control"
                          style={{ fontSize: '1.4rem' }}
                          type="file"
                          id="image"
                          //multiple // 다중 파일 선택 가능하도록 설정
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
                <Button variant="danger" style={{ width: '100px', height: '40px', margin: '5px', fontSize: '1.2rem' }}>
                  취소
                </Button>
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