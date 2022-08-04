const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')




router.get('/add', userController.createUser)
router.post('/add', userController.createUserSave)
router.post('/remove', userController.userRemove)
router.get('/', userController.showUser)

module.exports = router