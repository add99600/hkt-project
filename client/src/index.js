import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/veiws/LandingPage/App.jsx';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './_reducers/user_reducer.jsx';


// Spread('...')를 사용하여 미들웨어 배열을 applyMiddleware 함수에 전달
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  { ...composeEnhancers(applyMiddleware(promiseMiddleware, ReduxThunk)) }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);