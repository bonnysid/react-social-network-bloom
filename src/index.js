import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter} from 'react-router-dom';

const rootElement = document.getElementById('app-wrapper');

ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <App />
        </HashRouter>
    </Provider>,
    rootElement
);


