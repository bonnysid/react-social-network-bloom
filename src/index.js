import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                profilePage={state.profilePage}
                dispatch={store.dispatch.bind(store)}
                dialogsPage={state.dialogsPage}
                navbar={state.navbar}
                joinedUser={state.users.joinedUser}
            />
        </React.StrictMode>,
        document.getElementById('app-wrapper')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

