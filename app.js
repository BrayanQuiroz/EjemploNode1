const http = require('http')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
//es la peticion que pasa por una funcion o funciones.

app.set('view engine', 'pug')
app.set('views','views')//aqui le decimos a express donde encontrar las plantillas
//set una funcion para guardar un valor y su nombre, pero tambien sirve
// para decirle que hacer el servidor, en este caso que use pug como motor de plantilla

const adminData = require('./routes/admin')
const shopRouters = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.Router)
app.use(shopRouters)

app.use((req, res, next) => {

   res.status(404).render('404')
   // status establece el estado HTTP de la respuesta(404)
})
app.listen(3000)