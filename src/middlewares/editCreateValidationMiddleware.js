function editCreateValidationMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined){
        console.log(req.session.usuarioLogueado);
        res.send("Debe iniciar sesion como administrador");
    }else if(!req.session.usuarioLogueado.tipo_usuario == "1"){
        console.log(req.session.usuarioLogueado);
        res.send("Usted no es administrador");
    }else{
        next();
    }
}

module.exports = editCreateValidationMiddleware