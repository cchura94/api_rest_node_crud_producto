const express = require("express");
const router = require("./routes/index.js");

const app = express();

// JSON
app.use(express.json());

app.get("/", function(req, res){
    return res.json({mensaje: "Hola este es mi servicio Api Rest Full"});
});

// habilitando las rutas
app.use("/api", router);


app.listen(3000, function(){
    console.log("Servidor iniciado en http://127.0.0.1:3000");
});