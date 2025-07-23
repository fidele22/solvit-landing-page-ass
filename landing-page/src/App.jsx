import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Service from './components/service';
import AboutUs from './components/about';
import Benefit from './components/benefit';
import Mission from './components/mission';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="service"><Service /></section>
      <section id="about"><AboutUs /></section>
      <section id="benefit"><Benefit /></section>
      <section id="mission"><Mission /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}


export default App;
