function perfilMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined){
        console.log(req.session.usuarioLogueado);
        res.render("users/login");
    }else if(!req.session.usuarioLogueado.id == req.params.id){
        res.render("index",{ usuarioLogueado: usuario[0], producto: producto });
    }else{
        next();
    }
}

module.exports = perfilMiddleware