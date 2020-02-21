const express = require('express')
const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./configs/config')

const app = express()

app.set('key', config.key)

app.use(bodyparser.urlencoded({ extended: true }))

app.use(bodyparser.json())


app.listen(3000, () => {
    console.log("Servidor iniciado")
})

app.get('/', function (req, res) {
    res.send('Inicio')
})

app.post('/autenticar', (req, res) => {

    if (req.body.usuario === 'usuario' && req.body.password === "password") {
        const payload = {
            check: true
        }
        
        const token = jwt.sign(payload, app.get('key'), {
            expiresIn: 1440
        })
        res.json({
            mensaje: 'Autenticación correcta',
            token: token
        })
    } else {
        res.json({mensaje: "Usuario o password incorrectos"})
    }
})