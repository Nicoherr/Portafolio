import { esTextoValido, esEmailValido } from './validaciones.js'

describe('Pruebas de utilidades - validaciones', () => {
  it('debe validar que un texto no esté vacío', () => {
    expect(esTextoValido('Hola')).toBe(true)
    expect(esTextoValido('   ')).toBe(false)
  })

  it('debe validar el formato de un correo electrónico', () => {
    expect(esEmailValido('usuario@dominio.com')).toBe(true)
    expect(esEmailValido('correo-invalido')).toBe(false)
  })
})