 import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

const reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type DispatchType = typeof store.dispatch

export default store;