export default function Contacto() {
  return (
    // Contenedor centrado para el formulario de contacto
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
      
      {/* Encabezado */}
      <div>
        <h1 className="text-3xl font-extrabold text-white">Contacto</h1>
        <p className="text-zinc-400 mt-2">
          ¿Tienes alguna consulta o propuesta de proyecto? No dudes en escribirme.
        </p>
      </div>

      {/* Tarjeta de información directa (Email, teléfono, ubicación) */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 grid sm:grid-cols-2 gap-6">
        <div>
          <span className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
            Correo Electrónico
          </span>
          <a 
            href="mailto:nicolaslabraa@gmail.com" 
            className="block text-white font-medium hover:text-zinc-300 transition-colors mt-1"
          >
            nicolaslabraa@gmail.com
          </a>
        </div>

        <div>
          <span className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
            Ubicación & Teléfono
          </span>
          <p className="text-white font-medium mt-1">
            +56 9 4462 8371
          </p>
          <p className="text-xs text-zinc-400">Ñuñoa, Santiago</p>
        </div>
      </div>

      {/* Formulario de envío de mensajes */}
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="space-y-6 bg-zinc-900 border border-zinc-800 p-8 rounded-xl"
      >
        <h2 className="text-xl font-bold text-white">Envíame un mensaje</h2>

        {/* Campo: Nombre */}
        <div className="space-y-2">
          <label htmlFor="nombre" className="block text-sm font-medium text-zinc-300">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            // Fondo negro (bg-black), texto blanco, bordes y placeholders con estilo zinc
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
          />
        </div>

        {/* Campo: Correo */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="tu@email.com"
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
          />
        </div>

        {/* Campo: Mensaje largo (Textarea) */}
        <div className="space-y-2">
          <label htmlFor="mensaje" className="block text-sm font-medium text-zinc-300">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            placeholder="¿En qué te puedo ayudar?"
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
          />
        </div>

        {/* Botón de envío blanco con contraste */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}