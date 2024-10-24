
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON

// Ruta para realizar la suma
app.post('/api/sumar', (req, res) => {
  const { numero1, numero2 } = req.body;

  // Verificar si ambos números están presentes
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    return res.status(400).json({ error: 'Por favor envía dos números válidos' });
  }

  // Realizar la suma
  const resultado = numero1 + numero2;

  // Responder con el resultado de la suma
  res.status(200).json({
    mensaje: 'Suma realizada correctamente',
    resultado: resultado
  });
});

// Ruta para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor de suma funcionando correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
