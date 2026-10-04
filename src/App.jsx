import { Route, Routes } from 'react-router'
import './App.css'
import ScrollArriba from './components/ScrollArriba'
import DetalleProyecto from './paginas/DetalleProyecto'
import Inicio from './paginas/Inicio'

function App() {
  return (
    <>
      <ScrollArriba />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos/:slug" element={<DetalleProyecto />} />
        {/* Cualquier otra URL cae en la página de inicio */}
        <Route path="*" element={<Inicio />} />
      </Routes>
    </>
  )
}

export default App
