const db = require("../../database/models")

module.exports = {
    productos: function(req, res){
        db.Producto.findAndCountAll({
            include:"categoria"
        })
        .then(function(productos){
            if(productos.rows.length > 0 && productos.count > 0){
                return res.status(200).json({
                    meta:{
                        status: res.statusCode,
                        msg: "success",
                        url: req.originalUrl
                    },
                    data: productos
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

    productoPorId: function(req, res){
        db.Producto.findByPk(req.params.id)
        .then(function(producto){
            if(producto){
                return res.status(200).json({
                    meta:{
                        status: res.statusCode,
                        msg: "success",
                        url: req.originalUrl
                    },
                    data: producto
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

    categorias: function(req, res){
        db.Categoria.findAndCountAll()
        .then(function(categorias){
            if(categorias.rows.length > 0 && categorias.count > 0){
                return res.status(200).json({
                    meta:{
                        status: res.statusCode,
                        msg: "success",
                        url: req.originalUrl
                    },
                    data: categorias
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
    productosPorCategoria: function(req, res){
        db.Categoria.findAll({
            include: "productos"
        })
        .then(function(categorias){
            if(categorias.length > 0){
                return res.status(200).json({
                    meta:{
                        status: res.statusCode,
                        msg: "success",
                        url: req.originalUrl
                    },
                    data: categorias
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
    
}