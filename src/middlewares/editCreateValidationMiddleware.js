function editCreateValidationMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined){
        console.log(req.session.usuarioLogueado)
        res.send("Debe iniciar sesion como administrador")
    }else if(!req.session.usuarioLogueado.email == "marcosferro_10@hotmail.com"){
        console.log(req.session.usuarioLogueado)
        res.send("Usted no es administrador")
    }else if(!req.session.usuarioLogueado.email == "maximilianoalbeldas@gmail.com"){
        console.log(req.session.usuarioLogueado)
        res.send("Usted no es administrador")
    }else if(!req.session.usuarioLogueado.email == "garcia.davidff@gmail.com"){
        console.log(req.session.usuarioLogueado)
        res.send("Usted no es administrador")
    }else{
        next()
    }
}

module.exports = editCreateValidationMiddleware