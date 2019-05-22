import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';
import calcFingerprint from './utils/calcFingerprint';
import setHeaders from './utils/setHeaders'

import 'bootstrap/dist/css/bootstrap.min.css';

const fingerprint = localStorage.getItem('fingerprint')
const token = localStorage.getItem('token');
if(fingerprint && token){
    setHeaders(fingerprint, token)
}

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
