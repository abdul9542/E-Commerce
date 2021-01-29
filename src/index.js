import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import actualReducer from './reducers/actualReducer';
import givenReducer from './reducers/givenReducer';
import loggedReducer from './reducers/log';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger();
const rootReducer= combineReducers({
  given:givenReducer,
  actual:actualReducer,
  logged:loggedReducer,
})

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { Card } from 'antd';
// import ReactDOM from 'react-dom';

// const { Meta } = Card;

// ReactDOM.render(
//   <Card
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>,
//   document.getElementById('site-card-wrapper'),
// );