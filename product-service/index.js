const express = require('express');
const app = express();
app.use(express.json());

let products = [];

// Crear producto
app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.json({
        mensaje: "Producto creado correctamente",
        data: product
    });
});

// Obtener productos
app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(3002, () => {
    console.log("product-service corriendo en puerto 3002");
});