import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav aria-label="Navegación principal" className="bg-black/80 backdrop-blur-sm text-white border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight truncate">
            <Link to="/" className="hover:text-zinc-400 transition-colors">
              Curriculum
            </Link>
          </h1>

          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-5 text-xs sm:text-sm font-medium">
            <Link to="/" className="px-2 py-1 rounded hover:bg-zinc-900 hover:text-zinc-300 transition-colors">
              Inicio
            </Link>
            <Link to="/proyectos" className="px-2 py-1 rounded hover:bg-zinc-900 hover:text-zinc-300 transition-colors">
              Proyectos
            </Link>
            <Link to="/contacto" className="px-2 py-1 rounded hover:bg-zinc-900 hover:text-zinc-300 transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}