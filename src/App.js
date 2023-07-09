import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './View/Home/Home';
import AsignarTarea from './View/AsignarTarea/AsignarTarea';
import VerTareas from './View/VerTareas/VerTareas';
import TareaRapida from './View/TareaRapida/TareaRapida';
import Login from './View/LogIn/Login';
import ApiProvider from './Context/ApiContext';

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/asignar-tarea' element={<AsignarTarea />} />
          <Route path='/ver-tarea' element={<VerTareas />} />
          <Route path='/tarea-rapida' element={<TareaRapida />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={"pagina no encontrada"} />

        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
