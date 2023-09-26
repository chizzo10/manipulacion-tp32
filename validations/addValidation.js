const {check} = require('express-validator');

module.exports = [
    check("title")
    .notEmpty()
    .withMessage("El campo es obligatorio"),

    check("rating")
    .notEmpty()
    .withMessage("El campo es obligatorio")
    .isNumeric(),
    

    check("awards")
    .notEmpty()
    .withMessage("El campo es obligatorio")
    .isNumeric(),
    

    check("release_date")
    .notEmpty()
    .withMessage("El campo es obligatorio"),


    check("length")
    .notEmpty()
    .withMessage("El campo es obligatorio")
    .isNumeric()
    
]