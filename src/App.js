import React from 'react';
import Header from './modules/Header';
import Profile from './modules/Profile';
import Navbar from './modules/Navbar';
import Dialogs from './modules/Dialogs';
import News from './modules/News';
import Settings from './modules/Settings';
import Music from './modules/Music';
import Friends from './modules/Friends';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './Nullstyle.css';
import store from "./redux/state";

const App = ({profilePage, dialogsPage, navbar, dispatch}) => {
    return (
        <BrowserRouter>
            <Navbar items={navbar.menuItems}/>
            <Header />

            <div className='container'>
                <Route path="/profile" render={() => <Profile state={profilePage} dispatch={dispatch}/>}/>
                <Route path="/messages" render={() => <Dialogs state={dialogsPage} dispatch={dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>

        </BrowserRouter>
    );
}

export default App;
