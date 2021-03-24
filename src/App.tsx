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
import {compose} from "redux";
import {withRouter} from "react-router";
import {connect, useSelector} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./modules/common/Preloader";
import withSuspense from "./hoc/withSuspense";
import {useTypedSelector} from "./hooks/useTypedSelector";

const Settings = React.lazy(() => import('./modules/Settings'))
const ProfileContainer = React.lazy(() => import('./modules/Profile/ProfileContainer'))
const Music = React.lazy(() => import('./modules/Music'))

interface IAppProps {
    initializeApp: () => void,
    initialized: boolean
}

const App: React.FC<IAppProps> = (props) => {

    const initialized = useTypedSelector(state => state.app.initialized)
    const initializeApp = useSelector((state: {}))

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

interface IMapStateToProps {
    app: {
        initialized: boolean
    }
}

const mapStateToProps = (state: IMapStateToProps) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
