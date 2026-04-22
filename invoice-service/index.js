const express = require('express');
const app = express();
app.use(express.json());

let invoices = [];
let invoiceDetails = [];

// Crear factura
app.post('/invoices', (req, res) => {
    const invoice = req.body;
    invoices.push(invoice);
    res.json({
        mensaje: "Factura creada correctamente",
        data: invoice
    });
});

// Obtener facturas
app.get('/invoices', (req, res) => {
    res.json(invoices);
});

// Crear detalle de factura
app.post('/invoice-details', (req, res) => {
    const detail = req.body;
    invoiceDetails.push(detail);
    res.json({
        mensaje: "Detalle de factura creado correctamente",
        data: detail
    });
});

// Obtener detalles de factura
app.get('/invoice-details', (req, res) => {
    res.json(invoiceDetails);
});

app.listen(3003, () => {
    console.log("invoice-service corriendo en puerto 3003");
});