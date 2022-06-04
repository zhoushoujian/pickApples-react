/* eslint-disable prettier/prettier */
import ReactDOM from 'react-dom';
import Apple from './apple';
import registerServiceWorker from './registerServiceWorker'; //这个模块不用看，仅为了支撑服务
import './index.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Apple />, document.getElementById('root'));
registerServiceWorker();
