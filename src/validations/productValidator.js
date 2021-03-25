const { check, validationResult, body } = require ("express-validator");

module.exports = [
    [
        check("nombre").isLength({min:5}).withMessage("El nombre no puede estar vacio y debera tener al menos 5 caracteres"),
        check("detalle").isLength({min:20}).withMessage("El detalle no puede estar vacio y debera tener al menos 20 caracteres"),
        body('imagen').custom((imagen, {req})=>{
            if(req.files[0]== undefined){
                return false
            }return true
        }).withMessage("Debes subir una imagen"),
        body("imagen").custom((imagen, {req})=>{
        if(req.files[0] != undefined){
            if(req.files[0].mimetype == "image/png"){
            console.log(req.files[0].mimetype)
            return true
            }else if(req.files[0].mimetype == "image/jpeg"){
            console.log(req.files[0].mimetype)
            return true
            }else if(req.files[0].mimetype == "image/jpg"){
            console.log(req.files[0].mimetype)
            return true
            }console.log(req) 
            throw new Error("Los unicos formatos validos son JPG, JPEG y PNG")
        }return true
        }),
        body("categoria_id").custom(function(value){
            if(value == undefined){
                return false
            }
            return true

        }).withMessage("Debes seleccionar una categoria"),
        check("precio").isNumeric({min:1}).withMessage("El precio no puede estar vacio")
    ],
    [
        check("nombre").isLength({min:2}).withMessage("El nombre no puede estar vacio y debera tener al menos 2 caracteres"),
        check("detalle").isLength({min:20}).withMessage("El detalle no puede estar vacio y debera tener al menos 20 caracteres"),
        check("precio").isNumeric({min:1}).withMessage("El precio no puede estar vacio")
    ]
]