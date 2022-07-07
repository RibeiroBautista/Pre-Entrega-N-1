require('dotenv').config();
const checkAdmin = ()=>{

    return ((req,res,next)=>{
        if (process.env.ADMIN == true){
            next();
        } else{
            res.json({error: -1, descripcion: `Ruta '${req.route.path}' Método '${req.route.stack[0].method}' - No Autorizada`})
        }
    })
}

module.exports = checkAdmin;