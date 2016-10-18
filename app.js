var express = require ('express')
var app = express ()
var port = process.env.PORT || 4000 // for heroku
// var port = 4000 // for localhost

var bodyParser = require ('body-parser')

var expressLayouts = require('express-ejs-layouts')

var userfrontendRoutes = require ('./routes/users')

var ajaxRoutes = require ('./routes/users_api')

var mongoose = require('mongoose')
mongoose.Promise = global.Promise

if (process.env.NODE_ENV === 'production'){

  mongoose.connect('mongodb://Huddyhuda:Ironman$492@ds035653.mlab.com:35653/project_app') //for heroku
} else {
  mongoose.connect('mongodb://localhost/user-shop')// for localhost
}


app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(__dirname + '/public'))


app.listen(port)
console.log('Server started')

//always put bodyparser here but for AJAX IS different
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', userfrontendRoutes)
app.use('/api/users', ajaxRoutes)
