import axios from 'axios';
import Cookies from 'js-cookie';

const postData = async () => {

  try {
    const token = Cookies.get('x_auth');
    // POST 요청으로 보낼 데이터
    const data = {
        _id:token
    };

    const response = await axios.post('/api/users/auth', data);

    console.log(response.data);

  } catch (error) {

    console.error('서버 요청 실패:', error);
  }
};

postData();


