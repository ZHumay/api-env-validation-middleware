const express=require('express')
const { body } = require('express-validator')
const {userController}=require("../controllers/userController")
const { validate } = require('../middleware/validation')

const userRoutes=express.Router()

userRoutes.get('/',userController.getAll)
userRoutes.post('/',
body('name').notEmpty().withMessage('Name alanı boş geçilemez!'),
body('surname').notEmpty().withMessage('Surname alanı boş geçilemez!'),

validate,
userController.add)

userRoutes.get('/:id', userController.getById)
userRoutes.delete('/:id', userController.deleteById)
userRoutes.put('/:id', userController.update)


module.exports = {
    userRoutes
}