import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Abouts from './components/about/Abouts';
import Skills from './components/skills/skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';


function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <Abouts />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
    </main>

    </>
  );
}



export default App;
