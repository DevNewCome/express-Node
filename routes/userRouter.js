const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')




router.get('/add', userController.createUser)
router.post('/add', userController.createUserSave)
router.post('/remove', userController.userRemove)
router.get('/edit:id', userController.editUser)
router.post('/edit', userController.updateUserPost)
router.get('/', userController.showUser)

module.exports = router