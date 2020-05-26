import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';  //这个模块不用看，仅为了支撑服务
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
