const UsuarioModel = require("../models/UsuarioModel");

function nivel(req, res, next){
    if(req.body.nivel == 3){
    next();
    } else{
    res.redirect("/usuarios/cadastrar");
    }
    }
    module.exports = nivel;