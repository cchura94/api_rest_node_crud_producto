const Producto = require("./../database/Producto");

async function funListar(req, res){
    const productos = await Producto.find({});

    return res.json(productos);
}

async function funGuardar(req, res){
    // req.body
    const datos = req.body; 
    const producto = new Producto(datos);
    await producto.save();

    return res.json({mensaje: "Producto registrado"});
}

function funMostrar(req, res){
    const id = req.params.id;
}

function funModificar(req, res){
    const id = req.params.id;
}

function funEliminar(req, res){
    const id = req.params.id;
}

module.exports = {
    funListar,
    funGuardar,
    funMostrar,
    funModificar,
    funEliminar,
}
