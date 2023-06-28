import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './View/Home/Home';
import ApiProvider from './Context/ApiProvider';

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
