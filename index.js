const express = require('express')
const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./configs/config')

const app = express()

app.set('key', config.key)

app.use(bodyparser.urlencoded({ extended: true }))

app.use(bodyparser.json())


app.listen(3000, ()=> {
    console.log("Servidor iniciado")
})

app.get('/', function(req,res) {
    res.send('Inicio')
})