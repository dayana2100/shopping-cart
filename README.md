# 🛒 Shopping Cart 

## 📌 Descripción
Este proyecto corresponde a un taller de la materia **Sistemas Distribuidos**, donde se implementa un sistema básico de carrito de compras utilizando una arquitectura distribuida.

El sistema se divide en tres servicios independientes:

- 👤 user-service (usuarios)
- 📦 product-service (productos)
- 🧾 invoice-service (facturación)

Cada servicio corre en un puerto diferente y tiene una responsabilidad específica.

## 🧠 Arquitectura
El sistema sigue una arquitectura distribuida básica separando responsabilidades:

- **user-service** → gestión de usuarios
- **product-service** → gestión de productos
- **invoice-service** → gestión de facturas y detalles

Cada servicio funciona de manera independiente.

## ⚙️ Tecnologías usadas

- Node.js
- Express
- Git & GitHub
- Postman

## 🚀 Ejecución del proyecto

Abrir 3 terminales y ejecutar:

### 1. User Service
```bash
cd user-service
node index.js
