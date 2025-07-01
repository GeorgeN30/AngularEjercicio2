const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Conexión a la BD
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'adminGeorge30Ns', // pon tu contraseña aquí si tienes
  database: 'gestor_tareas'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Conectado a la base de datos.');
});

// Obtener tareas
app.get('/tareas', (req, res) => {
  connection.query('SELECT * FROM tareas', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Crear nueva tarea
app.post('/tareas', (req, res) => {
  const { titulo, descripcion } = req.body;
  connection.query(
    'INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)',
    [titulo, descripcion],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: results.insertId, titulo, descripcion });
    }
  );
});

// Marcar tarea como completada
app.put('/tareas/:id/completar', (req, res) => {
  const id = req.params.id;
  connection.query(
    'UPDATE tareas SET completada = TRUE WHERE id = ?',
    [id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ mensaje: 'Tarea completada' });
    }
  );
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
