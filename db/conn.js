const { Sequelize } = require ('sequelize')
const sequelize = new Sequelize('mvc3', 'root', 'JEKIO4kk@s',{
host: 'localhost',
dialect: 'mysql',
})


try {
  sequelize.authenticate()
  console.log('Conectamos ao sequelize')
}catch(error){
  console.log('Nao foi possivel conectar')
}

module.exports = sequelize