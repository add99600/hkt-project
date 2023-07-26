import { useState} from 'react';
import axios from 'axios';
import '../assets/comm_write.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

const CommWrite = () => {

  const [images, setImages] = useState([]); // 이미지들을 저장할 상태 배열
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');

  const onTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onContentHandler = (event) => {
    setContent(event.target.value);
  };


  const previewImages = (event) => {
    const files = event.target.files;
    const imagePreviews = [];

    // 선택한 각 이미지에 대해 미리보기 URL 생성하여 배열에 저장
    for (let i = 0; i < files.length; i++) {
      imagePreviews.push(URL.createObjectURL(files[i]));
    }

    setImages(imagePreviews); // 이미지 배열 상태 업데이트
  };


  const handleSend = (event) => {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
  
    if (!titleInput.value.trim() || !contentInput.value.trim()) { // 공백여부 확인
      alert('제목과 내용을 입력해주세요');
      return;
    }
  
    // 사진이 두개 이상 있는지 확인
    //if (images.length < 2) {
      //alert('사진을 두 개 이상 입력해주세요');
      //return;
    //}

    // 쿠키에서 토큰을 가져오기

    let body = {
      title: Title,
      content: Content
    };

    axios.post('http://localhost:5000/api/community/posts', body, {withCredentials: true})
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
              <form className="board_write_wrap" onSubmit={handleSend}>
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