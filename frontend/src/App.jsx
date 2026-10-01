import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  )
}