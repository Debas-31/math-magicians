import React from 'react';
import Calculator from './components/Calculator';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Homepage';
import Quote from './components/Quote';

const App = () => (
  <>
    <Routes>
    <Route exact path="/" element={(<Home />)} />
    <Route path="/calculator" element={<calculator />} />
    <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
