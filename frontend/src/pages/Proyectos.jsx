export default function Proyectos() {
  // Arreglo de objetos con la información técnica de cada proyecto
  const listaProyectos = [
    {
      titulo: 'Sistema Veterinaria',
      descripcion: 'Aplicación web para gestión de pacientes, citas y fichas clínicas veterinarias.',
      tecnologias: ['React', 'Tailwind CSS', 'Node.js'],
      imagen: '/veterinaria.jpg',
      linkRepo: 'https://github.com/Nicoherr',
    },
    {
      titulo: 'Portafolio Personal',
      descripcion: 'Mi sitio web profesional construido con una arquitectura moderna en React, Vite y Tailwind CSS v4.',
      tecnologias: ['React', 'Vite', 'Tailwind CSS v4'],
      imagen: '/portafolio.jpg',
      linkRepo: 'https://github.com/Nicoherr/Portafolio',
    }
  ]

  return (
    // Contenedor principal centrado
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      
      {/* Encabezado de la página */}
      <div>
        <h1 className="text-3xl font-extrabold text-white">Mis Proyectos</h1>
        <p className="text-zinc-400 mt-2">
          Una selección de las aplicaciones y proyectos en los que he trabajado.
        </p>
      </div>

      {/* Grilla de proyectos (2 columnas en pantallas medianas) */}
      <div className="grid md:grid-cols-2 gap-8">
        {listaProyectos.map((p, index) => (
          // Tarjeta del proyecto con fondo plomo oscuro (zinc-900) y bordes definidos
          <div 
            key={index} 
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div>
              {/* Contenedor visual de la imagen con diseño fallback en caso de error */}
              <div className="w-full h-48 bg-zinc-800 border-b border-zinc-800 flex items-center justify-center overflow-hidden">
                <img 
                  src={p.imagen} 
                  alt={p.titulo} 
                  className="w-full h-full object-cover"
                  // Oculta la etiqueta si la imagen no existe para no romper el diseño
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                {/* Texto de respaldo cuando no hay imagen disponible */}
                <span className="text-zinc-600 text-xs font-mono uppercase tracking-wider">
                  Imagen no disponible
                </span>
              </div>

              {/* Cuerpo del contenido de la tarjeta */}
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white">{p.titulo}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.descripcion}</p>
                
                {/* Badges para cada tecnología utilizada */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tecnologias.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-md border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Enlace al repositorio de GitHub */}
            <div className="p-6 pt-0">
              <a 
                href={p.linkRepo} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center text-sm font-semibold text-white hover:text-zinc-300 transition-colors"
              >
                Código GitHub &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}