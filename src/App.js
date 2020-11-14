import React from 'react';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Content from './modules/Content';
import NavMenu from './modules/NavMenu';
import './app.css';
import './container.css';
import './nullstyle.css'

const App = () => (
  <>
    <Header/>

    <div className='container'>
      <NavMenu/>
      <Content />
    </div>

    <Footer/>
  </>
);

export default App;
