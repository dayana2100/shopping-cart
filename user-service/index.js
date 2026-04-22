const express = require('express');
const app = express();
app.use(express.json());

let users = [];

// Crear usuario
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({
        mensaje: "Usuario creado correctamente",
        data: user
    });
});

// Obtener usuarios
app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(3001, () => {
    console.log("user-service corriendo en puerto 3001");
});