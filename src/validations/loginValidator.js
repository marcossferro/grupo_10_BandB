const { check, validationResult, body } = require ("express-validator");

module.exports = [
    check("email").isEmail().withMessage("Formato invalido"),
    check("contraseña").isLength({min: 8, max: 12}).withMessage("La contraseña debe tener entre 8 y 12 caracteres")
]