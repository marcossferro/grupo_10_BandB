function perfilMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined){
        console.log(req.session.usuarioLogueado);
        // alert('Por favor inicie sesion!')
        res.render("users/login");
    }else if(!req.session.usuarioLogueado.id == req.params.id){
        // alert('Usted ya esta Logeado')
        res.render("index",{ usuarioLogueado: usuario[0],producto: producto });
    }else{
        next();
    }
}

module.exports = perfilMiddleware