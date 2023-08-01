import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AsignarTarea from './View/AsignarTarea/AsignarTarea';
import TareaRapida from './View/TareaRapida/TareaRapida';
import Login from './View/LogIn/Login';
import ApiProvider from './Context/ApiContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/style.scss";


function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/asignar-tarea' element={<AsignarTarea />} />
          <Route path='/tarea-rapida' element={<TareaRapida />} />

          <Route path='*' element={"pagina no encontrada"} />

        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
