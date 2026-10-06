import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">
          <Link to="/" className="hover:text-zinc-400 transition-colors">
            Curriculum
          </Link>
        </h1>
        <div className="flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-zinc-400 transition-colors">
            Inicio
          </Link>
          <Link to="/proyectos" className="hover:text-zinc-400 transition-colors">
            Proyectos
          </Link>
          <Link to="/contacto" className="hover:text-zinc-400 transition-colors">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}