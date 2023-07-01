import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './View/Home/Home';
import ApiProvider from './Context/ApiProvider';
import AsignarTarea from './View/AsignarTarea/AsignarTarea';
import VerTareas from './View/VerTareas/VerTareas';
import TareaRapida from './View/TareaRapida/TareaRapida';

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/asignar-tarea' element={<AsignarTarea />} />
          <Route path='/ver-tarea' element={<VerTareas />} />
          <Route path='/tarea-rapida' element={<TareaRapida />} />

        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
