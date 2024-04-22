const UsuarioModel = require("../models/UsuarioModel");

function nivel(req, res, next){
    const user = UsuarioModel.findOne({ email: req.body.email });
    if ((req.session.usuario) && (user.nivel >= 3)){
        next();
    } else{
        res.redirect("/usuarios/login");
    }
    }
    module.exports = nivel;