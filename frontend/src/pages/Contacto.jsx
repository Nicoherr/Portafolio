export default function Contacto() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      
      <div className="space-y-2 mb-8 bg-gray-50 p-4 rounded-md border border-gray-200">
        <p><strong>Email:</strong> <a href="mailto:nicolaslabraa@gmail.com" className="text-blue-600 hover:underline">nicolaslabraa@gmail.com</a></p>
        <p><strong>Teléfono:</strong> <a href="tel:+56944628371" className="text-blue-600 hover:underline">+56 9 4462 8371</a></p>
      </div>

      <h3 className="text-xl font-semibold mb-4">Envíame un mensaje</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Correo electrónico</label>
          <input type="email" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mensaje</label>
          <textarea rows="4" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Enviar
        </button>
      </form>
    </main>
  )
}