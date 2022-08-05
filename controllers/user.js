const User = require('../models/user')


class UserController {

  static async showUser(req,res){
    const user = await User.findAll({raw: true})
    res.render('create/showUser', {user})
  }

  static createUser(req,res){
    res.render('create/user')
  }

  static async createUserSave(req,res){
   
    const checkIfUserExist = await User.findOne({where: {email: req.body.email}})
    if(checkIfUserExist){
      req.flash('message', 'O e-mail já está em uso')
      res.render('create/user')
      return
    }

    const password = req.body.password
    const confirm = req.body.confirmpassword
        if (password != confirm) {
          req.flash('message', 'As senhas não batem')
          res.render('create/user')
          return
        }

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