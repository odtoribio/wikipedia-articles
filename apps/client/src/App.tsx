import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
