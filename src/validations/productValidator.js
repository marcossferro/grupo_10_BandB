const { check, validationResult, body } = require ("express-validator");

module.exports = [
    [
        check("nombre").isLength({min:1}).withMessage("El nombre no puede estar vacio"),
        check("detalle").isLength({min:1}).withMessage("El detalle no puede estar vacio"),
        check("imagen").isEmpty({min:1}).withMessage("Debes subir una imagen"),
        check("categoria_id").isEmpty({min:1}).withMessage("Debes seleccionar una categoria"),
        check("precio").isNumeric({min:1}).withMessage("el precio no puede estar vacio")
    ],
    [
        check("nombre").isLength({min:1}).withMessage("El nombre no puede estar vacio"),
        check("detalle").isLength({min:1}).withMessage("El detalle no puede estar vacio"),
        check("precio").isNumeric({min:1}).withMessage("el precio no puede estar vacio")
    ]
]