export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Nicolas Herrera</h1>
        <div className="space-x-6">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Proyectos</a>
          <a href="#" className="hover:underline">Contacto</a>
        </div>
      </div>
    </nav>
  )
}