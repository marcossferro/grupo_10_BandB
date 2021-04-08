const db = require('../../database/models')

module.exports = {

    getAll: function(req, res){
        db.Usuario.findAndCountAll().then(function(usuarios){
            if(usuarios.rows.length > 0 && usuarios.count > 0){
                return res.status(200).json({
                    meta:{
                        status: res.statusCode,
                        msg: "success",
                        url: req.originalUrl
                    },
                    data: usuarios
                })
            }else{
                return res.status(204).json({
                    meta: {
                        status: res.statusCode,
                        msg: "no data found",
                        url: req.originalUrl
                    },
                    data: []
                })
            }
        })
        .catch(function(error){
            console.log(error);
            return res.json({
                error: "Internal error. Try again!"
            })
        })
    },

    getById: function(req, res){
        db.Usuario.findByPk(req.params.id,{
            include = [{
                model: model.Usuario,
                attributes: ['id', 'nombre', 'apellido', 'email'],
            }]
        })
        .then(function(usuario){
            if(usuario){
                return res.status(200).json({
                    meta:{
                        status: res.statusCode,
                        msg: "success",
                        url: req.originalUrl
                    },
                    data: usuario
                })
            }else{
                return res.status(204).json({
                    meta: {
                        status: res.statusCode,
                        msg: "no data found",
                        url: req.originalUrl
                    },
                    data: {}
                })
            }
        })
        .catch(function(error){
            console.log(error);
            return res.json({
                error: "Internal error. Try again!"
            })
        })
    },
}