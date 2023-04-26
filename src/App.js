import Footer from './components/Footer';
import Header from './components/Header';
import BookingPage from './pages/BookingPage/BookingPage';
import Main from './components/Main';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormProvider from './store/formContext';

function App() {
  return (
    <div className='container'>
      <FormProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/reservations' element={<BookingPage />} />
          </Routes>
        </Router>
        <Footer />
      </FormProvider>
    </div>
  );
}

export default App;
