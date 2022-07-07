const express = require("express");
const app = express();
const productRoute = require("./src/routes/productRoute")
const cartRoute = require("./src/routes/cartRoute")
const path = require('path')
require('dotenv').config();
const port = process.env.PORT;

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/productos", productRoute)
app.use("/api/carrito", cartRoute)

app.use((req, res) => {
    res.status(404).json({error: -2, descripcion: `Ruta '${req.path}' Método '${req.method}' - No Implementada`});
})

app.use(function (err, req, res, next) {
    res.status(500).json({
        error: err.message,
    });
});

app.listen(port, (err) => {
    if (!err) {
        console.log(`El servidor se inicio en el puerto ${port}`)
    } else {
        console.log(`Hubo un error al iniciar el servidor: `, err)
    }
})