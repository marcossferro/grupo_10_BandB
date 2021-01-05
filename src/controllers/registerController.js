const path = require("path")

module.exports = {
    register: function(req,res){
        res.render(path.join(__dirname, "../views/users/register"))
    },
}