const db = require('../../database/models')

module.exports = {

    getAll: function(req, res){
        db.Usuario.count().then(function(numero){
            res.json(numero)
        })
    },

    getById: function(req, res){
        
    }
}