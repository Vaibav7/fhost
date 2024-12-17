import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontend from './component/empform';
import SuccessPage from './component/success';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontend />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
