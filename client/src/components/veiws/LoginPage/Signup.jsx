import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

function Signup() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== confirmPassword){
          return alert('비밀번호가 일치하지 않습니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        };

        axios.post('/api/users/register', body)
            .then((response) => {
                console.log(response.data); 
                if (response.data.success) {
                    console.log('회원가입 성공!');
                } else {
                    alert('동일한 이메일이 있습니다.');
                }
            })
            .catch((error) => {
                console.error('서버 요청 실패:', error);
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#008374', height: '100vh' }}>
            <div className="bg-white p-3 rounded w-25">
                <h2>회원가입</h2>
                <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>이름</strong>
                    </label>
                    <input
                        type="text"
                        value={Name}
                        onChange={onNameHandler}
                        placeholder="이름을 입력 해주세요"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        // onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>이메일</strong>
                    </label>
                    <input
                        type="email"
                        value={Email}
                        onChange={onEmailHandler}
                        placeholder="이메일을 입력 해주세요"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>비밀번호</strong>
                    </label>
                    <input
                        type="password"
                        value={Password}
                        onChange={onPasswordHandler}
                        placeholder="비밀번호를 입력 해주세요"
                        name="password"
                        className="form-control rounded-0"
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>비밀번호 확인</strong>
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={onConfirmPasswordHandler}
                        placeholder="비밀번호를 다시 입력 해주세요"
                        name="password"
                        className="form-control rounded-0"
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    회원가입
                </button>
                </form>
                <p>이미 계정이 있습니다</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    로그인 하기
                </Link>
            </div>
        </div>
    );
}

export default Signup;
