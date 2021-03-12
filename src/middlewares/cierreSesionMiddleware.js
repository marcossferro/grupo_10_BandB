function cierreSesionMiddleware (req, res, next){
    if(req.session.usuarioLogueado == undefined) {
        console.log('pepe');
        next();
    }else{
        req.session.destroy(()=>{
            console.log("Se ha cerrado sesion")
            return res.redirect("/")
        })
    }
}

module.exports = cierreSesionMiddleware