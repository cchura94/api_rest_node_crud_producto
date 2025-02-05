const mongoose = require("./index");

const Producto = mongoose.model('Producto', { 
    nombre: String,
    precio: Number,
    estado: Boolean,
    stock: Number,
    descripcion: String,
    imagen: String
});

module.exports = Producto;