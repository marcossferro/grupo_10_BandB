const path = require("path")

module.exports = {
    login: function(req,res){
        res.render(path.join(__dirname, "../views/users/login"))
    },
}