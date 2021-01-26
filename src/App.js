import React from 'react';
import NavbarContainer from './modules/Navbar';
import Dialogs from './modules/Dialogs';
import News from './modules/News';
import Settings from './modules/Settings';
import Music from './modules/Music';
import {Route} from 'react-router-dom';
import './app.css';
import './nullstyle.css';
import UsersContainer from "./modules/Users/UsersContainer";
import ProfileContainer from "./modules/Profile/ProfileContainer";


const App = () => {

    return (
        <>
            <NavbarContainer />

            <div className='container'>
                <Route path="/profile" render={() => <ProfileContainer />}/>
                <Route path="/messages" render={() => <Dialogs />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>

        </>
    );
}

export default App;
