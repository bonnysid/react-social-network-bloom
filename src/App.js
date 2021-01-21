import React from 'react';
import Header from './modules/Header';
import Profile from './modules/Profile';
import NavbarContainer from './modules/Navbar';
import Dialogs from './modules/Dialogs';
import News from './modules/News';
import Settings from './modules/Settings';
import Music from './modules/Music';
import {Route} from 'react-router-dom';
import './App.css';
import './Nullstyle.css';
import FriendsContainer from "./modules/Friends/FriendsContainer";


const App = () => {

    return (
        <>
            <NavbarContainer />
            <Header />

            <div className='container'>
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/messages" render={() => <Dialogs />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/friends" render={() => <FriendsContainer/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>

        </>
    );
}

export default App;
