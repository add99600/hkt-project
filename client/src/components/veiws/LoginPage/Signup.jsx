import { Link } from "react-router-dom";
import axios from 'axios'

var email;
var password;

const handleSubmit = (e) => {
         e.preventDefault()
         axios.post('',{name, email, password})
         .then(result => console.log(result))
         .catch(err => console.log(err))
}


function Signup() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#008374', height: '100vh' }}>
            <div className="bg-white p-3 rounded w-25">
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>이름</strong>
                    </label>
                    <input
                        type="text"
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
                        placeholder="비밀번호를 입력 해주세요"
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
