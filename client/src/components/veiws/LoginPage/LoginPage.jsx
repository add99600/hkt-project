import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_actions'; // Uncomment this line to import loginUser

const LoginPage = () => {
  const dispatch = useDispatch();
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

    let body = {
      email: Email,
      password: Password,
    };

    // Dispatch loginUser here
    dispatch(loginUser(body));
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