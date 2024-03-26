import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Authors from './components/Authors'
import EditData from './components/EditData';
import AddData from './components/AddData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <div className="container-sm">
          <h1>Favorite Autors</h1>
        <Routes>
          <Route path='/' element={<Authors/>} />
          <Route path='/:id/edit' element={<EditData />} />
          <Route path='/new' element={<AddData/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
