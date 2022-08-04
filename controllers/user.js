const User = require('../models/user')
const user = require('../models/user')

class UserController {

  static async showUser(req,res){
    const user = await User.findAll({raw: true})
    res.render('create/showUser', {user})
  }

  static createUser(req,res){
    res.render('create/user')
  }

  static async createUserSave(req,res){
    const user = {
      name: req.body.name,
      email: req.body.email,
      job: req.body.job,    
    }
    await User.create(user)
    res.redirect('/user')
  }

  static async userRemove(req,res){
    const idUser = req.body.idUser
    await User.destroy({where: {id: idUser}})
    req.flash('message', 'Usuário excluido com sucesso')
    res.redirect('/user')
  }
}



module.exports = UserController