// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Datos de ejemplo
const habits = [
  { id: 1, name: 'Leer 10 minutos', completed: false },
  { id: 2, name: 'Hacer ejercicio', completed: false },
];

// Endpoint para obtener hábitos
app.get('/habits', (req, res) => {
  res.json(habits);
});

// Servidor escuchando
app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});