import React from 'react';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Profile from './modules/Profile';
import Navbar from './modules/Navbar';
import './App.css';
import './Nullstyle.css';

const App = () => (
  <>
    <Header/>

    <div className='container content__grid'>
      <Navbar/>
      <Profile />
    </div>

    <Footer/>
  </>
);

export default App;
