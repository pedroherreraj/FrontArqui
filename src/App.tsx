import React from 'react';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/Events/show';
import Requests from './pages/Requests';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/requests" element={<Requests />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
