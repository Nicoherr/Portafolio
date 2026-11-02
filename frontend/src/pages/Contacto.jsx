import { useState } from 'react'
import { esEmailValido, esTextoValido } from '../utils/validaciones.js'

const API_URL = import.meta.env.VITE_API_URL || ''

export default function Contacto() {
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const contact = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? ''),
      website: String(formData.get('website') ?? ''),
    }

    if (!esTextoValido(contact.name) || !esEmailValido(contact.email) || !esTextoValido(contact.message)) {
      setFeedback({ type: 'error', text: 'Revisa tu nombre, correo electrónico y mensaje.' })
      return
    }

    setIsSending(true)
    setFeedback(null)

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'No se pudo enviar el mensaje.')
      }

      form.reset()
      setFeedback({ type: 'success', text: result.message })
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error instanceof Error
          ? error.message
          : 'No se pudo conectar con el servidor. Inténtalo nuevamente.',
      })
    } finally {
      setIsSending(false)
    }
  }

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
        onSubmit={handleSubmit}
        className="space-y-6 bg-zinc-900 border border-zinc-800 p-8 rounded-xl"
      >
        <h2 className="text-xl font-bold text-white">Envíame un mensaje</h2>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">No rellenes este campo</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Campo: Nombre */}
        <div className="space-y-2">
          <label htmlFor="nombre" className="block text-sm font-medium text-zinc-300">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="name"
            placeholder="Tu nombre"
            maxLength={100}
            autoComplete="name"
            required
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
            name="email"
            placeholder="tu@email.com"
            maxLength={254}
            autoComplete="email"
            required
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
            name="message"
            rows={5}
            placeholder="¿En qué te puedo ayudar?"
            maxLength={5000}
            required
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
          />
        </div>

        {/* Botón de envío blanco con contraste */}
        {feedback && (
          <p
            role={feedback.type === 'error' ? 'alert' : 'status'}
            className={feedback.type === 'error' ? 'text-sm text-red-400' : 'text-sm text-emerald-400'}
          >
            {feedback.text}
          </p>
        )}

        <button
          type="submit"
          disabled={isSending}
          className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer disabled:cursor-wait disabled:opacity-60"
        >
          {isSending ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </div>
  )
}