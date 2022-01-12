import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Homepage';
import Quote from './components/Quote';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route exact path="/" element={(<Home />)} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
