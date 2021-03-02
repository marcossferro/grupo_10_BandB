function perfilMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined){
        console.log(req.session.usuarioLogueado)
        res.send("Debe iniciar sesion primero")
    }else if(!req.session.usuarioLogueado.id == req.params.id){
        res.send("Usted no deberia estar aqui")
    }else{
        next()
    }
}

module.exports = perfilMiddleware