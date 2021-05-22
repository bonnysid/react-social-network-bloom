import React, {useEffect} from 'react';
import NavbarContainer from './components/Navbar';
import Dialogs from './pages/Dialogs';
import News from './pages/News';
import {Route} from 'react-router-dom';
import './app.css';
import './nullstyle.css';
import UsersContainer from './pages/Users/UsersContainer';
import Login from "./pages/Login/Login";
import StartPage from "./pages/StartPage/StartPage";
import Header from "./components/Header/Header";
import Preloader from "./components/Preloader";
import withSuspense from "./hoc/withSuspense";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";
import SignUp from "./pages/SignUp";

const Settings = React.lazy(() => import('./pages/Settings'))
const ProfileContainer = React.lazy(() => import('./pages/Profile/ProfileContainer'))
const Music = React.lazy(() => import('./pages/Music'))

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
