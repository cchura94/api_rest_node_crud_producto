const express = require("express");
const productoController = require("./../controllers/producto.controller.js")
const usuarioController = require("./../controllers/usuario.controller.js")

const router = express.Router();

router.get("/producto", productoController.funListar);
router.post("/producto", productoController.funGuardar);
router.get("/producto/:id", productoController.funMostrar);
router.put("/producto/:id", productoController.funModificar);
router.delete("/producto/:id", productoController.funEliminar);

router.get("/usuario", usuarioController.funListar);
router.post("/usuario", usuarioController.funGuardar);
router.get("/usuario/:id", usuarioController.funMostrar);
router.put("/usuario/:id", usuarioController.funModificar);
router.delete("/usuario/:id", usuarioController.funEliminar);


module.exports = router;