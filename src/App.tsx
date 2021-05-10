import React, {useEffect} from 'react';
import NavbarContainer from './modules/Navbar';
import Dialogs from './modules/Dialogs';
import News from './modules/News';
import {Route} from 'react-router-dom';
import './app.css';
import './nullstyle.css';
import UsersContainer from './modules/Users/UsersContainer';
import Login from "./modules/Login/Login";
import StartPage from "./modules/StartPage/StartPage";
import Header from "./modules/Header/Header";
import Preloader from "./modules/common/Preloader";
import withSuspense from "./hoc/withSuspense";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";
import SignUp from "./modules/SignUp";

const Settings = React.lazy(() => import('./modules/Settings'))
const ProfileContainer = React.lazy(() => import('./modules/Profile/ProfileContainer'))
const Music = React.lazy(() => import('./modules/Music'))

const App: React.FC = () => {

    const initialized = useTypedSelector(state => state.app.initialized)
    const {initializeApp} = useActions();

    useEffect(() => {
        initializeApp();
    }, [])


    if (!initialized) {
        return <Preloader/>
    }

    return (
        <>
            <NavbarContainer/>
            <Header/>
            <div className='container'>
                <Route path='/signup' render={() => <SignUp/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route exact={true} path='/' render={() => <StartPage/>}/>
                <Route path='/profile/:id?' render={withSuspense(ProfileContainer)}/>
                <Route path='/messages' render={() => <Dialogs/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/music' render={withSuspense(Music)}/>
                <Route path='/settings' render={withSuspense(Settings)}/>
            </div>

        </>
    );
}



export default App;
