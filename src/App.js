import Footer from './components/Footer';
import Header from './components/Header';
import BookingPage from './pages/BookingPage/BookingPage';
import Confirmation from './pages/confirmation/Confirmation';
import Main from './components/Main';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormProvider from './store/formContext';
import UnderContruction from './pages/underConstruction/UnderContruction';

function App() {
  return (
    <div className='container'>
      <FormProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/reservations' element={<BookingPage />} />
            <Route path='/confirmation' element={<Confirmation />} />
            <Route path='/underconstruction' element={<UnderContruction />} />
          </Routes>
          <Footer />
        </Router>
      </FormProvider>
    </div>
  );
}

export default App;
