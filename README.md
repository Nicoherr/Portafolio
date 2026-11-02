# Portafolio — frontend

Este repositorio contiene el frontend React + Vite en [`frontend/`](./frontend/).
El backend se mantiene en un repositorio independiente:
[Nicoherr/portafolio-backend](https://github.com/Nicoherr/portafolio-backend).

## Desarrollo local

Clona ambos repositorios en carpetas hermanas. En una terminal inicia la API:

```sh
cd Portafolio-backend
cp .env.example .env
npm install
npm run dev
```

Completa `Portafolio-backend/.env` con las credenciales SMTP. En otra terminal,
inicia la aplicación:

```sh
cd Portafolio/frontend
npm install
npm run dev
```

Vite reenvía `/api` al backend local en `http://localhost:3001`.

## Producción

Configura `VITE_API_URL` en el entorno de build del frontend con la URL pública
del backend (sin `/` final). Configura `CORS_ORIGIN` en el backend con el origen
del frontend desplegado, por ejemplo `https://mi-portafolio.example`. El backend
también requiere `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`
y `CONTACT_FROM`. Nunca incluyas secretos SMTP en el frontend.

El endpoint `GET /api/health` permite comprobar si el backend está disponible.
