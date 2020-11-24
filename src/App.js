import React from 'react';
import Header from './modules/Header';
import Footer from './modules/Footer';
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

const App = () => (
  <BrowserRouter>
    <Header/>

    <div className='container content__grid'>
      <Navbar/>
      <Route path="/profile" component={Profile}/>
      <Route path="/messages" component={Dialogs}/>
      <Route path="/news" component={News}/>
      <Route path="/friends" component={Friends}/>
      <Route path="/music" component={Music}/>
      <Route path="/settings" component={Settings}/>
    </div>

    <Footer/>
  </BrowserRouter>
);

export default App;
