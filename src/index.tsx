import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter} from 'react-router-dom';

const rootElement = document.getElementById('app-wrapper');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement
);


