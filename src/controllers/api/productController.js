const db = require('../../database/models')

module.exports = {

    getProduct: function(req, res) {
        db.Producto.findByPk(req.params.id)
            .then(products => {
                if (products) {
                    return res.status(200).json({
                        meta: {
                            status: res.statusCode,
                            msg: 'success',
                            url: req.originalUrl
                        },
                        data: products,
                    })
                } else {
                    return res.json({
                        meta: {
                            status: 204, 
                            msg: 'no data found',
                            url: req.originalUrl
                        },
                        data: {},
                    })
                }
            })
            .catch(err => {
                console.error(err);
                return res.json({
                    error: 'Internal error. Try again!'
                })
            })
    },

    getCategories: function(req, res){
        db.Categoria.findAll({
            include: 'products'
        })
        .then(categories => {
            if(categories.length > 0) {
                return res.json({
                    meta: {
                        status: 200,
                        msg: 'success',
                        url: req.originalUrl
                    },
                    data: categories,
                })
            }else {
                return res.json({
                    meta: {
                        status: 204,
                        msg: 'no data found',
                        url: req.originalUrl
                    },
                    data: []
                })
            }
        })
            .catch(err => {
                console.error(err);
                return res.json({
                    error: 'Internal error. Try again!'
                })
            })
    }, 

    count: function(req, res){
        db.Producto.count()
    }
}