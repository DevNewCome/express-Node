/*1°*/const express = require('express')
/*1°*/const exphbs = require('express-handlebars')

/*1°*/const app = express()
/*1°*/const conn = require('./db/conn')

const user = require('./models/user')

const userRoutes = require('./routes/userRouter')

/*1°*/app.engine('handlebars', exphbs.engine())
/*1°*/app.set('view engine', 'handlebars')

/*1°*/app.use(
  express.urlencoded({
    extended: true
  })
)

/*1°*/app.use(express.json())
/*1°*/app.use(express.static('public'))

app.use('/user', userRoutes)


conn
        .sync()
        .then(()=> {app.listen(3000)})
        .catch((error) => console.log(error))