import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import '../../index.css';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
