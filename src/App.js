import React from 'react';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Content from './modules/Content';
import NavMenu from './modules/NavMenu';
import './app.css';


const App = () => (
  <div className='app-wrapper'>
    <Header/>
    <NavMenu/>
    <Content />
    <Footer/>
  </div>
);

export default App;
