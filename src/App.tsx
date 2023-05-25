import React from 'react';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import ContactPage from './pages/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
        <Route path='/contact' element={<Layout/>}>
          <Route index element={<ContactPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
