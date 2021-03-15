function cierreSesionMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined) {
        next();
    }else{
        req.session.destroy(()=>{
            console.log("Se ha cerrado sesion")
            return res.redirect("/")
        })
    }
}

module.exports = cierreSesionMiddleware