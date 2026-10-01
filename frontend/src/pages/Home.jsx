// Importamos el componente Link para navegar sin recargar la página
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    // Contenedor principal con ancho máximo (max-w-5xl), centrado (mx-auto), relleno (px-6 py-12) y espacio entre secciones (space-y-16)
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      
      {/* ================= HERO SECTION (PRESENTACIÓN) ================= */}
      {/* Contenedor flexible que cambia de columna a fila en pantallas medianas (md:flex-row) */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-4">
        
        {/* Columna izquierda: Textos de presentación */}
        <div className="space-y-4 text-center md:text-left md:w-2/3">
          
          {/* Etiqueta superior (Badge) con estilo plomo/gris */}
          <div className="inline-block bg-zinc-800 text-zinc-200 border border-zinc-700 px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase">
            Estudiante de Ingeniería Informática (IA)
          </div>

          {/* Título principal en blanco y fuente grande */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Nicolás Herrera Labra
          </h1>

          {/* Descripción personal con color de texto gris claro (zinc-300) */}
          <p className="text-lg text-zinc-300 leading-relaxed">
            Estudiante de Ingeniería Informática mención Inteligencia Artificial en Duoc UC. Apasionado por el desarrollo backend, la ciencia de datos, la ciberseguridad y la resolución eficiente de problemas.
          </p>

          {/* Botones de acción (Call to Action) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            {/* Botón principal blanco con texto negro */}
            <Link 
              to="/proyectos" 
              className="bg-white text-black hover:bg-zinc-200 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Ver Proyectos
            </Link>

            {/* Botón secundario oscuro con borde plomo */}
            <Link 
              to="/contacto" 
              className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Columna derecha: Foto de perfil cuadrada con esquinas suavizadas (rounded-2xl) */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-zinc-700 bg-zinc-800 flex-shrink-0">
          <img 
            src="/perfil.jpg" 
            alt="Nicolás Herrera Labra" 
            className="w-full h-full object-cover"
            // Manejo de error si la imagen aún no está subida a public/
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/250/27272a/ffffff?text=Nicolas'
            }}
          />
        </div>
      </section>

      {/* ================= SECCIÓN EDUCACIÓN ================= */}
      <section className="space-y-6">
        {/* Título de sección con línea divisora inferior (border-b) */}
        <h2 className="text-2xl font-bold border-b border-zinc-700 pb-2 text-white">
          Educación
        </h2>

        {/* Rejilla de 2 columnas para la formación académica */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Tarjeta 1: Carrera principal */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-2">
            <span className="text-xs text-zinc-400 font-semibold">2024 - 2027 (En curso)</span>
            <h3 className="text-xl font-bold text-white">Ingeniería Informática</h3>
            <p className="text-sm font-medium text-zinc-300">Mención Inteligencia Artificial</p>
            <p className="text-xs text-zinc-400">Duoc UC — Sede San Joaquín</p>
          </div>

          {/* Tarjeta 2: Idiomas y certificaciones */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-2">
            <span className="text-xs text-zinc-400 font-semibold">Idiomas & Certificaciones</span>
            <h3 className="text-xl font-bold text-white">Inglés</h3>
            <p className="text-sm text-zinc-300">Instituto Chileno Norteamericano de Valparaíso</p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-md border border-zinc-700">Certificado Bartender</span>
              <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-md border border-zinc-700">Certificado Barista</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECCIÓN CONOCIMIENTOS TÉCNICOS ================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-zinc-700 pb-2 text-white">
          Conocimientos Técnicos
        </h2>

        {/* Rejilla adaptativa (1 columna en móvil, 2 en tablet, 3 en escritorio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Renderizamos dinámicamente un arreglo con los conocimientos */}
          {[
            { titulo: 'Backend & Microservicios', desc: 'Desarrollo de software y lógica de servidor.' },
            { titulo: 'Bases de Datos', desc: 'Modelado, consultas y gestión de datos.' },
            { titulo: 'Ciencia de Datos', desc: 'Análisis de información y fundamentos de IA.' },
            { titulo: 'Ciberseguridad', desc: 'Principios de seguridad en redes y software.' },
            { titulo: 'Control de Versiones & Deploy', desc: 'Git, GitHub y despliegues de aplicaciones.' },
            { titulo: 'Metodologías Ágiles', desc: 'Trabajo con frameworks ágiles y documentación.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl space-y-1 hover:border-zinc-700 transition-colors">
              <h3 className="font-semibold text-white text-sm">{item.titulo}</h3>
              <p className="text-xs text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECCIÓN HABILIDADES BLANDAS ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b border-zinc-700 pb-2 text-white">
          Habilidades Blandas
        </h2>

        {/* Contenedor con envoltorio automático de etiquetas (flex-wrap) */}
        <div className="flex flex-wrap gap-3">
          {['Trabajo bajo presión', 'Paciencia y eficiencia', 'Empatía', 'Trabajo en equipo', 'Atención al cliente', 'Resolución de conflictos'].map((skill, index) => (
            <span key={index} className="bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-2 rounded-lg text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ================= SECCIÓN EXPERIENCIA LABORAL ================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-zinc-700 pb-2 text-white">
          Experiencia Laboral
        </h2>

        <div className="space-y-6">
          {/* Item 1 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h3 className="text-lg font-bold text-white">Garzón — Restaurant La Caracola Lodge</h3>
              <span className="text-xs text-zinc-400 font-semibold">Feb 2025 - Feb 2026</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Atención directa a clientes en restaurant de alta rotación. Coordinación con cocina y equipo de sala para asegurar tiempos de entrega y calidad de servicio bajo presión en temporada alta.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h3 className="text-lg font-bold text-white">Pizzero — Melt Pizzas & Under Pizza</h3>
              <span className="text-xs text-zinc-400 font-semibold">2023 - 2024</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Elaboración y preparación de pizzas cumpliendo altos estándares de calidad y tiempos de servicio en cocinas de ritmo acelerado y alta demanda.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h3 className="text-lg font-bold text-white">Garzón — Restaurant Quintay Cocina</h3>
              <span className="text-xs text-zinc-400 font-semibold">2021 - 2023</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Atención de clientes y manejo simultáneo de múltiples mesas en ambiente exigente. Desarrollo de habilidades de comunicación, resolución de conflictos y trabajo en equipo.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}