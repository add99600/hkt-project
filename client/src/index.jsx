import ReactDOM from 'react-dom';
import App from './components/veiws/LandingPage/App.jsx';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'; 
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './_reducers/user_reducer.jsx';
import Reducer from './_reducers/inde.js';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

// Redux 스토어 생성
const store = createStoreWithMiddleware(rootReducer);

// 앱을 Redux Provider로 감싸기
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);