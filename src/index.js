import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import store from './redux/store';
import store from './redux/reduxStore';
import {Provider} from "react-redux";

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Provider store={store}>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
                dialogsPage={state.dialogsPage}
                navbar={state.navbar}
                joinedUser={state.users.joinedUser}
            />
        </Provider>,
        document.getElementById('app-wrapper')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => rerenderEntireTree(store.getState()));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

