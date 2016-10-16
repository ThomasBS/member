var express = require('express')
var mysql = require('mysql')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Config = require('./config');

var con = mysql.createConnection({
    host: Config.dbHost,
    user: Config.dbUser,
    password: Config.dbPassword,
    database: Config.dbDatabase
})

con.connect(function (err) {
    handleError(err)
    console.log('Database successfully connected')
})

User = require('./models/user')
Category = require('./models/category')
Subject = require('./models/subject')
Login = require('./models/login')

/****************** User ******************/
app.get('/users', function(req, res){
    User.getUsers(con, function(err, users){
        handleError(err)
        res.json(users)
    })
})

app.get('/users/:_id', function(req, res){
    var id = req.params._id;
    User.getUser(con, id, function(err, user){
        handleError(err)
        res.json(user)
    })
})

app.post('/users', function(req, res){
    var user = req.body;
    User.addUser(con, user, function(err, user){
        handleError(err)
        res.json(user)
    })
})

app.put('/users/:_id', function(req, res){
    var id = req.params._id;
    var user = req.body;
    User.updateUser(con, id, user, function(err, user){
        handleError(err)
    })
})

app.delete('/users/:_id', function(req, res){
    var id = req.params._id;
    User.deleteUser(con, id, function(err, user){
        handleError(err)
    })
})

/****************** Category ******************/
app.get('/categories/:_userID', function(req, res){
    var id = req.params._userID;
    Category.getCategories(con, id, function(err, categories){
        handleError(err)
        res.json(categories)
    })
})

app.post('/categories', function(req, res){
    var category = req.body;
    Category.addCategory(con, category, function(err, category){
        handleError(err)
        res.json(category)
    })
})

/****************** Subject ******************/
app.get('/subjects/:_categoryID', function(req, res){
    var id = req.params._categoryID;
    Subject.getSubjects(con, id, function(err, subjects){
        handleError(err)
        res.json(subjects)
    })
})

app.post('/subjects', function(req, res){
    var subject = req.body;
    Subject.addSubject(con, subject, function(err, subject){
        handleError(err)
        res.json(subject)
    })
})

/****************** Login ******************/
app.get('/login/:_email&:_password', function(req, res){
    var email = req.params._email
    var password = req.params._password
    console.log(req.params)
    Login.validate(con, email, password, function(err, login){
        handleError(err)
        res.json(login)
    })
})

/**
 * A simple function to handle the errors the app
 * might be given.
 */
function handleError(err) {
  if (err) {
    throw err
  }
}

app.listen(3000)
