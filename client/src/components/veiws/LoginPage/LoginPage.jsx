import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { loginUser } from '../../../_actions/user_actions';
import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const LoginPage = () => {

  useEffect(() => {
    // 쿠키에서 토큰을 가져오기
    const token = Cookies.get('x_auth');

    // 토큰이 존재하면 콘솔에 출력
    if (token) {
      console.log('토큰:', token);
    } else {
      console.log('쿠키에 토큰이 없습니다.');
    }
  }, []);
  ////

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  
    const body = {
      email: Email,
      password: Password,
    };
  
    axios.post('http://localhost:5000/api/users/login', body, { withCredentials: true })
      .then((response) => {
        if (response.data.loginSuccess) {
          console.log('로그인 성공!');
          console.log('사용자 ID:', response.data.userId);
          const token = response.data.token;
          console.log('서버로부터 받은 토큰:', token);

        } else {
          alert('로그인에 실패했습니다.');
        }
      })
      .catch((error) => {
        console.error('서버 요청 실패:', error);

        // 요청 실패 시 에러 처리
        alert('서버 요청에 실패했습니다. 다시 시도해주세요.');
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#008374', height: '100vh' }}>
      <div className="bg-white p-3 rounded w-25">
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
          <h2>로그인</h2>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>이메일</strong>
            </label>
            <input
              className="form-control rounded-0"
              type="email"
              placeholder="이메일을 입력 해주세요"
              value={Email}
              onChange={onEmailHandler}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>비밀번호</strong>
            </label>
            <input
              className="form-control rounded-0"
              type="password"
              placeholder="비밀번호를 입력 해주세요"
              value={Password}
              onChange={onPasswordHandler}
            />
          </div>

          <br />
          <button type="submit" className="btn btn-success w-100 rounded-0">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;