export const esTextoValido = (texto) => {
  return typeof texto === 'string' && texto.trim().length > 0
}

export const esEmailValido = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}