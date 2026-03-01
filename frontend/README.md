# Habit Tracker

Aplicación web para el seguimiento de hábitos basada en el concepto del libro *Hábitos Atómicos*, donde los usuarios pueden crear hábitos y dar seguimiento a su progreso diario.

Este proyecto fue desarrollado como parte de la Semana 2 utilizando:

- Frontend: Next.js
- Backend: Express.js
- Base de datos: MongoDB
- Manejo de estado: Redux Toolkit

## Estructura del proyecto

habit-tracker/
│
├── backend/        # Servidor Express
│   ├── server.js
│   └── package.json
│
├── frontend/       # Aplicación Next.js
│   ├── pages/
│   ├── src/redux/
│   │      store.js
│   │      habitsSlice.js
│   └── package.json
│
└── README.md

## Requisitos

Antes de ejecutar el proyecto asegúrese de tener instalado:

- Node.js (versión 18 o superior)
- npm
- MongoDB (local o MongoDB Atlas)

## Instalación y ejecución

### 1. Descargar o clonar el proyecto
git clone <url-del-repositorio>
cd habit-tracker

## Ejecutar el Backend

Abrir una terminal y ejecutar:
cd backend
npm install
node server.js

El servidor se ejecutará en: http://localhost:5000

Endpoint disponible: GET http://localhost:5000/habits

Este endpoint devuelve la lista de hábitos.

## Ejecutar el Frontend

Abrir otra terminal y ejecutar:
cd frontend
npm install
npm run dev

La aplicación estará disponible en: http://localhost:3000

Página de hábitos: http://localhost:3000/habits

## Funcionalidades implementadas (Semana 2)

- Configuración inicial del proyecto en Next.js
- Integración de Redux Toolkit
- Creación de store global
- Creación de habitsSlice
- Uso de createAsyncThunk para realizar petición GET
- Conexión del frontend con el backend
- Visualización de hábitos en la página /habits
- Separación del proyecto en carpetas:
  - backend
  - frontend

## Tecnologías utilizadas

- Next.js
- React
- Redux Toolkit
- Express.js
- Node.js
- MongoDB

## Autor

Proyecto académico - Desarrollo Web Full Stack
