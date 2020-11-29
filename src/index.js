import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <App
        profilePage={state.profilePage}
        dialogsPage={state.dialogsPage}
        navbar={state.navbar}
    />
  </React.StrictMode>,
  document.getElementById('app-wrapper')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

