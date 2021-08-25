const express = require('express');
const expressHbs = require('express-handlebars');
const fs = require('fs')
const path = require('path');

const {port} = require('./config/variables')
const users = require('./db/users');

const app = express();

app.use(express.static(path.join(__dirname, 'static')))
app.set('view engine', '.hbs')
app.engine('.hbs', expressHbs({defaultLayout: false}))
app.set('views', path.join(__dirname, 'static'))

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    const isExistName = users.find(user => user.name === name)
    if (!isExistName) {
        res.redirect('/registration')
        return
    }
    res.redirect('/users')

})

app.get('/users', (req, res) => {
    res.render('users', {users})
})

app.post('/users', (req, res) => {
    const {name} = req.body;
    const isExistName = users.find(user => user.name === name)
    if (!isExistName) {
        users.push(req.body)
        fs.writeFile(path.join(__dirname, 'db', 'users.js'), 'module.exports = ' + JSON.stringify(users), err => {
            if (err) {
                console.log(err)
            }
        })

        res.redirect('/users')
        return
    }
    res.send('This user already exist, try to change your name')
})

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const currentUser = users[userId]

    if (!currentUser){
        res.status(404).end('User not found')
        return
    }
    res.send(currentUser)
})

app.get('/registration', (req, res) => {
    res.render('registration')
})



app.listen(port, ()=>{
    console.log('port is running')
})